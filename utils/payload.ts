import { songDetails } from "types";
import { getDownloadLinks } from "./download";

export const generatePayload = (data: any) => {
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
    song_image: data.image.replace("150x150", "500x500"),
    song_link: data.perma_url,
    album_link: data.album_url,
    song_label: data.label,
    copyright: data.copyright_text,
    download_links: getDownloadLinks(data.media_preview_url),
  };
  return response_payload;
};
