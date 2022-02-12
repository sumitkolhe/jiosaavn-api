export const extractIdFromLink = (link: string, type: string): string => {
  if (link.includes(`jiosaavn.com/${type}/`)) {
    return link.split(`${type}/`)[1].split("/")[1].slice(0, 11);
  }
  return "";
};
 