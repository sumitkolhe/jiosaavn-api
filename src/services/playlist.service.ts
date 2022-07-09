import createHttpError from 'http-errors'
import { axiosInstance } from '../config/axios'
import { ApiType, getEndpoint } from '../config/endpoints'
import { GeneratePayload } from './payload.service'

export class PlaylistService {
  // list trending playlists by language
  public static playlists = async (languages: string) => {
    // api v4 does not contain media_preview_url
    const endpoint = getEndpoint(false, ApiType.playlists)

    const response = await axiosInstance.get(endpoint, {
      params: { languages },
    })

    return response.data?.data
  }

  public static playlistDetails = async (id: string) => {
    // api v4 does not contain media_preview_url
    const endpoint = getEndpoint(false, ApiType.playlistDetails)
    const response = await axiosInstance.get(endpoint, {
      params: { listid: id },
    })

    if (!response.data.songs) throw new createHttpError.InternalServerError()

    const payload = GeneratePayload.playlistPayload(response.data)
    return payload
  }
}
