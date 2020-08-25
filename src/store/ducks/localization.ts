import { LocalizationPayload } from "../../types";

export const SET_LOCALIZATION = "SET_LOCALIZATION";

export const setTheme = (localization: string) => ({
  type: SET_LOCALIZATION,
  payload: { localization }
});

const defaultState = {
  localization: "pt-BR"
};

export default function (state = defaultState, { type, payload }: LocalizationPayload) {
  switch (type) {
    case SET_LOCALIZATION:
      return { ...state, localization: payload.localization };
    default:
      return state;
  }
}