import { HTTPException } from 'hono/http-exception'
import type { z } from 'zod'
import type { IUseCase } from '#common/types'
import type { PlaylistAPIResponseModel, PlaylistModel } from '#modules/playlists/models'
import { useFetch } from '#common/helpers'
import { Endpoints } from '#common/constants'
import { createPlaylistPayload } from '#modules/playlists/helpers'

export interface GetPlaylistByIdArgs {
  id: string
  limit: number
  page: number
}

export class GetPlaylistByIdUseCase implements IUseCase<GetPlaylistByIdArgs, z.infer<typeof PlaylistModel>> {
  constructor() {}

  async execute({ id, limit, page }: GetPlaylistByIdArgs) {
    const { data } = await useFetch<z.infer<typeof PlaylistAPIResponseModel>>({
      endpoint: Endpoints.playlists.id,
      params: {
        listid: id,
        n: limit,
        p: page
      }
    })

    if (!data) throw new HTTPException(404, { message: 'playlist not found' })

    const playlist = createPlaylistPayload(data)
    return {
      ...playlist,
      songCount: playlist?.songs?.length || null,
      songs: playlist?.songs?.slice(0, limit) || []
    }
  }
}
