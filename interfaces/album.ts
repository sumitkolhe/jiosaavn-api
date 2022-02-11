import { songDetails } from 'interfaces/song'

export interface albumDetails {
  albumId: string
  albumName: string
  albumImage: string
  albumLink: string
  albumArtist: string
  year: string
  albumLanguage: string
  albumReleaseDate?: string
  songs?: Array<songDetails>
}

export interface albumSearchDetails {
  results: Array<albumDetails>
}
