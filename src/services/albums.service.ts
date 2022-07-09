import { axiosInstance } from '../config/axios'
import { ApiType, getEndpoint } from '../config/endpoints'
import { GeneratePayload } from './payload.service'

export class AlbumService {
  public static albumDetails = async (identifier: { type: string; value: string }) => {
    const isByLink = identifier.type === 'link'

    // api v4 does not contain media_preview_url
    const endpoint = getEndpoint(false, isByLink ? ApiType.albumDetailsByLink : ApiType.albumDetails)

    const response = await axiosInstance.get(endpoint, {
      params: isByLink ? { token: identifier.value } : { albumid: identifier.value },
    })

    const payload = GeneratePayload.albumPayload(response.data)
    return payload
  }
}
