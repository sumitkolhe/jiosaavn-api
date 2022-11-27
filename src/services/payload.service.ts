import { createDownloadLinks, createImageLinks } from '../utils/link'
import { ApiService } from '../services/api.service'
import type {
  Artist,
  ArtistAlbumRequest,
  ArtistAlbumResponse,
  ArtistRequest,
  ArtistResponse,
  ArtistSearchRequest,
  ArtistSearchResponse,
  ArtistSongRequest,
  ArtistSongResponse,
} from '../interfaces/artist.interface'
import type {
  PlaylistRequest,
  PlaylistResponse,
  PlaylistSearchRequest,
  PlaylistSearchResponse,
} from '../interfaces/playlist.interface'
import type {
  AlbumArtistResponse,
  AlbumRequest,
  AlbumResponse,
  AlbumSearchRequest,
  AlbumSearchResponse,
} from '../interfaces/album.interface'
import type { SongRequest, SongResponse, SongSearchRequest, SongSearchResponse } from '../interfaces/song.interface'

export class PayloadService extends ApiService {
  private mapArtists = (artists: Artist[]): AlbumArtistResponse[] => {
    if (!artists) return []
    const mappedArtists: AlbumArtistResponse[] = artists.map((artist) => {
      return {
        id: artist.id,
        name: artist.name,
        url: artist.perma_url,
        image: createImageLinks(artist.image),
        type: artist.type,
        role: artist.role,
      }
    })

    return mappedArtists
  }

  protected songSearchPayload = (songs: SongSearchRequest) => {
    const payload = {
      total: songs?.total,
      start: songs?.start,
      results: songs?.results?.map((song: SongRequest) => this.songPayload(song)),
    } as SongSearchResponse

    return payload
  }

  protected songPayload = (song: SongRequest): SongResponse => {
    const songPayload: SongResponse = {
      id: song?.id,
      name: song?.song,
      album: { id: song?.albumid, name: song?.album, url: song?.album_url },
      year: song?.year,
      releaseDate: song?.release_date,
      duration: song?.duration,
      label: song?.label,
      primaryArtists: song?.primary_artists,
      primaryArtistsId: song?.primary_artists_id,
      featuredArtists: song?.featured_artists,
      featuredArtistsId: song?.featured_artists_id,
      explicitContent: song?.explicit_content,
      playCount: song?.play_count,
      language: song?.language,
      hasLyrics: song?.has_lyrics,
      url: song?.perma_url,
      copyright: song?.copyright_text,
      image: createImageLinks(song?.image),
      downloadUrl: createDownloadLinks(song?.media_preview_url),
    }
    return songPayload
  }

  protected albumSearchPayload = (albums: AlbumSearchRequest) => {
    const payload = {
      total: albums?.total,
      start: albums?.start,
      results: albums?.results?.map((album: AlbumRequest) => this.albumPayload(album)),
    } as AlbumSearchResponse

    return payload
  }

  protected albumPayload = (album: AlbumRequest) => {
    const albumPayload: AlbumResponse = {
      id: album?.albumid || album?.id,
      name: album?.title,
      year: album?.year,
      releaseDate: album?.release_date,
      playCount: album?.play_count,
      language: album?.language,
      explicitContent: album?.explicit_content,
      songCount: album?.more_info?.song_count || album?.songs?.length?.toString(),
      url: album?.perma_url,
      primaryArtistsId: album?.primary_artists_id,
      primaryArtists: album?.primary_artists || this.mapArtists(album?.more_info?.artistMap?.primary_artists),
      featuredArtists: this.mapArtists(album.more_info?.artistMap.featured_artists),
      artists: this.mapArtists(album.more_info?.artistMap.artists),
      image: createImageLinks(album?.image),
      songs: [] as SongResponse[],
    }

    // if album details contain song list
    if (album.songs) {
      albumPayload.songs = album?.songs?.map((song: SongRequest) => this.songPayload(song))
    }

    return albumPayload
  }

  protected playlistSearchPayload = (playlists: PlaylistSearchRequest) => {
    const payload = {
      total: playlists?.total,
      start: playlists?.start,
      results: playlists?.results?.map((playlist: PlaylistRequest) => this.playlistPayload(playlist)),
    } as PlaylistSearchResponse

    return payload
  }

  protected playlistPayload = (playlist: PlaylistRequest) => {
    const playlistPayload: PlaylistResponse = {
      id: playlist?.listid,
      userId: playlist?.uid,
      name: playlist?.listname,
      followerCount: playlist?.follower_count,
      songCount: playlist?.count || playlist?.list_count,
      fanCount: playlist?.fan_count?.toString(),
      username: playlist?.username,
      firstname: playlist?.firstname,
      lastname: playlist?.lastname,
      language: playlist?.language,
      shares: playlist?.share,
      image: createImageLinks(playlist?.image),
      url: playlist?.perma_url,
      songs: [] as SongResponse[],
    }

    // if playlist details contain song list
    if (playlist.songs) {
      playlistPayload.songs = playlist?.songs?.map((song: SongRequest) => this.songPayload(song))
    }

    return playlistPayload
  }

  protected artistSearchPayload = (artists: ArtistSearchRequest) => {
    const payload = {
      total: artists?.total,
      start: artists?.start,
      results: artists?.results?.map((artist: ArtistRequest) => this.artistPayload(artist)),
    } as ArtistSearchResponse

    return payload
  }

  protected artistPayload = (artist: ArtistRequest) => {
    const artistPayload: ArtistResponse = {
      id: artist?.artistId || artist?.id,
      name: artist?.name,
      url: artist?.urls?.overview || artist?.perma_url,
      role: artist?.role,
      image: createImageLinks(artist?.image),
      followerCount: artist?.follower_count,
      fanCount: artist?.fan_count,
      isVerified: artist?.isVerified,
      dominantLanguage: artist?.dominantLanguage,
      dominantType: artist?.dominantType,
      bio: artist.bio && JSON.parse(artist?.bio),
      dob: artist?.dob,
      fb: artist?.fb,
      twitter: artist?.twitter,
      wiki: artist?.wiki,
      availableLanguages: artist?.availableLanguages,
      isRadioPresent: artist.isRadioPresent,
    }

    return artistPayload
  }

  protected artistSongPayload = (songs: ArtistSongRequest) => {
    const payload = {
      total: songs.total,
      lastPage: songs.last_page,
      results: songs?.songs?.map((song: SongRequest) => this.songPayload(song)),
    } as ArtistSongResponse

    return payload
  }

  protected artistAlbumPayload = (albums: ArtistAlbumRequest) => {
    const payload = {
      total: albums.total,
      lastPage: albums.last_page,
      results: albums?.albums?.map((album: AlbumRequest) => this.albumPayload(album)),
    } as ArtistAlbumResponse

    return payload
  }
}
