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

    const artistDetails = this.artistPayload(response)
    return artistDetails
  }

  public detailsByLink = async (link: string): Promise<ArtistResponse> => {
    // without api v4 no data is returned
    const response = await this.http<ArtistRequest>(this.endpoints.artists.link, true, {
      token: link,
      type: 'artist',
    })

    const artistDetails = this.artistPayload(response)
    return artistDetails
  }

  public artistSongs = async (artistId: string, page: number): Promise<ArtistSongResponse> => {
    // api v4 does not contain media_preview_url
    const response = await this.http<ArtistRequest>(this.endpoints.artists.songs, false, {
      artistId,
      page: page - 1,
    })

    const artistSongs = this.artistSongPayload(response.topSongs)
    return artistSongs
  }

  public artistAlbums = async (artistId: string, page: number): Promise<ArtistAlbumResponse> => {
    // without api v4 no data is returned
    const response = await this.http<ArtistRequest>(this.endpoints.artists.albums, true, {
      artistId,
      page: page - 1,
    })

    const artistAlbums = this.artistAlbumPayload(response.topAlbums)
    return artistAlbums
  }
}
