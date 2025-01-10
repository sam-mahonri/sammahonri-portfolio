"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import BackgroundImage from './BackgroundImage';
import { useBadHour } from '@/providers/BadHourProvider';
import { useBackground } from '@/providers/BackgroundProvider';

export default function StandaloneBackground({ defaultImg = false }: { defaultImg?: boolean }) {
    const [selectedBackground, setSelectedBackground] = useState<string>('');
    const [isShow, setIsShow] = useState(true);
    const { badHour } = useBadHour();
    const { customImage, setCustomBackground } = useBackground();
    const pathname = usePathname();

    useEffect(() => {
        

        const determineBackground = () => {
            const currentHour = new Date().getHours();
            const isBadHour = currentHour == badHour;

            const goodBackgrounds = [
                "/backgrounds/lastfer.png",
                "/backgrounds/5am.png",
                "/backgrounds/4immortals.png",
                "/backgrounds/twoyears.png",
                "/backgrounds/rainymissionary.png",
                "/backgrounds/sundays.png",
                "/backgrounds/veilsoflives.png",
                "/backgrounds/2027tt.png",
                "/backgrounds/balloonsfinal.png",
                "/backgrounds/paintingfinal.png",
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
                const length = isBadHour ? badBackgrounds.length : goodBackgrounds.length;
                const randomBackground = Math.floor(Math.random() * length);
                return isBadHour ? badBackgrounds[randomBackground] : goodBackgrounds[randomBackground];
            }
        };

        const changeBackground = () => {
            if (!customImage) { setIsShow(false); }

            setTimeout(() => {

                setSelectedBackground((prev) => {
                    let newbg = determineBackground();
                    if (!customImage) {
                        while (newbg === prev) {
                            newbg = determineBackground();
                        }
                    }
                    return newbg;
                });

                setIsShow(true);


            }, 750);
        };

        changeBackground();

        const interval = setInterval(changeBackground, 15000);

        return () => clearInterval(interval);

    }, [badHour, customImage, defaultImg, pathname]);

    useEffect(() => {
        if (customImage && !pathname.includes("blog/") ) {
            setCustomBackground(null)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname, setCustomBackground])

    return (
        <div className='-z-10 absolute w-full h-full overflow-x-hidden bg-background'>
            <AnimatePresence>
                {isShow && (
                    <motion.div
                        key={selectedBackground}
                        initial={{ opacity: 0, scale: "125%" }}
                        animate={{ opacity: 1, scale: "100%" }}
                        exit={{ opacity: 0, scale: "110%" }}
                        transition={{ duration: 0.75, ease: "circInOut" }}
                        className="fixed w-full h-full overflow-hidden bg-background"
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
