"use client";

import React, { useState, useEffect, startTransition } from 'react';
import { DynamicLogo } from '../SamLogos';
import { Reveal } from '@/components/fx/Motion';
import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import { setUserLocale } from '@/services/locale';
import { Locale } from '@/config';
import Image from 'next/image';
import { FaHeartBroken } from 'react-icons/fa';

export default function TimeSM() {
    const [showComponent, setShowComponent] = useState<boolean>(false);

    useEffect(() => {

        const checkTime = () => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();

            if (((hours === 10 || hours === 22) && minutes === 15)
                || ((hours === 8 || hours === 21) && minutes === 11))
                 {
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
                <div className=' animate-pulse flex justify-center items-center flex-col' title='"The end"'>
                    <Image
                        src = {"/icons/seven.svg"}
                        alt = {""}
                    />
                    <p className='p-tag text-center'>08 05 23 - 15 10 24 - the good and bad times will be remembered forever</p>
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
            remove();
        }, 1500);
        return () => clearTimeout(timeout);
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

export function TypingSM() {
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

        const actionsMap: Partial<Record<string, Function>> = {
            
            'sam': () => setDarkThemeAndRemoveFeline(),
            'mahonri': () => setDarkThemeAndRemoveFeline(),
            'penis': () => window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            'bluesky': () => window.location.href = 'https://bsky.app/profile/sammahonri.com',
            'twitter': () => window.location.href = 'https://twitter.com/sammahonri',
            'instagram': () => window.location.href = 'https://instagram.com/sammahonri',
            'linkedin': () => window.location.href = 'https://www.linkedin.com/in/sam-mahonri-b62527226/',
            'github': () => window.location.href = 'https://github.com/sam-mahonri',
            'home': () => router.push("/"),
            'arts': () => router.push("/arts"),
            'vectorial': () => router.push("/arts/vectorial"),
            'paintings': () => router.push("/arts/paintings"),
            'music': () => router.push("/arts/music"),
            'blog': () => router.push("/blog"),
            'about': () => router.push("/about"),
            'projects': () => router.push("/projects"),
            'light': () => setTheme('light'),
            'dark': () => setTheme('dark'),
            'portugues': () => changeLang('pt'),
            'english': () => changeLang('en'),
            'espanhol': () => changeLang('es'),
            'bubi': () => router.push("/arts?art=%252Fartistic%252Farts%252F18.png"),
            'kegaw': () => router.push("/arts?art=%252Fartistic%252Farts%252F18.png"),
            'henricco': () => toggleFelineTheme(),
            'inserty': () => router.push("/arts?art=%252Fartistic%252Farts%252F13.png"),
            'mitsu': () => router.push("/arts?art=%252Fartistic%252Farts%252F30.png"),
            'diogo': () => router.push("/arts?art=%252Fartistic%252Farts%252F38.png"),
            'boluh': () => router.push("/arts?art=%252Fartistic%252Farts%252F21.png"),
            'kyosa': () => router.push("/arts?art=%252Fartistic%252Farts%252F16.png"),
            'aeternum': () => router.push("/arts?art=%252Fartistic%252Farts%252Frevelation.png"),
            'auzy': () => window.location.href = 'https://auzysunset.com',
            'kahracoles': () => window.location.href = 'https://bsky.app/profile/kahracoles.bsky.social'
        };

        const action = Object.keys(actionsMap).find(key => typedLetters.includes(key));

        const toggleFelineTheme = () => {
            setFelineTheme((prev) => !prev);
            document.documentElement.classList.toggle('feline');
            showHeartEffect();
        };

        const setDarkThemeAndRemoveFeline = () => {
            setFelineTheme(false);
            document.documentElement.classList.remove('feline');
            setTheme('dark');
            showHeartEffect();
        };

        const showHeartEffect = () => {
            setShowHeart(true);
            setTimeout(() => setShowHeart(false), 2000);
        };

        

        if (action) {
            actionsMap[action]!();
            setTypedLetters("");
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
                            <FaHeartBroken className={clsx(' h-32 w-32 ', {
                                "text-gray": felineTheme && resolvedTheme != "light",
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