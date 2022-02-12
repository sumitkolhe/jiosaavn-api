/* eslint-disable no-console */
import { axiosInstance } from '../config/axios'
import { endpoints } from '../config/endpoints'

export const homeDataService = async () => {
  const response = await axiosInstance.get(endpoints.homeData)
  return response.data
}
