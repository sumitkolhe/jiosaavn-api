import { HTTPException } from 'hono/http-exception'
import { Endpoints } from '../../../../common/constants'
import { useFetch } from '../../../../common/helpers'
import { createSongPayload } from '../../helpers'
import type { IUseCase } from '../../../../common/types'
import type { Song, SongAPIResponse } from '../../types'

export class GetSongByLinkUseCase implements IUseCase<String, Song[]> {
  constructor() {}

  async execute(token: string) {
    const response = await useFetch<{ songs: SongAPIResponse[] }>(Endpoints.songs.link, {
      token,
      type: 'song'
    })

    if (!response.songs?.length) throw new HTTPException(404, { message: 'song not found' })

    return response.songs.map((song) => createSongPayload(song))
  }
}
