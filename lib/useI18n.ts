import { useLocale } from './LocaleContext';
import deTranslations from '../public/locales/de/common.json';
import enTranslations from '../public/locales/en/common.json';

const translations = {
  de: deTranslations,
  en: enTranslations,
};

export function useI18n() {
  const { locale } = useLocale();
  
  const t = (key: string): any => {
    const keys = key.split('.');
    let value: any = translations[locale];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return value || key;
  };

  return { t, locale };
}
