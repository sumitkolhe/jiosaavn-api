import { SongAPIResponseModel, SongModel } from '#modules/songs/models'
import { z } from 'zod'

export const ArtistSongAPIResponseModel = z.object({
  artistId: z.string(),
  name: z.string(),
  subtitle: z.string(),
  image: z.string(),
  follower_count: z.string(),
  type: z.string(),
  isVerified: z.boolean(),
  dominantLanguage: z.string(),
  dominantType: z.string(),
  topSongs: z.object({
    songs: z.array(SongAPIResponseModel),
    total: z.number()
  })
})

export const ArtistSongModel = z.object({
  total: z.number(),
  songs: z.array(SongModel)
})
