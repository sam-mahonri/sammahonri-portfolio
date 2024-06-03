import { useTranslations } from 'next-intl';
import backgroundImage from "/public/backgrounds/home.svg"
import { Reveal } from '@/components/fx/Motion';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects"
};

export default function Projects() {
    const tc = useTranslations('Common');
    
    return <>
        <main className="main-section" style={{backgroundImage: `url(${backgroundImage.src})`}}>
            <section className="main-subsection place-content-center items-center">
                
                    <div className='flex flex-row gap-2 items-center w-full'>
                        <span className=' border-t-2 border-dashed border-secondary flex-grow'></span>
                        <Reveal><h1 className=' break-all text-secondary'>{tc("projects")}</h1></Reveal>
                        <span className=' border-t-2 border-dashed border-secondary flex-grow'></span>
                    </div>
                    <Reveal delay={1.0}><h4 className=' text-center'>{tc('nothing')}</h4></Reveal>
                
            </section>
        </main>
    </>
}