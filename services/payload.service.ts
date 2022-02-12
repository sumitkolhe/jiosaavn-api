import { AxiosResponse } from 'axios'
import { createDownloadLinks } from '../utils/sanitize'
import { SongSearch, Song } from '../interfaces/song'
import { AlbumSearch, Album } from '../interfaces/album'

export class GeneratePayload {
  public static songs = (response: AxiosResponse<SongSearch>) => {
    const payload = [] as unknown[]

    response.data.results.forEach((song: Song) => {
      payload.push({
        id: song.id,
        name: song.song,
        album: {
          id: song.albumid,
          name: song.album,
          url: song.album_url,
        },
        year: song.year,
        releaseDate: song.release_date,
        duration: song.duration,
        playCount: song.play_count,
        language: song.language,
        hasLyrics: song.has_lyrics,
        artist: song.primary_artists,
        image: song.image.replace('150x150', '500x500'),
        url: song.perma_url,
        label: song.label,
        copyright: song.copyright_text,
        downloadUrl: createDownloadLinks(song.media_preview_url),
      })
    })

    return payload
  }

  public static albums = (response: AxiosResponse<AlbumSearch>) => {
    const payload = [] as unknown[]

    response.data.results.forEach((album: Album) => {
      payload.push({
        id: album.id,
        name: album.title,
        year: album.year,
        playCount: album.play_count,
        language: album.language,
        explicit_content: album.explicit_content,
        song_count: album.more_info.song_count,
        artist: album.more_info.artistMap.primary_artists[0].name,
        image: album.image.replace('150x150', '500x500'),
        url: album.perma_url,
      })
    })

    return payload
  }
}
