import type { Config } from '../interfaces/config.interface'

export const productionConfig: Config = {
  env: 'production',
  server: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 80,
  },
  enableRateLimit: process.env.ENABLE_RATE_LIMIT === 'true' || false,
  log: {
    format: 'tiny',
    level: 'info',
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
