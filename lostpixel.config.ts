import { CustomProjectConfig } from "lost-pixel";

export const config: CustomProjectConfig = {
  storybookShots: {
    storybookUrl: "./storybook-static",
  },

  lostPixelProjectId: "clowcrkf92s94g80eogqsmn5j",
  apiKey: process.env.LOST_PIXEL_API_KEY,
  generateOnly: true,
  failOnDifference: true,
};
