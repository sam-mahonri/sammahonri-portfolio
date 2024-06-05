import { Reveal } from "@/components/fx/Motion";
import FilterArts from "@/components/ui/FilterArts";
import { Title } from "@/components/ui/Titles";
import { Link } from "@/navigation";


export default async function LocaleLayout({
    children
}: {
    children: React.ReactNode;
}) {

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
