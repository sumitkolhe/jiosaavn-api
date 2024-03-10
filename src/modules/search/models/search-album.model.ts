import { z } from 'zod'
import { AlbumAPIResponseModel, AlbumModel } from '../../albums/models'

export const SearchAlbumAPIResponseModel = z.object({
  total: z.number(),
  start: z.number(),
  results: z.array(AlbumAPIResponseModel)
})

export const SearchAlbumModel = z.object({
  total: z.number(),
  start: z.number(),
  results: z.array(AlbumModel)
})
