import type { FeedSort } from '#modules/content/helpers'

/**
 * ───────────────────────────────────────────────────────────────────────────
 * TEMPORARY BRIDGE — delete once the VibeUp client calls a real /api/trending.
 *
 * The Android Home screen builds five of its rows by *searching* for hardcoded
 * strings: "trending songs 2025", "new tamil songs 2025", "tamil hits 2025".
 * Those are text searches, so JioSaavn returns songs with those words in the
 * title — the Trending row was showing tracks literally named
 * "Jugraafiya Trending Version" and "Teri Ore (Trending Version)".
 *
 * Until the client can be changed, we recognise those queries here and serve
 * JioSaavn's real trending feed instead. Everything else falls straight
 * through to normal search, untouched.
 *
 * This file is the only part of the change that knows about the client. The
 * content module underneath it is a normal feature and stays.
 * ───────────────────────────────────────────────────────────────────────────
 */

/** The languages the VibeUp client advertises in its `languages` query param. */
export const SUPPORTED_LANGUAGES = ['english', 'hindi', 'punjabi', 'tamil', 'telugu'] as const

/** Fallback for the language-less "trending" row when no usable param arrives. */
export const DEFAULT_TRENDING_LANGUAGES = ['tamil', 'hindi', 'telugu']

export interface FeedAlias {
  /**
   * Which upstream feed answers this row.
   *
   * 'trending'     — content.getTrending. Popular right now, but a rotating
   *                  mix that reaches years back, so it is not "new".
   * 'new-releases' — the new_albums section of content.getBrowseModules.
   *                  Actually recent, typically the past few weeks.
   */
  source: 'trending' | 'new-releases'
  languages: string[]
  sort: FeedSort
}

const LANGUAGE_GROUP = SUPPORTED_LANGUAGES.join('|')

/**
 * "trending songs 2025" — no language, so the caller's `languages` param
 * decides. Keeps JioSaavn's own ranking, because that ranking is the point.
 */
const TRENDING_PATTERN = /^trending songs \d{4}$/
/**
 * "new tamil songs 2025" — the New Releases row. Served from the browse-modules
 * new-releases feed rather than trending, because trending reaches back years
 * and cannot honestly fill a row labelled "new".
 */
const NEW_PATTERN = new RegExp(`^new (${LANGUAGE_GROUP}) songs \\d{4}$`)
/** "tamil hits 2025" — most played first, this is a per-language row. */
const HITS_PATTERN = new RegExp(`^(${LANGUAGE_GROUP}) hits \\d{4}$`)

/**
 * Reads the client's `languages=english,hindi,...` param, keeps the ones
 * JioSaavn trending supports, and falls back to a sensible mix.
 */
const parseLanguages = (languagesParam?: string): string[] => {
  const requested = (languagesParam ?? '')
    .split(',')
    .map((language) => language.trim().toLowerCase())
    .filter(Boolean)
    .filter((language) => (SUPPORTED_LANGUAGES as readonly string[]).includes(language))

  return requested.length ? [...new Set(requested)] : DEFAULT_TRENDING_LANGUAGES
}

/**
 * Returns how to build a trending feed for `query`, or null when the query is
 * an ordinary search that should be left alone.
 *
 * Matching is year-agnostic so this keeps working when the client's hardcoded
 * year changes, and it is deliberately narrow: an artist name, a mood phrase or
 * anything a user types never matches.
 */
export const resolveFeedAlias = (query: string, languagesParam?: string): FeedAlias | null => {
  const normalised = query.trim().toLowerCase().replaceAll(/\s+/g, ' ')

  if (TRENDING_PATTERN.test(normalised)) {
    return { source: 'trending', languages: parseLanguages(languagesParam), sort: 'trending' }
  }

  const newest = NEW_PATTERN.exec(normalised)
  if (newest) return { source: 'new-releases', languages: [newest[1]], sort: 'newest' }

  const hits = HITS_PATTERN.exec(normalised)
  if (hits) return { source: 'trending', languages: [hits[1]], sort: 'plays' }

  return null
}
