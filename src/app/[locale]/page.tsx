import {useTranslations} from 'next-intl';
import backgroundImage from "../../../public/backgrounds/home.svg"
import { Reveal } from '@/components/fx/Motion';
import { DynamicLogo } from '@/components/ui/SamLogos';
import Link from 'next/link';

export default function Index() {
  const t = useTranslations('Index');
  return <>
    <main className="flex flex-col items-center justify-center bg-cover bg-center bg-fixed" style={{backgroundImage: `url(${backgroundImage.src})`}}>
      <section className="max-w-7xl w-full flex flex-col items-center gap-4 min-h-screen place-items-center place-content-center p-6 pt-12 border-l border-r md:border-sam-secondary-color/40 border-transparent border-dashed">
        <Reveal delay={0.1} overflow='visible' showSlider={0}>
          
          <div className=' md:h-52 h-36'>
            
            <DynamicLogo className=' text-sam-primary-color -translate-x-5'/>
            
          </div>
        </Reveal>
        <div className='flex flex-col items-center justify-center *:text-center'>
          <Reveal delay={0.3}>
            <h1>SAM MAHONRI</h1>
          </Reveal>
          <Reveal delay={0.5}>
            <h4>{t('subtitle')}</h4>
          </Reveal>
          
        </div>
        <Reveal delay={0.6} sliderColor='var(--SCSSsam-primary-color)'>
          <Link href={"/"}>
            <button className='btn btn-primary'>{t('about_me')}</button>
          </Link>
        </Reveal>
      </section>
    </main>
  </>;
}