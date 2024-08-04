import { createDownloadLinks, createImageLinks } from '#common/helpers'
import { createArtistMapPayload } from '#modules/artists/helpers'
import type { LyricsAPIResponseModel, LyricsModel, SongAPIResponseModel, SongModel } from '#modules/songs/models'
import type { z } from 'zod'

export const createSongPayload = (song: z.infer<typeof SongAPIResponseModel>): z.infer<typeof SongModel> => ({
  id: song.id,
  name: song.title,
  type: song.type,
  year: song.year || null,
  releaseDate: song.more_info?.release_date || null,
  duration: song.more_info?.duration ? Number(song.more_info?.duration) : null,
  label: song.more_info?.label || null,
  explicitContent: song.explicit_content === '1',
  playCount: song.play_count ? Number(song.play_count) : null,
  language: song.language,
  hasLyrics: song.more_info?.has_lyrics === 'true',
  lyricsId: song.more_info?.lyrics_id || null,
  url: song.perma_url,
  copyright: song.more_info?.copyright_text || null,
  album: {
    id: song.more_info?.album_id || null,
    name: song.more_info?.album || null,
    url: song.more_info?.album_url || null
  },
  artists: {
    primary: song.more_info?.artistMap?.primary_artists?.map(createArtistMapPayload),
    featured: song.more_info?.artistMap?.featured_artists?.map(createArtistMapPayload),
    all: song.more_info?.artistMap?.artists?.map(createArtistMapPayload)
  },
  image: createImageLinks(song.image),
  downloadUrl: createDownloadLinks(song.more_info?.encrypted_media_url)
})

export const createSongLyricsPayload = (
  lyrics: z.infer<typeof LyricsAPIResponseModel>
): z.infer<typeof LyricsModel> => ({
  lyrics: lyrics?.lyrics,
  snippet: lyrics?.snippet,
  copyright: lyrics?.lyrics_copyright
})
