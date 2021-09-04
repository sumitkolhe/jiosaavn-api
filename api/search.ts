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

const searchQuery = async (song_name: string, res: NowResponse) => {
  try {
    await axiosInstance
      .get(getSongSearchUrl(song_name)).then(resp=>resp.data)
      .then(data => {
        res.json(data);
      });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
    });
  }
};

module.exports = async (req: NowRequest, res: NowResponse) => {
  setHeaders(res);
  const query = req.query.query as string;

  if (query) searchQuery(query, res);
  else res.status(400).json({ message: "wrong query parameters" });
};
