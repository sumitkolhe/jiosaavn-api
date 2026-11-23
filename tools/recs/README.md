# Recommendation research pipeline

Reproduces `docs/research/RESULTS.md` and builds the catalog index shipped in `ios/Modes`.
Python 3.9+, `numpy scipy scikit-learn essentia-tensorflow`. Run everything from a scratch **data directory**
(scripts use `data/` relative paths); models live in `models/` (download from essentia.upf.edu/models:
`discogs-effnet-bs64-1`, `msd-musicnn-1`, `deam-msd-musicnn-2` and the `*-discogs-effnet-1` heads
voice_instrumental, danceability, mood_happy/sad/aggressive/relaxed/party/acoustic/electronic, tonal_atonal).

1. `crawl.py`, `crawl_instr.py`   crawl playlists → `data/playlists*.jsonl`
2. `bench.py`                     signal comparison (section 1)
3. `fetch_all.py`, `analyze2.py <shard> <of>`   preview clips → audio features `data/feat2_*.npy`
4. `bench_audio.py`, `sim.py`, `sim_final.py`, `text.py`, `enrich.py`   sections 2–5
5. `export_index.py <out dir>`    writes `catalog.json` + `catalog.bin` (copy into `ios/Modes/Modes/Resources`)
