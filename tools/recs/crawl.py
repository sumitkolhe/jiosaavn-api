import json, time, sys, os, random, urllib.request, urllib.parse
from concurrent.futures import ThreadPoolExecutor
D=os.path.join(os.path.dirname(__file__),'data')
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/134.0.0.0 Safari/537.36"
def call(c,**p):
    q=dict(__call=c,_format='json',_marker='0',api_version='4',ctx='web6dot0',**p)
    for i in range(3):
        try:
            r=urllib.request.urlopen(urllib.request.Request('https://www.jiosaavn.com/api.php?'+urllib.parse.urlencode(q),headers={'User-Agent':UA}),timeout=25)
            return json.loads(r.read().decode())
        except Exception as e: time.sleep(1.5*(i+1))
    return None
langs=['hindi','english','punjabi','tamil','telugu','bengali','marathi','kannada','malayalam','gujarati','bhojpuri','haryanvi']
themes=['romantic','sad','party','workout','chill','devotional','retro','90s','2000s','lofi','road trip','sufi','hip hop','rain','study','sleep','wedding','rock','indie','ghazal','classical','dance','happy','heartbreak','focus','morning','night drive','top hits','new releases','folk','bollywood','remix']
qs=[f"{l} {t}" for l in langs for t in themes]
random.seed(1); random.shuffle(qs)
qs=qs[:260]
pl={}
def search(q):
    out=[]
    for p in (1,2):
        r=call('search.getPlaylistResults',q=q,p=p,n=20)
        if not r: break
        out+= [(x['id'],x.get('title'),q) for x in r.get('results',[])]
        time.sleep(.2)
    return out
with ThreadPoolExecutor(4) as ex:
    for res in ex.map(search,qs):
        for i,t,q in res: pl.setdefault(i,(t,q))
for l in langs[:8]:
    r=call('content.getFeaturedPlaylists',language=l)
    for x in (r or {}).get('data',[]): pl.setdefault(x['id'],(x.get('title'),'featured:'+l))
print('candidate playlists',len(pl),flush=True)
ids=list(pl); random.shuffle(ids); ids=ids[:1100]
def det(i):
    r=call('playlist.getDetails',listid=i,n=100,p=1); time.sleep(.15)
    if not r or not r.get('list'): return None
    songs=[]
    for s in r['list']:
        if s.get('type')!='song': continue
        mi=s.get('more_info') or {}
        am=(mi.get('artistMap') or {})
        songs.append(dict(id=s['id'],title=s.get('title'),lang=s.get('language'),year=s.get('year'),album=mi.get('album'),album_id=mi.get('album_id'),label=mi.get('label'),music=mi.get('music'),dur=mi.get('duration'),plays=s.get('play_count'),rel=mi.get('release_date'),expl=s.get('explicit_content'),
            artists=[(a['id'],a['name']) for a in (am.get('primary_artists') or [])],feat=[(a['id'],a['name']) for a in (am.get('featured_artists') or [])]))
    mi=r.get('more_info') or {}
    return dict(id=i,title=r.get('title'),q=pl[i][1],fans=mi.get('fan_count'),n=len(songs),songs=songs)
n=0
with ThreadPoolExecutor(4) as ex, open(os.path.join(D,'playlists.jsonl'),'w') as f:
    for r in ex.map(det,ids):
        if r and r['n']>=10: f.write(json.dumps(r)+'\n'); n+=1
        if n%100==0 and n: print('saved',n,flush=True)
print('done',n)
