import { NowRequest, NowResponse } from "@vercel/node";
import { generateSongPayload } from "../utils/payload";
import { AxiosResponse } from "axios";
import { axiosInstance } from "../utils/config";
import { getSongDetailsUrl } from "../utils/endpoints";
import { setHeaders } from "../utils/headers";
import { songDetails } from "types";

module.exports = async (req: NowRequest, res: NowResponse) => {
  setHeaders(res);
  const song_id = req.query.id as string;

  try {
    await axiosInstance
      .get(getSongDetailsUrl(song_id))
      .then((song_details: AxiosResponse<songDetails | any>) => {
        res.json(generateSongPayload(song_details.data[song_id]));
      });
  } catch (error) {
    res.json({
      status: error.status,
      message: error.message,
    });
  }
};
