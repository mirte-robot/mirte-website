import nl from "./locales/nl.json";
import en from "./locales/en.json";

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: { nl, en },
  }))