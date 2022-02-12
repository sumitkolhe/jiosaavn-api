import { AxiosResponse } from 'axios'
import { SongSearch } from '../interfaces/song'
import { axiosInstance } from '../config/axios'
import { ApiType, getEndpoint } from '../config/endpoints'
import { GeneratePayload } from './payload.service'

export class SearchService {
  public static searchAll = async (query: string) => {
    const endpoint = getEndpoint(false, ApiType.searchAll)

    const response = await axiosInstance.get(endpoint, { params: { query } })

    return response.data
  }

  public static searchSongs = async (query: string, page: string, limit: string) => {
    const endpoint = getEndpoint(false, ApiType.searchSong)

    const response: AxiosResponse<SongSearch> = await axiosInstance.get(endpoint, {
      params: { q: query, p: page || 1, n: limit || 20 },
    })

    const payload = GeneratePayload.songs(response)
    return payload
  }

  public static searchAlbums = async (query: string, page: string, limit: string) => {
    const endpoint = getEndpoint(false, ApiType.searchAlbum)

    const response = await axiosInstance.get(endpoint, {
      params: { q: query, p: page || 1, n: limit || 20 },
    })

    return response.data
  }
}
