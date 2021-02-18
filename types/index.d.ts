export interface songDetails {
  song_id: string;
  song_name: string;
  album: string;
  year: string | number;
  song_artist: string;
  song_image: string;
  song_label: string;
  song_language: string;
  album_id: string | number;
  song_release_date: string | Date;
  song_link: string;
  album_link: string;
  song_play_count: string | number;
  copyright: string;
  song_has_lyrics: string;
  song_duration: string | number;
  download_links: Array<string> | boolean;
}

export interface searchDetails {
  results: [songDetails];
}
