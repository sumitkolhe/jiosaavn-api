import { PayloadService } from '../services/payload.service'
import type { AllSearchRequest } from '../interfaces/search.interface'
import type { ArtistSearchRequest } from '../interfaces/artist.interface'
import type { PlaylistSearchRequest } from '../interfaces/playlist.interface'
import type { AlbumSearchRequest } from '../interfaces/album.interface'
import type { SongSearchRequest, SongSearchResponse } from '../interfaces/song.interface'

export class SearchService extends PayloadService {
  constructor() {
    super()
  }

  public all = async (query: string) => {
    // api v4 doest not provide positions
    const result = await this.http<AllSearchRequest>(this.endpoints.search.all, false, { query })

    const allSearchResponse = this.allSearchPayload(result)
    return allSearchResponse
  }

  public songs = async (query: string, page: number, limit: number): Promise<SongSearchResponse> => {
    // api v4 does not contain media_preview_url
    const response = await this.http<SongSearchRequest>(this.endpoints.search.songs, false, {
      q: query,
      p: page,
      n: limit,
    })

    const searchResults = this.songSearchPayload(response)
    return searchResults
  }

  public albums = async (query: string, page: number, limit: number) => {
    const response = await this.http<AlbumSearchRequest>(this.endpoints.search.albums, true, {
      q: query,
      p: page,
      n: limit,
    })

    const payload = this.albumSearchPayload(response)
    return payload
  }

  public playlists = async (query: string, page: number, limit: number) => {
    const response = await this.http<PlaylistSearchRequest>(this.endpoints.search.playlists, false, {
      q: query,
      p: page,
      n: limit,
    })

    const payload = this.playlistSearchPayload(response)
    return payload
  }

  public artists = async (query: string, page: number, limit: number) => {
    const response = await this.http<ArtistSearchRequest>(this.endpoints.search.artists, false, {
      q: query,
      p: page,
      n: limit,
    })

    const payload = this.artistSearchPayload(response)
    return payload
  }
}
