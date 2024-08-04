import { SongController } from '#modules/index'
import { LyricsModel, SongModel } from '#modules/songs/models'
import { beforeAll, describe, expect, it } from 'vitest'
import type { z } from 'zod'

describe('SongController', () => {
  let searchController: SongController

  beforeAll(() => {
    searchController = new SongController()
    searchController.initRoutes()
  })

  it('retrieve songs by link', async () => {
    const response = await searchController.controller.request(
      '/songs?link=https://www.jiosaavn.com/song/houdini/OgwhbhtDRwM'
    )

    const { data } = (await response.json()) as { data: z.infer<typeof SongModel>[] }
    expect(() => SongModel.parse(data[0])).not.toThrow()
  })

  it('retrieve song by ID', async () => {
    const response = await searchController.controller.request('/songs/3IoDK8qI')

    const { data } = (await response.json()) as { data: z.infer<typeof SongModel>[] }
    expect(() => SongModel.parse(data[0])).not.toThrow()
  })

  it('retrieve lyrics for a song', async () => {
    const response = await searchController.controller.request('/songs/ddQaeUpV/lyrics')

    const { data } = (await response.json()) as { data: z.infer<typeof LyricsModel> }
    expect(() => LyricsModel.parse(data)).not.toThrow()
  })

  // it('retrieve song suggestions', async () => {
  //   const response = await searchController.controller.request('/songs/yDeAS8Eh/suggestions?limit=5')
  //   const suggestions = await response.json()
  //   expect(suggestions).toMatchSnapshot()
  // })
})
