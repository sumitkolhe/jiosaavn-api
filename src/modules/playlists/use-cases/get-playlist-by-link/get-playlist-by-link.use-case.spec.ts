import { beforeAll, describe, expect, it } from 'vitest'
import { GetPlaylistByLinkUseCase } from '#modules/playlists/use-cases'
import { PlaylistModel } from '#modules/playlists/models'

describe('GetAlbumByLink', () => {
  let getPlaylistByLinkUseCase: GetPlaylistByLinkUseCase

  beforeAll(() => {
    getPlaylistByLinkUseCase = new GetPlaylistByLinkUseCase()
  })

  it('should get playlist by id', async () => {
    const playlist = await getPlaylistByLinkUseCase.execute({
      token: 'AMoxtXyKHoU_',
      page: 1,
      limit: 5
    })

    expect(() => PlaylistModel.parse(playlist)).not.toThrow()
  })
})
