import ptBR from "./pt-BR";
import enUS from "./en-US";

export const DEFAULT_LOCALE = navigator.language;

export default (locale: string) => {
  switch (locale) {
    case 'pt-BR':
      return ptBR;
    case 'en-US':
      return enUS;
    default:
      return ptBR;
  }
};