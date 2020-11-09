const axios = require("axios");
const express = require("express");
const UA = require("user-agents");
const controller = require("./controller/controller");
const userAgentCreator = new UA({ deviceCategory: "desktop" });
const url = require("./utils/urls");
const app = express();
const cors = require("cors");

//const HttpsProxyAgent = require("https-proxy-agent");
//const httpsAgent = new HttpsProxyAgent({ host: "103.224.39.2", port: "82" });
app.use(cors());

app.get("/", (req, res) => {
  res.json("online");
});

app.get("/songs/*", async (req, res) => {
  var user = userAgentCreator.random().toString();
  axios.defaults.headers.common["User-Agent"] = user;
  var link = req.params[0];
  var songId = await controller.GetSongId(link);
  var songsArray = new Array();
  var songsObj = new Object();
  if (songId != null) {
    axios.get(url.songIdUrl + songId).then(async (response) => {
      var element = response.data[songId];
      await controller.GenerateJSON(songsArray, element);
      songsObj["result"] = songsArray;
      res.json(songsObj);
    });
  } else {
    res.json({ error: "Invalid link" });
  }
});

app.get("/fastsearch/:search", async (req, res) => {
  var user = userAgentCreator.random().toString();
  axios.defaults.headers.common["User-Agent"] = user;
  var query = req.params.search;
  var songsArray = new Array();
  var songsObj = new Object();
  axios.get(url.searchUrl + query).then(async (response) => {
    var songs = response.data.results;

    if (songs) {
      for (element of songs) {
        await controller.GenerateFastJSON(songsArray, element);
      }
      songsObj["result"] = songsArray;
      res.json(songsObj);
    } else {
      res.json({ error: "please try again after sometime" });
    }
  });
});

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
        await controller.GenerateJSON(songsArray, element);
      }
      songsObj["result"] = songsArray;
      res.json(songsObj);
    } else {
      res.json({ error: "please try again after sometime" });
    }
  });
});

app.listen(80);
