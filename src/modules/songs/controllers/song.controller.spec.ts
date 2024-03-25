import { beforeAll, describe, expect, it } from 'vitest'
import type { z } from 'zod'
import type { SongModel } from '#modules/songs/models'
import { SongController } from '#modules/index'

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

    expect(data[0]).toMatchSnapshot({
      playCount: expect.any(Number)
    })
  })

  it('retrieve song by ID', async () => {
    const response = await searchController.controller.request('/songs/3IoDK8qI')

    const { data } = (await response.json()) as { data: z.infer<typeof SongModel>[] }

    expect(data[0]).toMatchSnapshot({
      playCount: expect.any(Number)
    })
  })

  it('retrieve lyrics for a song', async () => {
    const response = await searchController.controller.request('/songs/ddQaeUpV/lyrics')

    const lyrics = await response.json()

    expect(lyrics).toMatchSnapshot()
  })

  // it('retrieve song suggestions', async () => {
  //   const response = await searchController.controller.request('/songs/yDeAS8Eh/suggestions?limit=5')
  //   const suggestions = await response.json()
  //   expect(suggestions).toMatchSnapshot()
  // })
})
