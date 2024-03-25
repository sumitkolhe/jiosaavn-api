import { beforeAll, describe, expect, test } from 'vitest'
import { GetArtistByLinkUseCase } from '#modules/artists/use-cases'

describe('GetArtistByLink', () => {
  let getArtistByLinkUseCase: GetArtistByLinkUseCase

  beforeAll(() => {
    getArtistByLinkUseCase = new GetArtistByLinkUseCase()
  })

  test('should get artist by link and return an artist', async () => {
    const artist = await getArtistByLinkUseCase.execute({
      token: 'r-OWIKgpX2I_',
      page: 1,
      songCount: 5,
      albumCount: 5,
      sortBy: 'popularity',
      sortOrder: 'asc'
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
