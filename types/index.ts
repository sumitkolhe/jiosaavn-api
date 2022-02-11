export interface songDetails {
  songId: string
  songName: string
  albumName: string
  year: string | number
  songArtist: string
  songImage: string
  songLabel: string
  songLanguage: string
  albumId: string | number
  songReleaseDate: string | Date
  songLink: string
  albumLink: string
  songPlayCount: string | number
  copyright: string
  songHasLyrics: string
  songDuration: string | number
  downloadLinks: Array<string> | boolean
}
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

export interface songSearchDetails {
  results: Array<songDetails>
}
export interface albumSearchDetails {
  results: Array<albumDetails>
}

export interface lyricsDetails {
  lyrics: string
  snippet: string
}
