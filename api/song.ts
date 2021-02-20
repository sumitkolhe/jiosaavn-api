import { NowRequest, NowResponse } from "@vercel/node";
import { generateSongPayload } from "../utils/payload";
import { AxiosResponse } from "axios";
import { axiosInstance } from "../utils/config";
import {
  getSongDetailsByTokenUrl,
  getSongDetailsUrl,
} from "../utils/endpoints";
import { setHeaders } from "../utils/headers";
import { songDetails } from "types";
import { extractIdFromLink } from "../utils/validator";

module.exports = async (req: NowRequest, res: NowResponse) => {
  setHeaders(res);
  const song_id = req.query.id as string;
  const song_token = req.query.link as string;
  if ((!song_id && !song_token) || (song_id && song_token))
    res.status(400).json({ message: "incorrect query parameters" });

  try {
    if (song_id) {
      await axiosInstance
        .get(getSongDetailsUrl(song_id))
        .then((song_details: AxiosResponse<songDetails | any>) => {
          res.json(generateSongPayload(song_details.data[song_id]));
        });
    } else if (song_token) {
      const link = extractIdFromLink(song_token, "song");
      if (!link)
        res.status(400).json({
          message: "invalid link",
        });
      await axiosInstance
        .get(getSongDetailsByTokenUrl(link))
        .then((song_details: AxiosResponse<songDetails | any>) => {
          res.json(generateSongPayload(song_details.data.songs[0]));
        });
    }
  } catch (error) {
    res.status(400).json({
      message: "something went wrong",
    });
  }
};
