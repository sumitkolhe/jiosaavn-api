import { SearchSongModel } from '#modules/search/models'
import { SearchSongsUseCase } from '#modules/search/use-cases'
import { beforeAll, describe, expect, it } from 'vitest'

describe('SearchSongs', () => {
  let searchSongsUseCase: SearchSongsUseCase

  beforeAll(() => {
    searchSongsUseCase = new SearchSongsUseCase()
  })

  it('should search songs by query and return a list of songs', async () => {
    const songs = await searchSongsUseCase.execute({ query: 'ride', limit: 5, page: 1 })

    expect(() => SearchSongModel.parse(songs)).not.toThrow()
  })
})
