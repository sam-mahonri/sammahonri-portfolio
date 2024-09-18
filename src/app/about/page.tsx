import {useTranslations} from 'next-intl';
import { Metadata } from 'next';
import { Reveal } from '@/components/fx/Motion';
import Link from 'next/link';
import { AcademicCapIcon } from '@heroicons/react/24/solid';
import { Title } from '@/components/ui/Titles';
import { getTranslations } from 'next-intl/server';
import { CodeArtist, Grad, MeSona } from '@/components/ui/SamLogos';

export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
    const t = await getTranslations("Common")
    return {
        title: `${t('about')}`,
    };
};

export default function About() {
    const tc = useTranslations('Common');
    const ta = useTranslations('About');
    return <>
        <main className="main-section">
            <section className="main-subsection place-content-center items-center">
                
                    <Title title = "about" />

                    <section className='flex flex-col gap-4'>
                        <div className=' flex md:flex-row flex-col-reverse items-center'>
                            <div className='*:my-3 flex-grow'>
                                <Reveal delay={0.4}><h4 className=' text-center'>{ta('t_fa')}</h4></Reveal>
                                <Reveal delay={0.5}>
                                <p>{ta('fa_content')}</p>
                                </Reveal>
                                <Reveal delay={0.55}>
                                    <div className=' flex flex-wrap gap-4'>
                                        <Link href={"https://ifsertaope.edu.br"} target='blank'>
                                            <button className='btn btn-secondary'><AcademicCapIcon /> IF SERTÃO-PE</button>
                                        </Link>
                                        <Link href={"https://www.cruzeirodosulvirtual.com.br"} target='blank'>
                                            <button className='btn btn-secondary'><AcademicCapIcon /> UNICSUL</button>
                                        </Link>
                                    </div>
                                </Reveal>
                            </div>
                            <Grad className=' min-w-32 w-2/4 max-w-80 text-secondary' />
                        </div>

                        <div className=' flex md:flex-row flex-col items-center'>
                            <CodeArtist className=' min-w-32 w-2/4 max-w-80 text-secondary' />
                            <div className='*:my-3'>
                                <Reveal delay={0.6}><h4 className=' text-center'>{ta('t_ip')}</h4></Reveal>
                                <Reveal delay={0.7}>
                                <p>{ta('ip_content')}</p>
                                </Reveal>
                            </div>
                            
                        </div>

                        <div className=' flex md:flex-row flex-col-reverse items-center'>
                            <div className='*:my-3'>
                                <Reveal delay={0.8}><h4 className=' text-center'>{ta('t_ea')}</h4></Reveal>
                                <Reveal delay={0.9}>
                                <p>{ta('ea_content')}</p>
                                </Reveal>
                            </div>
                            <MeSona className=' min-w-32 w-2/4 max-w-80 text-secondary' />
                        </div>
                    </section>
                    
            </section>
        </main>
    </>
}