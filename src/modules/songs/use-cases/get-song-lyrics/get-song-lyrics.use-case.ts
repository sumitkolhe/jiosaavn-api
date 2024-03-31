import { HTTPException } from 'hono/http-exception'
import type { z } from 'zod'
import type { IUseCase } from '#common/types'
import type { LyricsAPIResponseModel, LyricsModel } from '#modules/songs/models'
import { Endpoints } from '#common/constants'
import { useFetch } from '#common/helpers'
import { createSongLyricsPayload } from '#modules/songs/helpers'

export class GetSongLyricsUseCase implements IUseCase<string, z.infer<typeof LyricsModel>> {
  constructor() {}

  async execute(songId: string) {
    const { data } = await useFetch<z.infer<typeof LyricsAPIResponseModel>>({
      endpoint: Endpoints.songs.lyrics,
      params: {
        lyrics_id: songId
      }
    })

    if (!data.lyrics) throw new HTTPException(404, { message: 'lyrics not found' })

    return createSongLyricsPayload(data)
  }
}
