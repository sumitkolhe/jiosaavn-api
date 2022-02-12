import { NowRequest, NowResponse } from "@vercel/node";
import { generateAlbumPayload } from "../utils/payload";
import { AxiosResponse } from "axios";
import { axiosInstance } from "../utils/config";
import {
  getAlbumDetailsByTokenUrl,
  getAlbumDetailsUrl,
} from "../utils/endpoints";
import { setHeaders } from "../utils/headers";
import { albumDetails } from "types";
import { extractIdFromLink } from "../utils/validator";

module.exports = async (req: NowRequest, res: NowResponse) => {
  setHeaders(res);
  const album_id = req.query.id as string;
  const album_token = req.query.link as string;
  if ((!album_id && !album_token) || (album_id && album_token))
    res.status(400).json({ message: "incorrect query parameters" });

  try {
    if (album_id) {
      await axiosInstance
        .get(getAlbumDetailsUrl(album_id))
        .then((album_details: AxiosResponse<albumDetails>) => {
          res.json(generateAlbumPayload(album_details.data));
        });
    } else if (album_token) {
      const link = extractIdFromLink(album_token, "album");
      if (!link)
        res.status(400).json({
          message: "invalid link",
        });
      await axiosInstance
        .get(getAlbumDetailsByTokenUrl(link))
        .then((album_details: AxiosResponse<albumDetails>) => {
          res.json(generateAlbumPayload(album_details.data));
        });
    }
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
    });
  }
};
