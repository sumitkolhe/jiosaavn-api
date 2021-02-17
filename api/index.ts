import { NowRequest, NowResponse } from "@vercel/node";

module.exports = async (_req: NowRequest, res: NowResponse) => {
  res.json({
    server: "Online",
    Documentation: "https://github.com/sumitkolhe/jiosaavn-api",
  });
};
