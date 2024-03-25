import { beforeAll, describe, expect, test } from 'vitest'
import { GetAlbumByLinkUseCase } from '#modules/albums/use-cases'

describe('GetAlbumByLink', () => {
  let getAlbumByLinkUseCase: GetAlbumByLinkUseCase

  beforeAll(() => {
    getAlbumByLinkUseCase = new GetAlbumByLinkUseCase()
  })

  test('should get album by link and return an album', async () => {
    const album = await getAlbumByLinkUseCase.execute('ITIyo-GDr7A_')

    expect(album).toMatchSnapshot({
      playCount: expect.any(Number),
      songs: album.songs.map((song) => ({
        ...song,
        playCount: expect.any(Number)
      }))
    })
  })
})
