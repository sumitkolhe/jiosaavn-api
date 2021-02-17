import { NowRequest, NowResponse } from "@vercel/node";
import { generatePayload } from "../utils/payload";
import { AxiosResponse } from "axios";
import { axiosInstance } from "../utils/axios";
import { getSongDetailsUrl } from "../utils/endpoint";
import { setHeaders } from "../utils/headers";
import { searchDetails, songDetails } from "types";
//import { songDetails } from "types/song-details";

module.exports = async (req: NowRequest, res: NowResponse) => {
  setHeaders(res);
  const song_id = req.query.id as string;

  try {
    await axiosInstance
      .get(getSongDetailsUrl(song_id))
      .then((song_details: AxiosResponse<any>) => {
        res.json(generatePayload(song_details.data[song_id]));
      });
  } catch (error) {
    res.json({
      status: error.status,
      message: error.message,
    });
  }
};
