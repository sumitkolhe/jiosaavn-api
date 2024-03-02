import { HTTPException } from 'hono/http-exception'
import { Endpoints } from '../../../../common/constants'
import { useFetch } from '../../../../common/helpers'
import { createSongPayload } from '../../helpers'
import { GetSongLyricsUseCase } from '../get-song-lyrics'
import type { z } from 'zod'
import type { IUseCase } from '../../../../common/types'
import type { SongAPIResponseModel, SongModel } from '../../models'

export interface GetSongByIdArgs {
  songIds: string
  includeLyrics?: boolean
}

export class GetSongByIdUseCase implements IUseCase<GetSongByIdArgs, z.infer<typeof SongModel>[]> {
  private readonly getSongLyricsUseCase: GetSongLyricsUseCase

  constructor() {
    this.getSongLyricsUseCase = new GetSongLyricsUseCase()
  }

  async execute({ songIds, includeLyrics }: GetSongByIdArgs) {
    const response = await useFetch<{ songs: z.infer<typeof SongAPIResponseModel>[] }>(Endpoints.songs.id, {
      pids: songIds
    })

    if (!response.songs?.length) throw new HTTPException(404, { message: 'song not found' })

    const songs = response.songs.map((element) => createSongPayload(element))

    if (includeLyrics) {
      await Promise.all(
        songs.map(async (song) => {
          song.lyrics = await this.getSongLyricsUseCase.execute(song.id)
        })
      )
    }

    return songs
  }
}
