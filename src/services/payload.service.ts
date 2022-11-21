import { createDownloadLinks, createImageLinks } from '../utils/link'
import { ApiService } from '../services/api.service'
import type {
  AlbumRequest,
  AlbumResponse,
  AlbumSearchRequest,
  AlbumSearchResponse,
} from '../interfaces/album.interface'
import type { SongRequest, SongResponse, SongSearchRequest, SongSearchResponse } from '../interfaces/song.interface'

export class PayloadService extends ApiService {
  protected songSearchPayload = (songs: SongSearchRequest) => {
    const payload = {
      total: songs.total,
      start: songs.start,
      results: songs.results.map((song: SongRequest) => this.songPayload(song)),
    } as SongSearchResponse

    return payload
  }

  protected songPayload = (song: SongRequest): SongResponse => {
    const songPayload: SongResponse = {
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
      image: createImageLinks(song.image),
      url: song.perma_url,
      copyright: song.copyright_text,
      downloadUrl: createDownloadLinks(song.media_preview_url),
    }
    return songPayload
  }

  protected albumSearchPayload = (albums: AlbumSearchRequest) => {
    const payload = {
      total: albums.total,
      start: albums.start,
      results: albums.results.map((album: AlbumRequest) => this.albumPayload(album)),
    } as AlbumSearchResponse

    return payload
  }

  protected albumPayload = (album: AlbumRequest) => {
    const albumPayload: AlbumResponse = {
      id: album?.albumid || album?.id,
      name: album.title,
      year: album.year,
      releaseDate: album.release_date,
      playCount: album.play_count,
      language: album.language,
      explicitContent: album.explicit_content,
      songCount: album?.more_info?.song_count || album?.songs?.length?.toString(),
      primaryArtists: album.primary_artists || album.more_info?.artistMap?.primary_artists[0]?.name,
      primaryArtistsId: album.primary_artists_id,
      image: createImageLinks(album.image),
      url: album.perma_url,
      songs: [] as SongResponse[],
    }

    // if album details contain song list
    if (album.songs) {
      albumPayload.songs = album.songs.map((song: SongRequest) => this.songPayload(song))
    }

    return albumPayload
  }

  // public static playlistPayload = (playlist: Playlist) => {
  //   const songsArray = [] as Song[]

  //   const playlistPayload = {
  //     id: playlist.listid,
  //     name: playlist.listname,
  //     followerCount: playlist.follower_count,
  //     songCount: playlist.list_count || playlist?.songs?.length,
  //     fanCount: playlist.fan_count,
  //     username: playlist.username,
  //     firstname: playlist.firstname,
  //     lastname: playlist.lastname,
  //     image: Utils.createImageLinks(playlist.image),
  //     url: playlist.perma_url,
  //     songs: [] as Song[],
  //   }

  //   // if playlist details contain song list
  //   if (playlist.songs) {
  //     playlist.songs.forEach((song: Song) => songsArray.push(GeneratePayload.songPayload(song) as never))
  //     playlistPayload.songs = songsArray
  //   }

  //   return playlistPayload
  // }
}
