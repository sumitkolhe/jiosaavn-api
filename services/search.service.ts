import { axiosInstance } from '../config/axios'
import { ApiType, getEndpoint } from '../config/endpoints'

export class SearchService {
  public static searchAll = async (query: string) => {
    const endpoint = getEndpoint(false, ApiType.searchAll)

    const response = await axiosInstance.get(endpoint, { params: { query } })

    return response.data
  }

  public static searchSongs = async (query: string, page: string, limit: string) => {
    const endpoint = getEndpoint(false, ApiType.searchSong)

    const response = await axiosInstance.get(endpoint, {
      params: { q: query, p: page || 1, n: limit || 20 },
    })

    return response.data
  }

  public static searchAlbums = async (query: string, page: string, limit: string) => {
    const endpoint = getEndpoint(false, ApiType.searchAlbum)

    const response = await axiosInstance.get(endpoint, {
      params: { q: query, p: page || 1, n: limit || 20 },
    })

    return response.data
  }
}
