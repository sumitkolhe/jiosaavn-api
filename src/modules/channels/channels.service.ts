import { z } from '@hono/zod-openapi'
import { JioSaavnEndpoint } from '#lib/constants.js'
import { fetchJioSaavn } from '#lib/http.js'
import { parseUpstream } from '#lib/validate.js'
import { parseSongEntries } from '#modules/songs/songs.service.js'
import { HTTPException } from 'hono/http-exception'
import {
  ChannelPlaylistRawSchema,
  ChannelRawSchema,
  toChannel,
  toChannelPlaylist,
  type ChannelDetailsSchema,
  type ChannelSchema
} from './channels.schema.js'

const BrowseModulesRawSchema = z.object({ browse_discover: z.array(ChannelRawSchema).default([]) })

/**
 * JioSaavn's editorial "channels" (Romance, Workout, Sufi, The 1990s…). They are the only place the upstream
 * exposes a mood / genre / situation vocabulary — individual songs carry none of it.
 */
export async function getChannels(): Promise<z.infer<typeof ChannelSchema>[]> {
  const { data } = await fetchJioSaavn({ call: JioSaavnEndpoint.channels.list })
  const { browse_discover } = parseUpstream(BrowseModulesRawSchema, data, JioSaavnEndpoint.channels.list)
  return browse_discover.map(toChannel)
}

const ChannelDetailsRawSchema = ChannelRawSchema.extend({
  header_desc: z.string().nullable().default(null),
  top_songs: z.array(z.unknown()).catch([]).default([]),
  top_playlists: z.array(z.unknown()).catch([]).default([])
})

export async function getChannelById(channelId: string): Promise<z.infer<typeof ChannelDetailsSchema>> {
  const { data, ok } = await fetchJioSaavn({ call: JioSaavnEndpoint.channels.byId, params: { channel_id: channelId } })

  if (!ok || typeof data !== 'object' || data === null || !('id' in data)) {
    throw new HTTPException(404, { message: 'channel not found' })
  }

  const channel = parseUpstream(ChannelDetailsRawSchema, data, JioSaavnEndpoint.channels.byId)

  return {
    ...toChannel(channel),
    description: channel.header_desc || null,
    songs: parseSongEntries(channel.top_songs, JioSaavnEndpoint.channels.byId),
    playlists: channel.top_playlists.flatMap((entry) => {
      const parsed = ChannelPlaylistRawSchema.safeParse(entry)
      return parsed.success ? [toChannelPlaylist(parsed.data)] : []
    })
  }
}
