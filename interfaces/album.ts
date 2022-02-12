import { Song } from './song'

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
  title: string
  image: string
  perma_url: string
  year: string
  play_count: string
  language: string
  explicit_content: string
  more_info: MoreInfo
  songs?: Array<Song>
}

export interface AlbumSearch {
  results: Array<Album>
}
