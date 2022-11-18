import type { Config } from '../interfaces/config.interface'

export const productionConfig: Config = {
  env: 'production',
  server: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 80,
  },
  cors: {
    origin: 'my-domain.com',
    credentials: true,
  },
  log: {
    format: 'tiny',
    level: 'info',
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
