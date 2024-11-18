import FilterArts from "@/components/ui/FilterArts";
import { Title } from "@/components/ui/Titles";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

export default async function LocaleLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const locale = await getLocale()
    return (
        <main className="main-section">
            <section className="main-subsection place-content-center items-center">
                    <Title title='arts'/>
                    
                    <FilterArts />
                    
                    <div className=" w-full">{children}</div>
            </section>
        </main>

        );
}
