import { createDownloadLinks, createImageLinks } from '../utils/sanitize'
import { SongSearch, Song } from '../interfaces/song'
import { AlbumSearch, Album } from '../interfaces/album'

export class GeneratePayload {
  public static songPayload = (song: Song) => {
    const songPayload = {
      id: song.id,
      name: song.song,
      album: { id: song.albumid, name: song.album, url: song.album_url },
      year: song.year,
      releaseDate: song.release_date,
      duration: song.duration,
      playCount: song.play_count,
      language: song.language,
      hasLyrics: song.has_lyrics,
      artist: song.primary_artists,
      image: createImageLinks(song.image),
      url: song.perma_url,
      label: song.label,
      copyright: song.copyright_text,
      downloadUrl: createDownloadLinks(song.media_preview_url),
    }
    return songPayload
  }

  public static songSearchPayload = (songs: SongSearch) => {
    const payload = [] as unknown[]

    songs.results.forEach((song: Song) => {
      payload.push(GeneratePayload.songPayload(song))
    })

    return payload
  }

  public static albumSearchPayload = (albums: AlbumSearch) => {
    const payload = [] as unknown[]

    albums.results.forEach((album: Album) => {
      payload.push({
        id: album.id,
        name: album.title,
        year: album.year,
        playCount: album.play_count,
        language: album.language,
        explicit_content: album.explicit_content,
        song_count: album.more_info.song_count,
        artist: album.more_info?.artistMap?.primary_artists[0]?.name,
        image: createImageLinks(album.image),
        url: album.perma_url,
      })
    })

    return payload
  }
}
