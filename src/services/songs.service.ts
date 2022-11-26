import { HttpExceptionError } from '../exceptions/http.exception'
import { PayloadService } from './payload.service'
import type { SongRequest, SongResponse } from '../interfaces/song.interface'

export class SongsService extends PayloadService {
  constructor() {
    super()
  }

  public detailsById = async (ids: string): Promise<SongResponse[]> => {
    // api v4 does not contain media_preview_url
    const response = await this.http<{ songs: SongRequest[] }>(this.endpoints.songs.id, false, {
      pids: ids,
    })

    if (!response.songs || response?.songs?.length === 0) throw new HttpExceptionError(404, 'song not found')

    const songResults = response.songs.map((song) => this.songPayload(song))

    return songResults
  }

  public detailsByLink = async (link: string): Promise<SongResponse[]> => {
    // api v4 does not contain media_preview_url
    const response = await this.http<{ songs: SongRequest[] }>(this.endpoints.songs.link, false, {
      token: link,
      type: 'song',
    })

    const songResults = response.songs.map((song) => this.songPayload(song))

    return songResults
  }
}
