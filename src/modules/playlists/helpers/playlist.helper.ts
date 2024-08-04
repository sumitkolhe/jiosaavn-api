import { createImageLinks } from '#common/helpers'
import { createArtistMapPayload } from '#modules/artists/helpers'
import { createSongPayload } from '#modules/songs/helpers'
import type { PlaylistAPIResponseModel, PlaylistModel } from '#modules/playlists/models'
import type { z } from 'zod'

export const createPlaylistPayload = (
  playlist: z.infer<typeof PlaylistAPIResponseModel>
): z.infer<typeof PlaylistModel> => ({
  id: playlist.id,
  name: playlist.title,
  description: playlist.header_desc,
  type: playlist.type,
  year: playlist.year ? Number(playlist.year) : null,
  playCount: playlist.play_count ? Number(playlist.play_count) : null,
  language: playlist.language,
  explicitContent: playlist.explicit_content === '1',
  url: playlist.perma_url,
  songCount: playlist.list_count ? Number(playlist.list_count) : null,
  artists: playlist.more_info.artists?.map(createArtistMapPayload) || null,
  image: createImageLinks(playlist.image),
  songs: (playlist.list && playlist.list?.map(createSongPayload)) || null
})
