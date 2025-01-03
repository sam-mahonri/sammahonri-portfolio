export type Locale = (typeof locales)[number];

export const locales = ['pt', 'en', 'es'] as const;
export const defaultLocale: Locale = 'pt';
export const defaultBadHour: number = 3;