import {useTranslations} from 'next-intl';
import backgroundImage from "/public/backgrounds/home.svg"
import { Reveal } from '@/components/fx/Motion';

export default function Blog() {
    const tc = useTranslations('Common');
    
    return <>

        <main className="main-section" style={{backgroundImage: `url(${backgroundImage.src})`}}>
            <section className="main-subsection place-content-center">

                    <div className='flex flex-row gap-2 items-center w-full'>
                        <span className=' border-t-2 border-dashed border-secondary flex-grow'></span>
                        <Reveal><h1 className=' break-all text-secondary'>{tc("blog")}</h1></Reveal>
                        <span className=' border-t-2 border-dashed border-secondary flex-grow'></span>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo inventore odit modi ullam molestias totam accusamus corrupti odio numquam fuga et eius earum corporis labore, cum, tempore saepe qui ipsa.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo inventore odit modi ullam molestias totam accusamus corrupti odio numquam fuga et eius earum corporis labore, cum, tempore saepe qui ipsa.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo inventore odit modi ullam molestias totam accusamus corrupti odio numquam fuga et eius earum corporis labore, cum, tempore saepe qui ipsa.</p>

                
            </section>
        </main>
    </>
}