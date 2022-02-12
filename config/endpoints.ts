const BaseUrl = 'https://www.jiosaavn.com/api.php?_format=json&_marker=0&ctx=web6dot0'

export const enum ApiType {
  homeData = 'webapi.getLaunchData',
  searchAll = 'autocomplete.get',
  charts = 'content.getCharts',
  trending = 'content.getTrending',
  searchSong = 'search.getResults',
  searchAlbum = 'search.getAlbumResults',
}

export const getEndpoint = (isVersion4: boolean, api: string) =>
  `${BaseUrl}${isVersion4 ? '&api_version=4' : ''}&__call=${api}`
