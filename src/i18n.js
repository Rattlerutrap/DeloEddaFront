import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './translations/en-translation.json'
import ru from './translations/ru-translation.json'

i18n 
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
        en: { translation: en },
        ru: { translation: ru },
    },
    fallbackLng: 'ru', 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;