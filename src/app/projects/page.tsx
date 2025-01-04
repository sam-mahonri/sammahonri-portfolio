import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/fx/Motion';
import type { Metadata } from "next";
import { Title } from '@/components/ui/Titles';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
    const t = await getTranslations("Common")
    return {
        title: `${t('projects')}`,
    };
};

export default function Projects() {
    const tc = useTranslations('Common');
    const tp = useTranslations('Projects');
    return <>
        <main className="main-section">
            <section className="main-subsection place-content-center items-center">
                
                    <Title title='projects'/>
                    <div className=' flex md:flex-row-reverse flex-col-reverse items-start w-full *:p-4 *:w-full gap-2'>
                        <div className=' flex flex-col flex-grow border-2 border-dashed border-transparent hover:border-secondary/30 gap-2'>
                            <Reveal delay={0.6}><h2>{tc('col_in')}</h2></Reveal>
                            <Reveal delay={0.5} showSlider={0}>
                                <Link href={"https://nextfur.net"} target='blank'>
                                    <div className='w-full flex flex-col justify-start items-start border-2 border-transparent border-t-secondary/20 hover:border-secondary p-4 gap-2 hover:bg-secondary/10'>
                                        <h3>Nextfur</h3>
                                        <span className='flex flex-wrap'> 
                                            <p className='p-tag'>{tp('foundation')}</p>
                                            <p className='p-tag'>Nextfur</p>
                                        </span>
                                        <p>{tp('nxtfr_content')}</p>
                                    </div>
                                </Link>
                            </Reveal>
                            
                            <Reveal delay={0.6} showSlider={0}>
                                <Link href={"/blog/sukriarte-auctions"} className=' opacity-25 hover:opacity-50'>
                                    <div className='w-full flex flex-col justify-start items-start border-2 border-transparent border-t-secondary/20 hover:border-secondary p-4 gap-2 hover:bg-secondary/10'>
                                        <h3>Sukriarte Auctions [BETA]</h3>
                                        <span className='flex flex-wrap'> 
                                            <p className='p-tag'>Furlibre</p>
                                            <p className='p-tag-orange'>{tc('hiato')}</p>
                                        </span>
                                        <p>{tp('fa_content')}</p>
                                    </div>
                                </Link>
                            </Reveal>
                        </div>
                        <div className=' flex flex-col flex-grow border-2 border-dashed border-transparent hover:border-secondary/30 gap-2'>
                            <Reveal delay={0.2}><h2>{tc('byme')}</h2></Reveal>
                            <Reveal delay={0.4} showSlider={0}>
                                <Link href={""}>
                                    <div className='w-full flex flex-col justify-start items-start border-2 border-transparent border-t-secondary/20 hover:border-secondary p-4 gap-2 hover:bg-secondary/10'>
                                        <h3>The Nightmare Fable: Veils Of Lives</h3>
                                        <span className='flex flex-wrap'> 
                                            <p className='p-tag'>{tp('game')}</p>
                                            <p className='p-tag-orange'>{tc('hiato')}</p>
                                        </span>
                                        <p>{tp('nf_content')}</p>
                                    </div>
                                </Link>
                            </Reveal>
                            <Reveal delay={0.6}><h2>{tp('legacy')}</h2></Reveal>
                            <Reveal delay={0.4} showSlider={0}>
                                <Link href={"https://gamejolt.com/games/savestruct/771377"}>
                                    <div className='w-full flex flex-col justify-start items-start border-2 border-transparent border-t-secondary/20 hover:border-secondary p-4 gap-2 hover:bg-secondary/10'>
                                        <h3>Savestruct - 2022</h3>
                                        <span className='flex flex-wrap'> 
                                            <p className='p-tag'>{tp('game')}</p>
                                        </span>
                                        <p>{tp('ss_22')}</p>
                                    </div>
                                </Link>
                            </Reveal>
                            <Reveal delay={0.4} showSlider={0}>
                                <Link href={"/games/the-nightmare-fable-2022/NightmareFable.html"}>
                                    <div className='w-full flex flex-col justify-start items-start border-2 border-transparent border-t-secondary/20 hover:border-secondary p-4 gap-2 hover:bg-secondary/10'>
                                        <h3>Nightmare Fable - 2022</h3>
                                        <span className='flex flex-wrap'> 
                                            <p className='p-tag'>{tp('game')}</p>
                                        </span>
                                        <p>{tp('nf_22')}</p>
                                    </div>
                                </Link>
                            </Reveal>
                            <Reveal delay={0.4} showSlider={0}>
                                <Link href={"/games/constars-2022/constars05gl2.html"}>
                                    <div className='w-full flex flex-col justify-start items-start border-2 border-transparent border-t-secondary/20 hover:border-secondary p-4 gap-2 hover:bg-secondary/10'>
                                        <h3>Constars - 2022</h3>
                                        <span className='flex flex-wrap'> 
                                            <p className='p-tag'>{tp('game')}</p>
                                        </span>
                                        <p>{tp('cs_22')}</p>
                                    </div>
                                </Link>
                            </Reveal>
                            
                            <Reveal delay={0.3} showSlider={0}>
                            <Link href={"https://furlibre.nextfur.net"} className=' pointer-events-none opacity-25' target='blank'>
                                <div className='w-full flex flex-col justify-start items-start border-2 border-transparent border-t-secondary/20 hover:border-secondary p-4 gap-2 hover:bg-secondary/10'>
                                    <h3>Furlibre</h3>
                                    <span className='flex flex-wrap'> 
                                        <p className='p-tag'>{tp('studio')}</p>
                                        <p className='p-tag'>Nextfur</p>
                                        <p className='p-tag-orange'>{tc('hiato')}</p>
                                    </span>
                                    <p>{tp('fl_content')}</p>
                                </div>
                            </Link></Reveal>
                        </div>
                    </div>
            </section>
        </main>
    </>
}