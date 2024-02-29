import { z } from 'zod'
import { SongAPIResponseModel } from './song.model'

export const SongSuggestionModel = z.object({
  stationid: z.string(),
  songs: z.record(
    z.object({
      song: SongAPIResponseModel
    })
  )
})
