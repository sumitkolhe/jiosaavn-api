const axios = require("axios");
const express = require("express");
const UA = require("user-agents");
const helper = require("./utils/helper");
const controller = require("./controller/controller");
const userAgentCreator = new UA({ deviceCategory: "desktop" });
//const HttpsProxyAgent = require("https-proxy-agent");
const url = require("./utils/urls");
const app = express();
const cors = require("cors");

//const httpsAgent = new HttpsProxyAgent({ host: "103.224.39.2", port: "82" });
app.use(cors());

app.get("/songs/*", async (req, res) => {
  var link = req.params[0];
  var songId = await GetSongId(link);
  var songsArray = new Array();
  var songsObj = new Object();
  if (songId != null) {
    axios.get(url.songIdUrl + songId).then(async (response) => {
      var element = response.data[songId];
      songsArray.push({
        song_id: element.id,
        song_title: element.song,
        song_url: element.perma_url,
        song_image: await helper.fixImageUrl(element.image),
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
        stream_link: await controller.GetStreamLink(
          element.encrypted_media_url
        ),
        download_link: element.media_preview_url
          ? await controller.GetDownloadLinkFromPreview(
              element.media_preview_url
            )
          : await controller.GetDownloadLinkFromAuthToken(
              element.encrypted_media_url
            ),
      });
      songsObj["result"] = songsArray;
      res.json(songsObj);
    });
  } else {
    res.json({ error: "Invalid link" });
  }
});

function GetSongId(link) {
  if (link.includes("jiosaavn.com/song/")) {
    return axios.get(link).then((response) => {
      if (
        response.status == 200 &&
        !response.data.includes("This page seems to be missing.")
      ) {
        var songID = response.data
          .split('"song":{"type":"')[1]
          .split('","image":')[0]
          .split('"')[4];
        return songID;
      } else {
        return null;
      }
    });
  } else return null;
}

app.get("/search/:search", async (req, res) => {
  var user = userAgentCreator.random().toString();
  axios.defaults.headers.common["User-Agent"] = user;

  var query = req.params.search;

  var songsArray = new Array();
  var songsObj = new Object();
  axios.get(url.searchUrl + query).then(async (response) => {
    var songs = response.data.results;

    if (songs) {
      for (element of songs) {
        songsArray.push({
          song_id: element.id,
          song_title: element.song,
          song_url: element.perma_url,
          song_image: await helper.fixImageUrl(element.image),
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
          stream_link: await controller.GetStreamLink(
            element.encrypted_media_url
          ),
          download_link: element.media_preview_url
            ? await controller.GetDownloadLinkFromPreview(
                element.media_preview_url
              )
            : await controller.GetDownloadLinkFromAuthToken(
                element.encrypted_media_url
              ),
        });
      }
      songsObj["songs"] = songsArray;
      res.json(songsObj);
    } else {
      res.json({ error: "please try again after sometime" });
    }
  });
});

app.listen(80);
