import { ThemePayload } from "../../types";

export const SET_THEME = "SET_THEME";

export const setTheme = (theme: string) => ({
  type: SET_THEME,
  payload: { theme }
});

const defaultState = {
  name: "dark"
};

export default function (state = defaultState, { type, payload }: ThemePayload) {
  switch (type) {
    case SET_THEME:
      return { ...state, name: payload.theme };
    default:
      return state;
  }
}