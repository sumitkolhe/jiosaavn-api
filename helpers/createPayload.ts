import { Album } from '@interfaces/album'
import { Song } from '@interfaces/song'

export const getDownloadLinks = (songDownloadLink: string) => {
  if (songDownloadLink)
    return [
      songDownloadLink.replace('preview.saavncdn.com', 'aac.saavncdn.com').replace('_96_p', '_96'),
      songDownloadLink.replace('preview.saavncdn.com', 'aac.saavncdn.com').replace('_96_p', '_160'),
      songDownloadLink.replace('preview.saavncdn.com', 'aac.saavncdn.com').replace('_96_p', '_320'),
    ]
  return false
}

export const generateSongPayload = (data: any) => {
  const songPayload: Song = {
    songId: data.id,
    songName: data.song,
    albumId: data.albumid,
    albumName: data.album,
    year: data.year,
    songReleaseDate: data.release_date,
    songDuration: data.duration,
    songPlayCount: data.play_count,
    songLanguage: data.language,
    songHasLyrics: data.has_lyrics,
    songArtist: data.primary_artists,
    songImage: data.image.replace('150x150', '500x500'),
    songLink: data.perma_url,
    albumLink: data.album_url,
    songLabel: data.label,
    copyright: data.copyright_text,
    downloadLinks: getDownloadLinks(data.media_preview_url),
  }

  return songPayload
}

export const generateAlbumPayload = (data: any) => {
  const songsArray: Song[] = []

  const albumPayload: Album = {
    albumId: data.albumid,
    albumName: data.title,
    albumImage: data.image.replace('150x150', '500x500'),
    albumLink: data.perma_url,
    year: data.year,
    albumArtist: data.primary_artists,
    albumLanguage: data.language,
  }

  if (data.songs) {
    data.songs.forEach((song: Song) => {
      songsArray.push(generateSongPayload(song))
    })
    albumPayload.songs = songsArray
  }
  return albumPayload
}
