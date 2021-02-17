export const sanitizeImage = (song_image: string) => {
  return song_image.replace("150x150", "500x500");
};
