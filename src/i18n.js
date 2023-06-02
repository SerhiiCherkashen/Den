import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          description: {
            part1: 'Car Edit <1>src/App.js</1> and save to reload.',
            part2: 'Learn React'
          }
        }
      },
      de: {
        translation: {
          description: {
            part1: 'Mashina Ändere <1>src/App.js</1> und speichere um neu zu laden.',
            part2: 'nihya'
          }
        }
      },
      ua: {
        translation: {
          description: {
            part1: 'Hyi / 2',
            part2: 'jaba  -  gaduking'
          }
        }
      }
    }
  });

export default i18n;