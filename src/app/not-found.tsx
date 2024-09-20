"use client";

import { startTransition, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/fx/Motion';
import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/solid';
import { setUserLocale } from '@/services/locale';
import { defaultLocale, Locale } from '@/config';
import Spinner from '@/components/ui/Spinner';

export default function NotFound() {
    const router = useRouter();
    const te = useTranslations('Errors');
    const t = useTranslations('Common');
    const [noRedirected, setNoRedirected] = useState(true);

    // Tenta redirecionar usuários para a nova rota caso o link que foi compartilhado ainda contenha o antigo prefixo /[locale]
    useEffect(() => {
        const handleRedirect = () => {
            const { pathname, search } = window.location;
            const availableLanguages = ['/pt', '/en', '/es'];
            const removedLanguages = ['/ja', '/it', '/de', '/fr'];

            let hasRedirected = false;

            // Verificar se o idioma disponível está presente no caminho
            for (const prefix of availableLanguages) {
                if (pathname.startsWith(prefix)) {
                    const pathAfterPrefix = pathname.slice(prefix.length);

                    if (pathAfterPrefix) {
                        const newPath = pathAfterPrefix + search;
                        startTransition(() => {
                            setUserLocale(prefix.replace("/", "") as Locale);
                            router.replace(newPath);
                        });
                    } else {
                        startTransition(() => {
                            setUserLocale(prefix.replace("/", "") as Locale);
                            router.replace('/');
                        });
                    }
                    hasRedirected = true;
                    break;
                }
            }

            // Se não foi redirecionado para um idioma disponível, verificar os removidos
            if (!hasRedirected) {
                for (const removedPrefix of removedLanguages) {
                    if (pathname.startsWith(removedPrefix)) {
                        const pathAfterRemovedPrefix = pathname.slice(removedPrefix.length);

                        const newPath = "/" + defaultLocale + pathAfterRemovedPrefix + search;
                        startTransition(() => {
                            setUserLocale(defaultLocale);
                            router.replace(newPath);
                        });
                        hasRedirected = true;
                        break;
                    }
                }
            }

            if (!hasRedirected) {
                setNoRedirected(false)
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
                {noRedirected &&
                    <div className='fixed top-0 left-0 w-full h-full bg-background flex flex-col items-center justify-center z-40'>
                            <h4> Redirecting... </h4>
                            <Spinner />

                        
                    </div>
                }

            </section>
        </main>
    );
}
