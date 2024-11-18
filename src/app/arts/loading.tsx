import { useTranslations } from "next-intl";
import Spinner from "@/components/ui/Spinner";

export default function Loading(){

    const tc = useTranslations("Common")

    return <>
    
    <main className="main-section">
        <section className="main-subsection subsection-center-all">
            <Spinner />
        </section>
    </main>

    </>
}

