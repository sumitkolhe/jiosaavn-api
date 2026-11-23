import json,random,re,time,urllib.request,urllib.parse,unicodedata,html
random.seed(3)
songs={}
for l in open('data/playlists.jsonl'):
    for s in json.loads(l)['songs']: songs[s['id']]=s
S=random.sample(list(songs.values()),150)
def get(u):
    for i in range(3):
        try: return json.loads(urllib.request.urlopen(urllib.request.Request(u,headers={'User-Agent':'research-probe/0.1'}),timeout=20).read())
        except Exception: time.sleep(1)
def norm(t):
    t=html.unescape(t or '').lower(); t=re.sub(r'\(.*?\)|\[.*?\]','',t); t=re.sub(r'from ".*"','',t); t=unicodedata.normalize('NFKD',t)
    return re.sub(r'[^a-z0-9 ]','',t).strip()
out=[]
for s in S:
    a=s['artists'][0][1] if s['artists'] else ''
    q=f'{html.unescape(s["title"])} {a}'
    r=get('https://api.deezer.com/search?limit=5&q='+urllib.parse.quote(q)) or {}
    best=None
    for c in r.get('data',[]):
        dd=abs(int(c['duration'])-int(s['dur'] or 0))
        if norm(c['title'])[:12]==norm(s['title'])[:12] or norm(s['title']) in norm(c['title']) or norm(c['title']) in norm(s['title']):
            if dd<=3: best=(c,dd); break
    o=dict(id=s['id'],title=s['title'],artist=a,lang=s['lang'],matched=bool(best))
    if best:
        t=get(f'https://api.deezer.com/track/{best[0]["id"]}') or {}
        o.update(isrc=t.get('isrc'),dz=best[0]['id'],dzt=best[0]['title'],dd=best[1],bpm=t.get('bpm'))
        if t.get('isrc'):
            rb=get('https://api.reccobeats.com/v1/track?ids='+t['isrc']) or {}
            c=(rb.get('content') or [])
            o['rb']=bool(c)
            if c:
                f=get('https://api.reccobeats.com/v1/audio-features?ids='+c[0]['id']) or {}
                fc=(f.get('content') or [])
                o['feat']=fc[0] if fc else None
    out.append(o); time.sleep(.25)
json.dump(out,open('data/enrich.json','w'))
m=[o for o in out if o['matched']]; rb=[o for o in m if o.get('rb')]; ft=[o for o in rb if o.get('feat')]
print('sampled',len(out),'deezer matched',len(m),'reccobeats found',len(rb),'with audio features',len(ft))
for lg in ('hindi','english','punjabi','tamil','telugu'):
    g=[o for o in out if o['lang']==lg]
    if g: print(lg,len(g),'matched',sum(o['matched'] for o in g),'features',sum(1 for o in g if o.get('feat')))
for o in ft[:3]: print(o['title'],{k:o['feat'][k] for k in ('energy','danceability','valence','instrumentalness','acousticness','speechiness','tempo') if k in o['feat']})
