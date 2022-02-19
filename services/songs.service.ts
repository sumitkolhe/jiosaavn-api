import { axiosInstance } from '../config/axios'
import { ApiType, getEndpoint } from '../config/endpoints'

export const SongsService = async (songid: string) => {
  // api v4 does not contain media_preview_url
  const endpoint = getEndpoint(false, ApiType.songDetails)

  const result = await axiosInstance.get(endpoint, { params: { pids: songid } })

  return result.data
}
