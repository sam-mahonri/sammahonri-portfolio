"use client";

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import ThemeSwitch from '@/components/ui/ThemeSwitcher';
import { DynamicInlineLogo, DynamicLogo } from '../ui/SamLogos';
import { Link, usePathname } from '@/navigation';
import { Reveal } from '../fx/Motion';
import { Bars3Icon, ArrowUpIcon } from '@heroicons/react/24/solid';
import { useTranslations } from 'next-intl';

function Navbar() {

    const tc = useTranslations("Common");

    const pathname = usePathname();
    const [isTop, setIsTop] = useState(true);
    const [menuOpened, setMenuOpened] = useState(false);

    const estadoMenu = () => {
        setMenuOpened(!menuOpened); // Alterna entre falso e verdadeiro
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

    const isJune = new Date().getMonth() === 5;
    
    return (
        <nav className={clsx('flex flex-col items-center justify-center fixed top-0 left-0 w-full transition-all duration-300 z-40', {
            'bg-transparent': isTop && !menuOpened,
            'backdrop-blur-md': !isTop || menuOpened,
            'bg-foreground/90': menuOpened || !isTop,
            'md:p-6 p-0': isTop && !menuOpened,
            'h-full': menuOpened
        })}>
            <div className="flex flex-row items-center container max-w-7xl box-border gap-7 h-20 min-h-20">
                <Reveal width='100%' showSlider={0} initial={64} final={0} delay={0}>
                    <div className="flex flex-row items-center container px-5 py-2 max-w-7xl box-border gap-8 h-fit">
                        <Reveal initial={-64} final={0}>
                            <div className='h-8 min-w-8'>
                                <Link href={"/"} className='text-primary'>
                                    <span className=' hidden md:block h-full'> <DynamicInlineLogo className={clsx("min-w-fit", { "text-secondary": pathname === "/"})} /> </span>
                                    <span className=' block md:hidden h-full'> <DynamicLogo className={clsx("min-w-fit", { "text-secondary": pathname === "/"})} /> </span>
                                </Link>
                            </div>
                        </Reveal>
                        <span className='md:hidden block'>
                            <button className='btn btn-selector-secondary' onClick={estadoMenu}>
                                {menuOpened ? <ArrowUpIcon /> : <Bars3Icon />}
                            </button>
                        </span>
                        <span className='flex flex-grow min-w-0'></span>

                        <Reveal initial={-32} final={0} delay={0.2}><Link href={"/blog"} className={clsx('olink uppercase font-dyslexia font-semibold md:block hidden', { "active-link": pathname.startsWith("/blog") })}>{tc('blog')}</Link></Reveal>
                        <Reveal initial={-32} final={0} delay={0.4}><Link href={"/arts"} className={clsx('olink uppercase font-dyslexia font-semibold md:block hidden', { "active-link": pathname.startsWith("/arts") })}>{tc('arts')}</Link></Reveal>
                        <Reveal initial={-32} final={0} delay={0.6}><Link href={"/about"} className={clsx('olink uppercase font-dyslexia font-semibold md:block hidden', { "active-link": pathname.startsWith("/about") })}>{tc('about')}</Link></Reveal>
                        <Reveal initial={-32} final={0} delay={0.8}><Link href={"/projects"} className={clsx('olink uppercase font-dyslexia font-semibold md:block hidden', { "active-link": pathname.startsWith("/projects") })}>{tc('projects')}</Link></Reveal>

                        <ThemeSwitch />
                    </div>
                </Reveal>
            </div>
            {menuOpened ? <>

                <div className=' flex flex-grow flex-col justify-center items-center'>
                    <Link onClick={estadoMenu} href={"/"} className=' h-12 mb-6'><DynamicInlineLogo className={clsx({ "text-secondary": pathname === "/" })} /></Link>
                    <Reveal ><Link onClick={estadoMenu} href={"/blog"} className={clsx('olink slink uppercase font-dyslexia font-semibold text-2xl', { "active-link": pathname.startsWith("/blog") })}>{tc('blog')}</Link></Reveal>
                    <Reveal delay={0.2}><Link onClick={estadoMenu} href={"/arts"} className={clsx('olink slink uppercase font-dyslexia font-semibold text-2xl', { "active-link": pathname.startsWith("/arts") })}>{tc('arts')}</Link></Reveal>
                    <Reveal delay={0.4}><Link onClick={estadoMenu} href={"/about"} className={clsx('olink slink uppercase font-dyslexia font-semibold text-2xl', { "active-link": pathname.startsWith("/about") })}>{tc('about')}</Link></Reveal>
                    <Reveal delay={0.6}><Link onClick={estadoMenu} href={"/projects"} className={clsx('olink slink uppercase font-dyslexia font-semibold text-2xl', { "active-link": pathname.startsWith("/projects") })}>{tc('projects')}</Link></Reveal>
                </div>
            </> : <></>}

        </nav>
    );
}

function ListLinks() {

}

export default Navbar;