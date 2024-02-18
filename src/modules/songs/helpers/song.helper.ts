import { createDownloadLinks, createImageLinks } from '../../../common/helpers'
import type { ArtistMap, Lyrics, LyricsAPIResponse, Song, SongAPIResponse, SongArtistMap } from '../types'

export const createArtistMap = (artist: SongArtistMap): ArtistMap => ({
  id: artist.id,
  name: artist.name,
  role: artist.role,
  image: artist.image,
  type: artist.type,
  url: artist.perma_url
})

export const createSongPayload = (song: SongAPIResponse): Song => ({
  id: song.id,
  name: song.title,
  type: song.type,
  year: Number(song.year || 0),
  releaseDate: song.more_info?.release_date,
  duration: Number(song.more_info?.duration),
  label: song.more_info?.label,
  explicitContent: song.explicit_content === '1',
  playCount: Number(song.play_count || 0),
  language: song.language,
  hasLyrics: song.more_info?.has_lyrics === 'true',
  lyricsId: song.more_info?.lyrics_id,
  url: song.perma_url,
  copyright: song.more_info?.copyright_text,
  album: {
    id: song.more_info?.album_id,
    name: song.more_info?.album,
    url: song.more_info?.album_url
  },
  artists: {
    primary: song.more_info?.artistMap?.primary_artists?.map(createArtistMap),
    featured: song.more_info?.artistMap?.featured_artists?.map(createArtistMap),
    all: song.more_info?.artistMap?.artists?.map(createArtistMap)
  },
  image: createImageLinks(song.image),
  downloadUrl: createDownloadLinks(song.more_info?.encrypted_media_url)
})

export const createSongLyricsPayload = (lyrics: LyricsAPIResponse): Lyrics => ({
  lyrics: lyrics?.lyrics,
  snippet: lyrics?.snippet,
  copyright: lyrics?.lyrics_copyright
})
