import { z } from 'zod'
import { ArtistAPIResponseModel, ArtistModel } from '../../artists/models'

export const SearchArtistAPIResponseModel = z.object({
  total: z.number(),
  start: z.number(),
  results: z.array(ArtistAPIResponseModel)
})

export const SearchArtistModel = z.object({
  total: z.number(),
  start: z.number(),
  results: z.array(ArtistModel)
})
