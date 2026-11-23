import json,glob,os,math,numpy as np,scipy.sparse as sp,warnings; warnings.filterwarnings('ignore')
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.preprocessing import normalize
from sklearn.decomposition import TruncatedSVD,PCA
from sklearn.utils.extmath import randomized_svd
def load():
    F={}
    pat='data/feat2_*.npy' if glob.glob('data/feat2_*.npy') else 'data/feat_*.npy'
    for f in glob.glob(pat): F.update(np.load(f,allow_pickle=True).item())
    pls=[json.loads(l) for fn in ('data/playlists.jsonl','data/playlists_instr.jsonl') if os.path.exists(fn) for l in open(fn)]
    songs={}
    for p in pls:
        for s in p['songs']: songs[s['id']]=s
    ids=sorted(s for s in songs if s in F)
    P=[list(dict.fromkeys(s['id'] for s in p['songs'] if s['id'] in F)) for p in pls]; P=[p for p in P if len(p)>=8]
    return F,songs,ids,P
def toks(s):
    t=['a'+a for a,_ in s['artists']+s['feat']]+['m'+m.strip().lower() for m in (s.get('music') or '').split(',') if m.strip()]
    if s.get('album_id'): t.append('al'+s['album_id'])
    if s.get('label'): t.append('lb'+s['label'].lower())
    if s.get('lang'): t.append('lg'+s['lang'])
    try: y=int(s['year']); t+=['y%d'%y,'d%d'%(y//5)]
    except: pass
    return t
def build(F,songs,ids,P,k=64):
    ix={s:i for i,s in enumerate(ids)}; N=len(ids)
    C=normalize(TfidfVectorizer(analyzer=lambda x:x,sublinear_tf=True).fit_transform([toks(songs[s]) for s in ids]))
    Z=normalize(TruncatedSVD(k,random_state=0).fit_transform(C))
    r,c=[],[]
    for i,p in enumerate(P):
        for s in p: r.append(i); c.append(ix[s])
    X=sp.csr_matrix((np.ones(len(r),dtype=np.float32),(r,c)),shape=(len(P),N))
    Cc=(X.T@X).tocoo().astype(np.float32); m=Cc.row!=Cc.col; row,col,dat=Cc.row[m],Cc.col[m],Cc.data[m]
    tot=dat.sum(); rs=np.bincount(row,weights=dat,minlength=N)+1e-9; cs=np.bincount(col,weights=dat,minlength=N)**0.75; cs=cs/cs.sum()*tot
    v=np.maximum(np.log(dat*tot/(rs[row]*cs[col])+1e-12),0); M=sp.csr_matrix((v,(row,col)),shape=(N,N)); M.eliminate_zeros()
    U,Sg,_=__import__('sklearn.utils.extmath',fromlist=['x']).randomized_svd(M,k,random_state=0); E=normalize(U*np.sqrt(Sg))
    EM=np.vstack([F[s]['emb'] for s in ids]); EM=EM-EM.mean(0); A=normalize(PCA(k,random_state=0).fit_transform(EM))
    names=['voice','danceable','happy','sad','relaxed','party','acoustic','electronic']
    def g(s):
        f=F[s]; row=[f['voice_instrumental'][1],f['danceability'][0],f['mood_happy'][0],f['mood_sad'][1],f['mood_relaxed'][1],f['mood_party'][1],f['mood_acoustic'][0],f['mood_electronic'][0]]
        if 'arousal' in f: row+=[(f['arousal']-5)/4,(f['valence']-5)/4,min(max(f['bpm'],0),220)/220]
        else: row+=[0,0,0]
        return row
    ATT=np.array([g(s) for s in ids],dtype=np.float64); names+=['arousal','valence','tempo']
    ATTz=(ATT-ATT.mean(0))/(ATT.std(0)+1e-9)
    return dict(ix=ix,Z=Z,E=E,A=A,ATT=ATT,ATTz=ATTz,names=names)
if __name__=='__main__':
    import pickle; F,songs,ids,P=load(); B=build(F,songs,ids,P); B.update(ids=ids); pickle.dump(B,open('data/built.pkl','wb')); print('built',len(ids),'songs',len(P),'playlists')
