import {useTranslations} from 'next-intl';
import backgroundImage from "/public/backgrounds/home.svg"
import { Reveal } from '@/components/fx/Motion';

export default function About() {
    const tc = useTranslations('Common');
    
    return <>
        <main className="main-section" style={{backgroundImage: `url(${backgroundImage.src})`}}>
            <section className="main-subsection place-content-center">
                
                    <div className='flex flex-row gap-2 items-center w-full'>
                        <span className=' border-t-2 border-dashed border-secondary flex-grow'></span>
                        <Reveal><h1 className=' break-all text-secondary'>{tc("about")}</h1></Reveal>
                        <span className=' border-t-2 border-dashed border-secondary flex-grow'></span>
                    </div>
                    <p></p>
                
            </section>
        </main>
    </>
}