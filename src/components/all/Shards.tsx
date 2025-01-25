"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Reveal } from "../fx/Motion";
import { useBadHour } from "@/providers/BadHourProvider";

export default function Shards() {
    const [randomIndex, setRandomIndex] = useState(1);
    const [bad, setBad] = useState(false);
    const [showPhrase, setShowPhrase] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null); // Referência ao vídeo
    const { badHour } = useBadHour();
    const pb = useTranslations("Phrases.bad");

    useEffect(() => {
        // Configura a velocidade do vídeo quando o componente monta
        if (videoRef.current) {
            videoRef.current.playbackRate = 1.55; // Altere o valor para ajustar a velocidade
        }
    }, []);

    useEffect(() => {
        const updatePhrase = () => {
            const currentHour = new Date().getHours();
            const isBadHour = currentHour === badHour;
            setBad(isBadHour);
            if (isBadHour) {
                const phrases = 34;
                setRandomIndex(Math.floor(Math.random() * phrases) + 1);
                setShowPhrase(true);
                setTimeout(() => {
                    setShowPhrase(false);
                }, 7000);
            } else {
                setShowPhrase(false); // Garantir que não mostra fora de badHour
            }
        };

        updatePhrase();
        const intervalId = setInterval(updatePhrase, 25000);
        return () => clearInterval(intervalId);
    }, [badHour]);

    return (
        <>
            <AnimatePresence>
                {showPhrase && bad && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            ease: "easeInOut",
                            duration: 2,
                        }}
                        className="fixed bottom-0 left-0 w-full flex items-center justify-end flex-col gap-5 p-10 z-50 pointer-events-none bg-gradient-to-b from-transparent via-background/75 to-background"
                    >
                        <Reveal duration={2} initial={-64} sliderColor="rgba(var(--sam-error-color))">
                            <h5 className="text-center text-error">
                                {pb(`p${randomIndex}`)}
                            </h5>
                        </Reveal>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
