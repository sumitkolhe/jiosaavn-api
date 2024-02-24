import type { Song, SongAPIResponse } from '../../songs/types'

export interface ArtistSongAPIResponse {
  artistId: string
  name: string
  subtitle: string
  image: string
  follower_count: string
  type: string
  isVerified: boolean
  dominantLanguage: string
  dominantType: string
  topSongs: { songs: SongAPIResponse[]; total: number }
}

export interface ArtistSong {
  total: number
  songs: Song[]
}
