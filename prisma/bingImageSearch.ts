import axios from "axios";
//const images = {};
import images from "./imageData.json";
import { experienceData } from "./chatgpt_experience_data";
import * as fs from "fs";

const BING_ENDPOINT = "https://api.bing.microsoft.com/v7.0/images/search?q=";

export const getImagesFromQuery = async (
  query: string,
  count: number = 4
): Promise<string[]> => {
  const response = await axios.get(BING_ENDPOINT + query.replaceAll(" ", "+"), {
    headers: {
      "Ocp-Apim-Subscription-Key": process.env.BING_SEARCH_KEY,
    },
  });
  return response.data.value
    .map((v: { contentUrl: string }) => v.contentUrl)
    .slice(0, count);
};
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
// Generate images when it is run
(async function () {
  const keys = Object.keys(images ?? { NONE: "" });
  let newKeys: Record<string, string[]> = { ...images };
  for (const experience of experienceData) {
    if (!keys.includes(experience.location)) {
      // Generate some new image data for this location
      const imageUrls = await getImagesFromQuery(experience.location);
      const filteredImages = await Promise.all(
        imageUrls.map(async (url) => {
          const response = await axios.get(url).catch(() => {});
          return { url, valid: response?.status == 200 ?? false };
        })
      );

      newKeys[experience.location] = filteredImages
        .filter((v) => v.valid)
        .map((v) => v.url);
    }
    await delay(400);
  }
  fs.writeFile(
    "prisma/imageData.json",
    JSON.stringify(newKeys),
    "ascii",
    () => {}
  );
})();
