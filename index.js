axios = require("axios");
const express = require("express");
const UA = require("user-agents");
const userAgentCreator = new UA({ deviceCategory: "desktop" });
const HttpsProxyAgent = require("https-proxy-agent");
const app = express();
//const httpsAgent = new HttpsProxyAgent({ host: "103.224.39.2", port: "82" });
const axiosClient = axios.create({
  baseURL:
    "https://www.jiosaavn.com/api.php?_format=json&_marker=0&ctx=web6dot0&api_version=4&",
  //httpsAgent,
});

app.get("/:query/", async (req, res) => {
  var rotatingUserAgent = userAgentCreator.random().toString();
  axios.defaults.headers.common["User-Agent"] = rotatingUserAgent;

  var query = req.params.query;
  var count = req.params.count;
  var songsArray = new Array();
  var songsObj = new Object();
  axiosClient
    .get("p=1&__call=search.getResults&q=" + query)
    .then(async (response) => {
      var songs = response.data.results;
      for (element of songs) {
        songsArray.push({
          song_name: element.title,
          song_id: element.id,
          song_url: element.perma_url,
          song_image: await fixImageUrl(element.image),
          album_id: element.more_info.album_id,
          album_name: element.more_info.album,
          album_url: element.more_info.album_url,
          artist_name: element.more_info.artistMap.artists[0].name,
          artist_image: await fixImageUrl(
            element.more_info.artistMap.artists[0].image
          ),
          year: element.year,
          duration: element.more_info.duration,
          language: element.language,
          label: element.more_info.label,
          encrypted_media_url: element.more_info.encrypted_media_url,
          download_link: await GetDownloadLink(
            element.more_info.encrypted_media_url
          ),
        });
      }
      songsObj["songs"] = songsArray;
      res.json(songsObj);
    });
});

function GetDownloadLink(encrypted_id) {
  return axiosClient
    .get(
      "bitrate=128&__call=song.generateAuthToken&url=" +
        encodeURIComponent(encrypted_id)
    )
    .then((response) => {
      return CleanDownloadLink(response.data.auth_url);
    });
}

function CleanDownloadLink(auth_url) {
  var url = auth_url.split("?")[0];
  url = url.split("/")[3] + "/" + url.split("/")[4];
  url = "https://h.saavncdn.com/" + url;
  return url;
}

function fixImageUrl(img_url) {
  var fixedImageUrl = img_url.replace("150x150", "500x500");
  fixedImageUrl = fixedImageUrl.replace("http://", "https://");
  return fixedImageUrl;
}

app.listen(80);
