import sys; sys.argv=['x','data/playlists.jsonl']
import warnings; warnings.filterwarnings('ignore')
exec(open('bench.py').read().split("if __name__=='__main__':")[0])
from sklearn.decomposition import TruncatedSVD
Z=TruncatedSVD(64,random_state=0).fit_transform(C); Z=normalize(Z)
F=np.hstack([Z,E]).astype(np.float64); F=F/ (np.linalg.norm(F,axis=1,keepdims=True)+1e-9)
D=F.shape[1]
def run(pl,method,rounds=10,slate=5,seed_rng=0,P=dict(),other=None):
    rng=np.random.default_rng(seed_rng); pi=[ix[s] for s in pl]; tgt=set(pi)
    seed=pi[int(rng.integers(len(pi)))]; seen={seed}; L=[seed]; Dn=[]
    A=P.get('lam',1.0)*np.eye(D); b=np.zeros(D); x=F[seed]; A+=np.outer(x,x); b+=x
    if other is not None:  # global model: also absorbs another mode's feedback each round
        oi=[ix[s] for s in other]
    hist=[]
    for r in range(rounds):
        if method=='rocchio': w=F[L].mean(0)
        elif method=='rocchio-neg': w=F[L].mean(0)-P.get('neg',0.3)*(F[Dn].mean(0) if Dn else 0)
        elif method in('ts','global-ts'):
            Ai=np.linalg.inv(A); m=Ai@b
            w=m+ (rng.multivariate_normal(np.zeros(D),(P.get('sig',0.1)**2)*Ai) if P.get('sig',0.1)>0 else 0)
        elif method=='random': w=rng.normal(size=D)
        elif method=='pop': w=None
        s=(pop if w is None else F@w).astype(np.float64).copy(); s[list(seen)]=-1e9
        top=np.argpartition(-s,slate)[:slate]; top=top[np.argsort(-s[top])]
        hit=0
        for t in top:
            seen.add(t)
            if t in tgt: L.append(t); hit+=1; x=F[t]; A+=np.outer(x,x); b+=x
            elif rng.random()<0.6: Dn.append(t); x=F[t]; A+=np.outer(x,x)  # explicit skip => y=0
        if method=='global-ts' and other is not None:  # other mode's likes pollute the shared model
            for t in rng.choice(oi,slate,replace=False): x=F[t]; A+=np.outer(x,x); b+=x
        hist.append(hit/slate)
    return hist
pls=[p for p in TE+VA if len(p)>=25]; va=[p for p in VA if len(p)>=25][:60]; te=[p for p in TE if len(p)>=25][:200]
def avg(method,PL,P=dict(),pair=False):
    H=[run(p,method,seed_rng=i,P=P,other=(PL[(i+1)%len(PL)] if pair else None)) for i,p in enumerate(PL)]
    return np.mean(H,0), np.std(np.mean(H,1))/np.sqrt(len(H))
# tune TS on validation only
best=None
for lam in (0.3,1,3):
    for sig in (0,0.05,0.15,0.4):
        h,_=avg('ts',va,dict(lam=lam,sig=sig)); sc=h.mean()
        if best is None or sc>best[0]: best=(sc,lam,sig)
print('TS tuned on val: lam=%s sig=%s'%(best[1],best[2]))
Pb=dict(lam=best[1],sig=best[2])
print('mean slate hit-rate over 10 rounds [round1 .. round10]  (TEST, n=%d playlists)'%len(te))
for name,m,P_,pair in [('random','random',{},False),('popularity','pop',{},False),('rocchio (likes only)','rocchio',{},False),('rocchio + negatives','rocchio-neg',{},False),('Thompson/Bayes (per-mode)','ts',Pb,False),('Thompson greedy (sig=0)','ts',dict(lam=best[1],sig=0),False),('ONE global model, 2 modes mixed','global-ts',Pb,True)]:
    h,se=avg(m,te,P_,pair); print(f'{name:34s} mean={h.mean():.3f} se={se:.3f} |',' '.join(f'{v:.2f}' for v in h))
