"""Builds the on-device catalog index for the Modes prototype.

Inputs (all produced by the research pipeline in tools/recs/README.md):
  playlists*.jsonl  crawled JioSaavn playlists (song metadata + playlist membership)
  feat2_*.npy       per-song audio features from 15 s JioSaavn preview clips (Essentia Discogs-EffNet + heads)

Output: catalog.json (metadata) + catalog.bin (float16 feature matrix, uint8 display attributes).
"""
import html, json, os, sys
import numpy as np
from build_feats import build, load

OUT = sys.argv[1] if len(sys.argv) > 1 else '.'
W_Z, W_E, W_A, W_ATT = 1.0, 1.0, 0.75, 0.5  # chosen from tools/recs/sim_final.py (see RESULTS.md)

F, songs, ids, P = load()
B = build(F, songs, ids, P)
X = np.hstack([W_Z * B['Z'], W_E * B['E'], W_A * B['A']])
X /= np.maximum(np.linalg.norm(X, axis=1, keepdims=True), 1e-9)
K = B['ATTz'].shape[1]
X = np.nan_to_num(np.hstack([X, W_ATT * B['ATTz'] / np.sqrt(K)]), nan=0.0, posinf=0.0, neginf=0.0).astype(np.float16)

ATT = B['ATT'].copy()
ATT[:, 8] = (ATT[:, 8] + 1) / 2   # arousal  (-1..1 -> 0..1)
ATT[:, 9] = (ATT[:, 9] + 1) / 2   # valence
ATT[:, 10] = ATT[:, 10]           # tempo already 0..1
disp = np.clip(np.round(ATT * 255), 0, 255).astype(np.uint8)

items = []
for s in ids:
    m = songs[s]
    items.append([s, html.unescape(m['title'] or ''), ', '.join(n for _, n in m['artists'][:2]) or '',
                  m.get('lang') or '', int(m['year']) if str(m.get('year') or '').isdigit() else 0,
                  html.unescape(m.get('album') or ''), (m.get('img') or '').replace('150x150', '500x500').replace('50x50', '500x500')])
meta = dict(version=1, count=len(ids), dim=int(X.shape[1]), attrDim=K, attrNames=B['names'],
            attrStd=[float(v) for v in B['ATT'].std(0)], blocks=dict(Z=64, E=64, A=64, ATT=K), langs=['hindi','english','punjabi','tamil','telugu','bengali','marathi','kannada','malayalam','gujarati','bhojpuri','haryanvi'],
            fields=['id', 'title', 'artist', 'lang', 'year', 'album', 'img'], items=items)
os.makedirs(OUT, exist_ok=True)
json.dump(meta, open(os.path.join(OUT, 'catalog.json'), 'w'), ensure_ascii=False, separators=(',', ':'))
with open(os.path.join(OUT, 'catalog.bin'), 'wb') as f:
    f.write(X.astype('<f2').tobytes()); f.write(disp.tobytes())
print('catalog', len(ids), 'songs, dim', X.shape[1], 'bytes', X.nbytes + disp.nbytes)
