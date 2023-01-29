import axios from "axios";

const BING_ENDPOINT = "https://api.bing.microsoft.com/v7.0/images/search?q=";

export const getImagesFromQuery = async (query: string, count: number = 4) => {
  const response = await axios.get(BING_ENDPOINT + query.replaceAll(" ", "+"), {
    headers: {
      "Ocp-Apim-Subscription-Key": process.env.BING_SEARCH_KEY,
    },
  });
  console.log(response.data, response.data.value[0]);
};
