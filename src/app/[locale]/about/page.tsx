import {useTranslations} from 'next-intl';
import { Metadata } from 'next';
import { Reveal } from '@/components/fx/Motion';
import { Link } from '@/navigation';
import { AcademicCapIcon } from '@heroicons/react/24/solid';
import { Title } from '@/components/ui/Titles';

export const metadata: Metadata = {
    title: "About Me"
};

export default function About() {
    const tc = useTranslations('Common');
    
    return <>
        <main className="main-section">
            <section className="main-subsection place-content-center items-center">
                
                    <Title title = "about" />

                    <section className='flex flex-col gap-11'>
                        <div className=' flex flex-wrap'>
                            <div className='*:my-3'>
                                <Reveal delay={0.4}><h4 className=' text-center'>Formação Acadêmica</h4></Reveal>
                                <Reveal delay={0.5}>
                                <p>
                                    Cursei meu ensino médio integrado de Informática no Instituto Federal do Sertão Pernambucano em Petrolina-PE, Brasil, onde desenvolvi uma sólida base em tecnologia. Atualmente, estou cursando graduação em Ciência da Computação na Universidade Cruzeiro do Sul Virtual, aprofundando meus conhecimentos e habilidades na área.
                                </p>
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
                        </div>

                        <div className=' flex flex-wrap'>
                            <div className='*:my-3'>
                                <Reveal delay={0.6}><h4 className=' text-center'>Interesses Profissionais</h4></Reveal>
                                <Reveal delay={0.7}>
                                <p>
                                    Tenho um amplo leque de interesses profissionais, incluindo design (web design e desenvolvimento web), desenvolvimento de jogos, composição de artes e composição de músicas. Essa diversidade de interesses me permite explorar diferentes áreas da tecnologia e da criatividade, buscando soluções inovadoras e atraentes.
                                </p>
                                </Reveal>
                            </div>
                        </div>

                        <div className=' flex flex-wrap'>
                            <div className='*:my-3'>
                                <Reveal delay={0.8}><h4 className=' text-center'>Expressão Artística</h4></Reveal>
                                <Reveal delay={0.9}>
                                <p>
                                    Sou um entusiasta da cultura Furry e tenho um fursona da espécie dragão, com características marcantes como orelhas grandes e uma cauda longa. Esse fursona, com suas cores principais de verde, roxo e branco, e olhos azuis, me permite expressar minha criatividade e proatividade de maneira única. Essa paixão pela arte e pela expressão pessoal é um aspecto fundamental da minha identidade.
                                </p>
                                </Reveal>
                            </div>
                        </div>
                    </section>
                    
            </section>
        </main>
    </>
}