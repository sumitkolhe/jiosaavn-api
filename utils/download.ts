export const getDownloadLinks = (song_download_link: string) => {
  if (song_download_link)
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
  return false;
};
