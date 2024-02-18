import { AlbumAPIResponse, Album, DownloadLink } from '../../albums/types'
import { SongAPIResponse, Song } from '../../songs/types'

export interface SearchSongAPIResponse {
  total: number
  start: number
  results: SongAPIResponse[]
}

export interface SearchSong {
  total: number
  start: number
  results: Song[]
}

export interface SearchAlbumAPIResponse {
  total: number
  start: number
  results: AlbumAPIResponse[]
}

export interface SearchAlbum {
  total: number
  start: number
  results: Album[]
}

export interface SearchAPIResponse {
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

export interface Search {
  albums: SearchResponse<
    {
      id: string
      title: string
      image: DownloadLink[]
      artist: string
      url: string
      type: string
      description: string
      position: number
      year: string
      language: string
      songIds: string
    }[]
  >
  songs: SearchResponse<
    {
      id: string
      title: string
      image: DownloadLink[]
      album: string
      url: string
      type: string
      description: string
      position: number
      primaryArtists: string
      singers: string
      language: string
    }[]
  >
  artists: SearchResponse<
    {
      id: string
      title: string
      image: DownloadLink[]
      url: string
      type: string
      description: string
      position: number
    }[]
  >
  playlists: SearchResponse<
    {
      id: string
      title: string
      image: DownloadLink[]
      url: string
      language: string
      type: string
      description: string
      position: number
    }[]
  >
  topQuery: SearchResponse<
    {
      id: string
      title: string
      image: DownloadLink[]
      album: string
      url: string
      type: string
      description: string
      position: number
      primaryArtists: string
      singers: string
      language: string
    }[]
  >
}

interface SearchResponse<T> {
  results: T
  position: number
}
