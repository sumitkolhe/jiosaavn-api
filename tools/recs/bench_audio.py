import json,glob,math,random,collections,html,re,numpy as np,warnings; warnings.filterwarnings('ignore')
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.preprocessing import normalize
from sklearn.decomposition import PCA
F={}
for f in glob.glob('data/feat_*.npy'): F.update(np.load(f,allow_pickle=True).item())
sub=set(json.load(open('data/sub_ids.json')))
PL=[json.loads(l) for l in open('data/playlists.jsonl')]; PL=[p for p in PL if p['id'] in sub]
songs={}; P=[]; titles=[]
for p in PL:
    ids=[]
    for s in p['songs']:
        if s['id'] in F: songs[s['id']]=s; ids.append(s['id'])
    ids=list(dict.fromkeys(ids))
    if len(ids)>=12: P.append(ids); titles.append(html.unescape(p['title']))
ids=list(songs); ix={s:i for i,s in enumerate(ids)}; N=len(ids)
print('songs with audio',N,'playlists',len(P))
def toks(s):
    t=['a'+a for a,_ in s['artists']+s['feat']]+['m'+m.strip().lower() for m in (s.get('music') or '').split(',') if m.strip()]
    if s.get('album_id'): t.append('al'+s['album_id'])
    if s.get('label'): t.append('lb'+s['label'].lower())
    if s.get('lang'): t.append('lg'+s['lang'])
    try: y=int(s['year']); t+=['y%d'%y,'d%d'%(y//5)]
    except: pass
    return t
C=normalize(TfidfVectorizer(analyzer=lambda x:x,sublinear_tf=True).fit_transform([toks(songs[s]) for s in ids])).toarray()
EM=np.vstack([F[s]['emb'] for s in ids]); EM=EM-EM.mean(0); A=normalize(PCA(64,random_state=0).fit_transform(EM))
ATT=np.array([[F[s]['voice_instrumental'][1],F[s]['danceability'][0],F[s]['mood_happy'][0],F[s]['mood_sad'][1],F[s]['mood_aggressive'][0],F[s]['mood_relaxed'][1],F[s]['mood_party'][1],F[s]['mood_acoustic'][0],F[s]['mood_electronic'][0],F[s]['tonal_atonal'][1]] for s in ids])
attn=['voice','danceable','happy','sad','aggressive','relaxed','party','acoustic','electronic','tonal']
Aa=normalize(ATT-ATT.mean(0))
art=[set(a for a,_ in songs[i]['artists']+songs[i]['feat']) for i in ids]; alb=[songs[i].get('album_id') for i in ids]
def excl(seed):
    e=set()
    for j in seed:
        for k in range(N):
            if (alb[j] and alb[k]==alb[j]) or (art[j]&art[k]): e.add(k)
    return e
def ev(Fm,reps=5,seedn=5,K=20,R=100):
    rng=random.Random(2); n=[];r=[];h=[]
    for p in P:
        pi=[ix[s] for s in p]
        for _ in range(reps):
            sd=rng.sample(pi,seedn); ex=excl(sd); tg=set(pi)-set(sd)-ex
            if len(tg)<3: continue
            s=Fm@Fm[sd].mean(0); s[sd]=-1e9; s[list(ex)]=-1e9
            top=np.argpartition(-s,R)[:R]; top=top[np.argsort(-s[top])]; rel=[1 if t in tg else 0 for t in top]
            n.append(sum(x/math.log2(i+2) for i,x in enumerate(rel[:K]))/sum(1/math.log2(i+2) for i in range(min(K,len(tg)))))
            r.append(sum(rel)/len(tg)); h.append(any(rel[:K]))
    return f'nDCG@20={np.mean(n):.3f}±{np.std(n)/math.sqrt(len(n)):.3f} R@100={np.mean(r):.3f} Hit@20={np.mean(h):.2f} n={len(n)}'
print('--- same-artist/album candidates excluded; 5 seed likes per playlist')
print('metadata TF-IDF        ',ev(C))
print('audio embedding (PCA64)',ev(A))
print('audio attributes (10-d)',ev(Aa))
for a in (0.5,1.0,2.0): print(f'metadata + {a}*audio      ',ev(normalize(np.hstack([C,a*A]))))
print('--- attribute sanity: mean attribute by playlist-title keyword (n playlists)')
def grp(pat):
    idx=[i for i,t in enumerate(titles) if re.search(pat,t,re.I)]
    v=np.mean([ATT[[ix[s] for s in P[i]]].mean(0) for i in idx],0) if idx else None; return len(idx),v
allm=ATT.mean(0); print('ALL        ',' '.join(f'{a}={v:.2f}' for a,v in zip(attn,allm)))
for name,pat in [('lofi/chill/sleep/study','lofi|chill|sleep|study|focus|relax|calm'),('workout/party/dance','workout|gym|party|dance|energy|remix'),('devotional/bhakti','devotion|bhakti|mantra|chalisa|krishna|ram'),('sad/heartbreak','sad|heartbreak|breakup|dard'),('romantic','romant|love')]:
    n,v=grp(pat)
    if v is not None: print(f'{name:24s} n={n:2d} ',' '.join(f'{a}={x:.2f}' for a,x in zip(attn,v)))
