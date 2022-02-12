import { axiosInstance } from '../config/axios'
import { ApiType, getEndpoint } from '../config/endpoints'

export const HomeDataService = async () => {
  const endpoint = getEndpoint(true, ApiType.homeData)
  const response = await axiosInstance.get(endpoint)
  return response.data
}
