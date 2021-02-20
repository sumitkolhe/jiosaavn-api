import { NowRequest, NowResponse } from "@vercel/node";

module.exports = async (_req: NowRequest, res: NowResponse) => {
  res.json({
    Server: "online",
    Documentation: "https://docs.saavn.me",
    Github_repo: "https://github.com/sumitkolhe/jiosaavn-api",
    Author: "https://sumit.codes",
  });
};
