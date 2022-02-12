import { axiosInstance } from '../config/axios'
import { endpoints } from '../config/endpoints'

export const SearchService = async (query: string) => {
  const response = await axiosInstance.get(endpoints.searchAll + query)
  return response.data
}
