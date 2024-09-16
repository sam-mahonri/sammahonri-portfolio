"use client";

import { motion, useInView, useAnimation, easeIn } from "framer-motion";
import React, { useEffect, useRef } from "react";

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
    showSlider?: 0 | 1
    sliderColor?: string,
    className?: string
}

export const Reveal = ({ children, delay = 0, duration = 0.75, initial = 64, final = 0, ease = "easeInOut", width = "fit-content", height = "fit-content", overflow = "hidden", once = true, showSlider = 1, sliderColor = "rgb(var(--sam-secondary-color))", className = ""}: RevealProps) => {
    
    const ref = useRef(null);
    
    const isInView = useInView(ref, { once: once });

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }

    }, [isInView, mainControls, slideControls]);

    return <>
        <div ref = {ref} style = {{ position: "relative", width, height, overflow: overflow}} className={className}>
            <motion.div
            variants = {{
                hidden: { opacity: 0, y: initial },
                visible: { opacity: 1, y: final }
            }}
            initial = "hidden"
            animate = {mainControls}
            transition = {{ duration: duration, delay: delay, ease: ease }}
            >
                {children}
            </motion.div>
            <motion.div 
                variants = {{
                    hidden: {left: 0},
                    visible: {left: "101%"},
                }}
                initial = "hidden"
                animate = {slideControls}
                transition = {{ duration: duration, ease: "anticipate", delay: delay}}
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
    </>
};
