export const getDownloadLinks = (link: string) => {
  return [
    link
      .replace("preview.saavncdn.com", "aac.saavncdn.com")
      .replace("_96_p", "_96"),
    link
      .replace("preview.saavncdn.com", "aac.saavncdn.com")
      .replace("_96_p", "_160"),
    link
      .replace("preview.saavncdn.com", "aac.saavncdn.com")
      .replace("_96_p", "_320"),
  ];
};
