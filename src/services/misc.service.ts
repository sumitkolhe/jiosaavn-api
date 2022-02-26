import { Utils } from '../utils'
import { axiosInstance } from '../config/axios'
import { ApiType, getEndpoint } from '../config/endpoints'

export class MiscellaneousService {
  public static home = async () => {
    const endpoint = getEndpoint(true, ApiType.homeData)
    const response = await axiosInstance.get(endpoint)
    return response.data
  }

  public static charts = async () => {
    const endpoint = getEndpoint(true, ApiType.charts)
    const result = await axiosInstance.get(endpoint)
    return result.data
  }

  public static trending = async () => {
    const endpoint = getEndpoint(true, ApiType.trending)
    const result = await axiosInstance.get(endpoint)
    return result.data
  }

  public static lyrics = async (songId: string) => {
    const endpoint = getEndpoint(true, ApiType.lyrics)
    const result = await axiosInstance.get(endpoint, { params: { lyrics_id: songId } })
    return Utils.sanitizeLyrics(result.data.lyrics)
  }
}
