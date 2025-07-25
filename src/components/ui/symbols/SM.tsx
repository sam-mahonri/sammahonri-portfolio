"use client";

import React, { useState, useEffect, startTransition } from 'react';
import { DynamicLogo } from '../SamLogos';
import { Reveal } from '@/components/fx/Motion';
import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import { setUserLocale } from '@/services/locale';
import { defaultBadHour, Locale } from '@/config';
import { useBadHour } from '@/providers/BadHourProvider';

export default function TimeSM() {
    return (
        <Reveal delay={0.1} overflow='visible' showSlider={0}>
            <div className='md:h-52 h-36'>
                <DynamicLogo className='text-primary' />
            </div>
        </Reveal>
    );
}

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
            className=' bg-secondary p-3 text-background z-50 uppercase'
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
    const [bad, setBad] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();
    const router = useRouter();
    const { badHour, setBadHour } = useBadHour();

    useEffect(() => {
        if (bad) {
            document.documentElement.classList.add('bad');
        } else {
            document.documentElement.classList.remove('bad');
        }
        return () => {
            document.documentElement.classList.remove('bad');
        };
    }, [bad]);

    useEffect(() => {
        const verifyBad = () => {
            const currentHour = new Date().getHours();
            const isBadHour = currentHour === badHour;
            setBad(isBadHour);
        };

        verifyBad();
        const intervalId = setInterval(verifyBad, 5000);
        return () => clearInterval(intervalId);
    }, [badHour]);

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
            'sam': () => router.push("/arts?art=83"),
            'mormon': () => router.push("/blog/mission"),
            'mission': () => router.push("/blog/mission"),
            'lds': () => router.push("/blog/mission"),
            'mahonri': () => router.push("/arts?art=72"),
            'bluesky': () => window.location.href = 'https://bsky.app/profile/zhyrel.com',
            'twitter': () => window.location.href = 'https://twitter.com/ZhyrelDragon',
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
            'bubi': () => window.location.href = 'https://bubiwolf.com',
            'kegaw': () => router.push("/arts?art=84"),
            'henricco': () => router.push("/arts?art=84"),
            'inserty': () => router.push("/arts?art=44"),
            'mitsu': () => router.push("/arts?art=27"),
            'diogo': () => router.push("/arts?art=19"),
            'boluh': () => router.push("/arts?art=36"),
            'kyosa': () => router.push("/arts?art=41"),
            'kassio': () => router.push("/arts?art=79"),
            'morian': () => router.push("https://morian.sammahonri.com"),
            'auzy': () => window.location.href = 'https://auzysunset.com',
            'lobinho': () => router.push("https://morian.sammahonri.com/kassio"),
            'kahracoles': () => window.location.href = 'https://bsky.app/profile/kahracoles.bsky.social',
            "nightmare": () => router.push("/blog/veils"),
            "veils": () => router.push("/blog/veils"),
            "fable": () => router.push("/blog/veils"),
            "thorns": () => setBadHour((prev) => { const hour = new Date().getHours(); return prev == defaultBadHour ? hour : defaultBadHour }),
            "shards": () => setBadHour((prev) => { const hour = new Date().getHours(); return prev == defaultBadHour ? hour : defaultBadHour }),
            "viper": () => setBadHour((prev) => { const hour = new Date().getHours(); return prev == defaultBadHour ? hour : defaultBadHour }),
            "lies": () => setBadHour((prev) => { const hour = new Date().getHours(); return prev == defaultBadHour ? hour : defaultBadHour }),
            "sorry":  () => setBadHour((prev) => { const hour = new Date().getHours(); return prev == defaultBadHour ? hour : defaultBadHour }),
            "email": () => window.location.href = 'mailto:sam.de.sa@missionary.org',
            "zphyr": () => window.location.href = 'https://www.youtube.com/@Z%C3%A9Pinh0w0',
            "zephyr": () => window.location.href = 'https://www.youtube.com/@Z%C3%A9Pinh0w0',
            "spotify": () => window.location.href = "https://open.spotify.com/intl-pt/artist/2E51QaIVG0zooDl9u1EN0B?si=g8Mk2_htQKqjIMvx9UzhKg"
        };

        const action = Object.keys(actionsMap).find(key => typedLetters.includes(key));

        if (action) {
            actionsMap[action]!();
            setTypedLetters("");
        }

    }, [resolvedTheme, router, setBadHour, setTheme, typedLetters]);

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
            </AnimatePresence>
        </>,
        document.body
    );
}