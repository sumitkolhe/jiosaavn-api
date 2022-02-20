const BaseUrl = 'https://www.jiosaavn.com/api.php?_format=json&_marker=0&ctx=web6dot0'

export const enum ApiType {
  // search
  searchAll = 'autocomplete.get',
  searchSong = 'search.getResults', // supports pagination
  searchAlbum = 'search.getAlbumResults', // supports pagination
  searchArtist = 'search.getArtistResults', // supports pagination

  // details
  songDetails = 'song.getDetails',
  albumDetails = 'content.getAlbumDetails',

  // misc
  homeData = 'webapi.getLaunchData',
  charts = 'content.getCharts',
  trending = 'content.getTrending',
  albums = 'content.getAlbums', // supports pagination
  lyrics = 'lyrics.getLyrics',
}

export const getEndpoint = (isVersion4: boolean, api: string) =>
  `${BaseUrl}${isVersion4 ? '&api_version=4' : ''}&__call=${api}`
