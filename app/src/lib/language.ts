import type { Language } from '@/lib/types';

const DEFAULT_LANGUAGE: Language = 'en';
const LANGUAGE_STORAGE_KEY: string = 'spatial-duck-portfolio-language';

let currentLanguage: Language | null = null;

export function languageProvider(): Language {
  if (currentLanguage !== null) {
    return currentLanguage;
  }

  if (typeof window === 'undefined') {
    currentLanguage = DEFAULT_LANGUAGE;
    return currentLanguage;
  }

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

  if (storedLanguage === 'en' || storedLanguage === 'pt-BR') {
    currentLanguage = storedLanguage;
    return currentLanguage;
  }

  const browserLanguages =
    navigator.languages.length
      ? navigator.languages
      : [navigator.language];

  const prefersPortuguese = browserLanguages.some(
    (language) => language.toLowerCase().startsWith('pt'),
  );

  currentLanguage = prefersPortuguese ? 'pt-BR' : 'en';

  return currentLanguage;
}
