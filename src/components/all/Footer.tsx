import { Link } from "@/navigation";
import { DynamicInlineLogo } from "../ui/SamLogos";
import { Reveal } from "../fx/Motion";
import { SwitchLanguageLink } from "../ui/LanguageSwitcherLink";
import { useTranslations } from "next-intl";
import { getLocale } from "next-intl/server";
import clsx from "clsx";

export async function Footer(){
    const t = useTranslations('Footer');
    const cl = getLocale()
    return <>
        <div className="flex items-center justify-center border-t border-sam-secondary-color/50 border-dashed">
            <div className="max-w-7xl w-full p-6 pt-10 pb-10 flex flex-col gap-4 justify-center items-center">
            <span className=" h-px w-16 bg-transparent border-t border-t-primary border-dashed"></span>
                <div className="flex flex-wrap gap-20 items-center justify-center w-full">
                    <div className=" h-14 w-fit">
                        <Reveal>
                            <DynamicInlineLogo />
                        </Reveal>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-1">
                        <Reveal>
                            <h3>{t('lang')}</h3>
                        </Reveal> 
                        <SwitchLanguageLink newLocale="pt" className={clsx("olink font-dyslexia font-semibold", {"active-link": await cl === 'pt'})}>Português - BR</SwitchLanguageLink>
                        <SwitchLanguageLink newLocale="en" className={clsx("olink font-dyslexia font-semibold", {"active-link": await cl === 'en'})}>English - EN</SwitchLanguageLink>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-1">
                        <Reveal>
                            <h3>{t('related')}</h3>
                        </Reveal>
                        <Link className="olink font-dyslexia font-semibold" href={"https://nextfur.net"}>Nextfur</Link>
                        <Link className="olink font-dyslexia font-semibold" href={"https://furlibre.com"}>Furlibre</Link>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-1">
                        <Reveal>
                            <h3>{t('socials')}</h3>
                        </Reveal>
                        <Link className="olink font-dyslexia font-semibold" href={"https://x.com/SamMahonri"}>Twitter</Link>
                        <Link className="olink font-dyslexia font-semibold" href={"https://instagram.com/sammahonri"}>Instagram</Link>
                        <Link className="olink font-dyslexia font-semibold" href={"https://bsky.app/sammahonri.com"}>Bluesky</Link>
                    </div>
                </div>
                <span className=" h-px w-16 bg-transparent border-t border-t-primary border-dashed"></span>
                <p className=" text-center font-dyslexia font-bold" >{t('copyright')}</p>
            </div>
        </div>
    </>
}