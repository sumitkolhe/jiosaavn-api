import { beforeAll, describe, expect, it } from 'vitest'
import type { z } from 'zod'
import { PlaylistModel } from '#modules/playlists/models'
import { PlaylistController } from '#modules/playlists/controllers'

describe('PlaylistController', () => {
  let playlistController: PlaylistController

  beforeAll(() => {
    playlistController = new PlaylistController()
    playlistController.initRoutes()
  })

  it('retrieve playlist by link', async () => {
    const response = await playlistController.controller.request(
      '/playlists?link=https://www.jiosaavn.com/featured/its-indie-english/AMoxtXyKHoU_'
    )

    const { data } = (await response.json()) as { data: z.infer<typeof PlaylistModel> }
    expect(() => PlaylistModel.parse(data)).not.toThrow()
  })

  it('retrieve playlist by ID', async () => {
    const response = await playlistController.controller.request('/playlists?id=82914609')

    const { data } = (await response.json()) as { data: z.infer<typeof PlaylistModel> }
    expect(() => PlaylistModel.parse(data)).not.toThrow()
  })
})
