import { beforeAll, describe, expect, test } from 'vitest'
import { GetPlaylistByIdUseCase } from '#modules/playlists/use-cases'

describe('GetAlbumById', () => {
  let getPlaylistByIdUseCase: GetPlaylistByIdUseCase

  beforeAll(() => {
    getPlaylistByIdUseCase = new GetPlaylistByIdUseCase()
  })

  test('should get album by id and return an album', async () => {
    const album = await getPlaylistByIdUseCase.execute({
      id: '159470188',
      page: 1,
      limit: 5
    })

    expect(album).toMatchSnapshot({
      playCount: expect.any(Number),
      songCount: expect.any(Number),
      songs: album.songs.map((song) => ({
        ...song,
        playCount: expect.any(Number)
      }))
    })
  })
})
