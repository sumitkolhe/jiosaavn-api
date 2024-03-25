import { beforeAll, describe, expect, it } from 'vitest'
import type { z } from 'zod'
import type { ArtistAlbumModel, ArtistModel, ArtistSongModel } from '#modules/artists/models'
import { ArtistController } from '#modules/index'

describe('ArtistController', () => {
  let artistController: ArtistController

  beforeAll(() => {
    artistController = new ArtistController()
    artistController.initRoutes()
  })

  it('retrieve artist by link', async () => {
    const response = await artistController.controller.request(
      '/artists?link=https://www.jiosaavn.com/artist/dua-lipa-songs/r-OWIKgpX2I_'
    )

    const { data } = (await response.json()) as { data: z.infer<typeof ArtistModel> }

    expect(data).toMatchSnapshot({
      ...data,
      followerCount: expect.any(Number),
      topSongs: expect.any(Array),
      singles: expect.any(Array),
      topAlbums: expect.any(Array)
    })
  })

  it('retrieve artist by ID', async () => {
    const response = await artistController.controller.request('/artists/1274170')

    const { data } = (await response.json()) as { data: z.infer<typeof ArtistModel> }

    expect(data).toMatchSnapshot({
      ...data,
      followerCount: expect.any(Number),
      topSongs: expect.any(Array),
      singles: expect.any(Array),
      topAlbums: expect.any(Array)
    })
  })

  it(`retrieve artist's songs`, async () => {
    const response = await artistController.controller.request(`/artists/1274170/songs`)

    const { data } = (await response.json()) as { data: z.infer<typeof ArtistSongModel> }

    expect(data).toMatchSnapshot({
      total: expect.any(Number),
      songs: expect.arrayContaining([
        expect.objectContaining({
          playCount: expect.any(Number)
        })
      ])
    })
  })

  it(`retrieve artist's albums`, async () => {
    const response = await artistController.controller.request(`/artists/1274170/albums`)

    const { data } = (await response.json()) as { data: z.infer<typeof ArtistAlbumModel> }

    expect(data).toMatchSnapshot({
      total: expect.any(Number),
      albums: expect.arrayContaining([
        expect.objectContaining({
          playCount: expect.any(Number)
        })
      ])
    })
  })
})
