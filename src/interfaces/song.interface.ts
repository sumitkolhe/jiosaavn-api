import type { DownloadLink } from './image.interface'

export interface SongArtistRequest {
  id: string
  name: string
  role: string
  image: string
  type: string
  perma_url: string
}

export interface SongArtistResponse {
  id: string
  name: string
  role: string
  image: DownloadLink
  type: string
  url: string
}

export interface SongSearchRequest {
  total: number
  start: number
  results: SongRequest[]
}

export interface SongRequest {
  id: string
  title: string
  subtitle: string
  header_desc: string
  type: string
  perma_url: string
  image: string
  language: string
  year: string
  play_count: string
  explicit_content: string
  list_count: string
  list_type: string
  list: string
  more_info: {
    music: string
    album_id: string
    album: string
    label: string
    origin: string
    is_dolby_content: boolean
    '320kbps': string
    encrypted_media_url: string
    encrypted_cache_url: string
    album_url: string
    duration: string
    rights: {
      code: string
      cacheable: string
      delete_cached_object: string
      reason: string
    }
    cache_state: string
    has_lyrics: string
    lyrics_snippet: string
    starred: string
    copyright_text: string
    artistMap: {
      primary_artists: SongArtistRequest[]
      featured_artists: SongArtistRequest[]
      artists: SongArtistRequest[]
    }
    release_date: string
    label_url: string
    triller_available: boolean
    is_ringtone_available: boolean
    request_jiotune_flag: boolean
    webp: string
    lyrics_id: string
  }
}

export interface SongSearchResponse {
  total: number
  start: number
  results: SongResponse[]
}

export interface SongResponse {
  id: string
  name: string
  subtitle: string
  type: string
  album: {
    id: string
    name: string
    url: string
  }
  year: string
  releaseDate: string
  duration: number
  label: string
  artists: {
    all: SongArtistResponse[]
    primary: SongArtistResponse[]
    featured: SongArtistResponse[]
  }
  explicitContent: boolean
  playCount: number
  language: string
  lyrics: {
    hasLyrics: boolean
    lyricsSnippet: string
    lyricsId: string
  }
  url: string
  copyright: string
  image: DownloadLink
  downloadUrl: DownloadLink
}
