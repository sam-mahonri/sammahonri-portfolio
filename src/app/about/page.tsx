import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import { Reveal } from '@/components/fx/Motion';
import Link from 'next/link';
import { AcademicCapIcon } from '@heroicons/react/24/solid';
import { Title } from '@/components/ui/Titles';
import { getTranslations } from 'next-intl/server';
import { CodeArtist, Grad, MeSona } from '@/components/ui/SamLogos';
import Image from 'next/image';

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

                <Title title="about" />


                <section className='flex flex-col gap-4'>
                    <div className='-mt-16 flex flex-row w-full items-center justify-center gap-4 py-4 group hover:scale-105 transition-all duration-500'>
                        <span className='transition-all duration-700 relative w-full max-w-[8rem] aspect-square overflow-hidden rounded-full md:blur-none md:group-hover:blur-sm blur-sm'>
                            <Image
                                alt=""
                                className="object-cover"
                                loading="lazy"
                                src={"/icons/angel.png"}
                                fill
                                sizes="(max-width: 1280px) 100vw,
                   (max-width: 1536px) 75vw,
                   (max-width: 1920px) 50vw,
                   25vw"
                            />
                        </span>
                        <span className='transition-all duration-500 group-hover:scale-105 group-hover:border-4 group-hover:ring-4 self-center relative w-full max-w-[12rem] aspect-square overflow-hidden rounded-full border-8 border-secondary ring-8 ring-secondary/20'>
                            <Image
                                alt=""
                                className="object-cover"
                                loading="lazy"
                                src={"/icons/sundays.png"}
                                fill
                                sizes="(max-width: 1280px) 100vw,
                   (max-width: 1536px) 75vw,
                   (max-width: 1920px) 50vw,
                   25vw"
                            />
                        </span>
                        <span className='transition-all duration-700 relative w-full max-w-[8rem] aspect-square overflow-hidden rounded-full md:blur-none md:group-hover:blur-sm blur-sm'>
                            <Image
                                alt=""
                                className="object-cover"
                                loading="lazy"
                                src={"/icons/rain.png"}
                                fill
                                sizes="(max-width: 1280px) 100vw,
                   (max-width: 1536px) 75vw,
                   (max-width: 1920px) 50vw,
                   25vw"
                            />
                        </span>
                    </div>


                    <div className=' flex md:flex-row flex-col items-center'>


                        <div className='*:my-3 flex-grow'>
                            <Reveal delay={0.4}><h4 className=' text-center'>{ta('t_ab')}</h4></Reveal>
                            <Reveal delay={0.5}>
                                <p>{ta('ab_content')}</p>
                            </Reveal>
                        </div>

                    </div>

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