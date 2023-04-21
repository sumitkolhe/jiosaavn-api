import type { DownloadLink } from './image.interface'
import type { AlbumRequest, AlbumResponse } from './album.interface'
import type { SongRequest, SongResponse } from './song.interface'

export interface ArtistSearchRequest {
  total: number
  start: number
  results: ArtistRequest[]
}

export interface ArtistSearchResponse {
  total: number
  start: number
  results: ArtistResponse[]
}

export interface ArtistSongResponse {
  total: number
  lastPage: boolean
  results: SongResponse[]
}

export interface ArtistAlbumResponse {
  total: number
  lastPage: boolean
  results: AlbumResponse[]
}

export interface Artist {
  id: string
  name: string
  ctr: number
  entity: number
  image: string
  role: string
  perma_url: string
  type: string
  mini_obj: boolean
  isRadioPresent: boolean
  is_followed: boolean
}

export interface ArtistSongRequest {
  songs: SongRequest[]
  total: number
  last_page: boolean
}

export interface ArtistAlbumRequest {
  albums: AlbumRequest[]
  total: number
  last_page: boolean
}

export interface ArtistRequest extends Artist {
  artistId: string
  subtitle: string
  follower_count: string
  isVerified: boolean
  dominantLanguage: string
  dominantType: string
  topSongs: ArtistSongRequest
  topAlbums: ArtistAlbumRequest
  bio: string
  dob: string
  fb: string
  twitter: string
  wiki: string
  urls: {
    albums: string
    bio: string
    comments: string
    songs: string
    overview: string
  }
  availableLanguages: string[]
  fan_count: string
}

export interface ArtistResponse {
  id: string
  name: string
  url: string
  role: string
  image: DownloadLink
  followerCount: string
  fanCount: string
  isVerified: boolean
  dominantLanguage: string
  dominantType: string
  bio: string
  dob: string
  fb: string
  twitter: string
  wiki: string
  availableLanguages: string[]
  isRadioPresent: boolean
}
