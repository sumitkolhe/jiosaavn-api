import { createImageLinks } from '#common/helpers'
import { createArtistMapPayload } from '#modules/artists/helpers'
import { createSongPayload } from '#modules/songs/helpers'
import type { AlbumAPIResponseModel, AlbumModel } from '#modules/albums/models'
import type { z } from 'zod'

export const createAlbumPayload = (album: z.infer<typeof AlbumAPIResponseModel>): z.infer<typeof AlbumModel> => ({
  id: album.id,
  name: album.title,
  description: album.header_desc,
  type: album.type,
  year: album.year ? Number(album.year) : null,
  playCount: album.play_count ? Number(album.play_count) : null,
  language: album.language,
  explicitContent: album.explicit_content === '1',
  url: album.perma_url,
  songCount: album.more_info.song_count ? Number(album.more_info.song_count) : null,
  artists: {
    primary: album.more_info?.artistMap?.primary_artists?.map(createArtistMapPayload),
    featured: album.more_info?.artistMap?.featured_artists?.map(createArtistMapPayload),
    all: album.more_info?.artistMap?.artists?.map(createArtistMapPayload)
  },
  image: createImageLinks(album.image),
  songs: (album.list && album.list?.map(createSongPayload)) || null
})
