import { DownloadLinkModel } from '#common/models'
import { ArtistMapModel } from '#modules/artists/models'
import { SongAPIResponseModel, SongModel } from '#modules/songs/models'
import { z } from 'zod'

export const PlaylistAPIResponseModel = z
  .object({
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
      uid: z.string(),
      is_dolby_content: z.boolean(),
      subtype: z.array(z.string()).default([]),
      last_updated: z.string(),
      username: z.string(),
      firstname: z.string(),
      lastname: z.string(),
      is_followed: z.string(),
      isFY: z.boolean(),
      follower_count: z.string(),
      fan_count: z.string(),
      playlist_type: z.string(),
      share: z.string(),
      sub_types: z.array(z.string()),
      images: z.array(z.string()),
      H2: z.string().nullable(),
      subheading: z.string(),
      video_count: z.string(),
      artists: z.array(
        z.object({
          id: z.string(),
          name: z.string(),
          role: z.string(),
          image: z.string(),
          type: z.string(),
          perma_url: z.string()
        })
      )
    })
  })
  .extend({
    description: z.string()
  })

export const PlaylistModel = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  year: z.number().nullable(),
  type: z.string(),
  playCount: z.number().nullable(),
  language: z.string(),
  explicitContent: z.boolean(),
  songCount: z.number().nullable(),
  url: z.string(),
  image: z.array(DownloadLinkModel),
  songs: z.array(SongModel).nullable(),
  artists: z.array(ArtistMapModel).nullable()
})
