import pickle,json,random,numpy as np,warnings; warnings.filterwarnings('ignore')
from build_feats import *
F,songs,ids,P=load(); ix={s:i for i,s in enumerate(ids)}; N=len(ids)
rng0=random.Random(3); PLall=[p for p in P if len(p)>=20]; rng0.shuffle(PLall); PLev=PLall[:150]; evset={tuple(p) for p in PLev}
Ptrain=[p for p in P if tuple(p) not in evset]
B=build(F,songs,ids,Ptrain)  # CF + all fitted parts see NO evaluation playlist
print('train playlists',len(Ptrain),'eval',len(PLev))
print('catalog',N,'playlists',len(P))
def design(wZ=1,wE=1,wA=0,wT=0):
    parts=[]
    if wZ: parts.append(wZ*B['Z'])
    if wE: parts.append(wE*B['E'])
    if wA: parts.append(wA*B['A'])
    X=np.hstack(parts); X=X/np.maximum(np.linalg.norm(X,axis=1,keepdims=True),1e-9)
    if wT: X=np.hstack([X,wT*B['ATTz']/np.sqrt(B['ATTz'].shape[1])])
    return X
def run(Fm,pl,seed,rounds=10,slate=5,lam=3.0):
    rng=np.random.default_rng(seed); D=Fm.shape[1]; tgt={ix[s] for s in pl}; pi=list(tgt)
    s0=pi[int(rng.integers(len(pi)))]; seen={s0}; A=lam*np.eye(D); b=np.zeros(D); x=Fm[s0]; A+=np.outer(x,x); b+=x; hist=[]
    for r in range(rounds):
        w=np.linalg.solve(A,b); sc=Fm@w; sc[list(seen)]=-1e9
        top=np.argpartition(-sc,slate)[:slate]; hit=0
        for t in top:
            seen.add(t); x=Fm[t]
            if t in tgt: A+=np.outer(x,x); b+=x; hit+=1
            elif rng.random()<0.6: A+=np.outer(x,x)
        hist.append(hit/slate)
    return hist
PL=PLev
def ev(name,Fm):
    H=[run(Fm,p,i) for i,p in enumerate(PL)]; m=np.mean(H,1); print(f'{name:38s} mean slate hit-rate={m.mean():.3f}±{m.std()/np.sqrt(len(m)):.3f}  r1={np.mean([h[0] for h in H]):.2f} r10={np.mean([h[-1] for h in H]):.2f}')
ev('content+CF (Z,E)',design())
ev('content only (Z)',design(1,0))
ev('CF only (E)',design(0,1))
ev('audio only (A)',design(0,0,1))
ev('content+CF+0.5 audio',design(1,1,0.5))
ev('content+CF+1.0 audio',design(1,1,1.0))
ev('content+CF+0.5 audio+0.5 attrs',design(1,1,0.5,0.5))
ev('content+CF+0.5 audio+1.0 attrs',design(1,1,0.5,1.0))
