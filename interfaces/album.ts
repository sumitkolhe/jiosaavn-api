import { Song } from './song'

export interface Album {
  albumId: string
  albumName: string
  albumImage: string
  albumLink: string
  albumArtist: string
  year: string
  albumLanguage: string
  albumReleaseDate?: string
  songs?: Array<Song>
}

export interface AlbumSearch {
  results: Array<Album>
}
