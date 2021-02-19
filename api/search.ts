import { NowRequest, NowResponse } from "@vercel/node";
import { generateSongPayload } from "../utils/payload";
import { AxiosResponse } from "axios";
import { axiosInstance } from "../utils/axios";
import { getSearchAllUrl, getSearchSongsUrl } from "../utils/endpoints";
import { setHeaders } from "../utils/headers";
import {
  songSearchDetails,
  songDetails,
  ablumSearchDetails,
  albumDetails,
} from "types";

const searchSongs = async (song_name: string, res: NowResponse) => {
  try {
    await axiosInstance
      .get(getSearchSongsUrl(song_name))
      .then((song_details: AxiosResponse<songSearchDetails>) => {
        let songs = new Array();
        song_details.data.results.forEach((song: songDetails) => {
          songs.push(generateSongPayload(song));
        });
        res.json(songs);
      });
  } catch (error) {
    res.json({
      status: error.status,
      message: error.message,
    });
  }
};

const searchAlbums = async (album_name: string, res: NowResponse) => {
  try {
    console.log(getSearchAllUrl(album_name));
    await axiosInstance
      .get(getSearchAllUrl(album_name))
      .then((song_details: AxiosResponse<ablumSearchDetails>) => {
        let albums = new Array();
        console.log(song_details.data.albums.data);
        song_details.data.albums.data.forEach((song: albumDetails) => {
          albums.push(generateSongPayload(song));
        });
        res.json(albums);
      });
  } catch (error) {
    res.json({
      status: error.status,
      message: error.message,
    });
  }
};

module.exports = async (req: NowRequest, res: NowResponse) => {
  setHeaders(res);
  const song_name = req.query.song as string;
  const album_name = req.query.album as string;

  if (song_name) searchSongs(song_name, res);
  else if (album_name) searchAlbums(album_name, res);
};
