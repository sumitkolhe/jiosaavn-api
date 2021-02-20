const RESULT_LIMIT: number = 10;

// Search by query
export const getSongSearchUrl = (song_name: string): string => {
  return `https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&n=${RESULT_LIMIT}&p=1&_marker=0&ctx=android&q=${song_name}`;
};

export const getAlbumSearchUrl = (album_name: string): string => {
  return `https://www.jiosaavn.com/api.php?__call=search.getAlbumResults&_format=json&n=${RESULT_LIMIT}&p=1&_marker=0&ctx=android&q=${album_name}`;
};

// Details
export const getSongDetailsUrl = (song_id: string): string => {
  return `https://www.jiosaavn.com/api.php?__call=song.getDetails&cc=in&_marker=0%3F_marker%3D0&_format=json&pids=${song_id}`;
};

export const getAlbumDetailsUrl = (album_id: string): string => {
  return `https://www.jiosaavn.com/api.php?__call=content.getAlbumDetails&_format=json&cc=in&_marker=0%3F_marker=0&albumid=${album_id}`;
};

// Details by Perma-Token
export const getSongDetailsByTokenUrl = (token: string): string => {
  return `https://www.jiosaavn.com/api.php?__call=webapi.get&token=${token}&type=song&includeMetaTags=0&ctx=web6dot0&_format=json&_marker=0
  `;
};

export const getAlbumDetailsByTokenUrl = (token: string): string => {
  return `https://www.jiosaavn.com/api.php?__call=webapi.get&token=${token}&type=album&includeMetaTags=0&ctx=web6dot0&_format=json&_marker=0
  `;
};

// Lyrics
export const getLyricsUrl = (song_id: string): string => {
  return `https://www.jiosaavn.com/api.php?__call=lyrics.getLyrics&ctx=web6dot0&_format=json&_marker=0%3F_marker=0&lyrics_id=${song_id}`;
};
