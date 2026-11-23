import json,glob,os,re,math,numpy as np,scipy.sparse as sp,warnings; warnings.filterwarnings('ignore')
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.preprocessing import normalize
from sklearn.decomposition import TruncatedSVD,PCA
from sklearn.utils.extmath import randomized_svd
def load():
    F={}
    for pat in ('data/feat_*.npy','data/feat2_*.npy'):          # feat2 adds arousal/valence/bpm and wins when both exist
        for f in glob.glob(pat): F.update(np.load(f,allow_pickle=True).item())
    pls=[json.loads(l) for fn in ('data/playlists.jsonl','data/playlists_instr.jsonl','data/playlists_fresh.jsonl') if os.path.exists(fn) for l in open(fn)]
    songs={}
    for p in pls:
        for s in p['songs']:
            old=songs.get(s['id'])
            if old is None or (not old.get('img') and s.get('img')) or (not old.get('rel') and s.get('rel')): songs[s['id']]=s
    hot_re=re.compile(r'top ?\d+|trending|most searched|superhits|viral|^new', re.I)
    for p in pls:
        q=p.get('q') or ''
        if not q.startswith('fresh:'): continue
        kind=q.split(':')[1]; w=1.0 if (kind in ('trending','new') or hot_re.search(p.get('title') or '')) else 0.4
        n=len(p['songs'])
        for r,s in enumerate(p['songs']):
            v=w*(1-r/n); cur=songs[s['id']]
            if v>cur.get('_hot',0): cur['_hot']=v
    ids=sorted(s for s in songs if s in F)
    P=[list(dict.fromkeys(s['id'] for s in p['songs'] if s['id'] in F)) for p in pls]; P=[p for p in P if len(p)>=8]
    return F,songs,ids,P
LANGS=['hindi','english','punjabi','tamil','telugu','bengali','marathi','kannada','malayalam','gujarati','bhojpuri','haryanvi']
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
    names+=['arousal','valence','tempo']
    def extra(s):
        m=songs[s]; rel=m.get('rel') or ''
        try: y=int(rel[:4])+(int(rel[5:7])-0.5)/12
        except Exception:
            try: y=int(m['year'])+0.5
            except Exception: y=2010.0
        recent=min(max(1-(2026.9-y)/10,0),1)
        return [m.get('_hot',0.0),recent]+[1.0 if (m.get('lang') or '')==l else 0.0 for l in LANGS]
    names+=['hot','recent']+['lang:'+l for l in LANGS]
    ATT=np.array([g(s)+extra(s) for s in ids],dtype=np.float64)
    ATTz=np.clip((ATT-ATT.mean(0))/(ATT.std(0)+1e-9),-3,3)
    return dict(ix=ix,Z=Z,E=E,A=A,ATT=ATT,ATTz=ATTz,names=names)
if __name__=='__main__':
    import pickle; F,songs,ids,P=load(); B=build(F,songs,ids,P); B.update(ids=ids); pickle.dump(B,open('data/built.pkl','wb')); print('built',len(ids),'songs',len(P),'playlists')
