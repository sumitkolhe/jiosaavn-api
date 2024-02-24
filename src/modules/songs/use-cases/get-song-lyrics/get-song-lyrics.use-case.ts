import { HTTPException } from 'hono/http-exception'
import { Endpoints } from '../../../../common/constants'
import { useFetch } from '../../../../common/helpers'
import { createSongLyricsPayload } from '../../helpers'
import type { IUseCase } from '../../../../common/types'
import type { Lyrics, LyricsAPIResponse } from '../../types'

export class GetSongLyricsUseCase implements IUseCase<String, Lyrics> {
  constructor() {}

  async execute(songId: string) {
    const response = await useFetch<LyricsAPIResponse>(Endpoints.songs.lyrics, {
      lyrics_id: songId
    })

    if (!response.lyrics) throw new HTTPException(404, { message: 'lyrics not found' })

    return createSongLyricsPayload(response)
  }
}
