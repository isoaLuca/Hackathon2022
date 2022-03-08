import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import _locale from '../_locale.json';

export const initInternationalization = (Lng: string): any => i18next.use(initReactI18next).init({
    debug: false,
    defaultNS: 'translations',

    fallbackLng: Lng,
    interpolation: {
      escapeValue: false, //  not needed for react!!
      formatSeparator: ',',
    },
    keySeparator: false, //  we use content as keys
    //  have a common namespace used around the full app
    ns: ['translations'],
    react: {
      // wait: true,
      useSuspense: false,
    },
    //  we init with resources
    resources: _locale,
  });