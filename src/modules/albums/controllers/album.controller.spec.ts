import { beforeAll, describe, expect, it } from 'vitest'
import type { z } from 'zod'
import type { AlbumModel } from '#modules/albums/models'
import { AlbumController } from '#modules/index'

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

    const wow = (await response.json()) as { data: z.infer<typeof AlbumModel> }

    expect(wow.data).toMatchSnapshot({
      playCount: expect.any(Number),
      songCount: expect.any(Number),
      songs: expect.arrayContaining([
        expect.objectContaining({
          playCount: expect.any(Number)
        })
      ])
    })
  })

  it('retrieve album by id', async () => {
    const response = await albumController.controller.request('/albums?id=23241654')

    const { data } = (await response.json()) as { data: z.infer<typeof AlbumModel> }

    expect(data).toMatchSnapshot({
      playCount: expect.any(Number),
      songCount: expect.any(Number),
      songs: expect.arrayContaining([
        expect.objectContaining({
          playCount: expect.any(Number)
        })
      ])
    })
  })
})
