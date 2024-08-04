import { SearchController } from '#modules/index'
import {
  SearchAlbumModel,
  SearchArtistModel,
  SearchModel,
  SearchPlaylistModel,
  SearchSongModel
} from '#modules/search/models'
import { beforeAll, describe, expect, it } from 'vitest'
import type { z } from 'zod'

describe('SearchController', () => {
  let searchController: SearchController

  beforeAll(() => {
    searchController = new SearchController()
    searchController.initRoutes()
  })

  it('search everything', async () => {
    const response = await searchController.controller.request('/search?query=blurryface+twenty+one+pilots')

    const { data } = (await response.json()) as {
      success: boolean
      data: z.infer<typeof SearchModel>
    }

    expect(() => SearchModel.omit({ topQuery: true }).parse(data)).not.toThrow()
  })

  it('search songs', async () => {
    const response = await searchController.controller.request('/search/songs?query=believer')

    const { data } = (await response.json()) as { success: boolean; data: z.infer<typeof SearchSongModel> }
    expect(() => SearchSongModel.parse(data)).not.toThrow()
  })

  it('search albums', async () => {
    const response = await searchController.controller.request('/search/albums?query=blurryface+twenty+one+pilots')

    const { data } = (await response.json()) as { success: boolean; data: z.infer<typeof SearchAlbumModel> }
    expect(() => SearchAlbumModel.parse(data)).not.toThrow()
  })

  it('search artists', async () => {
    const response = await searchController.controller.request('/search/artists?query=adele')

    const { data } = (await response.json()) as { success: boolean; data: z.infer<typeof SearchArtistModel> }
    expect(() => SearchArtistModel.parse(data)).not.toThrow()
  })

  it('search playlists', async () => {
    const response = await searchController.controller.request('/search/playlists?query=indie')

    const { data } = (await response.json()) as { success: boolean; data: z.infer<typeof SearchPlaylistModel> }
    expect(() => SearchPlaylistModel.parse(data)).not.toThrow()
  })
})
