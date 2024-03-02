import { HTTPException } from 'hono/http-exception'
import { Endpoints } from '../../../../common/constants'
import { useFetch } from '../../../../common/helpers'
import { createSongPayload } from '../../helpers'
import { CreateSongStationUseCase } from '../create-song-station'
import type { SongModel, SongSuggestionAPIResponseModel } from '../../models'
import type { z } from 'zod'
import type { IUseCase } from '../../../../common/types'

export interface GetSongSuggestionsArgs {
  songId: string
  limit: number
}

export class GetSongSuggestionsUseCase implements IUseCase<GetSongSuggestionsArgs, z.infer<typeof SongModel>[]> {
  private readonly createSongStation: CreateSongStationUseCase

  constructor() {
    this.createSongStation = new CreateSongStationUseCase()
  }

  async execute({ songId, limit }: GetSongSuggestionsArgs) {
    const stationId = await this.createSongStation.execute(songId)

    const response = await useFetch<z.infer<typeof SongSuggestionAPIResponseModel>>(Endpoints.songs.suggestions, {
      stationid: stationId,
      k: limit
    })

    if (!response) {
      throw new HTTPException(404, { message: `could not get song suggestions` })
    }

    const songs =
      Object.values(response.songs || {})
        .map((element) => element.song && createSongPayload(element.song))
        .filter(Boolean)
        .slice(0, limit) || []

    return songs
  }
}
