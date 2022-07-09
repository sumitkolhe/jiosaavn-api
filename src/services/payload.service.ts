import { Utils } from '../utils'
import type { Song, SongSearch } from '../interfaces/song'
import type { Album, AlbumSearch } from '../interfaces/album'
import type { Playlist } from '../interfaces/playlist'

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
      primaryArtistsId: song.primary_artists_id,
      explicitContent: song.explicit_content,
      playCount: song.play_count,
      language: song.language,
      hasLyrics: song.has_lyrics,
      artist: song.primary_artists,
      image: Utils.createImageLinks(song.image),
      url: song.perma_url,
      copyright: song.copyright_text,
      downloadUrl: Utils.createDownloadLinks(song.media_preview_url),
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
      image: Utils.createImageLinks(album.image),
      url: album.perma_url,
      songs: [] as Song[],
    }

    // if album details contain song list
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

  public static playlistPayload = (playlist: Playlist) => {
    const songsArray = [] as Song[]

    const playlistPayload = {
      id: playlist.listid,
      name: playlist.listname,
      followerCount: playlist.follower_count,
      songCount: playlist.list_count || playlist?.songs?.length,
      fanCount: playlist.fan_count,
      username: playlist.username,
      firstname: playlist.firstname,
      lastname: playlist.lastname,
      image: Utils.createImageLinks(playlist.image),
      url: playlist.perma_url,
      songs: [] as Song[],
    }

    // if playlist details contain song list
    if (playlist.songs) {
      playlist.songs.forEach((song: Song) => songsArray.push(GeneratePayload.songPayload(song) as never))
      playlistPayload.songs = songsArray
    }

    return playlistPayload
  }
}
