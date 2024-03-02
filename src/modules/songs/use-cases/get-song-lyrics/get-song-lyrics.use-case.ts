import { HTTPException } from 'hono/http-exception'
import { Endpoints } from '../../../../common/constants'
import { useFetch } from '../../../../common/helpers'
import { createSongLyricsPayload } from '../../helpers'
import type { LyricsAPIResponseModel, LyricsModel } from '../../models'
import type { z } from 'zod'
import type { IUseCase } from '../../../../common/types'

export class GetSongLyricsUseCase implements IUseCase<String, z.infer<typeof LyricsModel>> {
  constructor() {}

  async execute(songId: string) {
    const response = await useFetch<z.infer<typeof LyricsAPIResponseModel>>(Endpoints.songs.lyrics, {
      lyrics_id: songId
    })

    if (!response.lyrics) throw new HTTPException(404, { message: 'lyrics not found' })

    return createSongLyricsPayload(response)
  }
}
