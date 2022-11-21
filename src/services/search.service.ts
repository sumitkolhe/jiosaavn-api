import { PayloadService } from '../services/payload.service'
import type { AlbumSearchRequest } from '../interfaces/album.interface'
import type { SongSearchRequest, SongSearchResponse } from '../interfaces/song.interface'

export class SearchService extends PayloadService {
  constructor() {
    super()
  }

  public all = async (query: string) => {
    const result = await this.http<SongSearchRequest>(this.endpoints.search.all, false, { query })
    return result
  }

  public songs = async (query: string, page: string, limit: string): Promise<SongSearchResponse> => {
    // api v4 does not contain media_preview_url
    const response = await this.http<SongSearchRequest>(this.endpoints.search.song, false, {
      q: query,
      p: page || 1,
      n: limit || 10,
    })

    const searchResults = this.songSearchPayload(response)
    return searchResults
  }

  public albums = async (query: string, page: string, limit: string) => {
    const response = await this.http<AlbumSearchRequest>(this.endpoints.search.album, true, {
      q: query,
      p: page || 1,
      n: limit || 10,
    })

    const payload = this.albumSearchPayload(response)
    return payload
  }
}