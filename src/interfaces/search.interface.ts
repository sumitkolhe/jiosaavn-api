import type { DownloadLink } from './image.interface'

export interface AllSearchRequest {
  albums: {
    data: {
      id: string
      title: string
      image: string
      music: string
      url: string
      type: string
      description: string
      ctr: number
      position: number
      more_info: {
        year: string
        is_movie: string
        language: string
        song_pids: string
      }
    }[]
    position: number
  }
  songs: {
    data: {
      id: string
      title: string
      image: string
      album: string
      url: string
      type: string
      description: string
      ctr: number
      position: number
      more_info: {
        vcode: string
        vlink: string
        primary_artists: string
        singers: string
        video_available: any
        triller_available: boolean
        language: string
      }
    }[]
    position: number
  }
  playlists: {
    data: {
      id: string
      title: string
      image: string
      extra: string
      url: string
      language: string
      type: string
      description: string
      position: number
      more_info: any
    }[]
    position: number
  }
  artists: {
    data: {
      id: string
      title: string
      image: string
      extra: string
      url: string
      type: string
      description: string
      ctr: number
      entity: number
      position: number
    }[]
    position: number
  }
  topquery: {
    data: {
      id: string
      title: string
      image: string
      album: string
      url: string
      type: string
      description: string
      ctr: number
      position: number
      more_info: {
        vcode: string
        vlink: string
        primary_artists: string
        singers: string
        video_available: any
        triller_available: boolean
        language: string
      }
    }[]
    position: number
  }
}

export interface AllSearchResponse {
  albums: SearchResponse<SearchAlbumResponse[]>
  songs: SearchResponse<SearchSongResponse[]>
  artists: SearchResponse<SearchArtistResponse[]>
  playlists: SearchResponse<SearchPlaylistResponse[]>
  topQuery: SearchResponse<SearchTopQueryResponse[]>
}

interface SearchResponse<T> {
  results: T
  position: number
}

interface SearchAlbumResponse {
  id: string
  title: string
  image: DownloadLink
  artist: string
  url: string
  type: string
  description: string
  position: number
  year: string
  language: string
  songIds: string
}

interface SearchSongResponse {
  id: string
  title: string
  image: DownloadLink
  album: string
  url: string
  type: string
  description: string
  position: number
  primaryArtists: string
  singers: string
  language: string
}

interface SearchArtistResponse {
  id: string
  title: string
  image: DownloadLink
  url: string
  type: string
  description: string
  position: number
}

interface SearchPlaylistResponse {
  id: string
  title: string
  image: DownloadLink
  url: string
  language: string
  type: string
  description: string
  position: number
}

interface SearchTopQueryResponse {
  id: string
  title: string
  image: DownloadLink
  album: string
  url: string
  type: string
  description: string
  position: number
  primaryArtists: string
  singers: string
  language: string
}
