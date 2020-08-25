import { DEFAULT_LOCALE } from "../../translations";
import { LocalizationPayload } from "../../types";


export const SET_LOCALIZATION = "SET_LOCALIZATION";

export const setLocale = (locale: string) => ({
  type: SET_LOCALIZATION,
  payload: { locale }
});

const defaultState = {
  locale: DEFAULT_LOCALE
};

export default function (state = defaultState, { type, payload }: LocalizationPayload) {
  switch (type) {
    case SET_LOCALIZATION:
      return { ...state, locale: payload.locale };
    default:
      return state;
  }
}