export const getSearchSongsUrl = (song_name: string) => {
  return `https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&n=10&p=1&_marker=0&ctx=android&q=${song_name}`;
};

export const getSongDetailsUrl = (song_id: string) => {
  return `https://www.jiosaavn.com/api.php?__call=song.getDetails&cc=in&_marker=0%3F_marker%3D0&_format=json&pids=${song_id}`;
};

export const getAlbumDetailsUrl = (album_id: string) => {
  return `https://www.jiosaavn.com/api.php?__call=content.getAlbumDetails&_format=json&cc=in&_marker=0%3F_marker=0&albumid=${album_id}`;
};

export const getSearchAllUrl = (query: string) => {
  return `https://www.jiosaavn.com/api.php?__call=autocomplete.get&_format=json&_marker=0&ctx=web6dot0&query=${query}`;
};

export const getLyricsUrl = (song_id: string) => {
  return `https://www.jiosaavn.com/api.php?__call=lyrics.getLyrics&ctx=web6dot0&api_version=4&_format=json&_marker=0%3F_marker=0&lyrics_id=${song_id}`;
};

// export const getSongIdFromLink = (song_link:string) => {
//   if (song_link.includes("jiosaavn.com/")) {
//     return axios.get(link).then((response) => {
//       if (
//         response.status == 200 &&
//         !response.data.includes("This page seems to be missing.")
//       ) {
//         var songID = response.data
//           .split('"song":{"type":"')[1]
//           .split('","image":')[0]
//           .split('"')[8];
//         return songID;
//       } else {
//         return null;
//       }
//     });
//   } else return null;
// };

// export const getAuthUrl = (encrypted_id: string) => {
//   return `https://www.jiosaavn.com/api.php?bitrate=320&api_version=4&_format=json&ctx=web6dot0&_marker=0&__call=song.generateAuthToken&url=${encrypted_id}`;
// };
