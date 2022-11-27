import type { DownloadLink } from './image.interface'
import type { AlbumRequest } from './album.interface'
import type { SongRequest } from './song.interface'

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

export interface ArtistRequest extends Artist {
  artistId: string
  subtitle: string
  follower_count: string
  isVerified: boolean
  dominantLanguage: string
  dominantType: string
  topSongs: {
    songs: SongRequest[]
    total: number
  }
  topAlbums: {
    albums: AlbumRequest[]
    total: number
  }
  similarArtists: SimilarArtist[]
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

export interface SimilarArtist {
  _id: string
  id: string
  name: string
  roles: string
  aka: string
  fb: string
  twitter: string
  wiki: string
  similar: string
  dob: string
  image_url: string
  new_bio: string
  search_keywords: string
  primary_artist_id: string
  combine_artist_pages: number
  replace_with_primary_artists: number
  languages: string
  perma_url: string
  type: string
  mini_obj: boolean
  isRadioPresent: boolean
  dominantType: string
}

export interface Album {
  numSongs: number
  album: string
  year: string
  albumid: string
  imageUrl: string
  language: string
  artistHash: {
    music?: Array<string[]>
    singers: Array<string[]>
  }
  artistIDMap: { [key: string]: string }
  primaryArtists: string
  explicitContent: string
  score: string
  ctr: number
  music: null | string
  music_id: null | string
  singers: string
  singers_id: string
  max_allowed: number
  primaryArtistsIds: string
  url: string
  is_movie: string
  song_pids: string
  starring: null
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
