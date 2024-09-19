import Link from 'next/link';
import { DynamicInlineLogo } from "../ui/SamLogos";
import { Reveal } from "../fx/Motion";
import { SwitchLanguageLink } from "../ui/LanguageSwitcherLink";
import { useTranslations } from "next-intl";
import { getLocale } from "next-intl/server";
import clsx from "clsx";
import { Divider } from "../ui/Divider";

export async function Footer() {
    const t = useTranslations('Footer');
    const cl = getLocale()

    const isJune = new Date().getMonth() === 5;

    return <>
        <div className="flex items-center justify-center border-t-2 border-secondary/50 bg-surface">
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
                        <Link className="olink font-dyslexia font-semibold" href={"https://nextfur.net"}>Nextfur</Link>
                        <Link className="olink font-dyslexia font-semibold" href={"https://furlibre.nextfur.net"}>Furlibre</Link>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-1">
                        <Reveal>
                            <h3>{t('socials')}</h3>
                        </Reveal>
                        <Link className="olink font-dyslexia font-semibold" href={"https://bsky.app/profile/sammahonri.com"}>Bluesky</Link>
                        <Link className="olink font-dyslexia font-semibold" href={"https://instagram.com/sammahonri"}>Instagram</Link>
                        <Link className="olink font-dyslexia font-semibold" href={"https://x.com/SamMahonri"}>Twitter</Link>


                    </div>
                </div>
                <div className=' bg-foreground/10 w-full p-8 flex items-center justify-center'>
                    <p className=" text-center font-dyslexia font-bold" >{t('copyright')}</p>
                </div>

            </div>
        </div>
    </>
}