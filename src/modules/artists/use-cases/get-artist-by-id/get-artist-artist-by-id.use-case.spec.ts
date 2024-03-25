import { beforeAll, describe, expect, test } from 'vitest'
import { GetArtistByIdUseCase } from '#modules/artists/use-cases'

describe('GetArtistById', () => {
  let getArtistByIdUseCase: GetArtistByIdUseCase

  beforeAll(() => {
    getArtistByIdUseCase = new GetArtistByIdUseCase()
  })

  test('should get artist by id and return an artist', async () => {
    const artist = await getArtistByIdUseCase.execute({
      artistId: '1274170',
      page: 1,
      songCount: 5,
      albumCount: 5,
      sortBy: 'popularity',
      sortOrder: 'desc'
    })

    expect(artist).toMatchSnapshot({
      ...artist,
      followerCount: expect.any(Number),
      topSongs: expect.any(Array),
      singles: expect.any(Array),
      topAlbums: expect.any(Array)
    })
  })
})
