import { axiosInstance } from '../config/axios'
import { ApiType, getEndpoint } from '../config/endpoints'
import { GeneratePayload } from './payload.service'
import type { SongSearch } from '../interfaces/song'
import type { AxiosResponse } from 'axios'

export class SearchService {
  public static searchAll = async (query: string) => {
    // api version doesn't cause any difference
    const endpoint = getEndpoint(false, ApiType.searchAll)

    const response = await axiosInstance.get(endpoint, { params: { query } })

    return response.data
  }

  public static searchSongs = async (query: string, page: string, limit: string) => {
    // api v4 does not contain media_preview_url
    const endpoint = getEndpoint(false, ApiType.searchSong)

    const response: AxiosResponse<SongSearch> = await axiosInstance.get(endpoint, {
      params: { q: query, p: page || 1, n: limit || 20 },
    })

    const payload = GeneratePayload.songSearchPayload(response.data)
    return payload
  }

  public static searchAlbums = async (query: string, page: string, limit: string) => {
    const endpoint = getEndpoint(true, ApiType.searchAlbum)

    const response = await axiosInstance.get(endpoint, {
      params: { q: query, p: page || 1, n: limit || 20 },
    })

    const payload = GeneratePayload.albumSearchPayload(response.data)
    return payload
  }
}
