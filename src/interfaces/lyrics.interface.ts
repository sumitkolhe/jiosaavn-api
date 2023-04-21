export interface LyricsRequest {
  lyrics: string
  script_tracking_url: string
  lyrics_copyright: string
  snippet: string
}

export interface LyricsResponse {
  lyrics: string
  copyright: string
  snippet: string
}
