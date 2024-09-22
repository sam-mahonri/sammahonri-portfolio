"use client";

import Image from 'next/image';
import React, { useState, useEffect, startTransition } from 'react';
import { DynamicLogo } from '../SamLogos';
import { Reveal } from '@/components/fx/Motion';
import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { HeartIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { setUserLocale } from '@/services/locale';
import { Locale } from '@/config';

export default function TimeHSM() {
    const [showComponent, setShowComponent] = useState<boolean>(false);

    useEffect(() => {

        const checkTime = () => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();

            if (((hours === 7 || hours === 19) && minutes === 8)
                || ((hours === 8 || hours === 20) && minutes === 5)
                || (hours === 0 && minutes === 0)) {
                setShowComponent(true);
            } else {
                setShowComponent(false);
            }
        };

        checkTime()
        const intervalId = setInterval(checkTime, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>

            {!showComponent ? (
                <Reveal delay={0.1} overflow='visible' showSlider={0}>
                    <div className=' md:h-52 h-36'>
                        <DynamicLogo className=' text-primary -translate-x-5' />

                    </div>
                </Reveal>

            ) : (
                <div className=' animate-pulse flex justify-center items-center flex-col' title='"Draco parvus felinum parvum invenit, ut sic in aeternum felices viverent.🌻✨"'>
                    <Reveal delay={0.1} overflow='visible' showSlider={0}>
                        <Image
                            src="/icons/seven.svg"
                            alt="Draco parvus felinum parvum invenit, ut sic in aeternum felices viverent.🌻✨"
                            height={300}
                            width={300}
                            className=' hover:scale-110 transition-transform duration-500'
                        />
                    </Reveal>
                    <p className='p-tag text-center'>Draco parvus felinum parvum invenit, ut sic in aeternum felices viverent.🌻✨</p>
                </div>

            )}
        </>
    );
};


type FloatingLetterProps = {
    id: number;
    letter: string;
    x: number;
    y: number;
    remove: () => void;
};

const FloatingLetter: React.FC<FloatingLetterProps> = ({ letter, x, y, remove }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            remove(); // Remove a letra após 1 segundo
        }, 1500);
        return () => clearTimeout(timeout); // Limpa o timeout quando o componente é desmontado
    }, [remove]);

    return (
        <motion.h1
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "backInOut" }}
            style={{
                position: 'fixed',
                top: y,
                left: x,
            }}
            className=' bg-secondary text-background z-50'
        >
            {letter}
        </motion.h1>
    );
};

export function TypingHSM() {
    const [letters, setLetters] = useState<
        { id: number; letter: string; x: number; y: number }[]
    >([]);
    const [typedLetters, setTypedLetters] = useState<string>('');
    const [idCounter, setIdCounter] = useState(0);
    const [isClient, setIsClient] = useState(false);
    const [showHeart, setShowHeart] = useState(false);
    const [felineTheme, setFelineTheme] = useState(false);
    const [rainbow, setRainbow] = useState(false);

    const { setTheme, resolvedTheme } = useTheme();
    const router = useRouter();

    function changeLang(value: string) {
        const locale = value as Locale;
        startTransition(() => {
            setUserLocale(locale);
        });
    }

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            const letter = event.key.toLowerCase();
            if (letter.length === 1 && /[a-zA-Z]/.test(letter)) {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                const id = idCounter;

                setLetters((prevLetters) => [
                    ...prevLetters,
                    { id, letter, x, y }
                ]);

                setTypedLetters((prevTyped) => (prevTyped + letter).slice(-10));

                setIdCounter((prevId) => prevId + 1);
            }
        };

        window.addEventListener('keypress', handleKeyPress);
        return () => {
            window.removeEventListener('keypress', handleKeyPress);
        };
    }, [idCounter]);

    useEffect(() => {
        if (typedLetters.includes('henricco')) {
            setFelineTheme((prev) => !prev);
            document.documentElement.classList.toggle('feline');

            setShowHeart(true);
            setTimeout(() => {
                setShowHeart(false);
            }, 2000);

            setTypedLetters("")
        } else if (typedLetters.includes('hsm')) {
            setFelineTheme((prev) => !prev);
            document.documentElement.classList.toggle('feline');
            setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');

            setShowHeart(true);
            setTimeout(() => {
                setShowHeart(false);
            }, 2000);

            setTypedLetters("")
        } else if (typedLetters.includes('sam') || typedLetters.includes('mahonri')) {
            setFelineTheme(false)
            document.documentElement.classList.remove('feline');
            setTheme('dark');

            setShowHeart(true);
            setTimeout(() => {
                setShowHeart(false);
            }, 2000);

            setTypedLetters("");
        } else if (typedLetters.includes('penis')) {
            setTypedLetters("");
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        } else if (typedLetters.includes('bluesky')) {
            setTypedLetters("");
            window.location.href = 'https://bsky.app/profile/sammahonri.com'
        } else if (typedLetters.includes('home')) {
            setTypedLetters("");
            router.push("/");
        } else if (typedLetters.includes('arts')) {
            setTypedLetters("");
            router.push("/arts");
        } else if (typedLetters.includes('vectorial')) {
            setTypedLetters("");
            router.push("/arts/vectorial");
        } else if (typedLetters.includes('paintings')) {
            setTypedLetters("");
            router.push("/arts/paintings");
        } else if (typedLetters.includes('music')) {
            setTypedLetters("");
            router.push("/arts/music");
        } else if (typedLetters.includes('blog')) {
            setTypedLetters("");
            router.push("/blog");
        } else if (typedLetters.includes('about')) {
            setTypedLetters("");
            router.push("/about");
        } else if (typedLetters.includes('projects')) {
            setTypedLetters("");
            router.push("/projects");
        } else if (typedLetters.includes('projects')) {
            setTypedLetters("");
            router.push("/projects");
        } else if (typedLetters.includes('light')) {
            setTypedLetters("");
            setTheme('light');
        } else if (typedLetters.includes('dark')) {
            setTypedLetters("");
            setTheme('dark');
        } else if (typedLetters.includes('portugues')) {
            setTypedLetters("");
            changeLang('pt');
        } else if (typedLetters.includes('english')) {
            setTypedLetters("");
            changeLang('en');
        } else if (typedLetters.includes('espanhol')) {
            setTypedLetters("");
            changeLang('es');
        } else if (typedLetters.includes('sex')) {
            setTypedLetters("");
            setRainbow((prev) => !prev);
        }




    }, [resolvedTheme, router, setTheme, typedLetters]);

    const removeLetter = (id: number) => {
        setLetters((prevLetters) => prevLetters.filter((letter) => letter.id !== id));
    };

    if (!isClient) {
        return null;
    }

    return createPortal(
        <>
            <AnimatePresence>
                {letters.map(({ id, letter, x, y }) => (
                    <FloatingLetter key={id} id={id} letter={letter} x={x} y={y} remove={() => removeLetter(id)} />
                ))}

                {showHeart && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className=' fixed flex items-center justify-center top-0 left-0 w-full h-full bg-sam-dark/75 z-50'

                    >
                        <motion.div
                            key="heart"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "backInOut" }}
                        >
                            <HeartIcon className={clsx(' h-32 w-32 ', {
                                "text-orange-500": felineTheme && resolvedTheme != "light",
                                "text-primary": (!felineTheme && resolvedTheme != "light") || (!felineTheme && resolvedTheme == "light"),
                                "text-white": felineTheme && resolvedTheme == "light"
                            })} />
                        </motion.div>

                    </motion.div>
                )}
            </AnimatePresence>

            
        </>,
        document.body
    );
}