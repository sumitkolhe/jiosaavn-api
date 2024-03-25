import { beforeAll, describe, expect, test } from 'vitest'
import { SearchPlaylistsUseCase } from '#modules/search/use-cases'

describe('SearchPlaylists', () => {
  let searchPlaylistsUseCase: SearchPlaylistsUseCase

  beforeAll(() => {
    searchPlaylistsUseCase = new SearchPlaylistsUseCase()
  })

  test('should search playlists by query and return a list of playlists', async () => {
    const playlists = await searchPlaylistsUseCase.execute({ query: 'indie', limit: 5, page: 0 })

    expect(playlists).toMatchSnapshot()
  })
})
