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
            part1: 'Name',
            part2: 'Surname',
            part3: 'Data',
            part4: 'Date',
            part5: 'Gender',
          }
        }
      },
      ua: {
        translation: {
          description: {
            part1: 'Iмя',
            part2: 'Прiзвище',
            part3: 'Даннi',
            part4: 'Дата',
            part5: 'Стать',
          }
        }
      },
      rus: {
        translation: {
          description: {
            part1: 'Имя',
            part2: 'Фамилия',
            part3: 'Данные',
            part4: 'Дата',
            part5: 'Пол',
          }
        }
      }
    }
  });

export default i18n;