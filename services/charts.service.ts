import { axiosInstance } from '../config/axios'
import { ApiType, getEndpoint } from '../config/endpoints'

export const ChartsService = async () => {
  const endpoint = getEndpoint(true, ApiType.charts)
  const result = await axiosInstance.get(endpoint)
  return result.data
}
