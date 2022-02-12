import { axiosInstance } from '../config/axios'
import { endpoints } from '../config/endpoints'

export const TopChartsService = async () => {
  const result = await axiosInstance.get(endpoints.topCharts)
  return result.data
}
