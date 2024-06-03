import {useTranslations} from 'next-intl';
import { Metadata } from 'next';
import backgroundImage from "/public/backgrounds/home.svg"
import { Reveal } from '@/components/fx/Motion';

export const metadata: Metadata = {
    title: "Blog"
};

export default function Blog() {
    const tc = useTranslations('Common');
    
    return <>

        <main className="main-section" style={{backgroundImage: `url(${backgroundImage.src})`}}>
            <section className="main-subsection place-content-center items-center">

                    <div className='flex flex-row gap-2 items-center w-full'>
                        <span className=' border-t-2 border-dashed border-secondary flex-grow'></span>
                        <Reveal><h1 className=' break-all text-secondary'>{tc("blog")}</h1></Reveal>
                        <span className=' border-t-2 border-dashed border-secondary flex-grow'></span>
                    </div>
                    <Reveal delay={1.0}><h4 className=' text-center'>{tc('nothing')}</h4></Reveal>

                
            </section>
        </main>
    </>
}