import { beforeAll, describe, expect, test } from 'vitest'
import type { z } from 'zod'
import type {
  SearchAlbumModel,
  SearchArtistModel,
  SearchModel,
  SearchPlaylistModel,
  SearchSongModel
} from '#modules/search/models'
import { SearchController } from '#modules/index'

describe('SearchController', () => {
  let searchController: SearchController

  beforeAll(() => {
    searchController = new SearchController()
    searchController.initRoutes()
  })

  test('search everything', async () => {
    const response = await searchController.controller.request('/search?query=imagine+dragons+bones')

    const searchResults = (await response.json()) as {
      success: boolean
      data: z.infer<typeof SearchModel>
    }

    expect(searchResults.success).toBe(true)
    expect(searchResults.data).toMatchSnapshot()
  })

  test('search songs', async () => {
    const response = await searchController.controller.request('/search/songs?query=believer')

    const { data } = (await response.json()) as { success: boolean; data: z.infer<typeof SearchSongModel> }

    expect(data).toMatchSnapshot({
      total: expect.any(Number),
      results: expect.arrayContaining([
        expect.objectContaining({
          playCount: expect.any(Number)
        })
      ])
    })
  })

  test('search albums', async () => {
    const response = await searchController.controller.request('/search/albums?query=blurryface+twenty+one+pilots')

    const { data } = (await response.json()) as { success: boolean; data: z.infer<typeof SearchAlbumModel> }

    expect(data).toMatchSnapshot({
      total: expect.any(Number),
      results: expect.arrayContaining([
        expect.objectContaining({
          playCount: expect.any(Number)
        })
      ])
    })
  })

  test('search artists', async () => {
    const response = await searchController.controller.request('/search/artists?query=adele')

    const { data } = (await response.json()) as { success: boolean; data: z.infer<typeof SearchArtistModel> }

    expect(data).toMatchSnapshot()
  })

  test('search playlists', async () => {
    const response = await searchController.controller.request('/search/playlists?query=indie')

    const { data } = (await response.json()) as { success: boolean; data: z.infer<typeof SearchPlaylistModel> }

    expect(data).toMatchSnapshot()
  })
})
