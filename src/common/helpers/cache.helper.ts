const MINUTE = 60
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

/**
 * `stale-if-error` is the directive that matters most here.
 *
 * JioSaavn throttles aggressively — the rotating user-agent pool exists because
 * of it. Without this, a throttled window means every row on the client's home
 * screen comes back empty. With it, the edge keeps serving the last good
 * response for up to a week while the upstream is refusing us, so an outage
 * degrades to slightly stale data instead of a blank screen.
 *
 * It only works if failures are real failures, which is why `useFetch` now
 * throws on a non-ok upstream response rather than passing an empty body down.
 */
const STALE = `stale-if-error=${7 * DAY}`

const cacheable = (maxAge: number, revalidate: number) =>
  `public, max-age=${maxAge}, stale-while-revalidate=${revalidate}, ${STALE}`

/**
 * Ordered longest-path-first: the suggestions rule has to be tested before the
 * general /api/songs rule, or it would never match.
 */
const RULES: [RegExp, string][] = [
  // Radio seeds drift as a station evolves, so keep these short.
  [/^\/api\/songs\/[^/]+\/suggestions\/?$/, cacheable(15 * MINUTE, HOUR)],

  // Song details are effectively immutable. The one thing that could age badly
  // is the decrypted CDN url, so this stays at hours rather than days.
  [/^\/api\/songs(\/|$)/, cacheable(6 * HOUR, DAY)],

  // Search covers the client's home feed. An hour keeps the feed fresh enough
  // while removing almost all of the cold-start traffic.
  [/^\/api\/search(\/|$)/, cacheable(HOUR, 6 * HOUR)],

  [/^\/api\/(artists|albums|playlists)(\/|$)/, cacheable(6 * HOUR, DAY)]
]

/**
 * The `Cache-Control` a successful GET on `pathname` should carry, or
 * `no-store` for anything not explicitly listed.
 */
export const cacheControlFor = (pathname: string): string => {
  for (const [pattern, value] of RULES) {
    if (pattern.test(pathname)) return value
  }

  return 'no-store'
}
