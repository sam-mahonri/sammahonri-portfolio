import {useTranslations} from 'next-intl';
import backgroundImage from "../../public/backgrounds/home.svg"
import { Reveal } from '@/components/fx/Motion';
import { DynamicLogo } from '@/components/ui/SamLogos';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Index() {
  const t = useTranslations('Index');
  const tc = useTranslations('Common');
  return <>
    <main className="flex flex-col items-center justify-center bg-cover bg-center bg-fixed" style={{backgroundImage: `url(${backgroundImage.src})`}}>
      <section className="max-w-7xl w-full flex flex-col items-center gap-4 min-h-screen place-items-center place-content-center p-6 pt-12 border-l border-r md:border-sam-secondary-color/60 border-transparent border-dashed">
        <Reveal delay={0.1} overflow='visible' showSlider={0}>
          
          <div className=' md:h-52 h-36'>
            
            <DynamicLogo className=' text-sam-primary-color -translate-x-5'/>
            
          </div>
        </Reveal>
        <div className='flex flex-col items-center justify-center *:text-center'>
        <Reveal delay={0.2}>
            <h4>{t('toptitle')}</h4>
          </Reveal>
          <Reveal delay={0.4}>
            <h1>Sam Mahonri</h1>
          </Reveal>
          <Reveal delay={0.6}>
            <h4>{t('subtitle')}</h4>
          </Reveal>
          
        </div>
        <div className='flex flex-row gap-3'>
          <Reveal delay={0.8} sliderColor='var(--SCSSsam-primary-color)'>
            <Link href={"/"}>
              <button className='btn btn-primary'>{tc('blog')}<ArrowRightIcon /></button>
            </Link>
          </Reveal>
          <Reveal delay={1.0} sliderColor='var(--SCSSsam-primary-color)'>
            <Link href={"/"}>
              <button className='btn btn-secondary'>{tc('about')}</button>
            </Link>
          </Reveal>
        </div>
        
      </section>
    </main>
  </>;
}