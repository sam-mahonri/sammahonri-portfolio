"use client";

import { AnimatePresence, motion } from "framer-motion";
import Spinner from "../ui/Spinner";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Reveal } from "../fx/Motion";
import { useBadHour } from "@/providers/BadHourProvider";

export default function Splash() {
    const [randomIndex, setRandomIndex] = useState(1);
    const [bad, setBad] = useState(false);
    const [showPhrase, setShowPhrase] = useState(true);
    const { badHour, setBadHour } = useBadHour();
    const pb = useTranslations("Phrases.bad");
    const pg = useTranslations("Phrases.good");

    useEffect(() => {
        const updatePhrase = () => {
            const currentHour = new Date().getHours();
            const isBadHour = currentHour === badHour;
            setBad(isBadHour);
            const phrases = 34;
            setRandomIndex(Math.floor(Math.random() * phrases) + 1);
            setShowPhrase(true);
            setTimeout(() => {
                setShowPhrase(false);
            }, 7000);
        };

        updatePhrase();
        const intervalId = setInterval(updatePhrase, 25000);
        return () => clearInterval(intervalId);
    }, [badHour]);

    return (
        <>
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0, visibility: "hidden" }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="fixed top-0 left-0 w-full h-full bg-background flex items-center justify-center flex-col gap-5 p-5"
            >
                <Spinner />
            </motion.div>

            <AnimatePresence>
                {showPhrase && (
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
                        <Reveal duration={2} initial={-64} sliderColor={bad ? "rgba(var(--sam-error-color))" : "rgba(var(--sam-secondary-color))"}>
                            <h5 className={clsx("text-center", {
                                "text-error": bad
                            })}>
                                {bad ? pb(`p${randomIndex}`) : pg(`p${randomIndex}`)}
                            </h5>
                        </Reveal>

                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
