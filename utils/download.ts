export const getDownloadLinks = (song_download_link: string) => {
  return [
    song_download_link
      .replace("preview.saavncdn.com", "aac.saavncdn.com")
      .replace("_96_p", "_96"),
    song_download_link
      .replace("preview.saavncdn.com", "aac.saavncdn.com")
      .replace("_96_p", "_160"),
    song_download_link
      .replace("preview.saavncdn.com", "aac.saavncdn.com")
      .replace("_96_p", "_320"),
  ];
};
