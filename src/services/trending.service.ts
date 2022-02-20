import { axiosInstance } from '../config/axios'
import { ApiType, getEndpoint } from '../config/endpoints'

export const TrendingService = async () => {
  const endpoint = getEndpoint(true, ApiType.trending)
  const result = await axiosInstance.get(endpoint)
  return result.data
}
