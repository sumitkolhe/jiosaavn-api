import { HTTPException } from 'hono/http-exception'
import { Endpoints } from '../../../../common/constants'
import { useFetch } from '../../../../common/helpers'
import { createSongPayload } from '../../helpers'
import { CreateSongStationUseCase } from '../create-song-station'
import type { IUseCase } from '../../../../common/types'
import type { Song, SongSuggestionApiResponse } from '../../types'

export interface GetSongSuggestionsArgs {
  songId: string
  limit: number
}

export class GetSongSuggestionsUseCase implements IUseCase<GetSongSuggestionsArgs, Song[]> {
  private readonly createSongStation: CreateSongStationUseCase

  constructor() {
    this.createSongStation = new CreateSongStationUseCase()
  }

  async execute({ songId, limit }: GetSongSuggestionsArgs) {
    const stationId = await this.createSongStation.execute(songId)

    const response = await useFetch<SongSuggestionApiResponse>(Endpoints.songs.suggestions, {
      stationid: stationId,
      k: limit
    })

    if (!response) throw new HTTPException(404, { message: `could not get song suggestions` })

    const songs =
      Object.values(response)
        .map((element) => element.song && createSongPayload(element.song))
        .filter(Boolean)
        .slice(0, limit) || []

    return songs
  }
}
