import {useTranslations} from 'next-intl';
import backgroundImage from "/public/backgrounds/home.svg"
import { Reveal } from '@/components/fx/Motion';
import { Arrow, DynamicLogo } from '@/components/ui/SamLogos';
import { Link } from '@/navigation';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { JumpingArrow } from '@/components/fx/JumpingArrow';
import { FaBluesky, FaInstagram } from "react-icons/fa6";

export default function Index() {
  const t = useTranslations('Index');
  const tc = useTranslations('Common');
  return <>
    <main className="main-section">
      <section className="main-subsection subsection-center-all">
        <Reveal delay={0.1} overflow='visible' showSlider={0}>
          
          <div className=' md:h-52 h-36'>
            
            <DynamicLogo className=' text-sam-primary-color -translate-x-5'/>
            
          </div>
        </Reveal>
        <div className='flex flex-col items-center justify-center *:text-center'>
        <Reveal delay={0.2}>
            <h4>{t('toptitle')}</h4>
          </Reveal>
          <div className='flex flex-row gap-2 items-center w-full'>
              <span className=' border-t-2 border-dashed border-secondary flex-grow'></span>
              <Reveal delay={0.4}>
                <h1>Sam Mahonri</h1>
              </Reveal>
              <span className=' border-t-2 border-dashed border-secondary flex-grow'></span>
          </div>
          
          <Reveal delay={0.6}>
            <h4>{t('subtitle')}</h4>
          </Reveal>
          
        </div>
        <div className='flex flex-row gap-3'>
          <Reveal delay={0.8} sliderColor='rgb(var(--sam-primary-color))'>
            <Link href={"/blog"}>
              <button className='btn btn-secondary'>{tc('blog')}<ArrowRightIcon /></button>
            </Link>
          </Reveal>
          <Reveal delay={1.0} sliderColor='rgb(var(--sam-primary-color))'>
            <Link href={"/about"}>
              <button className='btn btn-primary'>{tc('about')}</button>
            </Link>
          </Reveal>
        </div>
        <JumpingArrow className=' h-5 mt-4'/>
        <div className=' flex flex-row gap-4 m-4'>
          <Link href={"https://bsky.app/profile/sammahonri.com"}>
            <FaBluesky className='h-12 w-12 text-primary hover:text-secondary transition-colors' title='Bluesky @sammahonri.com'/>
          </Link>
          <Link href={"https://instagram.com/sammahonri"}>
            <FaInstagram className='h-12 w-12 text-primary hover:text-secondary transition-colors' title='Instagram @sammahonri'/>
          </Link>
        </div>
        
        
      </section>
    </main>
  </>;
}