import {useTranslations} from 'next-intl';
import { Reveal } from '@/components/fx/Motion';

export default function NotFound() {
    const te = useTranslations('Errors');
    
    return <>
        <main className="main-section">
            <section className="main-subsection place-content-center items-center">
                    <div className='flex flex-row gap-2 items-center w-full'>
                        <span className=' border-t-2 border-dashed border-sam-error-color flex-grow'></span>
                        <Reveal sliderColor='rgb(var(--sam-txt-title-color))'><h1 className=' break-all text-sam-light bg-sam-error-color'>404</h1></Reveal>
                        <span className=' border-t-2 border-dashed border-sam-error-color flex-grow'></span>
                    </div>
                    <Reveal sliderColor='rgb(var(--sam-error-color))' delay={0.5}><h4 className=' text-center text-sam-error-color'>{te("404")}</h4></Reveal>
                
            </section>
        </main>
    </>
}