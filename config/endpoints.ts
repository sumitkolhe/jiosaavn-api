const BaseUrl = 'https://www.jiosaavn.com/api.php?_format=json&_marker=0&ctx=web6dot0'

export const enum ApiType {
  // content from browse section
  charts = 'content.getCharts',
  trending = 'content.getTrending',
  albums = 'content.getAlbums', // supports pagination

  // search
  searchSong = 'search.getResults', // supports pagination
  searchAlbum = 'search.getAlbumResults', // supports pagination
  searchArtist = 'search.getArtistResults', // supports pagination

  // details
  songDetails = 'song.getDetails',
  albumDetails = 'content.getAlbumDetails',

  // misc
  homeData = 'webapi.getLaunchData',
  searchAll = 'autocomplete.get',
}

export const getEndpoint = (isVersion4: boolean, api: string) =>
  `${BaseUrl}${isVersion4 ? '&api_version=4' : ''}&__call=${api}`
