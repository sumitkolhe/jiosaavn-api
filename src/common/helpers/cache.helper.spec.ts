import { cacheControlFor } from '#common/helpers'
import { describe, expect, it } from 'vitest'

const directives = (value: string) =>
  Object.fromEntries(
    value.split(',').map((part) => {
      const [key, v] = part.trim().split('=')
      return [key, v ? Number(v) : true]
    })
  )

describe('cacheControlFor', () => {
  it('caches the endpoints the client actually calls', () => {
    for (const path of [
      '/api/search/songs',
      '/api/songs',
      '/api/songs/3IoDK8qI',
      '/api/songs/3IoDK8qI/suggestions',
      '/api/artists/455663'
    ]) {
      expect(cacheControlFor(path), path).not.toBe('no-store')
    }
  })

  it('gives every cacheable route a week of stale-if-error', () => {
    // The whole point of the change: an upstream outage degrades to stale data
    // rather than a blank home screen.
    for (const path of ['/api/search/songs', '/api/songs', '/api/artists/1', '/api/albums', '/api/playlists']) {
      expect(directives(cacheControlFor(path))['stale-if-error'], path).toBe(604_800)
    }
  })

  it('matches suggestions before the general songs rule, and keeps it short', () => {
    const suggestions = directives(cacheControlFor('/api/songs/yDeAS8Eh/suggestions'))
    const songs = directives(cacheControlFor('/api/songs/yDeAS8Eh'))

    expect(suggestions['max-age']).toBe(900)
    expect(songs['max-age']).toBe(21_600)
    expect(suggestions['max-age']).toBeLessThan(songs['max-age'] as number)
  })

  it('keeps search fresher than song details', () => {
    expect(directives(cacheControlFor('/api/search/songs'))['max-age']).toBeLessThan(
      directives(cacheControlFor('/api/songs'))['max-age'] as number
    )
  })

  it('marks everything else no-store', () => {
    for (const path of ['/', '/docs', '/swagger', '/api', '/api/unknown', '/apifoo/songs']) {
      expect(cacheControlFor(path), path).toBe('no-store')
    }
  })

  it('is public, so the edge is allowed to store it', () => {
    expect(cacheControlFor('/api/search/songs')).toContain('public')
  })
})
