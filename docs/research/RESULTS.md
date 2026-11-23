# Personalized recommendations — what was measured

Everything below was measured on real JioSaavn data (904 crawled playlists, 17,645 songs; 3,708 songs with audio
analysis). Playlists stand in for a listener's taste: reveal a few songs as "likes", ask a method to find the rest.
That is a proxy, not real listening behaviour — treat the numbers as a ranking of approaches, not as product metrics.
Reproduce with the scripts in `tools/recs/`.

## 1. Which signals predict taste (playlist continuation, 5 seed likes, nDCG@20 ± s.e.)

Same-artist/same-album candidates are excluded in the strict column, because many playlists are one artist or one
album and that shortcut makes everything look good.

| Method | all candidates | same artist excluded |
|---|---|---|
| Popularity (play count or playlist frequency) | 0.001–0.005 | 0.004 |
| EASE (collaborative, closed form) | 0.107 ± 0.009 | 0.090 ± 0.009 |
| PPMI + SVD item embeddings | 0.126 ± 0.008 | 0.105 ± 0.009 |
| ItemKNN co-occurrence | 0.140 ± 0.010 | 0.129 ± 0.010 |
| Metadata TF-IDF (artist, composer, album, label, language, year) | 0.265 ± 0.010 | 0.134 ± 0.008 |
| **Learned stack of the above** (logistic regression fit on validation playlists) | **0.287 ± 0.010** | **0.185 ± 0.010** |

* **Popularity is useless as a ranker.** Any "trending" default fails the test.
* Collaborative signals alone are weak on public playlists: 58 % of held-out songs never appear in training playlists.
* A learned combination beats every single signal. Weights were fit on held-out data, not hand-tuned.

## 2. Does audio help? (15 s preview clips, Essentia Discogs-EffNet)

| Method | nDCG@20 |
|---|---|
| Metadata only | 0.315 ± 0.011 |
| Audio embedding only | 0.104 ± 0.006 |
| Metadata + 0.5 × audio | **0.376 ± 0.011** |
| Metadata + 1.0 × audio | 0.252 ± 0.009 |

Audio alone is a poor "more like these" signal (playlists are grouped by artist/era, not sound) but a small dose
improves ranking, and it is the only source for steerable attributes:

* **Voice detector works**: songs titled "instrumental" score 0.27 mean voice probability (93 % below 0.5) against
  0.81 for the catalog.
* Mood heads track playlist titles (workout/party playlists: danceable 0.89, party 0.75; sad playlists: sad 0.50 vs 0.18).
* The catalog is ~90 % vocal. "Less vocals" only has an effect if instrumentals are in the pool, so the crawl adds
  instrumental / lofi / focus playlists.

## 3. Learning from feedback (simulated sessions: 1 seed, then 10 rounds of 5 songs, skips are explicit 60 % of the time)

Mean share of each slate the "user" would keep:

| Learner | hit rate |
|---|---|
| Random / popularity | 0.004 / 0.012 |
| Rocchio (mean of likes) | 0.170 ± 0.017 |
| Rocchio + negatives | 0.186 ± 0.018 |
| Bayesian ridge, posterior mean (chosen) | 0.198 ± 0.019 |
| **One shared model across two modes vs. one model per mode** | **0.045 vs 0.198** |

Per-mode isolation is not a nicety: mixing two modes into one learner is ~4× worse. Thompson-sampling noise did not
help on a static playlist (it cannot reward adapting to drift), so exploration is kept small and unproven.

Feature-design check on the audio subset (CF built **without** the evaluation playlists — an earlier run leaked and
looked far better, see below): content+CF 0.364, +0.5 audio 0.386, +1.0 audio 0.394, audio alone 0.095.

## 4. Prompt → playlist without an LLM (query = held-out playlist title)

Song-text TF-IDF 0.114, JioSaavn's own playlist search 0.121 (n=40, ±0.036), retrieving similar playlist titles 0.039.
All weak: a plain text search is not enough, so the prompt needs expansion (on-device model or LLM). That part is
**untested** — no LLM was available during the study.

## 5. External enrichment is patchy

Matching JioSaavn songs to Deezer by title + duration found 47 % of a sample; ReccoBeats audio features then covered
36 % overall (Telugu 3 of 12). JioSaavn songs carry no ISRC. Deezer/iTunes genres are coarse ("Bollywood");
MusicBrainz tags are sparse and name-matching is fragile. Hence audio features are computed from JioSaavn's own
preview clip (`more_info.vlink`, 93 % coverage) instead.

## Mistakes caught while measuring

* The first benchmark's 0.92 hit rate was a same-album shortcut → added exclusion modes.
* The first feature-design simulation built CF embeddings from the evaluation playlists (0.54 → 0.36 once fixed).
* Small samples (n≈100) disagreed with the full run; every table above is from the full set with standard errors.

## Not measured / open

* Real listening behaviour. The event log in the iOS prototype exists to calibrate completion/skip weights from use.
* LLM prompt expansion; exploration under taste drift; Hindi-specific audio model quality.
* Licensing: Essentia models are AGPL, MuQ-MuLan weights CC-BY-NC, Yambda research-only — check before shipping commercially.
  JioSaavn's API is unofficial; bulk crawling and clip analysis may conflict with its terms.
