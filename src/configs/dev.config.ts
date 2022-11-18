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
  baseURL: 'https://www.jiosaavn.com/api.php?_format=json&_marker=0&ctx=web6dot0',
  endpoints: {
    // search
    searchAll: 'autocomplete.get',
    searchSong: 'search.getResults', // supports pagination
    searchAlbum: 'search.getAlbumResults', // supports pagination
    searchArtist: 'search.getArtistResults', // supports pagination

    // details by id
    songDetails: 'song.getDetails',
    albumDetails: 'content.getAlbumDetails',
    playlistDetails: 'playlist.getDetails',

    // details by link
    songDetailsByLink: 'webapi.get&type=song',
    albumDetailsByLink: 'webapi.get&type=album',

    // list
    homeData: 'webapi.getLaunchData',
    charts: 'content.getCharts',
    trending: 'content.getTrending',
    albums: 'content.getAlbums', // supports pagination
    lyrics: 'lyrics.getLyrics',
    playlists: 'content.getFeaturedPlaylists&fetch_from_serialized_files=true',
  },
}
