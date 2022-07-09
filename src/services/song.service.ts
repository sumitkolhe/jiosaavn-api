import createHttpError from 'http-errors'
import { axiosInstance } from '../config/axios'
import { ApiType, getEndpoint } from '../config/endpoints'
import { GeneratePayload } from './payload.service'

export class SongService {
  public static songDetails = async (identifier: { type: string; value: string }) => {
    const isByLink = identifier.type === 'link'

    // api v4 does not contain media_preview_url
    const endpoint = getEndpoint(false, isByLink ? ApiType.songDetailsByLink : ApiType.songDetails)
    const response = await axiosInstance.get(endpoint, {
      params: isByLink ? { token: identifier.value } : { pids: identifier.value },
    })

    if (!response.data.songs) throw new createHttpError.InternalServerError()

    // switch payload generator depending upon if multiple song ids are passed
    const payload =
      response?.data?.songs?.length > 1
        ? GeneratePayload.songSearchPayload({ results: response.data.songs })
        : GeneratePayload.songPayload(response.data.songs[0])
    return payload
  }
}
