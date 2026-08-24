import { DEFAULT_TRENDING_LANGUAGES, resolveFeedAlias } from '#modules/search/helpers'
import { describe, expect, it } from 'vitest'

describe('resolveFeedAlias', () => {
  describe('the client queries it exists to catch', () => {
    it("maps the trending row to the languages the client asked for, keeping JioSaavn's ranking", () => {
      expect(resolveFeedAlias('trending songs 2025', 'english,hindi,punjabi,tamil,telugu')).toEqual({
        source: 'trending',
        languages: ['english', 'hindi', 'punjabi', 'tamil', 'telugu'],
        sort: 'trending'
      })
    })

    it('maps a new-releases row to the new-releases feed, not trending', () => {
      for (const language of ['tamil', 'hindi', 'telugu']) {
        expect(resolveFeedAlias(`new ${language} songs 2025`)).toEqual({
          source: 'new-releases',
          languages: [language],
          sort: 'newest'
        })
      }
    })

    it('maps a language row to the trending feed, most played first', () => {
      for (const language of ['tamil', 'telugu', 'hindi']) {
        expect(resolveFeedAlias(`${language} hits 2025`)).toEqual({
          source: 'trending',
          languages: [language],
          sort: 'plays'
        })
      }
    })

    it('gives all three rows a different ordering so they do not duplicate each other', () => {
      const sorts = [
        resolveFeedAlias('trending songs 2025')?.sort,
        resolveFeedAlias('tamil hits 2025')?.sort,
        resolveFeedAlias('new tamil songs 2025')?.sort
      ]

      expect(sorts).toEqual(['trending', 'plays', 'newest'])
      expect(new Set(sorts).size).toBe(3)
    })

    it('sends the new-releases row to a different feed than the other two rows', () => {
      expect(resolveFeedAlias('new tamil songs 2025')?.source).toBe('new-releases')
      expect(resolveFeedAlias('tamil hits 2025')?.source).toBe('trending')
      expect(resolveFeedAlias('trending songs 2025')?.source).toBe('trending')
    })
  })

  describe('matching is year-agnostic', () => {
    it('keeps working when the client bumps its hardcoded year', () => {
      for (const year of ['2024', '2025', '2026', '2030']) {
        expect(resolveFeedAlias(`trending songs ${year}`)).not.toBeNull()
        expect(resolveFeedAlias(`tamil hits ${year}`)).not.toBeNull()
        expect(resolveFeedAlias(`new hindi songs ${year}`)).not.toBeNull()
      }
    })

    it('still requires a year, so bare phrases are ordinary searches', () => {
      expect(resolveFeedAlias('trending songs')).toBeNull()
      expect(resolveFeedAlias('tamil hits')).toBeNull()
    })
  })

  describe('normalisation', () => {
    it('ignores case, padding and repeated whitespace', () => {
      expect(resolveFeedAlias('  Tamil   Hits  2025 ')).toEqual({
        source: 'trending',
        languages: ['tamil'],
        sort: 'plays'
      })
      expect(resolveFeedAlias('TRENDING SONGS 2025')?.sort).toBe('trending')
    })
  })

  describe('the languages param', () => {
    it('keeps only supported languages and de-duplicates', () => {
      expect(resolveFeedAlias('trending songs 2025', 'tamil,marathi,tamil,hindi')).toEqual({
        source: 'trending',
        languages: ['tamil', 'hindi'],
        sort: 'trending'
      })
    })

    it('tolerates padding and mixed case', () => {
      expect(resolveFeedAlias('trending songs 2025', ' Tamil , HINDI ')?.languages).toEqual(['tamil', 'hindi'])
    })

    it('preserves the order the client listed its languages in', () => {
      expect(resolveFeedAlias('trending songs 2025', 'telugu,tamil,hindi')?.languages).toEqual([
        'telugu',
        'tamil',
        'hindi'
      ])
    })

    it('falls back to a default mix when absent, empty or entirely unsupported', () => {
      expect(resolveFeedAlias('trending songs 2025')?.languages).toEqual(DEFAULT_TRENDING_LANGUAGES)
      expect(resolveFeedAlias('trending songs 2025', '')?.languages).toEqual(DEFAULT_TRENDING_LANGUAGES)
      expect(resolveFeedAlias('trending songs 2025', 'klingon,marathi')?.languages).toEqual(DEFAULT_TRENDING_LANGUAGES)
    })

    it('is ignored by the single-language rows, which name their own language', () => {
      expect(resolveFeedAlias('tamil hits 2025', 'hindi,punjabi')?.languages).toEqual(['tamil'])
    })
  })

  describe('everything else falls through to normal search', () => {
    it.each([
      'Believer',
      'Anirudh Ravichander',
      'Shreya Ghoshal',
      'romantic love songs',
      'party dance songs',
      'chill relaxing songs',
      'sad emotional songs',
      'marathi hits 2025',
      'new marathi songs 2025',
      'trending albums 2025',
      'best tamil hits 2025',
      'tamil hits 2025 remix',
      ''
    ])('returns null for %j', (query) => {
      expect(resolveFeedAlias(query)).toBeNull()
    })
  })
})
