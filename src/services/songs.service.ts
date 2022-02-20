import { GeneratePayload } from './payload.service'
import { axiosInstance } from '../config/axios'
import { ApiType, getEndpoint } from '../config/endpoints'

export const SongsService = async (songid: string) => {
  // api v4 does not contain media_preview_url
  const endpoint = getEndpoint(false, ApiType.songDetails)
  const response = await axiosInstance.get(endpoint, { params: { pids: songid } })

  // switch payload generator depending upon if multiple song ids are passed
  const payload =
    response.data?.songs.length > 1
      ? GeneratePayload.songSearchPayload({ results: response.data.songs })
      : GeneratePayload.songPayload(response.data.songs[0])
  return payload
}
