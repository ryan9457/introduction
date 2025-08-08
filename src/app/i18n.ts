import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

if (!i18n.isInitialized) {
  i18n
    // load translation using http -> see /public/locales
    .use(Backend)
    // detect user language
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    .init({
      fallbackLng: 'en',
      lng: 'en',
      ns: ['translation'],
      debug: true,
      interpolation: { escapeValue: false },
      backend: {
        loadPath: 'locales/{{lng}}/{{ns}}.json', // 沒有 basePath 最前面 '/' 去掉改成相對路徑
      },
      react: {
        useSuspense: false,
      },
    });
}

export default i18n;
