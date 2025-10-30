import { TranslocoGlobalConfig } from '@jsverse/transloco-utils';

export enum AvailableLanguages {
  EN = 'en',
  ES = 'es',
}

export const AvailablesLanguages = [
  AvailableLanguages.EN,
  AvailableLanguages.ES,
];

const config: TranslocoGlobalConfig = {
  rootTranslationsPath: 'src/assets/i18n/',
  langs: AvailablesLanguages,
  keysManager: {},
  defaultLang: AvailableLanguages.ES,
};

export default config;
