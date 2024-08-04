import { DownloadLinkModel } from '#common/models'
import { z } from 'zod'

export const SearchPlaylistAPIResponseModel = z.object({
  total: z.number(),
  start: z.number(),
  results: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      subtitle: z.string(),
      type: z.string(),
      image: z.string(),
      perma_url: z.string(),
      more_info: z.object({
        uid: z.string(),
        firstname: z.string(),
        artist_name: z.any(),
        entity_type: z.string(),
        entity_sub_type: z.string(),
        video_available: z.boolean(),
        is_dolby_content: z.any(),
        sub_types: z.any(),
        images: z.any(),
        lastname: z.string(),
        song_count: z.string(),
        language: z.string()
      }),
      explicit_content: z.string(),
      mini_obj: z.boolean(),
      numsongs: z.any()
    })
  )
})

export const SearchPlaylistModel = z.object({
  total: z.number(),
  start: z.number(),
  results: z.array(
    // TODO: Do this for all search models
    z.object({
      id: z.string(),
      name: z.string(),
      type: z.string(),
      image: z.array(DownloadLinkModel),
      url: z.string(),
      songCount: z.number().nullable(),
      language: z.string(),
      explicitContent: z.boolean()
    })
  )
})
