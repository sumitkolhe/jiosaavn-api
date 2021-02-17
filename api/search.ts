import { NowRequest, NowResponse } from "@vercel/node";
import { generatePayload } from "../utils/payload";
import { AxiosResponse } from "axios";
import { axiosInstance } from "../utils/axios";
import { getSearchSongsUrl } from "../utils/endpoint";
import { setHeaders } from "../utils/headers";
import { searchDetails, songDetails } from "types";

module.exports = async (req: NowRequest, res: NowResponse) => {
  setHeaders(res);
  const song_name = req.query.name as string;

  try {
    await axiosInstance
      .get(getSearchSongsUrl(song_name))
      .then((song_details: AxiosResponse<searchDetails>) => {
        let respo= new Array();
        song_details.data.results.forEach((song: songDetails) => {
          respo.push(generatePayload(song));
        });
        res.json(respo);
      });
  } catch (error) {
    res.json({
      status: error.status,
      message: error.message,
    });
  }
};
