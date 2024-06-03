import { Reveal } from "@/components/fx/Motion";
import { useTranslations } from "next-intl";
import backgroundImage from "/public/backgrounds/home.svg"
import { DynamicLogo } from "@/components/ui/SamLogos";
import Spinner from "@/components/ui/Spinner";

export default function Loading(){

    const tc = useTranslations("Common")

    return <>
    
    <main className="main-section" style={{backgroundImage: `url(${backgroundImage.src})`}}>
        <section className="main-subsection subsection-center-all">
            <Spinner />
        </section>
    </main>

    </>
}

