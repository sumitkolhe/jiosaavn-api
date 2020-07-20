const fixImageUrl = (img_url) => {
  var fixedImageUrl = img_url.replace("150x150", "500x500");
  fixedImageUrl = fixedImageUrl.replace("http://", "https://");
  return fixedImageUrl;
};
const CleanDownloadLink = (auth_url) => {
  if (auth_url) {
    var url = auth_url.split("?")[0];
    url = url.split("/")[3] + "/" + url.split("/")[4];
    url = "https://aac.saavncdn.com/" + url;
    return url;
  }
};

module.exports = { fixImageUrl, CleanDownloadLink };
