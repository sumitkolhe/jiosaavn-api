import json, sys, math, random, collections, numpy as np, scipy.sparse as sp
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.preprocessing import normalize
from sklearn.linear_model import LogisticRegression
from sklearn.utils.extmath import randomized_svd
random.seed(7); np.random.seed(7)
pls=[json.loads(l) for l in open(sys.argv[1] if len(sys.argv)>1 else 'data/playlists.jsonl')]
songs={}; P=[]
for p in pls:
    ids=[]
    for s in p['songs']:
        songs[s['id']]=s
        if s['id'] not in ids: ids.append(s['id'])
    if len(ids)>=10: P.append(ids)
print('playlists',len(P),'songs',len(songs),'avg len',np.mean([len(x) for x in P]))
ids=list(songs); ix={s:i for i,s in enumerate(ids)}; N=len(ids)
random.shuffle(P); a,b=int(.6*len(P)),int(.8*len(P)); TR,VA,TE=P[:a],P[a:b],P[b:]
def mat(PL):
    r,c=[],[]
    for i,p in enumerate(PL):
        for s in p: r.append(i); c.append(ix[s])
    return sp.csr_matrix((np.ones(len(r),dtype=np.float32),(r,c)),shape=(len(PL),N))
X=mat(TR); cnt=np.asarray(X.sum(0)).ravel()
print('warm songs',int((cnt>0).sum()),'of',N, '| cold share in val/test targets:',
      round(np.mean([cnt[ix[s]]==0 for p in VA+TE for s in p]),3))
# ---- content features
def toks(s):
    t=[]
    for aid,_ in s['artists']+s['feat']: t.append('a'+aid)
    for m in (s.get('music') or '').split(','): 
        if m.strip(): t.append('m'+m.strip().lower())
    if s.get('album_id'): t.append('al'+s['album_id'])
    if s.get('label'): t.append('lb'+s['label'].lower())
    if s.get('lang'): t.append('lg'+s['lang'])
    try: y=int(s['year']); t+=['y%d'%y,'d%d'%(y//5)]
    except: pass
    return t
tf=TfidfVectorizer(analyzer=lambda x:x,sublinear_tf=True)
C=normalize(tf.fit_transform([toks(songs[s]) for s in ids]))
alb=[songs[i].get('album_id') for i in ids]
art=[set(a for a,_ in songs[i]['artists']+songs[i]['feat']) for i in ids]
alb_to=collections.defaultdict(list); art_to=collections.defaultdict(list)
for j,(al,ar) in enumerate(zip(alb,art)):
    if al: alb_to[al].append(j)
    for a in ar: art_to[a].append(j)
def excl_idx(seed,mode):
    if mode=='none': return set()
    e=set()
    for j in seed:
        if alb[j]: e.update(alb_to[alb[j]])
        if mode=='artist':
            for a in art[j]: e.update(art_to[a])
    return e
pop=np.log1p(cnt); plays=np.array([math.log1p(float(songs[s].get('plays') or 0)) for s in ids])
# ---- collaborative models
Xn=normalize(X,axis=0)  # item-item cosine
S_knn=(Xn.T@Xn).tocsr(); S_knn.setdiag(0); S_knn.eliminate_zeros()
def ppmi_svd(k=64):
    Cc=(X.T@X).tocsr().astype(np.float32); Cc.setdiag(0); Cc.eliminate_zeros()
    tot=Cc.sum(); rs=np.asarray(Cc.sum(1)).ravel()+1e-9; cs=np.asarray(Cc.sum(0)).ravel()**0.75; cs=cs/cs.sum()*tot
    Cc=Cc.tocoo(); v=np.log((Cc.data*tot)/(rs[Cc.row]*cs[Cc.col]/ (tot/ tot) )+1e-12); v=np.maximum(v,0)
    M=sp.csr_matrix((v,(Cc.row,Cc.col)),shape=Cc.shape); M.eliminate_zeros()
    U,Sg,_=randomized_svd(M,k,random_state=0); E=U*np.sqrt(Sg); return normalize(E)
E=ppmi_svd()
def ease(lam,maxn=7000):
    top=np.argsort(-cnt)[:maxn]; top=top[cnt[top]>=2]; Xs=X[:,top].toarray()
    G=Xs.T@Xs; G[np.diag_indices_from(G)]+=lam; Pm=np.linalg.inv(G); B=Pm/(-np.diag(Pm)); B[np.diag_indices_from(B)]=0
    return top,B.astype(np.float32)
# ---- scorers: seed idx list -> score vector (N)
def sc_pop(seed): return pop+0.0
def sc_plays(seed): return plays.copy()
def sc_content(seed): 
    q=np.asarray(C[seed].mean(0)).ravel(); return C@q
def sc_knn(seed): return np.asarray(S_knn[seed].sum(0)).ravel()
def sc_emb(seed): return E@E[seed].mean(0)
EASE={}
def sc_ease(lam):
    def f(seed):
        top,B=EASE[lam]; pos={t:i for i,t in enumerate(top)}
        v=np.zeros(N,dtype=np.float32); h=[pos[s] for s in seed if s in pos]
        if h: v[top]=B[h].sum(0)
        return v
    return f
def evaluate(PL,scorer,K=20,R=100,nseed=5,reps=3,mode='none'):
    rng=random.Random(11); rec,ndcg,hit,recw=[],[],[],[]
    for p in PL:
        for _ in range(reps):
            pi=[ix[s] for s in p]; sd=rng.sample(pi,nseed); ex=excl_idx(sd,mode); tgt=set(pi)-set(sd)-ex
            if len(tgt)<3: continue
            s=scorer(sd).astype(np.float64).copy(); s[sd]=-1e9
            if ex: s[list(ex)]=-1e9
            top=np.argpartition(-s,R)[:R]; top=top[np.argsort(-s[top])]
            rel=[1 if t in tgt else 0 for t in top]
            rec.append(sum(rel)/len(tgt)); hit.append(1 if any(rel[:K]) else 0)
            dcg=sum(r/math.log2(i+2) for i,r in enumerate(rel[:K])); idcg=sum(1/math.log2(i+2) for i in range(min(K,len(tgt))))
            ndcg.append(dcg/idcg)
    se=float(np.std(ndcg)/math.sqrt(len(ndcg)))
    return dict(n=len(rec),R100=round(float(np.mean(rec)),4),nDCG20=round(float(np.mean(ndcg)),4),se=round(se,4),Hit20=round(float(np.mean(hit)),3))
if __name__=='__main__':
    res={}
    for lam in (200,1000,3000):
        EASE[lam]=ease(lam); res[f'EASE l={lam}']=evaluate(VA,sc_ease(lam))
    best=max((k for k in res),key=lambda k:res[k]['nDCG20']); bl=int(best.split('=')[1]); print('best EASE lambda (val)',bl)
    for name,f in [('popularity(in-train count)',sc_pop),('jiosaavn play_count',sc_plays),('content TF-IDF',sc_content),('ItemKNN cosine',sc_knn),('PPMI+SVD emb',sc_emb)]:
        res[name]=evaluate(TE,f)
    res['EASE (test)']=evaluate(TE,sc_ease(bl))
    # learned hybrid: logistic regression on rank-normalised scores, trained on VAL, applied on TE
    def feats(seed):
        cols=[sc_content(seed),sc_knn(seed),sc_emb(seed),sc_ease(bl)(seed),pop,plays]
        F=[]
        for c in cols:
            c=c.astype(np.float64); r=np.argsort(np.argsort(-c)); F.append(1/np.log2(r+2)); 
        # same-language-share with seeds
        lg=collections.Counter(songs[ids[s]]['lang'] for s in seed); tot=sum(lg.values())
        F.append(np.array([lg.get(songs[i]['lang'],0)/tot for i in ids]))
        return np.vstack(F).T, cols
    rng=random.Random(5); Xtr,ytr=[],[]
    for p in VA:
        pi=[ix[s] for s in p]; sd=rng.sample(pi,5); tgt=set(pi)-set(sd)
        Fm,cols=feats(sd); cand=set()
        for c in cols[:4]+[pop]:
            c=c.copy(); c[sd]=-1e9; cand|=set(np.argpartition(-c,150)[:150].tolist())
        cand=[c for c in cand if c not in sd]
        Xtr.append(Fm[cand]); ytr+= [1 if c in tgt else 0 for c in cand]
    Xtr=np.vstack(Xtr); clf=LogisticRegression(C=1.0,max_iter=500,class_weight='balanced').fit(Xtr,ytr)
    print('learned weights [content,knn,emb,ease,pop,plays,lang]:',np.round(clf.coef_[0],2))
    def sc_hybrid(seed):
        Fm,_=feats(seed); return clf.decision_function(Fm)
    res['LEARNED HYBRID (LR stack)']=evaluate(TE,sc_hybrid)
    allr={'none':res}
    names=[('popularity',sc_pop),('content TF-IDF',sc_content),('ItemKNN',sc_knn),('PPMI+SVD',sc_emb),('EASE',sc_ease(bl)),('HYBRID',sc_hybrid)]
    for m in ('album','artist'):
        allr[m]={n:evaluate(TE,f,mode=m) for n,f in names}
    for m,r in allr.items():
        print('\n== exclusion mode:',m)
        for k,v in r.items(): print(f'{k:32s}',v)
