import type { SongResponse } from './song.interface'
import type { DownloadLink } from './image.interface'
import type { Artist } from './artist.interface'
import type { AlbumRequest, AlbumResponse } from './album.interface'

export interface ModulesRequest {
  radio: {
    featured_stations: {
      id: string
      title: string
      subtitle: string
      type: string
      image: string
      perma_url: string
      more_info: {
        description: string
        featured_station_type: string
        query: string
        color: string
        language: string
        station_display_text: string
      }
      explicit_content: string
      mini_obj: boolean
    }[]
  }
  browse_discover: {
    id: string
    title: string
    subtitle: string
    type: string
    image: string
    perma_url: string
    more_info: {
      badge: string
      sub_type: string
      available: string
      is_featured: string
      tags: any
      video_url: string
      video_thumbnail: string
    }
    explicit_content: string
    mini_obj: boolean
  }[]
  new_albums: AlbumRequest[]
  charts: {
    id: string
    title: string
    subtitle: string
    type: string
    image: string
    perma_url: string
    more_info: {
      firstname: string
    }
    explicit_content: string
    mini_obj: boolean
    language: string
  }[]
  top_shows: {
    badge: string
    shows: {
      id: string
      title: string
      subtitle: string
      type: string
      image: string
      perma_url: string
      more_info: {
        season_number: string
        release_date: string
        year: string
        badge: string
        square_image: string
      }
      explicit_content: string
      mini_obj: boolean
    }[]
    last_page: boolean
  }
  new_trending: {
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
    list: string
    more_info: {
      release_date: string
      song_count: string
      artistMap: {
        primary_artists: Artist[]
        featured_artists: Artist[]
        artists: Artist[]
      }
      music?: string
      album_id: string
      album: string
      label: string
      origin?: string
      is_dolby_content?: boolean
      '320kbps'?: string
      encrypted_media_url?: string
      encrypted_cache_url?: string
      album_url: string
      duration: string
      rights?: {
        code: string
        cacheable: string
        delete_cached_object: string
        reason: string
      }
      cache_state?: string
      has_lyrics?: string
      lyrics_snippet?: string
      starred?: string
      copyright_text?: string
      is_ringtone_available?: boolean
      label_url?: string
      vcode?: string
      vlink?: string
      triller_available?: boolean
      request_jiotune_flag?: boolean
      webp?: string
      lyrics_id?: string
      isWeekly?: string
      firstname?: string
      follower_count?: string
      fan_count?: string
    }
  }[]
  top_playlists: {
    id: string
    title: string
    subtitle: string
    type: string
    image: string
    perma_url: string
    more_info: {
      song_count: string
      firstname: string
      follower_count: string
      last_updated: string
      uid: string
    }
    explicit_content: string
    mini_obj: boolean
  }[]
}

export interface ModulesResponse {
  albums: AlbumResponse[]
  charts: {
    id: string
    title: string
    subtitle: string
    type: string
    image: DownloadLink
    url: string
    firstname: string
    explicitContent: string
    language: string
  }[]
  trending: {
    songs: Omit<SongResponse, 'primaryArtistsId' | 'featuredArtistsId' | 'hasLyrics' | 'copyright' | 'downloadUrl'>[]
    albums: Omit<AlbumResponse, 'songs' | 'primaryArtistsId'>[]
  }
  playlists: {
    id: string
    title: string
    subtitle: string
    type: string
    image: DownloadLink
    url: string
    songCount: string
    firstname: string
    followerCount: string
    lastUpdated: string
    userId: string
    explicitContent: string
  }[]
  // radio: {}
  // discover: {}
  // shows: {}
}
