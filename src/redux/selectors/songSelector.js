import { createSelector } from "reselect";

const allSimilarSongs = (state) => {
  return state.songReducer.similarSongs;
};

const getSongPhrase = (state) => {
  return state.songReducer.songPhrase;
};

const getSimilarSongError = (state) => {
  return state.songReducer.similarSongsError;
};

export const allSimilarSongsSelector = createSelector(
  allSimilarSongs,
  (similarSongs) => similarSongs
);

export const getSongPhraseSelector = createSelector(
  getSongPhrase,
  (songPhrase) => songPhrase
);

export const getSimilarSongErrorSelector = createSelector(
  getSimilarSongError,
  (queryError) => queryError
);
