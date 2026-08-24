import type { SongModel } from '#modules/songs/models'
import type { z } from 'zod'

type Song = z.infer<typeof SongModel>

export type FeedSort = 'trending' | 'plays' | 'newest'

/**
 * Orders one language's trending list by the intent of the row asking for it.
 *
 * JioSaavn returns a single list per language that mixes brand-new releases
 * with evergreen catalogue, so the same 24 songs have to serve three different
 * rows. Ordering them differently is what keeps those rows from duplicating
 * each other:
 *
 *   'trending' — leave JioSaavn's own ranking alone. This is the actual
 *                trending signal and re-sorting it throws that away: ordering
 *                the same pool by play count surfaces Arabic Kuthu (2022,
 *                45M plays) over a track released three days ago.
 *   'plays'    — biggest songs first, for a "greatest hits" style row.
 *   'newest'   — most recent release first, for a new-releases row.
 */
export const sortFeedSongs = (songs: Song[], sort: FeedSort): Song[] => {
  const ordered = [...songs]

  // Upstream order IS the trending order.
  if (sort === 'trending') return ordered

  if (sort === 'newest') {
    // Release dates are ISO (YYYY-MM-DD), so a plain string compare orders them
    // correctly. Songs with no date sort last rather than to the top.
    return ordered.sort((a, b) => (b.releaseDate ?? '').localeCompare(a.releaseDate ?? ''))
  }

  return ordered.sort((a, b) => (b.playCount ?? 0) - (a.playCount ?? 0))
}

/**
 * Round-robins across the per-language lists, de-duplicating by song id and
 * stopping at `limit`.
 *
 * Interleaving rather than merging-then-sorting matters: hindi and punjabi have
 * far larger play counts than tamil or telugu, so a global sort would bury the
 * smaller catalogues entirely. Taking one song from each language in turn keeps
 * every language visible while preserving each one's own ranking.
 */
export const interleaveFeedSongs = (lists: Song[][], limit: number): Song[] => {
  const seen = new Set<string>()
  const merged: Song[] = []
  const longest = Math.max(0, ...lists.map((list) => list.length))

  for (let index = 0; index < longest && merged.length < limit; index++) {
    for (const list of lists) {
      if (merged.length >= limit) break

      const song = list[index]
      if (!song || seen.has(song.id)) continue

      seen.add(song.id)
      merged.push(song)
    }
  }

  return merged
}
