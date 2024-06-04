import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/fx/Motion';
import type { Metadata } from "next";
import { Title } from '@/components/ui/Titles';

export const metadata: Metadata = {
    title: "Projects"
};

export default function Projects() {
    const tc = useTranslations('Common');
    
    return <>
        <main className="main-section">
            <section className="main-subsection place-content-center items-center">
                
                    <Title title='projects'/>
                    <Reveal delay={1.0}><h4 className=' text-center'>{tc('nothing')}</h4></Reveal>
                
            </section>
        </main>
    </>
}