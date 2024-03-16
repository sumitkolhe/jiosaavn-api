import { z } from 'zod'
import { PlaylistAPIResponseModel, PlaylistModel } from '#modules/playlists/models'

export const SearchPlaylistAPIResponseModel = z.object({
  total: z.number(),
  start: z.number(),
  results: z.array(PlaylistAPIResponseModel)
})

export const SearchPlaylistModel = z.object({
  total: z.number(),
  start: z.number(),
  results: z.array(PlaylistModel)
})
