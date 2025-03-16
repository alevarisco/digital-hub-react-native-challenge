import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import ns1 from './translations/es/es.json';
import ns2 from './translations/en/en.json';

export const resources = {
  es: {
    ns: ns1,
  },
  en: {
    ns: ns2,
  },
} as const;

i18n.use(initReactI18next).init({
  // compatibilityJSON: 'v3',
  resources,
  lng: 'en',
});
