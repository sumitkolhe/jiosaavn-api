import { createImageLinks } from '../../../common/helpers'
import { SearchAPIResponse, Search } from '../types'

export const createSearchPayload = (search: SearchAPIResponse): Search => ({
  topQuery: {
    results: search?.topquery?.data.map((item) => {
      return {
        id: item?.id,
        title: item?.title,
        image: createImageLinks(item?.image),
        album: item?.album,
        url: item?.url,
        type: item?.type,
        language: item?.more_info?.language,
        description: item?.description,
        position: item?.position,
        primaryArtists: item?.more_info?.primary_artists,
        singers: item?.more_info?.singers,
      }
    }),
    position: search?.topquery?.position,
  },

  songs: {
    results: search?.songs?.data.map((song) => {
      return {
        id: song?.id,
        title: song?.title,
        image: createImageLinks(song?.image),
        album: song?.album,
        url: song?.url,
        type: song?.type,
        description: song?.description,
        position: song?.position,
        primaryArtists: song?.more_info?.primary_artists,
        singers: song?.more_info?.singers,
        language: song?.more_info?.language,
      }
    }),
    position: search.songs.position,
  },

  albums: {
    results: search?.albums?.data.map((album) => {
      return {
        id: album?.id,
        title: album?.title,
        image: createImageLinks(album.image),
        artist: album?.music,
        url: album?.url,
        type: album?.type,
        description: album?.description,
        position: album?.position,
        year: album?.more_info?.year,
        songIds: album?.more_info?.song_pids,
        language: album?.more_info?.language,
      }
    }),
    position: search?.albums?.position,
  },

  artists: {
    results: search?.artists?.data.map((artist) => {
      return {
        id: artist?.id,
        title: artist?.title,
        image: createImageLinks(artist?.image),
        url: artist?.url,
        type: artist?.type,
        description: artist?.description,
        position: artist?.position,
      }
    }),
    position: search?.artists?.position,
  },

  playlists: {
    results: search?.playlists?.data.map((playlist) => {
      return {
        id: playlist?.id,
        title: playlist?.title,
        image: createImageLinks(playlist.image),
        url: playlist?.url,
        type: playlist?.type,
        language: playlist?.language,
        description: playlist?.description,
        position: playlist?.position,
      }
    }),
    position: search?.playlists?.position,
  },
})
