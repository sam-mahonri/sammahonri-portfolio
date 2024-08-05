import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['pt', 'en', 'ru', 'ja', 'es', 'fr', 'it', 'de'] as const;
export const localePrefix = 'always'; // Default

export const { Link, redirect, usePathname, useRouter } =
    createSharedPathnamesNavigation({ locales, localePrefix });