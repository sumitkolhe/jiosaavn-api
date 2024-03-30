import type { z } from 'zod'
import type { SearchAPIResponseModel, SearchModel } from '#modules/search/models'
import { createImageLinks } from '#common/helpers'

export const createSearchPayload = (search: z.infer<typeof SearchAPIResponseModel>): z.infer<typeof SearchModel> => ({
  topQuery: {
    results: search?.topquery?.data.map((item) => {
      return {
        id: item?.id,
        title: item?.title,
        image: createImageLinks(item?.image),
        album: item?.more_info.album,
        url: item?.perma_url,
        type: item?.type,
        language: item?.more_info?.language,
        description: item?.description,
        primaryArtists: item?.more_info?.primary_artists,
        singers: item?.more_info?.singers
      }
    }),
    position: search?.topquery?.position
  },

  songs: {
    results: search?.songs?.data.map((song) => {
      return {
        id: song?.id,
        title: song?.title,
        image: createImageLinks(song?.image),
        album: song?.more_info.album,
        url: song?.perma_url,
        type: song?.type,
        description: song?.description,
        primaryArtists: song?.more_info?.primary_artists,
        singers: song?.more_info?.singers,
        language: song?.more_info?.language
      }
    }),
    position: search.songs.position
  },

  albums: {
    results: search?.albums?.data.map((album) => {
      return {
        id: album?.id,
        title: album?.title,
        image: createImageLinks(album.image),
        artist: album?.more_info.music,
        url: album?.perma_url,
        type: album?.type,
        description: album?.description,
        year: album?.more_info?.year,
        songIds: album?.more_info?.song_pids,
        language: album?.more_info?.language
      }
    }),
    position: search?.albums?.position
  },

  artists: {
    results: search?.artists?.data.map((artist) => {
      return {
        id: artist?.id,
        title: artist?.title,
        image: createImageLinks(artist?.image),
        type: artist?.type,
        description: artist?.description,
        position: artist?.position
      }
    }),
    position: search?.artists?.position
  },

  playlists: {
    results: search?.playlists?.data.map((playlist) => {
      return {
        id: playlist?.id,
        title: playlist?.title,
        image: createImageLinks(playlist.image),
        url: playlist?.perma_url,
        type: playlist?.type,
        language: playlist?.more_info?.language,
        description: playlist?.description
      }
    }),
    position: search?.playlists?.position
  }
})
