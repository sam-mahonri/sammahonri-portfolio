"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

export default function FadeScroll() {
    const [isAtTop, setIsAtTop] = useState(true);
    const [isAtBottom, setIsAtBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = window.innerHeight;

            setIsAtTop(scrollTop <= 0);
            setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 128);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div
                className={clsx(
                    "z-30 fixed bg-gradient-to-t from-transparent to-background w-full h-1/3 top-0 left-0 pointer-events-none transition-opacity duration-500",
                    { "opacity-15": isAtTop, "opacity-100": !isAtTop }
                )}
            />
            <div
                className={clsx(
                    "z-30 fixed bg-gradient-to-b from-transparent to-background w-full h-1/3 bottom-0 left-0 pointer-events-none transition-opacity duration-500",
                    { "opacity-15": isAtBottom || isAtTop, "opacity-100": !isAtBottom && !isAtTop }
                )}
            />
        </>
    );
}
