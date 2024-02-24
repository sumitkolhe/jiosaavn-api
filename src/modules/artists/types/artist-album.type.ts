import type { Album, AlbumAPIResponse } from '../../albums/types'

export interface ArtistAlbumAPIResponse {
  artistId: string
  name: string
  subtitle: string
  image: string
  follower_count: string
  type: string
  isVerified: boolean
  dominantLanguage: string
  dominantType: string
  topAlbums: { albums: AlbumAPIResponse[]; total: number }
}

export interface ArtistAlbum {
  total: number
  albums: Album[]
}
