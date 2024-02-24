import type { Album, AlbumAPIResponse } from '../../albums/types'
import type { Song, SongAPIResponse } from '../../songs/types'

export interface DownloadLink {
  quality: string
  url: string
}

export interface ArtistAPIResponse {
  artistId: string
  name: string
  subtitle: string
  image: string
  follower_count: string
  type: string
  isVerified: boolean
  dominantLanguage: string
  dominantType: string
  topSongs: SongAPIResponse[]
  topAlbums: AlbumAPIResponse[]
  singles: SongAPIResponse[]
  dedicated_artist_playlist: {
    id: string
    title: string
    subtitle: string
    type: string
    image: string
    perma_url: string
    more_info: {
      uid: string
      firstname: string
      artist_name: Array<string>
      entity_type: string
      entity_sub_type: string
      video_available: boolean
      is_dolby_content: any
      sub_types: any
      images: any
      lastname: string
      song_count: string
      language: string
    }
    explicit_content: string
    mini_obj: boolean
    numsongs: any
  }[]
  featured_artist_playlist: {
    id: string
    title: string
    subtitle: string
    type: string
    image: string
    perma_url: string
    more_info: {
      uid: string
      firstname: string
      artist_name: any
      entity_type: string
      entity_sub_type: string
      video_available: boolean
      is_dolby_content: any
      sub_types: any
      images: any
      lastname: string
      song_count: string
      language: string
    }
    explicit_content: string
    mini_obj: boolean
    numsongs: any
  }[]
  similarArtists: {
    _id: string
    similar: string
    languages: string
    isVerified: string
    image_url: string
    wiki: string
    roles: string
    combine_artist_pages: number
    webp: boolean
    search_keywords: string
    replace_with_primary_artists: number
    twitter: string
    dob: string
    aka: string
    name: string
    primary_artist_id: string
    id: string
    fb: string
    bio: string
    perma_url: string
    type: string
    mini_obj: boolean
    isRadioPresent: boolean
    dominantType: string
  }[]
  isRadioPresent: boolean
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
  topEpisodes: any[]
  is_followed: boolean
}

export interface Artist {
  id: string
  name: string
  url: string
  type: string
  image: DownloadLink[]
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
  topSongs: Song[]
  topAlbums: Album[]
  singles: Song[]
  similarArtists: {
    id: string
    name: string
    url: string
    image: DownloadLink[]
    languages: string
    wiki: string
    dob: string
    fb: string
    twitter: string
    isRadioPresent: boolean
    type: string
    dominantType: string
    aka: string
    bio: string
    similarArtists: string
  }[]
}
