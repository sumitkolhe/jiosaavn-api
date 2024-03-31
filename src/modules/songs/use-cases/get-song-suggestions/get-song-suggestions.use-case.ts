import { HTTPException } from 'hono/http-exception'
import type { z } from 'zod'
import type { IUseCase } from '#common/types'
import type { SongModel, SongSuggestionAPIResponseModel } from '#modules/songs/models'
import { Endpoints } from '#common/constants'
import { useFetch } from '#common/helpers'
import { createSongPayload } from '#modules/songs/helpers'
import { CreateSongStationUseCase } from '#modules/songs/use-cases'

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

    const { data, ok } = await useFetch<z.infer<typeof SongSuggestionAPIResponseModel>>({
      endpoint: Endpoints.songs.suggestions,
      params: {
        stationid: stationId,
        k: limit
      }
    })

    if (!data || !ok) {
      throw new HTTPException(404, { message: `no suggestions found for the given song` })
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { stationid, ...suggestions } = data // TODO: find a better way to model the response

    const songs =
      Object.values(suggestions)
        .map((element) => element && createSongPayload(element.song))
        .filter(Boolean)
        .slice(0, limit) || []

    return songs
  }
}
