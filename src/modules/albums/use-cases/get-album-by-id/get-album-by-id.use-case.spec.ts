import { beforeAll, describe, expect, it } from 'vitest'
import { GetAlbumByIdUseCase } from '#modules/albums/use-cases'
import { AlbumModel } from '#modules/albums/models'

describe('GetAlbumById', () => {
  let getAlbumByIdUseCase: GetAlbumByIdUseCase

  beforeAll(() => {
    getAlbumByIdUseCase = new GetAlbumByIdUseCase()
  })

  it('should get album by id and return an album', async () => {
    const album = await getAlbumByIdUseCase.execute('23241654')

    expect(() => AlbumModel.parse(album)).not.toThrow()
  })
})
