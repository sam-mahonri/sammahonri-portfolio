"use client";

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import ThemeSwitch from '@/components/ui/ThemeSwitcher';
import { DynamicInlineLogo, DynamicLogo } from '../ui/SamLogos';
import { Link, usePathname } from '@/navigation';
import { Reveal } from '../fx/Motion';
import { Bars3Icon, ArrowUpIcon, ArrowLeftIcon, ArrowDownIcon, GlobeAltIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useLocale, useTranslations } from 'next-intl';
import { AnimatePresence, motion } from 'framer-motion';
import { BiCompass } from 'react-icons/bi';
import { Title } from '../ui/Titles';
import { JumpingArrow } from '../fx/JumpingArrow';
import { SwitchLanguageLink } from '../ui/LanguageSwitcherLink';

function Navbar() {

    const tc = useTranslations("Common");
    const cl = useLocale();

    const pathname = usePathname();
    const [isTop, setIsTop] = useState(true);
    const [menuOpened, setMenuOpened] = useState(false);

    const estadoMenu = () => {
        setMenuOpened(!menuOpened);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsTop(scrollTop === 0);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll()
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <AnimatePresence>
                {menuOpened &&
                    <motion.div
                        initial={{
                            opacity: 0,
                            translateY: "100vw"
                        }}
                        animate={{
                            opacity: 1,
                            translateY: 0,
                            transition: {
                                duration: 0.75,
                                ease: "circInOut"
                            },

                        }}
                        exit={{
                            opacity: 0,
                            translateY: "100vw",
                            transition: {
                                duration: 0.75,
                                ease: "circInOut"
                            }
                        }}
                        className=' p-8 py-14 pb-32 flex flex-grow w-full h-full backdrop-blur-md bg-surface/75 justify-center items-center fixed top-20 left-0 z-40 border-t-4 border-secondary'>
                        <motion.div
                        initial={{
                            opacity: 0,
                            translateY: 128
                        }}
                        animate={{
                            opacity: 1,
                            translateY: 32
                        }}
                        transition={{
                            duration: 1.5,
                            delay: 1,
                            ease: "easeInOut"
                        }}
                        className=' absolute w-full h-full bg-gradient-to-b from-transparent via-transparent to-primary/25'/>
                        <div className='max-w-7xl w-full h-full flex flex-col items-center'>
                            <div className="flex flex-col gap-2 items-center w-full min-h-32 pb-5">
                                <div className='flex flex-col gap-8 items-center justify-center w-full flex-grow '>
                                    <Reveal><h1 className='break-all text-secondary'>{tc("explore")}</h1></Reveal>
                                    <JumpingArrow />
                                </div>
                            </div>
                            <Reveal delay={0.2}><Link onClick={estadoMenu} href={"/arts"} className={clsx('olink slink uppercase font-dyslexia font-semibold md:text-5xl text-3xl', { "active-link": pathname.startsWith("/arts") })}>{tc('arts')}</Link></Reveal>
                            <Reveal delay={0.4}><Link onClick={estadoMenu} href={"/blog"} className={clsx('olink slink uppercase font-dyslexia font-semibold md:text-5xl text-3xl', { "active-link": pathname.startsWith("/blog") })}>{tc('blog')}</Link></Reveal>
                            <Reveal delay={0.6}><Link onClick={estadoMenu} href={"/about"} className={clsx('olink slink uppercase font-dyslexia font-semibold md:text-5xl text-3xl', { "active-link": pathname.startsWith("/about") })}>{tc('about')}</Link></Reveal>
                            <Reveal delay={0.8}><Link onClick={estadoMenu} href={"/projects"} className={clsx('olink slink uppercase font-dyslexia font-semibold md:text-5xl text-3xl', { "active-link": pathname.startsWith("/projects") })}>{tc('projects')}</Link></Reveal>
                            <span className=' flex-grow' />
                            <Reveal>

                                <h3>- {tc('lang')} -</h3>
                            </Reveal>
                            <div className="flex md:flex-row flex-col items-center justify-center md:gap-8 gap-1 mb-4 z-30">
                                <SwitchLanguageLink newLocale="pt" className={clsx("olink font-dyslexia font-semibold", { "active-link": cl === 'pt' })}>Português - BR</SwitchLanguageLink>
                                <SwitchLanguageLink newLocale="en" className={clsx("olink font-dyslexia font-semibold", { "active-link": cl === 'en' })}>English - EN</SwitchLanguageLink>
                                <SwitchLanguageLink newLocale="es" className={clsx("olink font-dyslexia font-semibold", { "active-link": cl === 'es' })}>Español - ES</SwitchLanguageLink>
                            </div>
                            <Link onClick={estadoMenu} href={"/"} className=' md:h-20 h-14 mb-8 -translate-x-2  self-center'><DynamicInlineLogo className={clsx({ "text-secondary": pathname === "/" })} /></Link>
                        </div>
                    </motion.div>}
            </AnimatePresence>
            <nav className={clsx('flex flex-col items-center justify-center fixed top-0 left-0 w-full transition-all duration-500 z-40 border-b-2', {
                'bg-transparent border-transparent': isTop && !menuOpened,
                'backdrop-blur-md bg-surface/90 border-secondary': !isTop || menuOpened,
                'md:p-6 p-0': isTop && !menuOpened
            })}>
                <div className="flex flex-row items-center container max-w-7xl box-border gap-7 h-20 min-h-20">
                    <Reveal width='100%' showSlider={0} initial={64} final={0} delay={1.5} ease='backOut'>
                        <div className="flex flex-row items-center container px-5 py-2 max-w-7xl box-border gap-2 h-fit">
                            <Reveal initial={-64} final={0} delay={1}>
                                <div className='h-10 min-w-8'>
                                    <Link href={"/"} className='text-primary'>
                                        <span className=' hidden md:block h-full'> <DynamicInlineLogo className={clsx("min-w-fit", { "text-secondary": pathname === "/" })} /> </span>
                                        <span className=' block md:hidden h-full'> <DynamicLogo className={clsx("min-w-fit", { "text-secondary": pathname === "/" })} /> </span>
                                    </Link>
                                </div>
                            </Reveal>
                            <span className='flex-grow' />
                            <Reveal initial={-64} final={0} delay={1.2} showSlider={0}>
                                <button className={clsx('btn btn-alt-primary', {
                                    "animate-pulse": menuOpened,
                                })} onClick={estadoMenu}>
                                    {menuOpened ?
                                        <>
                                            <XMarkIcon />
                                            <span className='md:block hidden'> {tc("close")} </span>
                                        </>
                                        :
                                        <>
                                            <BiCompass />
                                            <span className='md:block hidden'> {tc("explore")} </span>
                                        </>
                                    }
                                </button>
                            </Reveal>
                            <Reveal initial={-64} final={0} delay={1.4} showSlider={0}>
                                <ThemeSwitch />
                            </Reveal>

                        </div>
                    </Reveal>
                </div>

            </nav>

        </>

    );
}

export default Navbar;