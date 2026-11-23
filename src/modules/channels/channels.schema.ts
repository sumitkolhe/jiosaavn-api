import { z } from '@hono/zod-openapi'
import { imageLinks } from '#lib/codecs.js'
import { SongSchema } from '#modules/songs/songs.schema.js'
import { LinkSchema } from '#schemas/common.js'

/** JioSaavn's editorial vocabulary for a channel. Every key is optional — a channel only carries the ones that apply. */
const TagsSchema = z
  .object({
    mood: z.array(z.string()).default([]),
    genre: z.array(z.string()).default([]),
    situation: z.array(z.string()).default([]),
    seasonality: z.array(z.string()).default([])
  })
  .openapi('ChannelTags')

const RawTagsSchema = z.preprocess(
  (value) => (value && typeof value === 'object' && !Array.isArray(value) ? value : {}),
  z.object({
    mood: z.array(z.string()).catch([]).default([]),
    genre: z.array(z.string()).catch([]).default([]),
    situation: z.array(z.string()).catch([]).default([]),
    seasonality: z.array(z.string()).catch([]).default([])
  })
)

export const ChannelRawSchema = z.object({
  id: z.string(),
  title: z.string(),
  image: z.string().default(''),
  perma_url: z.string().default(''),
  more_info: z
    .object({
      sub_type: z.string().nullable().default(null),
      tags: RawTagsSchema.default({ mood: [], genre: [], situation: [], seasonality: [] }),
      follower_count: z.string().nullable().default(null),
      can_start_radio: z.string().nullable().default(null)
    })
    .default({
      sub_type: null,
      tags: { mood: [], genre: [], situation: [], seasonality: [] },
      follower_count: null,
      can_start_radio: null
    })
})

export const ChannelSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    kind: z.string().nullable().openapi({ description: 'Editorial grouping, e.g. "mood" or "genre"', example: 'mood' }),
    url: z.string(),
    image: z.array(LinkSchema),
    tags: TagsSchema,
    followerCount: z.number().nullable()
  })
  .openapi('Channel')

export const ChannelPlaylistRawSchema = z.object({
  id: z.string(),
  title: z.string(),
  subtitle: z.string().nullable().default(null),
  image: z.string().default(''),
  perma_url: z.string().default('')
})

export const ChannelPlaylistSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    subtitle: z.string().nullable(),
    url: z.string(),
    image: z.array(LinkSchema)
  })
  .openapi('ChannelPlaylist')

export const ChannelDetailsSchema = ChannelSchema.extend({
  description: z.string().nullable(),
  songs: z.array(SongSchema),
  playlists: z.array(ChannelPlaylistSchema)
}).openapi('ChannelDetails')

export const toChannel = (channel: z.infer<typeof ChannelRawSchema>): z.infer<typeof ChannelSchema> => ({
  id: channel.id,
  name: channel.title,
  kind: channel.more_info.sub_type || null,
  url: channel.perma_url,
  image: channel.image ? imageLinks(channel.image) : [],
  tags: channel.more_info.tags,
  followerCount: channel.more_info.follower_count ? Number(channel.more_info.follower_count) : null
})

export const toChannelPlaylist = (
  playlist: z.infer<typeof ChannelPlaylistRawSchema>
): z.infer<typeof ChannelPlaylistSchema> => ({
  id: playlist.id,
  name: playlist.title,
  subtitle: playlist.subtitle || null,
  url: playlist.perma_url,
  image: playlist.image ? imageLinks(playlist.image) : []
})
