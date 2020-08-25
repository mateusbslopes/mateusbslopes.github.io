export type Theme = {
  name: string;
}

export type Localization = {
  name: string;
}

export type Payload = {
  type: string;
  payload: any;
}

export type ThemePayload = Payload & {
  payload: Theme;
}

export type LocalizationPayload = Payload & {
  payload: Localization;
}