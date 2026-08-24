import { interleaveFeedSongs, sortFeedSongs } from '#modules/content/helpers'
import { describe, expect, it } from 'vitest'
import type { SongModel } from '#modules/songs/models'
import type { z } from 'zod'

type Song = z.infer<typeof SongModel>

const song = (id: string, playCount: number | null, releaseDate: string | null): Song => {
  const partial: Partial<Song> = { id, name: id, playCount, releaseDate }
  return partial as Song
}

describe('sortFeedSongs', () => {
  const pool = [
    song('evergreen', 33_873_530, '2023-10-19'),
    song('brand-new', 60_266, '2026-08-21'),
    song('midweight', 8_261_616, '2026-07-22'),
    song('undated', 500, null)
  ]

  it("leaves JioSaavn's own ranking alone for a trending row", () => {
    expect(sortFeedSongs(pool, 'trending').map((s) => s.id)).toEqual(['evergreen', 'brand-new', 'midweight', 'undated'])
  })

  it('orders by play count for a hits row', () => {
    expect(sortFeedSongs(pool, 'plays').map((s) => s.id)).toEqual(['evergreen', 'midweight', 'brand-new', 'undated'])
  })

  it('orders by release date for a new-releases row', () => {
    expect(sortFeedSongs(pool, 'newest').map((s) => s.id)).toEqual(['brand-new', 'midweight', 'evergreen', 'undated'])
  })

  it('puts the two orderings almost back to front, which is what keeps the rows distinct', () => {
    const byPlays = sortFeedSongs(pool, 'plays').map((s) => s.id)
    const byDate = sortFeedSongs(pool, 'newest').map((s) => s.id)

    expect(byPlays[0]).not.toBe(byDate[0])
  })

  it('treats a missing play count as zero and a missing date as oldest', () => {
    const withNulls = [song('a', null, null), song('b', 10, '2020-01-01')]

    expect(sortFeedSongs(withNulls, 'plays')[0]?.id).toBe('b')
    expect(sortFeedSongs(withNulls, 'newest')[0]?.id).toBe('b')
  })

  it('does not mutate its input', () => {
    const original = [...pool]
    sortFeedSongs(pool, 'plays')
    sortFeedSongs(pool, 'trending')

    expect(pool).toEqual(original)
  })
})

describe('interleaveFeedSongs', () => {
  const list = (prefix: string, count: number) =>
    Array.from({ length: count }, (_, i) => song(`${prefix}${i}`, 0, null))

  it('takes one song from each language in turn', () => {
    const merged = interleaveFeedSongs([list('ta', 3), list('hi', 3), list('te', 3)], 9)

    expect(merged.map((s) => s.id)).toEqual(['ta0', 'hi0', 'te0', 'ta1', 'hi1', 'te1', 'ta2', 'hi2', 'te2'])
  })

  it('keeps drawing from the remaining languages once a short list runs out', () => {
    const merged = interleaveFeedSongs([list('ta', 1), list('hi', 3)], 10)

    expect(merged.map((s) => s.id)).toEqual(['ta0', 'hi0', 'hi1', 'hi2'])
  })

  it('stops at the limit', () => {
    expect(interleaveFeedSongs([list('ta', 24), list('hi', 24)], 12)).toHaveLength(12)
  })

  it('de-duplicates a song that trends in more than one language', () => {
    const shared = song('shared', 0, null)
    const merged = interleaveFeedSongs([[shared, song('ta1', 0, null)], [shared]], 10)

    expect(merged.map((s) => s.id)).toEqual(['shared', 'ta1'])
  })

  it('degenerates to a plain slice for a single language', () => {
    expect(interleaveFeedSongs([list('ta', 24)], 10).map((s) => s.id)).toEqual(list('ta', 10).map((s) => s.id))
  })

  it('returns an empty list when every language failed', () => {
    expect(interleaveFeedSongs([], 10)).toEqual([])
    expect(interleaveFeedSongs([[], []], 10)).toEqual([])
  })
})
