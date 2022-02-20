import { GeneratePayload } from './payload.service'
import { axiosInstance } from '../config/axios'
import { ApiType, getEndpoint } from '../config/endpoints'

export const SongsService = async (songid: string) => {
  // api v4 does not contain media_preview_url
  const endpoint = getEndpoint(false, ApiType.songDetails)

  const response = await axiosInstance.get(endpoint, { params: { pids: songid } })

  const payload = GeneratePayload.songPayload(response.data)
  return payload
}
