import { NowRequest, NowResponse } from "@vercel/node";
import { generateAlbumPayload } from "../utils/payload";
import { AxiosResponse } from "axios";
import { axiosInstance } from "../utils/config";
import { getAlbumDetailsUrl } from "../utils/endpoints";
import { setHeaders } from "../utils/headers";
import { albumDetails } from "types";

module.exports = async (req: NowRequest, res: NowResponse) => {
  setHeaders(res);
  const album_id = req.query.id as string;

  try {
    await axiosInstance
      .get(getAlbumDetailsUrl(album_id))
      .then((album_details: AxiosResponse<albumDetails>) => {
        console.log(album_details.data);
        res.json(generateAlbumPayload(album_details.data));
      });
  } catch (error) {
    res.json({
      status: error.status,
      message: error.message,
    });
  }
};
