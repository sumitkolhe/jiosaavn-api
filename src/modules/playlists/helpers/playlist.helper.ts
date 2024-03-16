import type { z } from 'zod'
import type { PlaylistAPIResponseModel, PlaylistModel } from '#modules/playlists/models'
import { createArtistMap, createSongPayload } from '#modules/songs/helpers'
import { createImageLinks } from '#common/helpers'

export const createPlaylistPayload = (
  album: z.infer<typeof PlaylistAPIResponseModel>
): z.infer<typeof PlaylistModel> => ({
  id: album.id,
  name: album.title,
  description: album.header_desc,
  type: album.type,
  year: Number(album.year || 0),
  playCount: Number(album.play_count),
  language: album.language,
  explicitContent: album.explicit_content === '1',
  url: album.perma_url,
  songCount: Number(album.list_count || 0),
  artists: album.more_info.artists?.map(createArtistMap),
  image: createImageLinks(album.image),
  ...(album.list && { songs: album.list.map((song) => createSongPayload(song)) })
})
