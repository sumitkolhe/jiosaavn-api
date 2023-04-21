import type { DownloadLink } from './image.interface'
import type { SongRequest, SongResponse } from './song.interface'

export interface PlaylistSearchRequest {
  total: number
  start: number
  results: PlaylistRequest[]
}

interface Playlist {
  artists: any[]
  listid: string
  listname: string
  perma_url: string
  follower_count: string
  uid: string
  last_updated: string
  username: string
  firstname: string
  lastname: string
  is_followed: any
  isFY: boolean
  image: string
  share: string
  songs: SongRequest[]
  type: string
  list_count: string
  fan_count: number
  H2: any
  is_dolby_playlist: boolean
  subheading: any
  sub_types: any[]
  images: any[]
  video_available: boolean
  video_count: number
}

export interface PlaylistRequest extends Playlist {
  artist_name?: string[]
  count: string
  language: string
  entity_type: string
  entity_sub_type: string
  numsongs: any
}

export interface PlaylistSearchResponse {
  total: number
  start: number
  results: PlaylistResponse[]
}

export interface PlaylistResponse {
  id: string
  userId: string
  name: string
  songCount: string
  fanCount: string
  followerCount: string
  username: string
  firstname: string
  language: string
  lastname: string
  shares: string
  image: DownloadLink
  url: string
  songs: SongResponse[]
}
