import { AlbumModel } from '#modules/albums/models'
import { AlbumController } from '#modules/index'
import { beforeAll, describe, expect, it } from 'vitest'
import type { z } from 'zod'

describe('AlbumController', () => {
  let albumController: AlbumController

  beforeAll(() => {
    albumController = new AlbumController()
    albumController.initRoutes()
  })

  it('retrieve album by link', async () => {
    const response = await albumController.controller.request(
      '/albums?link=https://www.jiosaavn.com/album/future-nostalgia/ITIyo-GDr7A_'
    )

    const { data } = (await response.json()) as { data: z.infer<typeof AlbumModel> }
    expect(() => AlbumModel.parse(data)).not.toThrow()
  })

  it('retrieve album by id', async () => {
    const response = await albumController.controller.request('/albums?id=23241654')

    const { data } = (await response.json()) as { data: z.infer<typeof AlbumModel> }
    expect(() => AlbumModel.parse(data)).not.toThrow()
  })
})
