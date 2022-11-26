import type { Config } from '../interfaces/config.interface'

export const devConfig: Config = {
  env: 'development',
  server: {
    host: 'localhost',
    port: 3000,
  },
  cors: {
    origin: true,
    credentials: true,
  },
  log: {
    format: 'dev',
    level: 'debug',
  },
  baseURL: 'https://www.jiosaavn.com/api.php',
  endpoint: {
    search: {
      all: 'autocomplete.get',
      songs: 'search.getResults', // supports pagination
      albums: 'search.getAlbumResults', // supports pagination
      artists: 'search.getArtistResults', // supports pagination
      playlists: 'search.getPlaylistResults', // supports pagination
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
  },
}
