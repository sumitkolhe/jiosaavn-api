import { DownloadLinkModel } from '#common/models'
import { z } from 'zod'

export const SearchAPIResponseModel = z.object({
  albums: z.object({
    data: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        subtitle: z.string(),
        type: z.string(),
        image: z.string(),
        perma_url: z.string(),
        more_info: z.object({
          music: z.string(),
          ctr: z.number(),
          year: z.string(),
          is_movie: z.string(),
          language: z.string(),
          song_pids: z.string()
        }),
        explicit_content: z.string(),
        mini_obj: z.boolean(),
        description: z.string()
      })
    ),
    position: z.number()
  }),
  songs: z.object({
    data: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        subtitle: z.string(),
        type: z.string(),
        image: z.string(),
        perma_url: z.string(),
        more_info: z.object({
          album: z.string(),
          ctr: z.number(),
          score: z.string().optional(),
          vcode: z.string(),
          vlink: z.string().optional(),
          primary_artists: z.string(),
          singers: z.string(),
          video_available: z.boolean(),
          triller_available: z.boolean(),
          language: z.string()
        }),
        explicit_content: z.string(),
        mini_obj: z.boolean(),
        description: z.string()
      })
    ),
    position: z.number()
  }),
  playlists: z.object({
    data: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        subtitle: z.string(),
        type: z.string(),
        image: z.string(),
        perma_url: z.string(),
        more_info: z.object({
          firstname: z.string(),
          artist_name: z.array(z.string()),
          entity_type: z.string(),
          entity_sub_type: z.string(),
          video_available: z.boolean(),
          is_dolby_content: z.boolean(),
          sub_types: z.any(),
          images: z.any(),
          lastname: z.string(),
          language: z.string()
        }),
        explicit_content: z.string(),
        mini_obj: z.boolean(),
        description: z.string()
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
        type: z.string(),
        mini_obj: z.boolean(),
        isRadioPresent: z.boolean(),
        ctr: z.number(),
        entity: z.number(),
        description: z.string(),
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
        subtitle: z.string(),
        type: z.string(),
        image: z.string(),
        perma_url: z.string(),
        more_info: z.object({
          album: z.string(),
          ctr: z.number(),
          score: z.string().optional(),
          vcode: z.string(),
          vlink: z.string(),
          primary_artists: z.string(),
          singers: z.string(),
          video_available: z.boolean(),
          triller_available: z.boolean(),
          language: z.string()
        }),
        explicit_content: z.string().optional(),
        mini_obj: z.boolean(),
        description: z.string()
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
        description: z.string()
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
        primaryArtists: z.string(),
        singers: z.string(),
        language: z.string()
      })
    )
  )
})
