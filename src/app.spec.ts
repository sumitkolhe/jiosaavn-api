import { afterEach, describe, expect, it, vi } from 'vitest'
import app from './server'

const head = async (path: string) => {
  const res = await app.request(path)
  return { status: res.status, cacheControl: res.headers.get('cache-control'), vary: res.headers.get('vary') }
}

/** Makes every upstream call look like a JioSaavn throttle. */
const stubUpstream = (status: number, body: unknown = {}) =>
  vi.stubGlobal(
    'fetch',
    vi.fn(() =>
      Promise.resolve(new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } }))
    )
  )

describe('cache headers on real responses', () => {
  afterEach(() => vi.unstubAllGlobals())

  it('stamps a cacheable Cache-Control on a successful response', async () => {
    const res = await head('/api/search/songs?query=believer&limit=3')

    expect(res.status).toBe(200)
    expect(res.cacheControl).toMatch(/^public, max-age=3600/)
    expect(res.cacheControl).toContain('stale-if-error=604800')
  })

  it('does not fragment the cache with a Vary header', async () => {
    // cors() can emit `Vary: Origin`, and variants are compared verbatim — that
    // would give every distinct Origin its own cache entry.
    const res = await head('/api/search/songs?query=believer&limit=3')

    expect(res.vary ?? '').not.toContain('Origin')
  })

  it('never caches an unknown route', async () => {
    expect((await head('/api/nope')).cacheControl).toBe('no-store')
  })

  describe('when JioSaavn throttles us', () => {
    it('surfaces a 503 instead of a cheerful empty 200', async () => {
      stubUpstream(403)
      const res = await head('/api/search/songs?query=believer&limit=3')

      // Before this change the same upstream 403 produced 200 with
      // {"total": undefined, "results": []} — indistinguishable from a genuine
      // no-results answer, and it would have been cached for an hour.
      expect(res.status).toBe(503)
    })

    it('marks the failure no-store so stale-if-error can serve the last good response', async () => {
      stubUpstream(403)
      expect((await head('/api/search/songs?query=believer&limit=3')).cacheControl).toBe('no-store')
    })

    it('reports an upstream 500 as a 502', async () => {
      stubUpstream(500)
      expect((await head('/api/songs/3IoDK8qI')).status).toBe(502)
    })

    it('reports a non-JSON block page as a 502 rather than crashing', async () => {
      vi.stubGlobal(
        'fetch',
        vi.fn(() => Promise.resolve(new Response('<html>blocked</html>', { status: 200 })))
      )
      const res = await head('/api/songs/3IoDK8qI')

      expect(res.status).toBe(502)
      expect(res.cacheControl).toBe('no-store')
    })
  })
})
