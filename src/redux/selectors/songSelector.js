import { createSelector } from "reselect";

const allSimilarSongs = (state) => {
  return state.songReducer.similarSongs;
};

export const allSimilarSongsSelector = createSelector(
  allSimilarSongs,
  (similarSongs) => similarSongs
);
