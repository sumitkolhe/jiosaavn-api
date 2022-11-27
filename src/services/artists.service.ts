import { PayloadService } from './payload.service'
import type { ArtistRequest, ArtistResponse } from '../interfaces/artist.interface'

export class ArtistsService extends PayloadService {
  constructor() {
    super()
  }

  public detailsById = async (id: string): Promise<ArtistResponse> => {
    // api v4 does not contain media_preview_url
    const response = await this.http<ArtistRequest>(this.endpoints.artists.id, false, {
      artistId: id,
    })

    const artistResponse = this.artistPayload(response)

    return artistResponse
  }
}
