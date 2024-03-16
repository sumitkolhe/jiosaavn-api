import { HTTPException } from 'hono/http-exception'
import type { z } from 'zod'
import type { IUseCase } from '#common/types'
import type { SongAPIResponseModel, SongModel } from '#modules/songs/models'
import { Endpoints } from '#common/constants'
import { useFetch } from '#common/helpers'
import { createSongPayload } from '#modules/songs/helpers'

export class GetSongByLinkUseCase implements IUseCase<string, z.infer<typeof SongModel>[]> {
  constructor() {}

  async execute(token: string) {
    const response = await useFetch<{ songs: z.infer<typeof SongAPIResponseModel>[] }>(Endpoints.songs.link, {
      token,
      type: 'song'
    })

    if (!response.songs?.length) throw new HTTPException(404, { message: 'song not found' })

    return response.songs.map((song) => createSongPayload(song))
  }
}
