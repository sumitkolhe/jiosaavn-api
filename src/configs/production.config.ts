import type { Config } from '../interfaces/config.interface'

export const productionConfig: Config = {
  env: 'production',
  server: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 80,
  },
  cors: {
    origin: 'saavn.me',
    credentials: true,
  },
  log: {
    format: 'tiny',
    level: 'info',
  },
  baseURL: 'https://www.jiosaavn.com/api.php',
  endpoint: {
    search: {
      all: 'autocomplete.get',
      song: 'search.getResults', // supports pagination
      album: 'search.getAlbumResults', // supports pagination
      artist: 'search.getArtistResults', // supports pagination
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
