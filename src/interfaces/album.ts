import type { Song } from './song'

interface MoreInfo {
  song_count: string
  artistMap: {
    primary_artists: {
      id: string
      name: string
    }[]
  }
}
export interface Album {
  id: string
  albumid: string
  title: string
  image: string
  perma_url: string
  year: string
  play_count: string
  language: string
  explicit_content: string
  primary_artists: string
  primary_artists_id: string
  release_date: string
  more_info: MoreInfo
  songs: Array<Song>
}

export interface AlbumSearch {
  results: Array<Album>
}
