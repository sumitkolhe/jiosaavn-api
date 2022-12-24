import { PayloadService } from './payload.service'
import type { SongRequest, SongResponse } from '../interfaces/song.interface'
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

  public artistSongs = async (
    artistId: string,
    page: number,
    category: string,
    sort: string
  ): Promise<ArtistSongResponse> => {
    // api v4 does not contain media_preview_url
    const response = await this.http<ArtistRequest>(this.endpoints.artists.songs, false, {
      artistId,
      page: page - 1,
      category,
      sort_order: sort,
    })

    const artistSongs = this.artistSongPayload(response.topSongs)
    return artistSongs
  }

  public artistAlbums = async (
    artistId: string,
    page: number,
    category: string,
    sort: string
  ): Promise<ArtistAlbumResponse> => {
    // without api v4 no data is returned
    const response = await this.http<ArtistRequest>(this.endpoints.artists.albums, true, {
      artistId,
      page: page - 1,
      category,
      sort_order: sort,
    })

    const artistAlbums = this.artistAlbumPayload(response.topAlbums)
    return artistAlbums
  }

  public artistTopSongs = async (artistId: string, songId: string, language: string): Promise<SongResponse[]> => {
    // api v4 does not contain media_preview_url
    const response = await this.http<SongRequest[]>(this.endpoints.artists.topSongs, false, {
      artist_ids: artistId,
      song_id: songId,
      language,
    })

    const artistTopSongs = response.map((song) => this.songPayload(song))
    return artistTopSongs
  }
}
