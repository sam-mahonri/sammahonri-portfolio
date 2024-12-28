"use client";

import Link from 'next/link';
import { DynamicInlineLogo } from "../ui/SamLogos";
import { Reveal } from "../fx/Motion";
import { useLocale, useTranslations } from "next-intl";
import { getLocale } from "next-intl/server";
import clsx from "clsx";
import { Divider } from "../ui/Divider";
import { Locale } from '@/config';
import { startTransition } from 'react';
import { setUserLocale } from '@/services/locale';
import { EnvelopeIcon } from '@heroicons/react/24/solid';

export function Footer() {
    const t = useTranslations('Footer');
    const cl = useLocale();

    function changeLang(value: string) {
        const locale = value as Locale;
        startTransition(() => {
            setUserLocale(locale);
        });
    }

    return <>
        <footer className="flex items-center justify-center border-t-2 border-secondary/50 bg-surface">
            <div className=" w-full pt-10  flex flex-col gap-4 justify-center items-center">
                <Divider />
                <div className="flex md:flex-wrap md:flex-row flex-col md:gap-16 gap-10 md:items-start justify-center w-full my-4 p-6">
                    <div className=" h-14 w-fit self-center">
                        <Reveal>
                            <DynamicInlineLogo />
                        </Reveal>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-1">
                        <Reveal>
                            <h3>{t('related')}</h3>
                        </Reveal>
                        <Link className="olink font-unbounded " href={"https://nextfur.net"}>Nextfur</Link>
                        <Link className="olink font-unbounded opacity-25 pointer-events-none " href={"https://furlibre.nextfur.net"}>Furlibre</Link>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-1">
                        <Reveal>
                            <h3>{t('socials')}</h3>
                        </Reveal>
                        <Link className="olink font-unbounded " href={"https://bsky.app/profile/sammahonri.com"}>Bluesky</Link>
                        <Link className="olink font-unbounded " href={"https://instagram.com/sammahonri"}>Instagram</Link>
                        <Link className="olink font-unbounded " href={"https://x.com/SamMahonri"}>Twitter</Link>
                        <Link className="olink font-unbounded " href={"https://www.linkedin.com/in/sam-mahonri-b62527226/"}>LinkedIn</Link>
                        <Link className="olink font-unbounded " href={"https://github.com/sam-mahonri"}>GitHub</Link>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-1">
                        <Reveal>
                            <h3>{t('lang')}</h3>
                        </Reveal>
                        <p className={clsx("olink font-unbounded  cursor-pointer", { "active-link": cl == "pt" })} onClick={() => changeLang("pt")}>Português - BR</p>
                        <p className={clsx("olink font-unbounded  cursor-pointer", { "active-link": cl == "en" })} onClick={() => changeLang("en")}>English - US</p>
                        <p className={clsx("olink font-unbounded  cursor-pointer", { "active-link": cl == "es" })} onClick={() => changeLang("es")}>Español - EN</p>
                    </div>
                    
                </div>
                <div className=' bg-foreground/10 w-full p-8 flex items-center justify-center flex-col'>
                    <p className=" text-center font-unbounded font-bold" >{t('copyright')}</p>
                    <EnvelopeIcon className=' h-5 w-5 mt-4'/>
                    <p className=' text-sm'>{t("contact")}</p>
                    <a href={"mailto:sammahonri@gmail.com"} className='text-secondary olink'>  sammahonri@gmail.com</a>
                </div>

            </div>
        </footer>
    </>
}