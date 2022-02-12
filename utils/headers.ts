import { NowResponse } from "@vercel/node";

export const setHeaders = (res: NowResponse) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate");
  res.setHeader("Open-Source", "https://github.com/sumitkolhe/jiosaavn-api");
  res.setHeader(
    "Author",
    "Sumit Kolhe, https://github.com/sumitkolhe/jiosaavn-api"
  );
  return res;
};
