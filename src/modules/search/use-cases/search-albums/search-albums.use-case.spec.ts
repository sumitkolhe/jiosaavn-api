import { SearchAlbumModel } from '#modules/search/models'
import { SearchAlbumsUseCase } from '#modules/search/use-cases'
import { beforeAll, describe, expect, it } from 'vitest'

describe('SearchAlbums', () => {
  let searchAlbumsUseCase: SearchAlbumsUseCase

  beforeAll(() => {
    searchAlbumsUseCase = new SearchAlbumsUseCase()
  })

  it('should search albums by query and return a list of albums', async () => {
    const albums = await searchAlbumsUseCase.execute({ query: 'imagine dragons', limit: 5, page: 1 })

    expect(() => SearchAlbumModel.parse(albums)).not.toThrow()
  })
})
