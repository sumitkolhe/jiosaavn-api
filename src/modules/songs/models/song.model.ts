import { z } from 'zod'
import { DownloadLinkModel } from '#common/models'

export const LyricsModel = z.object({
  lyrics: z.string(),
  copyright: z.string(),
  snippet: z.string()
})

export const LyricsAPIResponseModel = z.object({
  lyrics: z.string(),
  lyrics_copyright: z.string(),
  snippet: z.string()
})

export const SongArtistMapAPIResponseModel = z.object({
  id: z.string(),
  name: z.string(),
  role: z.string(),
  type: z.string(),
  image: z.string(),
  perma_url: z.string()
})

export const SongArtistMapModel = z.object({
  id: z.string(),
  name: z.string(),
  role: z.string(),
  type: z.string(),
  image: z.array(DownloadLinkModel),
  url: z.string()
})

export const SongAPIResponseModel = z.object({
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
  list: z.string(),
  more_info: z.object({
    music: z.string(),
    album_id: z.string(),
    album: z.string(),
    label: z.string(),
    origin: z.string(),
    is_dolby_content: z.boolean(),
    '320kbps': z.string(),
    encrypted_media_url: z.string(),
    encrypted_cache_url: z.string(),
    album_url: z.string(),
    duration: z.string(),
    rights: z.object({
      code: z.string(),
      cacheable: z.string(),
      delete_cached_object: z.string(),
      reason: z.string()
    }),
    cache_state: z.string(),
    has_lyrics: z.string(),
    lyrics_snippet: z.string(),
    starred: z.string(),
    copyright_text: z.string(),
    artistMap: z.object({
      primary_artists: z.array(SongArtistMapAPIResponseModel),
      featured_artists: z.array(SongArtistMapAPIResponseModel),
      artists: z.array(SongArtistMapAPIResponseModel)
    }),
    release_date: z.string(),
    label_url: z.string(),
    vcode: z.string(),
    vlink: z.string(),
    triller_available: z.boolean(),
    request_jiotune_flag: z.boolean(),
    webp: z.string(),
    lyrics_id: z.string()
  })
})

export const SongModel = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string(),
  year: z.number(),
  releaseDate: z.string(),
  duration: z.number(),
  label: z.string(),
  explicitContent: z.boolean(),
  playCount: z.number(),
  language: z.string(),
  hasLyrics: z.boolean(),
  lyricsId: z.string(),
  lyrics: LyricsModel.optional(),
  url: z.string(),
  copyright: z.string(),
  album: z.object({
    id: z.string(),
    name: z.string(),
    url: z.string()
  }),
  artists: z.object({
    primary: z.array(SongArtistMapModel),
    featured: z.array(SongArtistMapModel),
    all: z.array(SongArtistMapModel)
  }),
  image: z.array(DownloadLinkModel),
  downloadUrl: z.array(DownloadLinkModel)
})
