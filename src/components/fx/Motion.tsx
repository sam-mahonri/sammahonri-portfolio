"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useMemo } from "react";

interface RevealProps {
    children: React.ReactNode;
    overflow?: "hidden" | "visible";
    width?: "fit-content" | "100%";
    height?: "fit-content" | "100%";
    delay?: number;
    duration?: number;
    initial?: number;
    final?: number;
    ease?: string;
    once?: boolean;
    showSlider?: 0 | 1;
    sliderColor?: string;
    className?: string;
    endNoOverflow?: boolean;
}

export const Reveal = ({
    children,
    delay = 0,
    duration = 0.75,
    initial = 64,
    final = 0,
    ease = "circInOut",
    width = "fit-content",
    height = "fit-content",
    overflow = "hidden",
    once = true,
    showSlider = 1,
    sliderColor = "rgb(var(--sam-secondary-color))",
    className = "",
    endNoOverflow = false
}: RevealProps) => {

    const ref = useRef(null);

    const isInView = useInView(ref, { once });
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    const currentOverflow = useMemo(() => (isInView && endNoOverflow ? "visible" : overflow), [isInView, overflow, endNoOverflow]);

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView, mainControls, slideControls]);

    return (
        <div
            ref={ref}
            style={{ position: "relative", width, height, overflow: currentOverflow }}
            className={className}
        >
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: initial },
                    visible: { opacity: 1, y: final }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration, delay, ease }}
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: "101%" },
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration, ease: "circInOut", delay }}
                style={{
                    opacity: showSlider,
                    position: "absolute",
                    top: 2,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: sliderColor,
                    zIndex: 2,
                }}
            />
        </div>
    );
};
