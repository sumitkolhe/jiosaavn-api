import { beforeAll, describe, expect, test } from 'vitest'
import { GetArtistAlbumsUseCase } from '#modules/artists/use-cases'

describe('GetArtistAlbums', () => {
  let getArtistAlbumsUseCase: GetArtistAlbumsUseCase

  beforeAll(() => {
    getArtistAlbumsUseCase = new GetArtistAlbumsUseCase()
  })

  test('should get artist albums by artist id and return a list of albums', async () => {
    const albums = await getArtistAlbumsUseCase.execute({
      artistId: '1274170',
      page: 1,
      sortBy: 'popularity',
      sortOrder: 'asc'
    })

    expect(albums).toMatchSnapshot()
  })
})
