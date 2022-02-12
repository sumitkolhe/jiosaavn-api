import { axiosInstance } from '../config/axios'
import { endpoints } from '../config/endpoints'

export const HomeDataService = async () => {
  const response = await axiosInstance.get(endpoints.homeData)
  return response.data
}
