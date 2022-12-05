import type { DownloadLink } from './image.interface'
import type { Artist } from './artist.interface'
import type { SongRequest, SongResponse } from './song.interface'

export interface AlbumSearchRequest {
  total: number
  start: number
  results: AlbumRequest[]
}

interface Album {
  name: string
  year: string
  release_date: string
  primary_artists: string
  primary_artists_id: string
  albumid: string
  perma_url: string
  image: string
  songs: SongRequest[]
}

export interface AlbumRequest extends Album {
  id: string
  title: string
  subtitle: string
  header_desc: string
  type: string
  language: string
  play_count: string
  explicit_content: string
  list_count: string
  list_type: string
  list: string
  more_info: {
    query: string
    text: string
    music?: string
    song_count: string
    artistMap: {
      primary_artists: Artist[]
      featured_artists: Artist[]
      artists: Artist[]
    }
  }
}

export interface AlbumSearchResponse {
  total: number
  start: number
  results: AlbumResponse[]
}

export interface AlbumResponse {
  id: string
  name: string
  year: string
  type: string
  playCount: string
  language: string
  explicitContent: string
  primaryArtistsId: string
  primaryArtists: string | AlbumArtistResponse[]
  artists: AlbumArtistResponse[]
  featuredArtists: AlbumArtistResponse[]
  songCount: string
  releaseDate: string
  image: DownloadLink
  url: string
  songs: SongResponse[]
}

export interface AlbumArtistResponse {
  id: string
  name: string
  role: string
  image: DownloadLink
  type: string
  url: string
}
