import { beforeAll, describe, expect, test } from 'vitest'
import { GetAlbumByIdUseCase } from '#modules/albums/use-cases'

describe('GetAlbumById', () => {
  let getAlbumByIdUseCase: GetAlbumByIdUseCase

  beforeAll(() => {
    getAlbumByIdUseCase = new GetAlbumByIdUseCase()
  })

  test('should get album by id and return an album', async () => {
    const album = await getAlbumByIdUseCase.execute('23241654')

    expect(album).toMatchSnapshot({
      playCount: expect.any(Number),
      songs: album.songs.map((song) => ({
        ...song,
        playCount: expect.any(Number)
      }))
    })
  })
})
