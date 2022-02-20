import { axiosInstance } from '../config/axios'
import { ApiType, getEndpoint } from '../config/endpoints'

export class MiscellaneousService {
  public static home = async () => {
    const endpoint = getEndpoint(true, ApiType.homeData)
    const response = await axiosInstance.get(endpoint)
    return response.data
  }

  public static Charts = async () => {
    const endpoint = getEndpoint(true, ApiType.charts)
    const result = await axiosInstance.get(endpoint)
    return result.data
  }

  public static Trending = async () => {
    const endpoint = getEndpoint(true, ApiType.trending)
    const result = await axiosInstance.get(endpoint)
    return result.data
  }
}
