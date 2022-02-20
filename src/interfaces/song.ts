export interface Song {
  id: string
  song: string
  album: string
  year: string
  primary_artists: string
  primary_artists_id: string
  image: string
  label: string
  albumid: string
  language: string
  play_count: string
  copyright_text: string
  explicit_content: number
  has_lyrics: string
  release_date: string
  media_preview_url: string
  perma_url: string
  album_url: string
  duration: string
  download_links: Array<string> | boolean
}

export interface SongSearch {
  results: Array<Song>
}
