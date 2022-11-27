import { PayloadService } from './payload.service'
import type {
  ArtistAlbumResponse,
  ArtistRequest,
  ArtistResponse,
  ArtistSongResponse,
} from '../interfaces/artist.interface'

export class ArtistsService extends PayloadService {
  constructor() {
    super()
  }

  public detailsById = async (id: string): Promise<ArtistResponse> => {
    const response = await this.http<ArtistRequest>(this.endpoints.artists.id, true, {
      artistId: id,
    })

    const artistResponse = this.artistPayload(response)

    return artistResponse
  }

  public artistSongs = async (artistId: string): Promise<ArtistSongResponse> => {
    // api v4 does not contain media_preview_url
    const response = await this.http<ArtistRequest>(this.endpoints.artists.songs, false, {
      artistId,
    })

    const artistResponse = this.artistSongPayload(response.topSongs)

    return artistResponse
  }

  public artistAlbums = async (artistId: string): Promise<ArtistAlbumResponse> => {
    // without api v4 no data is returned
    const response = await this.http<ArtistRequest>(this.endpoints.artists.albums, true, {
      artistId,
    })

    const artistResponse = this.artistAlbumPayload(response.topAlbums)

    return artistResponse
  }
}
