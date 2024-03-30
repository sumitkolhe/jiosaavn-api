import { beforeAll, describe, expect, it } from 'vitest'
import { GetArtistSongsUseCase } from '#modules/artists/use-cases'
import { ArtistSongModel } from '#modules/artists/models'

describe('GetArtistSongs', () => {
  let getArtistSongsUseCase: GetArtistSongsUseCase

  beforeAll(() => {
    getArtistSongsUseCase = new GetArtistSongsUseCase()
  })

  it('should get artist songs by artist id and return a list of songs', async () => {
    const songs = await getArtistSongsUseCase.execute({
      artistId: '1274170',
      page: 1,
      sortBy: 'popularity',
      sortOrder: 'asc'
    })

    expect(() => ArtistSongModel.parse(songs)).not.toThrow()
  })
})
