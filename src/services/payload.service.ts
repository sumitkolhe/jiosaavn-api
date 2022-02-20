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
      label: song.label,
      primaryArtists: song.primary_artists,
      explicitContent: song.explicit_content,
      playCount: song.play_count,
      language: song.language,
      hasLyrics: song.has_lyrics,
      artist: song.primary_artists,
      image: createImageLinks(song.image),
      url: song.perma_url,
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

  public static albumPayload = (album: Album) => {
    const songsArray = [] as Song[]

    const albumPayload = {
      id: album?.albumid || album?.id,
      name: album.title,
      year: album.year,
      playCount: album.play_count,
      language: album.language,
      explicitContent: album.explicit_content,
      songCount: album?.more_info?.song_count || album?.songs?.length,
      primaryArtist: album.primary_artists || album.more_info?.artistMap?.primary_artists[0]?.name,
      image: createImageLinks(album.image),
      url: album.perma_url,
      songs: [] as Song[],
    }

    if (album.songs) {
      album.songs.forEach((song: Song) => songsArray.push(GeneratePayload.songPayload(song) as never))
      albumPayload.songs = songsArray
    }

    return albumPayload
  }

  public static albumSearchPayload = (albums: AlbumSearch) => {
    const payload = [] as unknown[]

    albums.results.forEach((album: Album) => {
      payload.push(GeneratePayload.albumPayload(album))
    })

    return payload
  }
}
