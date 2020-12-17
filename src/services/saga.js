import { call, put, takeLatest } from "redux-saga/effects";
import { getSimilarSongs } from "./api";

function* fetchSongs(action) {
  try {
    const similarSongs = yield call(getSimilarSongs, action.songPhrase);
    console.log(similarSongs, "similarSongsssssss");
    yield put({ type: "SET_SIMILAR_SONGS", similarSongs });
  } catch (e) {
    console.log("eee", e);
    yield put({ type: "SET_SIMILAR_SONGS_ERROR", similarSongsError: e });
  }
}

function* mySaga() {
  yield takeLatest("REQUEST_SIMILAR_SONGS", fetchSongs);
}

export default mySaga;
