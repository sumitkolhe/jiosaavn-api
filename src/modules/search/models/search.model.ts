import { z } from 'zod'
import { DownloadLinkModel } from '../../../common/models'

export const SearchAPIResponseModel = z.object({
  albums: z.object({
    data: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        image: z.string(),
        music: z.string(),
        url: z.string(),
        type: z.string(),
        description: z.string(),
        ctr: z.number(),
        position: z.number(),
        more_info: z.object({
          year: z.string(),
          is_movie: z.string(),
          language: z.string(),
          song_pids: z.string()
        })
      })
    ),
    position: z.number()
  }),
  songs: z.object({
    data: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        image: z.string(),
        album: z.string(),
        url: z.string(),
        type: z.string(),
        description: z.string(),
        ctr: z.number(),
        position: z.number(),
        more_info: z.object({
          vcode: z.string(),
          primary_artists: z.string(),
          singers: z.string(),
          video_available: z.boolean(),
          triller_available: z.boolean(),
          language: z.string()
        })
      })
    ),
    position: z.number()
  }),
  playlists: z.object({
    data: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        image: z.string(),
        extra: z.string(),
        url: z.string(),
        language: z.string(),
        type: z.string(),
        description: z.string(),
        position: z.number(),
        more_info: z.any() // TODO: replace with actual schema if available
      })
    ),
    position: z.number()
  }),
  artists: z.object({
    data: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        image: z.string(),
        extra: z.string(),
        url: z.string(),
        type: z.string(),
        description: z.string(),
        ctr: z.number(),
        entity: z.number(),
        position: z.number()
      })
    ),
    position: z.number()
  }),
  topquery: z.object({
    data: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        image: z.string(),
        album: z.string(),
        url: z.string(),
        type: z.string(),
        description: z.string(),
        ctr: z.number(),
        position: z.number(),
        more_info: z.object({
          vcode: z.string(),
          vlink: z.string(),
          primary_artists: z.string(),
          singers: z.string(),
          video_available: z.boolean(),
          triller_available: z.boolean(),
          language: z.string()
        })
      })
    ),
    position: z.number()
  })
})

const SearchResponseModel = <T>(model: z.ZodType<T, any, any>) =>
  z.object({
    results: model,
    position: z.number()
  })

export const SearchModel = z.object({
  albums: SearchResponseModel(
    z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        image: z.array(DownloadLinkModel),
        artist: z.string(),
        url: z.string(),
        type: z.string(),
        description: z.string(),
        position: z.number(),
        year: z.string(),
        language: z.string(),
        songIds: z.string()
      })
    )
  ),
  songs: SearchResponseModel(
    z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        image: z.array(DownloadLinkModel),
        album: z.string(),
        url: z.string(),
        type: z.string(),
        description: z.string(),
        position: z.number(),
        primaryArtists: z.string(),
        singers: z.string(),
        language: z.string()
      })
    )
  ),
  artists: SearchResponseModel(
    z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        image: z.array(DownloadLinkModel),
        url: z.string(),
        type: z.string(),
        description: z.string(),
        position: z.number()
      })
    )
  ),
  playlists: SearchResponseModel(
    z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        image: z.array(DownloadLinkModel),
        url: z.string(),
        language: z.string(),
        type: z.string(),
        description: z.string(),
        position: z.number()
      })
    )
  ),
  topQuery: SearchResponseModel(
    z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        image: z.array(DownloadLinkModel),
        album: z.string(),
        url: z.string(),
        type: z.string(),
        description: z.string(),
        position: z.number(),
        primaryArtists: z.string(),
        singers: z.string(),
        language: z.string()
      })
    )
  )
})
