import { beforeAll, describe, expect, it } from 'vitest'
import { SearchSongsUseCase } from '#modules/search/use-cases'

describe('SearchSongs', () => {
  let searchSongsUseCase: SearchSongsUseCase

  beforeAll(() => {
    searchSongsUseCase = new SearchSongsUseCase()
  })

  it('should search songs by query and return a list of songs', async () => {
    const songs = await searchSongsUseCase.execute({ query: 'ride', limit: 5, page: 1 })

    expect(songs).toMatchSnapshot({
      total: expect.any(Number),
      results: songs.results.map((song) => ({
        ...song,
        playCount: expect.any(Number)
      }))
    })
  })
})
