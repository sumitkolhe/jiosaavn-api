import sys; sys.argv=['x','data/playlists.jsonl']
import warnings,re,html,urllib.request,urllib.parse,time,json; warnings.filterwarnings('ignore')
exec(open('bench.py').read().split("if __name__=='__main__':")[0])
raw={json.loads(l)['id']:json.loads(l) for l in open('data/playlists.jsonl')}
bytitle={}
for pid,p in raw.items(): bytitle[tuple(s['id'] for s in p['songs'] if s['id'] in ix)]=p
def title_of(pl): return html.unescape(bytitle[tuple(pl)]['title']) if tuple(pl) in bytitle else ''
def pid_of(pl): return bytitle[tuple(pl)]['id']
clean=lambda t: re.sub(r'[^a-z0-9 ]',' ',html.unescape(t or '').lower())
# collapse P entries back to playlist records
TRr=[bytitle[tuple(p)] for p in TR if tuple(p) in bytitle]; TEr=[bytitle[tuple(p)] for p in TE if tuple(p) in bytitle]
tv=TfidfVectorizer(ngram_range=(1,2),sublinear_tf=True,min_df=1); Pm=tv.fit_transform([clean(p['title']) for p in TRr])
sv=TfidfVectorizer(sublinear_tf=True); Sm=sv.fit_transform([clean(' '.join([s['title'] or '',s['album'] or '',' '.join(n for _,n in s['artists']),s['lang'] or ''])) for s in (songs[i] for i in ids)])
def m_titles(q,k=8):
    sim=(Pm@tv.transform([clean(q)]).T).toarray().ravel(); out=np.zeros(N)
    for j in np.argsort(-sim)[:k]:
        if sim[j]<=0: break
        for s in TRr[j]['songs']: out[ix[s['id']]]+=sim[j]
    return out
def m_songs(q): return (Sm@sv.transform([clean(q)]).T).toarray().ravel()
UA="Mozilla/5.0 Chrome/134"
def api(q):
    u='https://www.jiosaavn.com/api.php?'+urllib.parse.urlencode(dict(__call='search.getPlaylistResults',_format='json',_marker='0',api_version='4',ctx='web6dot0',q=q,p=1,n=3))
    try: return json.loads(urllib.request.urlopen(urllib.request.Request(u,headers={'User-Agent':UA}),timeout=20).read())
    except Exception: return {}
def m_live(q,own):
    out=np.zeros(N)
    for r in api(q).get('results',[])[:3]:
        if r['id']==own: continue
        d=json.loads(urllib.request.urlopen(urllib.request.Request('https://www.jiosaavn.com/api.php?'+urllib.parse.urlencode(dict(__call='playlist.getDetails',_format='json',_marker='0',api_version='4',ctx='web6dot0',listid=r['id'],n=100)),headers={'User-Agent':UA}),timeout=20).read())
        for rank,s in enumerate(d.get('list',[])):
            if s['id'] in ix: out[ix[s['id']]]+=1/(1+rank*0.02)
        time.sleep(.15)
    return out
def ev(f,rec,R=100,K=20):
    r,n=[],[]
    for p in rec:
        tg={ix[s['id']] for s in p['songs'] if s['id'] in ix}; q=p['title']
        s=f(q,p['id']).astype(float)
        top=np.argpartition(-s,R)[:R]; top=top[np.argsort(-s[top])]; rel=[1 if t in tg else 0 for t in top]
        r.append(sum(rel)/len(tg)); n.append(sum(x/math.log2(i+2) for i,x in enumerate(rel[:K]))/sum(1/math.log2(i+2) for i in range(min(K,len(tg)))))
    return f'R@100={np.mean(r):.3f} nDCG@20={np.mean(n):.3f}±{np.std(n)/math.sqrt(len(n)):.3f} n={len(n)}'
test=TEr[:80]
print('query = held-out playlist TITLE (proxy for a user prompt); target = its songs')
print('random   ',ev(lambda q,o:np.random.rand(N),test))
print('song-text TF-IDF (title/album/artist/lang)',ev(lambda q,o:m_songs(q),test))
print('train-playlist-title retrieval',ev(lambda q,o:m_titles(q),test))
print('JioSaavn live playlist search (own id excluded)',ev(m_live,test[:40]))
