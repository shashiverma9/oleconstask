import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';



i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
  supportedLngs:['en','hi'],
  fallbackLng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    format: function(value, format, lng) {
      if (format === 'uppercase') return value.toUpperCase();
      return value;
    }
  },
  backend:{
    loadPath: '/assets/locale/{{lng}}/translation.json',
  },
  detection:{
    order: ['htmlTag','cookie','querystring','localStorage', 'navigator', 'path', 'subdomain'],
    caches: ['cookie'],
  },
  react: {
    useSuspense: false,
  }
});

export default i18n;