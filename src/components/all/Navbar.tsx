"use client";

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import ThemeSwitch from '@/components/ui/ThemeSwitcher';
import { DynamicInlineLogo, DynamicLogo } from '../ui/SamLogos';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Reveal } from '../fx/Motion';
import { BookOpenIcon, PaintBrushIcon, RocketLaunchIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useLocale, useTranslations } from 'next-intl';
import { AnimatePresence, motion } from 'framer-motion';
import { BiCompass } from 'react-icons/bi';
import { JumpingArrow } from '../fx/JumpingArrow';
import { DropdownLangSelector } from '../ui/menus/Language';
import Image from "next/legacy/image";

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
                        className=' p-8 py-14 pb-32 flex flex-grow w-full h-full bg-surface/75 justify-center items-center fixed top-20 left-0 z-40 border-t-2 border-secondary overflow-hidden backdrop-blur-sm'>
                        <motion.div
                            initial={{
                                opacity: 0,
                                translateY: "100vw"
                            }}
                            animate={{
                                opacity: 1,
                                translateY: 0
                            }}
                            transition={{
                                duration: 2,
                                delay: 0.5,
                                ease: "circInOut"
                            }}
                            className=" absolute w-full h-full bg-gradient-to-b from-transparent to-primary/40">
                            <div
                                className=' relative h-full w-full flex flex-col justify-end items-end scale-110'>
                                <DynamicLogo className=' scale-125 text-background/50 -translate-x-8 -translate-y-8'/>
                            </div>
                        </motion.div>
                        <div className='max-w-7xl w-full h-full flex flex-col items-center gap-1'>
                            <span className=' flex-grow' />
                            <div className="flex flex-col gap-2 items-center w-full min-h-32 pb-5">
                                <div className='flex flex-col gap-8 items-center justify-center w-full flex-grow '>
                                    <Reveal><h1 className='break-all text-secondary'>{tc("explore")}</h1></Reveal>
                                    <JumpingArrow />
                                </div>
                            </div>
                            <Reveal delay={0.2}><Link onClick={estadoMenu} href={"/arts"} className={clsx('olink slink capitalize font-unbounded font-semibold md:text-5xl text-3xl', { "active-link": pathname.startsWith("/arts") })}>{tc('arts')}</Link></Reveal>
                            <Reveal delay={0.4}><Link onClick={estadoMenu} href={"/blog"} className={clsx('olink slink capitalize font-unbounded font-semibold md:text-5xl text-3xl', { "active-link": pathname.startsWith("/blog") })}>{tc('blog')}</Link></Reveal>
                            <Reveal delay={0.6}><Link onClick={estadoMenu} href={"/about"} className={clsx('olink slink capitalize font-unbounded font-semibold md:text-5xl text-3xl', { "active-link": pathname.startsWith("/about") })}>{tc('about')}</Link></Reveal>
                            <Reveal delay={0.8}><Link onClick={estadoMenu} href={"/projects"} className={clsx('olink slink capitalize font-unbounded font-semibold md:text-5xl text-3xl', { "active-link": pathname.startsWith("/projects") })}>{tc('projects')}</Link></Reveal>
                            <span className=' flex-grow' />
                            <Link onClick={estadoMenu} href={"/"} className=' md:h-20 h-14 mb-8 -translate-x-2  self-center'><DynamicInlineLogo className={clsx({ "text-secondary": pathname === "/" })} /></Link>
                        </div>
                    </motion.div>}
            </AnimatePresence>

            <nav className={clsx('flex flex-col items-center justify-center fixed top-0 left-0 w-full transition-all duration-500 z-40 bg-gradient-to-b from-background to-transparent', {
                ' backdrop-blur-sm bg-surface/75': !isTop || menuOpened,
                'md:p-6 p-0': isTop && !menuOpened
            })}>
                <div className="flex flex-row items-center container max-w-7xl box-border gap-7 h-20 min-h-20">
                    <Reveal width='100%' showSlider={0} initial={64} final={0} delay={1.5} ease='backOut' endNoOverflow={true}>
                        <div className="flex flex-row items-center container px-5 py-2 max-w-7xl box-border gap-2 h-fit">
                            <Reveal initial={-64} final={0} delay={1}>
                                <div className='h-10 min-w-8'>
                                    <Link href={"/"} className='text-primary' onClick={() => setMenuOpened(false)}>
                                        <span className=' hidden md:block h-full'> <DynamicInlineLogo className={clsx("min-w-fit", { "text-secondary": pathname === "/" })} /> </span>
                                        <span className=' block md:hidden h-full'> <DynamicLogo className={clsx("min-w-fit", { "text-secondary": pathname === "/" })} /> </span>
                                    </Link>
                                </div>
                            </Reveal>
                            <span className='flex-grow' />
                            <span className=' md:hidden block'>
                                <Reveal initial={-64} final={0} delay={0.2} showSlider={0}>
                                    <button className={clsx('btn group', {
                                        "btn-error": menuOpened,
                                        "btn-alt-primary": !menuOpened
                                    })} onClick={estadoMenu}>
                                        {menuOpened ?
                                            <>
                                                <XMarkIcon />
                                                {tc("close")}
                                            </>
                                            :
                                            <>
                                                { pathname === "/" && <> <BiCompass /> {tc("explore")} </>  }
                                                { pathname.startsWith("/arts") && <> <PaintBrushIcon/> {tc("arts")} </> }
                                                { pathname.startsWith("/blog") && <> <BookOpenIcon/> {tc("blog")} </> }
                                                { pathname.startsWith("/about") && <> <span><DynamicLogo className=' min-h-5 min-w-5 max-h-5 max-w-5 '/></span>  {tc("about")} </> }
                                                { pathname.startsWith("/projects") && <> <RocketLaunchIcon/> {tc("projects")} </> }
                                            </>
                                        }
                                    </button>
                                </Reveal>
                            </span>

                            <span className=' flex-row gap-2 md:flex hidden mr-4'>
                                <Reveal delay={0.2}><Link href={"/arts"} className={clsx('olink slink capitalize font-unbounded font-semibold flex flex-row gap-2 items-center justify-center group !px-3', { "active-link": pathname.startsWith("/arts") })}> {tc('arts')} <PaintBrushIcon className={clsx(' min-h-5 min-w-5 max-h-5 max-w-5 lg:block hidden group-hover:text-background transition-colors', { "text-background ": pathname.startsWith("/arts"), "text-secondary": !pathname.startsWith("/arts") })}/> </Link></Reveal>
                                <Reveal delay={0.4}><Link href={"/blog"} className={clsx('olink slink capitalize font-unbounded font-semibold flex flex-row gap-2 items-center justify-center group !px-3', { "active-link": pathname.startsWith("/blog") })}> {tc('blog')} <BookOpenIcon className={clsx(' min-h-5 min-w-5 max-h-5 max-w-5 lg:block hidden group-hover:text-background transition-colors', { "text-background ": pathname.startsWith("/blog"), "text-secondary": !pathname.startsWith("/blog") })}/> </Link></Reveal>
                                <Reveal delay={0.6}><Link href={"/about"} className={clsx('olink slink capitalize font-unbounded font-semibold flex flex-row gap-2 items-center justify-center group !px-3', { "active-link": pathname.startsWith("/about") })}> {tc('about')} <DynamicLogo className={clsx(' min-h-5 min-w-5 max-h-5 max-w-5 lg:block hidden group-hover:text-background transition-colors', { "text-background ": pathname.startsWith("/about"), "text-secondary": !pathname.startsWith("/about") })}/> </Link></Reveal>
                                <Reveal delay={0.8} className=' lg:block hidden'><Link href={"/projects"} className={clsx('olink slink capitalize font-unbounded font-semibold flex flex-row gap-2 items-center justify-center group !px-3', { "active-link": pathname.startsWith("/projects") })}> {tc('projects')} <RocketLaunchIcon className={clsx(' min-h-5 min-w-5 max-h-5 max-w-5 lg:block hidden group-hover:text-background transition-colors', { "text-background ": pathname.startsWith("/projects"), "text-secondary": !pathname.startsWith("/projects") })}/> </Link></Reveal>
                            </span>

                            <Reveal initial={-64} final={0} delay={1.4} showSlider={0}>
                                <ThemeSwitch />
                            </Reveal>

                            <Reveal initial={-64} final={0} delay={1.6} showSlider={0} endNoOverflow={true}>
                                <DropdownLangSelector />
                            </Reveal>


                        </div>
                    </Reveal>
                </div>

            </nav>

        </>

    );
}


export default Navbar;

