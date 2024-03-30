import type { z } from 'zod'
import type { PlaylistAPIResponseModel, PlaylistModel } from '#modules/playlists/models'
import type { SearchPlaylistAPIResponseModel, SearchPlaylistModel } from '#modules/search/models'
import { createSongPayload } from '#modules/songs/helpers'
import { createImageLinks } from '#common/helpers'
import { createArtistMapPayload } from '#modules/artists/helpers'

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

export const createSearchPlaylistPayload = (
  playlist: z.infer<typeof SearchPlaylistAPIResponseModel>
): z.infer<typeof SearchPlaylistModel> => ({
  total: Number(playlist.total),
  start: Number(playlist.start),
  results: playlist.results.map((item) => ({
    id: item.id,
    name: item.title,
    type: item.type,
    image: createImageLinks(item.image),
    url: item.perma_url,
    songCount: item.more_info.song_count ? Number(item.more_info.song_count) : null,
    language: item.more_info.language,
    explicitContent: item.explicit_content === '1'
  }))
})
