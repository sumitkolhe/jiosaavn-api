import { AlbumModel } from '#modules/albums/models'
import { GetAlbumByLinkUseCase } from '#modules/albums/use-cases'
import { beforeAll, describe, expect, it } from 'vitest'

describe('GetAlbumByLink', () => {
  let getAlbumByLinkUseCase: GetAlbumByLinkUseCase

  beforeAll(() => {
    getAlbumByLinkUseCase = new GetAlbumByLinkUseCase()
  })

  it('should get album by link and return an album', async () => {
    const album = await getAlbumByLinkUseCase.execute('ITIyo-GDr7A_')

    expect(() => AlbumModel.parse(album)).not.toThrow()
  })
})
