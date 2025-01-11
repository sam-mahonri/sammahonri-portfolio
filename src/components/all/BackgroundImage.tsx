"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";
import { useScroll } from "framer-motion";

export default function BackgroundImage({ source, fixed = false, wBack = false }: { source: string, fixed?: boolean, wBack?: boolean }) {
    const { scrollY } = useScroll();
    const opacity = useMotionValue(1);
    const y = useMotionValue(0);

    useEffect(() => {
        const updateValues = () => {
            const latest = scrollY.get();
            const newOpacity = 1 - latest / 750;
            opacity.set(newOpacity > 0 ? newOpacity : 0);

            const newY = -latest / 4;
            y.set(newY);
        };

        const unsubscribe = scrollY.on("change", updateValues);
        
        updateValues()

        return () => unsubscribe();
    }, [scrollY, opacity, y]);

    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-background -z-10`}>
            <motion.div 
                className="relative w-full h-full"
                style={{ opacity, y }}
            >
                <Image 
                    src={source}
                    fill
                    alt="background"
                    className="object-cover opacity-0 transition-all duration-1000 scale-105"
                    onLoad={(event) => {
                        const target = event.target as HTMLImageElement;
                        target.classList.remove("opacity-0", "scale-105");
                    }}
                    sizes="(max-width: 100%) 100vw"
                />
                <span className="absolute bg-background/60 background-degrade w-full h-full transition-colors duration-500" />
            </motion.div>
        </div>
    );
}