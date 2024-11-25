"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import BackgroundImage from './BackgroundImage';
import { useBadHour } from '@/providers/BadHourProvider';

export default function StandaloneBackground({ customImage = null, defaultImg = false }: { customImage?: string | null, defaultImg?: boolean }) {
    const [selectedBackground, setSelectedBackground] = useState<string>('');
    const [isShow, setIsShow] = useState(true);
    const { badHour } = useBadHour();
    const pathname = usePathname();

    useEffect(() => {
        const determineBackground = () => {
            const currentHour = new Date().getHours();
            const isBadHour = currentHour == badHour;

            const godBackgrounds = [
                "/backgrounds/home.svg",
                "/backgrounds/lastfer.png",
                "/backgrounds/5am.png",
                "/backgrounds/4immortals.png",
                "/backgrounds/twoyears.png",
                "/backgrounds/rainymissionary.png",
                "/backgrounds/sundays.png"
            ];

            const badBackgrounds = [
                "/backgrounds/breaksoul.png",
                "/backgrounds/gettingtired.png",
                "/backgrounds/spikeshide.png",
                "/backgrounds/end.png",
                "/backgrounds/angel.png",
                "/backgrounds/fragility.png"
            ];

            if (customImage) {
                return customImage;
            } else if (defaultImg) {
                return "/backgrounds/home.svg";
            } else {
                const length = isBadHour ? badBackgrounds.length : godBackgrounds.length;
                const randomBackground = Math.floor(Math.random() * length);
                return isBadHour ? badBackgrounds[randomBackground] : godBackgrounds[randomBackground];
            }
        };

        const changeBackground = () => {
            setIsShow(false);

            setTimeout(() => {
                setSelectedBackground((prev) => {
                    let newbg = determineBackground();
                    while (newbg === prev) {
                        newbg = determineBackground();
                    }
                    return newbg;
                });
                setIsShow(true);
            }, 2000);
        };

        changeBackground();

        const handleRouteChange = () => changeBackground();
        handleRouteChange();

    }, [badHour, customImage, defaultImg, pathname]);

    return (
        <div className='-z-10 absolute w-full h-full overflow-x-hidden'>
            <AnimatePresence>
                {isShow && (
                    <motion.div
                        key={selectedBackground}
                        initial={{ opacity: 0, scale: "145%" }}
                        animate={{ opacity: 1, scale: "100%" }}
                        exit={{ opacity: 0, scale: "105%" }}
                        transition={{ duration: 2, ease: "circInOut" }}
                        className="fixed w-full h-full overflow-hidden"
                    >
                        {selectedBackground ? (
                            <BackgroundImage source={selectedBackground} />
                        ) : null}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
