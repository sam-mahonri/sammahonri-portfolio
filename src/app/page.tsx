import { useLocale, useTranslations } from 'next-intl';

import { Reveal } from '@/components/fx/Motion';
import Link from 'next/link';
import { ArrowRightIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import { JumpingArrow } from '@/components/fx/JumpingArrow';
import { FaBluesky, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import TimeSM from '@/components/ui/symbols/SM';


export default function Index() {
  const t = useTranslations('Index');
  const tc = useTranslations('Common');

  return <>
    <main className="main-section">
      <section className="main-subsection subsection-center-all">
        <TimeSM />
        <div className='flex flex-col items-center justify-center *:text-center w-full'>
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
        <div className='flex flex-wrap gap-3 items-center justify-center'>
          <Reveal delay={0.8} sliderColor='rgb(var(--sam-primary-color))'>
            <Link href={"/arts"}>
              <button className='btn btn-primary'>{tc('arts')}<ArrowRightIcon /></button>
            </Link>
          </Reveal>
          <Reveal delay={1.0} sliderColor='rgb(var(--sam-primary-color))'>
            <Link href={"/blog"}>
              <button className='btn btn-secondary'>{tc('blog')}</button>
            </Link>
          </Reveal>
          <Reveal delay={1.2} sliderColor='rgb(var(--sam-primary-color))'>
            <Link href={"/about"}>
              <button className='btn btn-secondary'>{tc('about')}</button>
            </Link>
          </Reveal>
        </div>
        <JumpingArrow className=' h-5 mt-4' />
        <div className=' flex flex-row gap-4 m-4 items-center'>
          <Link href={"https://www.linkedin.com/in/sam-mahonri-b62527226/"}>
            <FaLinkedin className='h-12 w-12 text-primary hover:text-secondary transition-all hover:scale-105' title='Instagram @sammahonri' />
          </Link>
          <Link href={"https://instagram.com/sammahonri"}>
            <FaInstagram className='h-12 w-12 text-primary hover:text-secondary transition-all hover:scale-105' title='Instagram @sammahonri' />
          </Link>
          <Link href={"https://bsky.app/profile/sammahonri.com"}>
            <FaBluesky className='h-14 w-14 text-secondary hover:text-foreground transition-all hover:scale-105' title='Bluesky @sammahonri.com' />
          </Link>
          <Link href={"https://x.com/sammahonri"} className=' relative'>
            <FaTwitter className='h-12 w-12 text-primary hover:text-secondary transition-all hover:scale-105' title='Twitter @SamMahonri' />
          </Link>
          <Link href={"https://github.com/sam-mahonri"} className=' relative'>
            <FaGithub className='h-12 w-12 text-primary hover:text-secondary transition-all hover:scale-105' title='Twitter @SamMahonri' />
          </Link>
        </div>


      </section>
    </main>
  </>;
}

function BRDisclaimer() {
  "use client";
  const locale = useLocale();
  return <>
    {locale == "pt" && <ExclamationTriangleIcon className=' text-orange-400 h-6 w-6 absolute bottom-0 -right-3' title='AVISO: Bloqueado no Brasil!' />}
  </>
}