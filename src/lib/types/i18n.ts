export type TranslationObject = { [key: string]: string | TranslationObject };
export type LanguageTranslations = { [namespace: string]: TranslationObject };
export type Translations = { [locale: string]: LanguageTranslations };
