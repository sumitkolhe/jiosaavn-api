const axios = require("axios");
const express = require("express");
const { response } = require("express");
const app = express();

app.get("/:query", async (req, res) => {

   var id = await getSongId(req.params.query)
   var encryptedId = await getEncryptedSongId(id)
    var url = await generateAuthToken(encryptedId)

    res.redirect(url)
});

function getSongId(query) {

  var baseGetSongIdUrl = `https://www.jiosaavn.com/api.php?_format=json&_marker=0&ctx=web6dot0&__call=autocomplete.get&query=${query}`;

  return axios.get(baseGetSongIdUrl).then((response) => {
    return response.data.songs.data[0].id;
  });
}

function getEncryptedSongId(songId) {

  var baseGenerateAuthtokenUrl = `https://www.jiosaavn.com/api.php?__call=song.getDetails&pids=${songId}&api_version=4&_format=json&_marker=0&ctx=web6dot0`;

  return axios.get(baseGenerateAuthtokenUrl).then((response) => {
    return response.data.songs[0].more_info.encrypted_media_url;
  });
}

function generateAuthToken(encryptedMediaUrl) {
  var encryptedId = encryptedMediaUrl;
  encryptedId = encryptedId.replace(/[+]/g, "%2B");
  var baseGenerateAuthtokenUrl = `https://www.jiosaavn.com/api.php?__call=song.generateAuthToken&url=${encryptedId}&bitrate=320&api_version=4&_format=json&ctx=web6dot0&_marker=0`;

  return axios.get(baseGenerateAuthtokenUrl).then((response) => {
    return response.data.auth_url;
  });
}

app.listen(80);
