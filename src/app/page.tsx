import { getTranslations } from 'next-intl/server';

import { Reveal } from '@/components/fx/Motion';
import Link from 'next/link';
import { ArrowRightIcon, BookOpenIcon, ExclamationTriangleIcon, MusicalNoteIcon} from '@heroicons/react/24/solid';
import { JumpingArrow } from '@/components/fx/JumpingArrow';
import { FaBluesky, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { DynamicInlineLogo, DynamicLogo } from '@/components/ui/SamLogos';


export default async function Index() {
	const t = await getTranslations('Index');
	const tc = await getTranslations('Common');
	const ta = await getTranslations('Arts');

	return <>
		<main className="main-section">
			<section className="main-subsection subsection-center-all">
				<div className='flex flex-col items-center justify-center *:text-center w-full md:gap-0 gap-2'>
					<Reveal delay={2.5}>
						<h4>{t('toptitle')}</h4>
					</Reveal>
					<div className='flex flex-row gap-2 items-center w-full'>
						<span className=' bg-gradient-to-r from-transparent to-secondary pt-0.5 flex-grow' />
						<Reveal delay={1.6} showSlider={0}>
							<DynamicInlineLogo className='md:block hidden md:h-44 w-full md:w-fit -translate-x-1' />
							<DynamicLogo className='md:hidden block max-h-44 -translate-x-1'/>
						</Reveal>
						
						<span className=' bg-gradient-to-l from-transparent to-secondary pt-0.5 flex-grow' />
					</div>
					<h1 className=' md:hidden block'>Sam Mahonri</h1>
					<Reveal delay={2.7}>
						<h4>{t('subtitle')}</h4>
					</Reveal>

				</div>
				<div className='flex flex-wrap gap-3 items-center justify-center'>
					<Reveal delay={2.8} sliderColor='rgb(var(--sam-primary-color))'>
						<Link href={"/arts"}>
							<button className='btn btn-primary'>{tc('arts')}<ArrowRightIcon /></button>
						</Link>
					</Reveal>
					<Reveal delay={3.0} sliderColor='rgb(var(--sam-primary-color))'>
						<Link href={"/arts/music"}>
							<button className='btn btn-secondary'>{ta('music')} <MusicalNoteIcon /> </button>
						</Link>
					</Reveal>
					<Reveal delay={3.2} sliderColor='rgb(var(--sam-primary-color))'>
						<Link href={"/blog"}>
							<button className='btn btn-secondary'>{tc('blog')} <BookOpenIcon /> </button>
						</Link>
					</Reveal>
					<Reveal delay={3.4} sliderColor='rgb(var(--sam-primary-color))'>
						<Link href={"/about"}>
							<button className='btn btn-secondary'>{tc('about')} <span><DynamicLogo className=' min-h-5 min-w-5 max-h-5 max-w-5 ' /></span> </button>
						</Link>
					</Reveal>
				</div>
				<JumpingArrow className=' h-5 mt-2' />
				<div className=' flex flex-row gap-4 m-2 items-center'>
					<Link href={"https://www.linkedin.com/in/sam-mahonri-b62527226/"}>
						<FaLinkedin className='h-10 w-10 text-secondary hover:text-primary transition-all hover:scale-110' title='Instagram @sammahonri' />
					</Link>
					<Link href={"https://instagram.com/sammahonri"}>
						<FaInstagram className='h-10 w-10 text-secondary hover:text-primary transition-all hover:scale-110' title='Instagram @sammahonri' />
					</Link>
					<Link href={"https://bsky.app/profile/sammahonri.com"}>
						<FaBluesky className='h-10 w-10 text-secondary hover:text-primary transition-all hover:scale-110' title='Bluesky @sammahonri.com' />
					</Link>
					<Link href={"https://x.com/sammahonri"} className=' relative'>
						<FaTwitter className='h-10 w-10 text-secondary hover:text-primary transition-all hover:scale-110' title='Twitter @SamMahonri' />
					</Link>
					<Link href={"https://github.com/sam-mahonri"} className=' relative'>
						<FaGithub className='h-10 w-10 text-secondary hover:text-primary transition-all hover:scale-110' title='Twitter @SamMahonri' />
					</Link>
				</div>
				<Reveal delay={3} showSlider={0}>
					<div className="mt-2 bg-primary/10 backdrop-blur-sm flex flex-wrap md:flex-row flex-row">
						<Link href={"/blog/mission"}>
							<div className=' p-4 px-5 w-full h-full hover:bg-background hover:text-foreground  flex flex-row items-center justify-center gap-2'>
								<span className=' font-unbounded uppercase text-xs font-light text-center'>{tc("learnmore_sud")}</span>
								<ArrowRightIcon className=' min-h-5 min-w-5 max-h-5 max-w-5' />
							</div>
						</Link>
					</div>
				</Reveal>
			</section>
		</main>
	</>;
}
