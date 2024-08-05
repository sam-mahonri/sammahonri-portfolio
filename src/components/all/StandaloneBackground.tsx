"use client";

import { useEffect, useState } from 'react';
import BackgroundImage from './BackgroundImage';

export default function StandaloneBackground({ customImage = null, defaultImg = false }: { customImage?: string | null, defaultImg?: boolean }) {
    const [selectedBackground, setSelectedBackground] = useState<string>('');

    useEffect(() => {
        // Função para definir o fundo
        const determineBackground = () => {
            const backgrounds = [
                "/backgrounds/home.svg",
                "/backgrounds/lastfer.png",
                "/backgrounds/streetlucifer.png"
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

        // Defina o fundo apenas após o componente ser montado
        setSelectedBackground(determineBackground());
    }, [customImage, defaultImg]);

    // Renderize o componente BackgroundImage somente quando selectedBackground estiver definido
    return selectedBackground ? <BackgroundImage source={selectedBackground} /> : null;
}