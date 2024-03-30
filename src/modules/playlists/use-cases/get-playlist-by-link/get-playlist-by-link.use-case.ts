import { HTTPException } from 'hono/http-exception'
import type { z } from 'zod'
import type { IUseCase } from '#common/types'
import type { PlaylistAPIResponseModel, PlaylistModel } from '#modules/playlists/models'
import { useFetch } from '#common/helpers'
import { Endpoints } from '#common/constants'
import { createPlaylistPayload } from '#modules/playlists/helpers'

export interface GetPlaylistByLinkArgs {
  token: string
  limit: number
  page: number
}

export class GetPlaylistByLinkUseCase implements IUseCase<GetPlaylistByLinkArgs, z.infer<typeof PlaylistModel>> {
  constructor() {}

  async execute({ token, limit, page }: GetPlaylistByLinkArgs) {
    const response = await useFetch<z.infer<typeof PlaylistAPIResponseModel>>(Endpoints.albums.link, {
      token,
      n: limit,
      p: page,
      type: 'playlist'
    })

    if (!response) throw new HTTPException(404, { message: 'playlist not found' })

    const playlist = createPlaylistPayload(response)

    return {
      ...playlist,
      songCount: playlist.songs?.length,
      songs: playlist.songs?.slice(0, limit) || []
    }
  }
}
