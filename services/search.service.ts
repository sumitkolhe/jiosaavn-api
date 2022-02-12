import { axiosInstance } from '../config/axios'
import { ApiType, getEndpoint } from '../config/endpoints'

export const SearchService = async (query: string) => {
  const endpoint = getEndpoint(false, ApiType.searchAll)
  const response = await axiosInstance.get(endpoint, { params: { query } })
  return response.data
}
