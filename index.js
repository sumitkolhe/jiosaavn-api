axios = require("axios");
const express = require("express");
const UA = require("user-agents");
const userAgentCreator = new UA({ deviceCategory: "desktop" });
const HttpsProxyAgent = require("https-proxy-agent");
const app = express();
//const httpsAgent = new HttpsProxyAgent({ host: "103.224.39.2", port: "82" });

app.get("/:query/", async (req, res) => {
  var rotatingUserAgent = userAgentCreator.random().toString();
  axios.defaults.headers.common["User-Agent"] = rotatingUserAgent;

  var query = req.params.query;
  var songsArray = new Array();
  var songsObj = new Object();
  axios
    .get(
      "https://www.jiosaavn.com/api.php?_format=json&n=6&p=1&_marker=0&ctx=android&__call=search.getResults&q=" +
        query
    )
    .then(async (response) => {
      var songs = response.data.results;

      for (element of songs) {
        songsArray.push({
          song_id: element.id,
          song_title: element.song,
          song_url: element.perma_url,
          song_image: await fixImageUrl(element.image),
          song_play_count: element.play_count,
          album_id: element.albumid,
          album_title: element.album,
          album_url: element.album_url,
          artist_name: element.primary_artists,
          year: element.year,
          duration: element.duration,
          language: element.language,
          label: element.label,
          encrypted_media_url: element.encrypted_media_url,
          preview_url: element.media_preview_url || null,
          stream_link: await GetStreamLink(element.encrypted_media_url),
          download_link_mp4: await GetDownloadLink(element.encrypted_media_url),
          download_link_mp3: await GetDownloadLinkAlt(
            element.media_preview_url
          ),
        });
      }
      songsObj["songs"] = songsArray;
      res.json(songsObj);
    });
});

function GetStreamLink(encrypted_id) {
  return axios
    .get(
      "https://www.jiosaavn.com/api.php?bitrate=320&api_version=4&_format=json&ctx=web6dot0&_marker=0&__call=song.generateAuthToken&url=" +
        encodeURIComponent(encrypted_id)
    )
    .then((response) => {
      return response.data.auth_url;
    });
}

function GetDownloadLink(encrypted_id) {
  return axios
    .get(
      "https://www.jiosaavn.com/api.php?bitrate=320&api_version=4&_format=json&ctx=web6dot0&_marker=0&__call=song.generateAuthToken&url=" +
        encodeURIComponent(encrypted_id)
    )
    .then((response) => {
      return CleanDownloadLink(response.data.auth_url);
    });
}

function GetDownloadLinkAlt(media_preview_url) {
  if (media_preview_url) {
    var url = media_preview_url.replace("preview", "h");
    url = url.replace("_96_p.mp4", "_320.mp3");
    return url;
  } else {
    return null;
  }
}

function CleanDownloadLink(auth_url) {
  if (auth_url) {
    var url = auth_url.split("?")[0];
    url = url.split("/")[3] + "/" + url.split("/")[4];
    url = "https://aac.saavncdn.com/" + url;
    return url;
  } else {
    return null;
  }
}

function fixImageUrl(img_url) {
  var fixedImageUrl = img_url.replace("150x150", "500x500");
  fixedImageUrl = fixedImageUrl.replace("http://", "https://");
  return fixedImageUrl;
}

app.listen(80);
