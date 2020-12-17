import { combineReducers } from "redux";
import localeReducer from "./localeReducer";
import songReducer from "./songReducer";

export default combineReducers({ songReducer, localeReducer });
