const axios = require("axios");
const url = require("../utils/urls");
const helper = require("../utils/helper");

const GetDownloadLinkFromPreview = (media_preview_url) => {
  var url = media_preview_url.replace("preview", "h");
  url = url.replace("_96_p.mp4", "_320.mp3");
  url = url.replace("http://", "https://");

  return axios
    .head(url)
    .then((response) => {
      if (response.status == 200) {
        console.log("checked preview | MP3 working");
        return url;
      }
    })
    .catch((err) => {
      console.log(
        "checked preview | MP3 NOT working | changing extension mp3 -> mp4"
      );
      var url = media_preview_url.replace("preview", "h");
      url = url.replace("_96_p.mp4", "_320.mp4");
      url = url.replace("http://", "https://");
      return url;
    });
};

const GetDownloadLinkFromAuthToken = (encrypted_id) => {
  return axios
    .get(url.tokenUrl + encodeURIComponent(encrypted_id))
    .then((response) => {
      console.log("no preview url | Falling back to generate AUTH Token");
      return helper.CleanDownloadLink(response.data.auth_url);
    })
    .catch((err) => {
      return "error";
    });
};

const GetStreamLink = (encrypted_id) => {
  return axios
    .get(url.tokenUrl + encodeURIComponent(encrypted_id))
    .then((response) => {
      return response.data.auth_url;
    })
    .catch((err) => {
      return "error";
    });
};

const GetSongId = (link) => {
  if (link.includes("jiosaavn.com/")) {
    return axios.get(link).then((response) => {
      if (
        response.status == 200 &&
        !response.data.includes("This page seems to be missing.")
      ) {
        var songID = response.data
          .split('"song":{"type":"')[1]
          .split('","image":')[0]
          .split('"')[8];
        return songID;
      } else {
        return null;
      }
    });
  } else return null;
};

const GenerateJSON = async (songsArray, element) => {
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
    stream_link: await GetStreamLink(element.encrypted_media_url),
    download_link: element.media_preview_url
      ? await GetDownloadLinkFromPreview(element.media_preview_url)
      : await GetDownloadLinkFromAuthToken(element.encrypted_media_url),
  });

  return songsArray;
};

const GenerateFastJSON = async (songsArray, element) => {
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
  });

  return songsArray;
};

module.exports = {
  GetDownloadLinkFromPreview,
  GetDownloadLinkFromAuthToken,
  GetStreamLink,
  GetSongId,
  GenerateJSON,
  GenerateFastJSON
};
