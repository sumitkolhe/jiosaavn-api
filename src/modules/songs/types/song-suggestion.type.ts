import type { SongAPIResponse } from './song.type'

export interface SongSuggestionApiResponse {
  stationid: string
  songs: Record<string, { song: SongAPIResponse }>
}
