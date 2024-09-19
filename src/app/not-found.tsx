"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/fx/Motion';
import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/solid';
import { setUserLocale } from '@/services/locale';
import { Locale } from '@/config';

export default function NotFound() {
    const router = useRouter();
    const te = useTranslations('Errors');
    const t = useTranslations('Common');

    // Tenta redirecionar usuários para a nova rota caso o link que foi compartilhado ainda contenha o antigo prefixo /[locale]
    useEffect(() => {
        const handleRedirect = () => {
            const { pathname, search } = window.location;
            const languagePrefixes = ['/pt', '/en', '/es'];

            let hasRedirected = false;

            for (const prefix of languagePrefixes) {
                if (pathname.startsWith(prefix)) {
                    const pathAfterPrefix = pathname.slice(prefix.length);

                    if (pathAfterPrefix) {
                        const newPath = pathAfterPrefix + search;
                        setUserLocale(prefix.replace("/", "") as Locale);
                        router.replace(newPath);
                    } else {
                        setUserLocale(prefix.replace("/", "") as Locale);
                        router.replace('/');
                    }
                    hasRedirected = true;
                    break;
                }
            }
        };

        handleRedirect();
    }, [router]);

    return (
        <main className="main-section">
            <section className="main-subsection place-content-center items-center">
                <div className='flex flex-row gap-2 items-center w-full'>
                    <span className=' border-t-2 border-dashed border-error flex-grow'></span>
                    <Reveal sliderColor='rgb(var(--sam-txt-title-color))'>
                        <h1 className=' break-all text-sam-light bg-error'>404</h1>
                    </Reveal>
                    <span className=' border-t-2 border-dashed border-error flex-grow'></span>
                </div>
                <Reveal sliderColor='rgb(var(--sam-error-color))' delay={0.5}>
                    <h4 className=' text-center text-error'>{te("404")}</h4>
                </Reveal>
                <Reveal sliderColor='rgb(var(--sam-error-color))' delay={1}>
                    <Link href={"/"}>
                        <button className='btn btn-error'>
                            <HomeIcon />
                            {t("backhome")}
                        </button>
                    </Link>
                </Reveal>
            </section>
        </main>
    );
}
