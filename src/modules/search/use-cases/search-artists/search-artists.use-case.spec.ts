import { SearchArtistModel } from '#modules/search/models'
import { SearchArtistsUseCase } from '#modules/search/use-cases'
import { beforeAll, describe, expect, it } from 'vitest'

describe('SearchArtists', () => {
  let searchArtistsUseCase: SearchArtistsUseCase

  beforeAll(() => {
    searchArtistsUseCase = new SearchArtistsUseCase()
  })

  it('should search artists by query and return a list of artists', async () => {
    const artists = await searchArtistsUseCase.execute({ query: 'imagine dragons', limit: 5, page: 1 })

    expect(() => SearchArtistModel.parse(artists)).not.toThrow()
  })
})
