import { PlaylistController } from '#modules/playlists/controllers'
import { PlaylistModel } from '#modules/playlists/models'
import { beforeAll, describe, expect, it } from 'vitest'
import type { z } from 'zod'

describe('PlaylistController', () => {
  let playlistController: PlaylistController

  beforeAll(() => {
    playlistController = new PlaylistController()
    playlistController.initRoutes()
  })

  it('retrieve playlist by featured link', async () => {
    const response = await playlistController.controller.request(
      '/playlists?link=https://www.jiosaavn.com/featured/its-indie-english/AMoxtXyKHoU_'
    )

    const { data } = (await response.json()) as { data: z.infer<typeof PlaylistModel> }
    expect(() => PlaylistModel.parse(data)).not.toThrow()
  })
  it('retrieve playlist by saavn domain link', async () => {
    const response = await playlistController.controller.request(
      '/playlists?link=https://www.saavn.com/s/playlist/cf3c2fb07449311f87f53670da0e3d20/gautham-menon-telugu-hits/4sylrSC21MjvZ3uUE6bUVw__'
    )

    const { data } = (await response.json()) as { data: z.infer<typeof PlaylistModel> }
    expect(() => PlaylistModel.parse(data)).not.toThrow()
  })
  it('retrieve playlist by jiosaavn domain link', async () => {
    const response = await playlistController.controller.request(
      '/playlists?link=https://www.jiosaavn.com/s/playlist/cf3c2fb07449311f87f53670da0e3d20/best-of-2022/BD9hSFlc9ubvZ3uUE6bUVw__'
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
