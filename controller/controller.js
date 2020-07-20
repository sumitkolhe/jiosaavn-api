const axios = require("axios");
const url = require('../utils/urls');

const GetDownloadLinkFromPreview = (media_preview_url) => {
  var url = media_preview_url.replace("preview", "aac");
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
      var url = media_preview_url.replace("preview", "aac");
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

module.exports = {
  GetDownloadLinkFromPreview,
  GetDownloadLinkFromAuthToken,
  GetStreamLink,
};
