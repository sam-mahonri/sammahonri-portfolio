import { getRequestConfig } from 'next-intl/server';
import { getUserLocale } from "@/services/locale";
import { locales, defaultLocale, Locale } from "@/config";

export default getRequestConfig(async () => {
    let locale = await getUserLocale();

    if (!locales.includes(locale as Locale)) {
        locale = defaultLocale;
    }

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});