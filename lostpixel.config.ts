import { CustomProjectConfig } from "lost-pixel";

export const config: CustomProjectConfig = {
  pageShots: {
    pages: [{ path: "/", name: "" }],
    baseUrl: "http://172.17.0.1:3000",
  },
  lostPixelProjectId: "clowcrkf92s94g80eogqsmn5j",
  apiKey: process.env.LOST_PIXEL_API_KEY,
  generateOnly: true,
  failOnDifference: true,
};
