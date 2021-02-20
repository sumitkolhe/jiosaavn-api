import { NowRequest, NowResponse } from "@vercel/node";
import { generateAlbumPayload, generateSongPayload } from "../utils/payload";
import { AxiosResponse } from "axios";
import { axiosInstance } from "../utils/config";
import { getAlbumSearchUrl, getSongSearchUrl } from "../utils/endpoints";
import { setHeaders } from "../utils/headers";
import {
  songSearchDetails,
  songDetails,
  albumDetails,
  albumSearchDetails,
} from "types";

const searchSongs = async (song_name: string, res: NowResponse) => {
  try {
    await axiosInstance
      .get(getSongSearchUrl(song_name))
      .then((song_details: AxiosResponse<songSearchDetails>) => {
        let songs = new Array();
        song_details.data.results.forEach((song: songDetails) => {
          songs.push(generateSongPayload(song));
        });
        res.json(songs);
      });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
    });
  }
};

const searchAlbums = async (album_name: string, res: NowResponse) => {
  try {
    await axiosInstance
      .get(getAlbumSearchUrl(album_name))
      .then((album_details: AxiosResponse<albumSearchDetails>) => {
        let albums = new Array();
        album_details.data.results.forEach((album: albumDetails) => {
          albums.push(generateAlbumPayload(album));
        });
        res.json(albums);
      });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
    });
  }
};

module.exports = async (req: NowRequest, res: NowResponse) => {
  setHeaders(res);
  const song_name = req.query.song as string;
  const album_name = req.query.album as string;

  if (song_name) searchSongs(song_name, res);
  else if (album_name) searchAlbums(album_name, res);
  else res.status(400).json({ message: "wrong query parameters" });
};
