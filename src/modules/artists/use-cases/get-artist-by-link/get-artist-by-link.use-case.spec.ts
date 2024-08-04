import { ArtistModel } from '#modules/artists/models'
import { GetArtistByLinkUseCase } from '#modules/artists/use-cases'
import { beforeAll, describe, expect, it } from 'vitest'

describe('GetArtistByLink', () => {
  let getArtistByLinkUseCase: GetArtistByLinkUseCase

  beforeAll(() => {
    getArtistByLinkUseCase = new GetArtistByLinkUseCase()
  })

  it('should get artist by link and return an artist', async () => {
    const artist = await getArtistByLinkUseCase.execute({
      token: 'bQVPhRbZO1I_',
      page: 1,
      songCount: 5,
      albumCount: 5,
      sortBy: 'popularity',
      sortOrder: 'asc'
    })

    expect(() => ArtistModel.parse(artist)).not.toThrow()
  })
})
