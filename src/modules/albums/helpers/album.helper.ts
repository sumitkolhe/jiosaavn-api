import { createImageLinks } from '../../../common/helpers'
import { createArtistMap, createSongPayload } from '../../songs/helpers'
import type { Album, AlbumAPIResponse } from '../types'

export const createAlbumPayload = (album: AlbumAPIResponse): Album => ({
  id: album.id,
  name: album.title,
  type: album.type,
  year: Number(album.year || 0),
  playCount: Number(album.play_count),
  language: album.language,
  explicitContent: album.explicit_content === '1',
  url: album.perma_url,
  songCount: Number(album.more_info?.song_count || 0),
  artists: {
    primary: album.more_info?.artistMap?.primary_artists?.map(createArtistMap),
    featured: album.more_info?.artistMap?.featured_artists?.map(createArtistMap),
    all: album.more_info?.artistMap?.artists?.map(createArtistMap)
  },
  image: createImageLinks(album.image),
  ...(album.list && { songs: album.list.map((song) => createSongPayload(song)) })
})
