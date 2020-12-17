import produce from "immer";
import { createActions } from "reduxsauce";

export const { Types: localeTypes, Creators: localeCreators } = createActions({
  switchLocale: ["localeName"],
});

export const initialState = { locale: "en" };

export const localeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case localeTypes.SWITCH_LOCALE:
        draft.locale = action.localeName;
        break;
    }
  });

export default localeReducer;
