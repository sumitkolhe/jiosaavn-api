import { z } from 'zod'
import { AlbumAPIResponseModel } from '../../albums/models'

export const ArtistModelAPIResponseModel = z.object({
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
    songs: z.array(AlbumAPIResponseModel),
    total: z.number()
  })
})

export const ArtistAlbumModel = z.object({
  total: z.number(),
  songs: z.array(AlbumAPIResponseModel)
})
