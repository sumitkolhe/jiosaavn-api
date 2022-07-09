import type { Song } from './song'

export interface Playlist {
  listid: string
  listname: string
  image: string
  perma_url: string
  follower_count: string
  username: string
  firstname: string
  lastname: string
  fan_count: string
  list_count: string
  songs: Array<Song>
}
