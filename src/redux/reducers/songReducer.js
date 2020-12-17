import produce from "immer";
import { createActions } from "reduxsauce";

export const { Types: songTypes, Creators: songCreators } = createActions({
  requestSimilarSongs: ["songPhrase"],
  setSimilarSongs: ["similarSongs"],
  setSimilarSongsError: ["similarSongsError"],
  clearSongs: [],
});

export const initialState = {
  songPhrase: null,
  similarSongs: [],
  similarSongsError: null,
};
console.log(initialState, "initialState");

export const songReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case songTypes.REQUEST_SIMILAR_SONGS:
        draft.songPhrase = action.songPhrase;
        break;
      case songTypes.SET_SIMILAR_SONGS:
        draft.similarSongs = action.similarSongs;
        break;
      case songTypes.SET_SIMILAR_SONGS_ERROR:
        draft.similarSongsError = action.similarSongsError;
        break;
      case songTypes.CLEAR_SONGS:
        return initialState;
    }
  });

export default songReducer;
