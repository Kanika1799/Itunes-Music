import { createSelector } from "reselect";

const getCurrentLocale = (state) => {
  return state.localeReducer.locale;
};

export const getCurrentLocaleSelector = createSelector(
  getCurrentLocale,
  (locale) => locale
);
