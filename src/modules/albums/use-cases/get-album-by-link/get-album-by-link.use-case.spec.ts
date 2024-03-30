import { beforeAll, describe, expect, it } from 'vitest'
import { GetAlbumByLinkUseCase } from '#modules/albums/use-cases'
import { AlbumModel } from '#modules/albums/models'

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
