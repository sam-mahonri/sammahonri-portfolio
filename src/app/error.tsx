"use client"

import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/fx/Motion';
import Link from 'next/link';
import { ArrowPathIcon, HomeIcon } from '@heroicons/react/24/solid';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    const te = useTranslations('Errors');
    const t = useTranslations('Common');

    return <>
        <main className="main-section">
            <section className="main-subsection place-content-center items-center">
                <div className='flex flex-row gap-2 items-center w-full'>
                    <span className=' border-t-2 border-dashed border-error flex-grow'></span>
                    <Reveal sliderColor='rgb(var(--sam-txt-title-color))'><h1 className=' break-all text-sam-light bg-error'>ERROR</h1></Reveal>
                    <span className=' border-t-2 border-dashed border-error flex-grow'></span>
                </div>
                <Reveal sliderColor='rgb(var(--sam-error-color))' delay={0.5}><h4 className=' text-center text-error'>{te("generic")}</h4></Reveal>
                <div className=' flex flex-wrap gap-1'>
                    <Reveal sliderColor='rgb(var(--sam-error-color))' delay={1}>
                        <Link href={"/"}>
                            <button className='btn btn-error'>
                                <HomeIcon />
                                {t("backhome")}
                            </button>
                        </Link>
                    </Reveal>
                    <Reveal sliderColor='rgb(var(--sam-primary-color))' delay={1.5}>

                        <button className='btn btn-primary' onClick={
                            () => reset()
                        }>
                            <ArrowPathIcon />
                            {t("try")}
                        </button>

                    </Reveal>
                </div>
            </section>
        </main>
    </>
}