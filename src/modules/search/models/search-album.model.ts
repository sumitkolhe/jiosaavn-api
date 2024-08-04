import { DownloadLinkModel } from '#common/models'
import { SongAPIResponseModel, SongModel } from '#modules/songs/models'
import { z } from 'zod'

export const SearchAlbumAPIResponseModel = z.object({
  total: z.number(),
  start: z.number(),
  results: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      subtitle: z.string(),
      header_desc: z.string(),
      type: z.string(),
      perma_url: z.string(),
      image: z.string(),
      language: z.string(),
      year: z.string(),
      play_count: z.string(),
      explicit_content: z.string(),
      list_count: z.string(),
      list_type: z.string(),
      list: z.array(SongAPIResponseModel),
      more_info: z.object({
        query: z.string(),
        text: z.string(),
        music: z.string(),
        song_count: z.string(),
        artistMap: SongAPIResponseModel.shape.more_info.shape.artistMap
      })
    })
  )
})

export const SearchAlbumModel = z.object({
  total: z.number(),
  start: z.number(),
  results: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      description: z.string(),
      year: z.number().nullable(),
      type: z.string(),
      playCount: z.number().nullable(),
      language: z.string(),
      explicitContent: z.boolean(),
      artists: z.object(SongModel.shape.artists.shape),
      url: z.string(),
      image: z.array(DownloadLinkModel)
    })
  )
})
