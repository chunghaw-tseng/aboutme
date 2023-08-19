import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';
import translationJA from './locales/ja/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  jp:{
      translation: translationJA
  },
  es: {
      translation: translationES
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;