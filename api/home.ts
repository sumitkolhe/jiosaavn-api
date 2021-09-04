import { NowRequest, NowResponse } from "@vercel/node";
import { generateAlbumPayload, generateSongPayload } from "../utils/payload";
import { AxiosResponse } from "axios";
import { axiosInstance } from "../utils/config";
import { getHomeUrl } from "../utils/endpoints";
import { setHeaders } from "../utils/headers";

module.exports = async (req: NowRequest, res: NowResponse) => {
  setHeaders(res);
  try {
    await axiosInstance.get(getHomeUrl()).then(resp => resp.data).then(data => {
      res.json(data);
    });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
    });
  }
};
