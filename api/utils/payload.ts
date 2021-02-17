import { sanitizeImage } from "../utils/sanitize";
import { songDetails } from "types/song-details";
import { getDownloadLinks } from "../utils/download";

export const generatePayload = (song_data: any, id?: string) => {
  const data = song_data[id!];
  const response_payload: songDetails = {
    song_id: data.id,
    song_name: data.song,
    album_id: data.albumid,
    album: data.album,
    year: data.year,
    song_release_date: data.release_date,
    song_duration: data.duration,
    song_play_count: data.play_count,
    song_language: data.language,
    song_has_lyrics: data.has_lyrics,
    song_artist: data.primary_artists,
    song_image: sanitizeImage(data.image),
    song_link: data.perma_url,
    album_link: data.album_url,
    song_label: data.label,
    copyright: data.copyright_text,
    download_links: getDownloadLinks(data.media_preview_url),
  };
  return response_payload;
};
