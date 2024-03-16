import { HTTPException } from 'hono/http-exception'
import type { z } from 'zod'
import type { IUseCase } from '#common/types'
import type { PlaylistAPIResponseModel, PlaylistModel } from '#modules/playlists/models'
import { useFetch } from '#common/helpers'
import { Endpoints } from '#common/constants'
import { createPlaylistPayload } from '#modules/playlists/helpers'

export class GetPlaylistByLinkUseCase implements IUseCase<string, z.infer<typeof PlaylistModel>> {
  constructor() {}

  async execute(token: string) {
    const response = await useFetch<z.infer<typeof PlaylistAPIResponseModel>>(Endpoints.albums.link, {
      token,
      type: 'playlist'
    })

    if (!response) throw new HTTPException(404, { message: 'playlist not found' })

    return createPlaylistPayload(response)
  }
}
