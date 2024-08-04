import { SearchPlaylistModel } from '#modules/search/models'
import { SearchPlaylistsUseCase } from '#modules/search/use-cases'
import { beforeAll, describe, expect, it } from 'vitest'

describe('SearchPlaylists', () => {
  let searchPlaylistsUseCase: SearchPlaylistsUseCase

  beforeAll(() => {
    searchPlaylistsUseCase = new SearchPlaylistsUseCase()
  })

  it('should search playlists by query and return a list of playlists', async () => {
    const playlists = await searchPlaylistsUseCase.execute({ query: 'indie', limit: 5, page: 0 })

    expect(() => SearchPlaylistModel.parse(playlists)).not.toThrow()
  })
})
