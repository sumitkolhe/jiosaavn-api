import { beforeAll, describe, expect, test } from 'vitest'
import { SearchArtistsUseCase } from '#modules/search/use-cases'

describe('SearchArtists', () => {
  let searchArtistsUseCase: SearchArtistsUseCase

  beforeAll(() => {
    searchArtistsUseCase = new SearchArtistsUseCase()
  })

  test('should search artists by query and return a list of artists', async () => {
    const artists = await searchArtistsUseCase.execute({ query: 'imagine dragons', limit: 5, page: 1 })

    expect(artists).toMatchSnapshot()
  })
})
