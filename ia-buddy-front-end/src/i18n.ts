import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enJson from './locales/en/translation.json';
import frJson from './locales/fr/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr',
    debug: false,
    interpolation: { escapeValue: false },
    resources: {
        fr: { translation: frJson },
        en: { translation: enJson }
    }
  });

export default i18n;
