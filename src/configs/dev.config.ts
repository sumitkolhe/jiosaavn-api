import type { Config } from '../interfaces/config.interface'

export const devConfig: Config = {
  env: 'development',
  server: {
    host: 'localhost',
    port: 3000,
  },
  enableRateLimit: false,
  log: {
    format: 'dev',
    level: 'debug',
  },
  baseURL: 'https://www.jiosaavn.com/api.php',
  endpoint: {
    modules: 'content.getBrowseModules',
    search: {
      all: 'autocomplete.get',
      songs: 'search.getResults',
      albums: 'search.getAlbumResults',
      artists: 'search.getArtistResults',
      playlists: 'search.getPlaylistResults',
    },
    songs: {
      id: 'song.getDetails',
      link: 'webapi.get',
    },
    albums: {
      id: 'content.getAlbumDetails',
      link: 'webapi.get',
    },
    playlists: {
      id: 'playlist.getDetails',
    },
    artists: {
      id: 'artist.getArtistPageDetails',
      link: 'webapi.get',
      songs: 'artist.getArtistMoreSong',
      albums: 'artist.getArtistMoreAlbum',
      topSongs: 'search.artistOtherTopSongs',
    },
    lyrics: 'lyrics.getLyrics',
  },
}
