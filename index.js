axios = require("axios");
const express = require("express");
const UA = require("user-agents");
const userAgentCreator = new UA({ deviceCategory: "desktop" });
const HttpsProxyAgent = require("https-proxy-agent");
const app = express();
const cors = require("cors");
//const httpsAgent = new HttpsProxyAgent({ host: "103.224.39.2", port: "82" });
app.use(cors());

app.get("/songs/:query", async (req, res) => {
  //axios.defaults.headers.common["User-Agent"] = userAgentCreator.random().toString();

  var query = req.params.query;
  console.log(query);
  var songsArray = new Array();
  var songsObj = new Object();
  axios
    .get(
      "https://proxy.serverone.workers.dev/-----https://jiosaavn.com/api.php?_format=json&n=6&p=1&_marker=0&ctx=android&__call=search.getResults&q=" +
        query
    )
    .then(async (response) => {
      var songs = response.data.results;

      console.log(response.config);
      if (songs) {
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
            preview_url: element.media_preview_url,
            stream_link: await GetStreamLink(element.encrypted_media_url),
            download_link: element.media_preview_url
              ? await GetDownloadLinkFromPreview(element.media_preview_url)
              : await GetDownloadLinkFromAuthToken(element.encrypted_media_url),
          });
        }
        songsObj["songs"] = songsArray;
        res.json(songsObj);
      } else {
        res.json({ error: "please try again after sometime" });
      }
    });
});

function GetDownloadLinkFromAuthToken(encrypted_id) {
  return axios
    .get(
      "https://proxy.serverone.workers.dev/-----https://jiosaavn.com/api.php?bitrate=320&api_version=4&_format=json&ctx=web6dot0&_marker=0&__call=song.generateAuthToken&url=" +
        encodeURIComponent(encrypted_id)
    )
    .then((response) => {
      return CleanDownloadLink(response.data.auth_url);
    })
    .catch((err) => {
      return "error";
    });
}

function GetDownloadLinkFromPreview(media_preview_url) {
  var url = media_preview_url.replace("preview", "aac");
  url = url.replace("_96_p.mp4", "_320.mp3");

  return axios
    .head(url)
    .then((response) => {
      return url;
    })
    .catch((err) => {
      var url = media_preview_url.replace("preview", "aac");
      url = url.replace("_96_p.mp4", "_320.mp4");
      return url;
    });
}

function CleanDownloadLink(auth_url) {
  if (auth_url) {
    var url = auth_url.split("?")[0];
    url = url.split("/")[3] + "/" + url.split("/")[4];
    url = "https://aac.saavncdn.com/" + url;
    return url;
  }
}

function GetStreamLink(encrypted_id) {
  return axios
    .get(
      "https://proxy.serverone.workers.dev/-----https://jiosaavn.com/api.php?bitrate=320&api_version=4&_format=json&ctx=web6dot0&_marker=0&__call=song.generateAuthToken&url=" +
        encodeURIComponent(encrypted_id)
    )
    .then((response) => {
      return response.data.auth_url;
    })
    .catch((err) => {
      return "error";
    });
}

function fixImageUrl(img_url) {
  var fixedImageUrl = img_url.replace("150x150", "500x500");
  fixedImageUrl = fixedImageUrl.replace("http://", "https://");
  return fixedImageUrl;
}

app.listen(80);
