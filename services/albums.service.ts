import { GeneratePayload } from './payload.service'
import { axiosInstance } from '../config/axios'
import { ApiType, getEndpoint } from '../config/endpoints'

export const AlbumsService = async (albumid: string) => {
  // api v4 does not contain media_preview_url
  const endpoint = getEndpoint(false, ApiType.albumDetails)

  const response = await axiosInstance.get(endpoint, { params: { albumid } })

  const payload = GeneratePayload.songPayload(response.data)
  return payload
}
