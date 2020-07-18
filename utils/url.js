module.exports = {
//all available songs
   getSongListUrl : "https://www.jiosaavn.com/api.php?_format=json&_marker=0&ctx=web6dot0&__call=autocomplete.get&query=",
//particular song details
   getSongDetailUrl: "https://www.jiosaavn.com/api.php?&api_version=4&_format=json&_marker=0&ctx=web6dot0&__call=song.getDetails&pids=",
   generateAuthtoken : "https://www.jiosaavn.com/api.php?&bitrate=128&api_version=4&_format=json&ctx=web6dot0&_marker=0&__call=song.generateAuthToken&url=",
   GetSongsFromSearch : "https://www.jiosaavn.com/api.php?&p=1&_format=json&_marker=0&api_version=4&ctx=web6dot0&__call=search.getResults&q="
}




