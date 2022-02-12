import { axiosInstance } from '../config/axios'
import { ApiType, getEndpoint } from '../config/endpoints'

export const TopChartsService = async () => {
  const endpoint = getEndpoint(true, ApiType.topCharts)
  const result = await axiosInstance.get(endpoint)
  return result.data
}
