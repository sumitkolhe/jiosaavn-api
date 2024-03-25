import { beforeAll, describe, expect, test } from 'vitest'
import { GetArtistSongsUseCase } from '#modules/artists/use-cases'

describe('GetArtistSongs', () => {
  let getArtistSongsUseCase: GetArtistSongsUseCase

  beforeAll(() => {
    getArtistSongsUseCase = new GetArtistSongsUseCase()
  })

  test('should get artist songs by artist id and return a list of songs', async () => {
    const songs = await getArtistSongsUseCase.execute({
      artistId: '1274170',
      page: 1,
      sortBy: 'popularity',
      sortOrder: 'asc'
    })

    expect(songs).toMatchSnapshot({
      total: expect.any(Number),
      songs: songs.songs.map((song) => ({
        ...song,
        playCount: expect.any(Number)
      }))
    })
  })
})
