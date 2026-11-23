import json,random,os,urllib.request,urllib.parse,time
from concurrent.futures import ThreadPoolExecutor
random.seed(21)
pls=[json.loads(l) for fn in ('data/playlists.jsonl','data/playlists_instr.jsonl') for l in open(fn)]
sub=pls
ids=sorted({s['id'] for p in sub for s in p['songs']}); print('songs',len(ids),flush=True)
UA={'User-Agent':'Mozilla/5.0 Chrome/134'}
def get(u,raw=False):
    for i in range(3):
        try:
            d=urllib.request.urlopen(urllib.request.Request(u,headers=UA),timeout=25).read()
            return d if raw else json.loads(d)
        except Exception: time.sleep(1+i)
def one(i):
    f=f'data/clips/{i}.mp3'
    if os.path.exists(f): return 1
    d=get('https://www.jiosaavn.com/api.php?'+urllib.parse.urlencode(dict(__call='song.getDetails',_format='json',_marker='0',api_version='4',ctx='web6dot0',pids=i)))
    try: v=d['songs'][0]['more_info'].get('vlink')
    except Exception: v=None
    if not v: return 0
    b=get(v,raw=True)
    if b and len(b)>5000: open(f,'wb').write(b); return 1
    return 0
done=0
with ThreadPoolExecutor(6) as ex:
    for n,r in enumerate(ex.map(one,ids)):
        done+=r
        if n%500==0: print(n,done,flush=True)
print('clips',done,'of',len(ids))
