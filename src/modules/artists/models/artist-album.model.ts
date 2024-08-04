import { AlbumAPIResponseModel, AlbumModel } from '#modules/albums/models'
import { z } from 'zod'

export const ArtistAlbumAPIResponseModel = z.object({
  artistId: z.string(),
  name: z.string(),
  subtitle: z.string(),
  image: z.string(),
  follower_count: z.string(),
  type: z.string(),
  isVerified: z.boolean(),
  dominantLanguage: z.string(),
  dominantType: z.string(),
  topAlbums: z.object({
    albums: z.array(AlbumAPIResponseModel),
    total: z.number()
  })
})

export const ArtistAlbumModel = z.object({
  total: z.number(),
  albums: z.array(AlbumModel)
})
