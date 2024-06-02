import { Reveal } from "@/components/fx/Motion";
import { useTranslations } from "next-intl";
import backgroundImage from "/public/backgrounds/home.svg"
import { DynamicLogo } from "@/components/ui/SamLogos";

export default function Loading(){

    const tc = useTranslations("Common")

    return <>
    
    <main className="main-section" style={{backgroundImage: `url(${backgroundImage.src})`}}>
        <section className="main-subsection subsection-center-all">
            <span className=" rounded-full border-2 border-transparent border-b-secondary animate-spin h-12 w-12"></span>
            
        </section>
    </main>

    </>
}

