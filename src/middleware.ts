import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['pt', 'en', 'es'],
    localePrefix: 'always',
    defaultLocale: 'pt'
});

export const config = {
    matcher: [
        '/',
        '/(pt|en)/:path*',
        '/((?!api|_next|_vercel|.*\\..*).*)',
        '/([\\w-]+)?/users/(.+)'
    ]
};