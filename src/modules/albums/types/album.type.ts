import type { DownloadLink } from '../../../common/types'
import type { Song, SongAPIResponse } from '../../songs/types'

export interface AlbumAPIResponse {
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
  list: SongAPIResponse[]
  more_info: {
    artistMap: SongAPIResponse['more_info']['artistMap']
    song_count: string
    copyright_text: string
    is_dolby_content: boolean
    label_url: string
  }
}

export interface Album {
  id: string
  name: string
  year: number
  type: string
  playCount: number
  language: string
  explicitContent: boolean
  artists: Song['artists']
  songCount: number
  url: string
  image: DownloadLink[]
  songs: Song[]
}
