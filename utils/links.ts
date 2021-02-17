export const getSearchAllUrl = (query: string) => {
  return `https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&n=5&p=1&_marker=0&ctx=android&q=${query}`;
};

export const getSongDetailsUrl = (song_id: string) => {
  return `https://www.jiosaavn.com/api.php?__call=song.getDetails&cc=in&_marker=0%3F_marker%3D0&_format=json&pids=${song_id}`;
};

export const getSearchSongsUrl = (song_name: string) => {
  return `https://www.jiosaavn.com/api.php?__call=autocomplete.get&query=${song_name}&_format=json&_marker=0&ctx=web6dot0`;
};

// export const getAuthUrl = (encrypted_id: string) => {
//   return `https://www.jiosaavn.com/api.php?bitrate=320&api_version=4&_format=json&ctx=web6dot0&_marker=0&__call=song.generateAuthToken&url=${encrypted_id}`;
// };
