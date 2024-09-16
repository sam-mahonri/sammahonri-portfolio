"use client";

import { useEffect, useState } from 'react';
import BackgroundImage from './BackgroundImage';

export default function StandaloneBackground({ customImage = null, defaultImg = false }: { customImage?: string | null, defaultImg?: boolean }) {
    const [selectedBackground, setSelectedBackground] = useState<string>('');

    useEffect(() => {
        const determineBackground = () => {
            const backgrounds = [
                "/backgrounds/home.svg",
                "/backgrounds/lastfer.png",
                "/backgrounds/streetlucifer.png",
                "/backgrounds/5am.png"
            ];

            if (customImage) {
                return customImage;
            } else if (defaultImg) {
                return "/backgrounds/home.svg";
            } else {
                const randomBackground = Math.floor(Math.random() * backgrounds.length);
                return backgrounds[randomBackground];
            }
        };
        setSelectedBackground(determineBackground());
    }, [customImage, defaultImg]);

    return selectedBackground ? <BackgroundImage source={selectedBackground} /> : null;
}