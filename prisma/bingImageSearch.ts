import axios from "axios";
import images from "./imageData.json";
import { experienceData } from "./chatgpt_experience_data";
import * as fs from "fs";

const BING_ENDPOINT = "https://api.bing.microsoft.com/v7.0/images/search?q=";

export const getImagesFromQuery = async (
  query: string,
  count: number = 4
): string[] => {
  const response = await axios.get(BING_ENDPOINT + query.replaceAll(" ", "+"), {
    headers: {
      "Ocp-Apim-Subscription-Key": process.env.BING_SEARCH_KEY,
    },
  });
  console.log(response.data.value);
  return (response.data.value.map((v) => v.contentUrl) as string[]).slice(
    0,
    count
  );
};
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// Generate images when it is run
(async function () {
  const keys = Object.keys(images ?? { NONE: "" });
  let newKeys: Record<string, string[]> = { ...images };
  for (const experience of experienceData) {
    if (!keys.includes(experience.location)) {
      // Generate some new image data for this location
      const imageUrls = await getImagesFromQuery(experience.location);
      newKeys[experience.location] = imageUrls;
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