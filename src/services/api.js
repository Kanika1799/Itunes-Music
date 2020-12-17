import { create } from "apisauce";

const api = create({
  baseURL: "https://itunes.apple.com",
});

export const getSimilarSongs = async (searchTerm) => {
  let similarSongs = [];

  const resp = await api.get("/search?term=" + searchTerm);
  console.log(resp, "response");
  similarSongs = resp.data.results;
  console.log("similarSongs", similarSongs);
  return similarSongs;
};
