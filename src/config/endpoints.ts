const BaseUrl = 'https://www.jiosaavn.com/api.php?_format=json&_marker=0&ctx=web6dot0'

export const enum ApiType {
  // search
  searchAll = 'autocomplete.get',
  searchSong = 'search.getResults', // supports pagination
  searchAlbum = 'search.getAlbumResults', // supports pagination
  searchArtist = 'search.getArtistResults', // supports pagination

  // details by id
  songDetails = 'song.getDetails',
  albumDetails = 'content.getAlbumDetails',
  playlistDetails = 'playlist.getDetails',

  // details by link
  songDetailsByLink = 'webapi.get&type=song',
  albumDetailsByLink = 'webapi.get&type=album',

  // list
  homeData = 'webapi.getLaunchData',
  charts = 'content.getCharts',
  trending = 'content.getTrending',
  albums = 'content.getAlbums', // supports pagination
  lyrics = 'lyrics.getLyrics',
  playlists = 'content.getFeaturedPlaylists&fetch_from_serialized_files=true', // supports pagination
}

export const getEndpoint = (isVersion4: boolean, api: string) =>
  `${BaseUrl}${isVersion4 ? '&api_version=4' : ''}&__call=${api}`
