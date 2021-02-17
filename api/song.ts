import { NowRequest, NowResponse } from "@vercel/node";
import { songDetails } from "../types/song-details";
import { generatePayload } from "./utils/payload";
import { AxiosResponse } from "axios";
import { axiosInstance } from "./utils/axios";
import { getSongIdUrl } from "./utils/links";

module.exports = async (req: NowRequest, res: NowResponse) => {
  const song_id = req.query.id as string;

  try {
    await axiosInstance
      .get(getSongIdUrl(song_id))
      .then((song_details: AxiosResponse<songDetails>) => {
        res.json(generatePayload(song_details.data, song_id));
      });
  } catch (error) {
    res.json({
      status: error.status,
      message: error.message,
    });
  }
};
