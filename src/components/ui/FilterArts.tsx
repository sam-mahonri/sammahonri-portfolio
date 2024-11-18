"use client";

import { Link, usePathname } from "@/navigation";
import { Reveal } from "../fx/Motion";
import { useTranslations } from "next-intl";
import { MusicalNoteIcon, CubeIcon, PencilSquareIcon, PaintBrushIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useState, useEffect, useRef } from "react";

export default function FilterArts() {
    const pathname = usePathname();
    const ta = useTranslations("Arts");
    const [isSticky, setSticky] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (ref.current) {
            setSticky(ref.current.getBoundingClientRect().top <= 80);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className=" w-full z-30">
            <div ref={ref} className={clsx("w-full", { "h-16": isSticky })}></div>
            <Reveal width="100%" delay={0.5}>
                
                <div className={clsx("w-full flex items-center justify-center", { "fixed left-0 top-20": isSticky})}>
                    <div className={clsx("w-full max-w-7xl", { "px-5": isSticky })}>
                        <div className={clsx("flex flex-wrap w-full transition-all", { " shadow-md": isSticky, "shadow-none": !isSticky })}>
                            <Link href={"/arts"} className="flex-grow">
                                <div className={clsx(" bg-secondary/20 border-b-2 border-b-secondary btn-primary-fx-secondary", { "active-fx": pathname == "/arts", "h-16": !isSticky, " h-12": isSticky })}>
                                    <CubeIcon />
                                    <span className="md:block hidden"> {ta('all')} </span>
                                </div>
                            </Link>
                            <Link href={"/arts/vectorial"} className="flex-grow">
                                <div className={clsx("bg-primary/20 border-b-2 btn-primary-fx-primary border-b-primary", { "active-fx": pathname == "/arts/vectorial", "h-16": !isSticky, " h-12": isSticky })}>
                                    <PencilSquareIcon />
                                    <span className="md:block hidden">{ta('vectorial')} </span>
                                </div>
                            </Link>
                            <Link href={"/arts/paintings"} className="flex-grow">
                                <div className={clsx("bg-orange-400/20 border-b-2 btn-primary-fx-orange border-b-orange-400", { "active-fx": pathname == "/arts/paintings", "h-16": !isSticky, " h-12": isSticky })}>
                                    
                                    <PaintBrushIcon />
                                    <span className="md:block hidden">{ta('paintings')} </span>
                                </div>
                            </Link>
                            <Link href={"/arts/music"} className="flex-grow">
                                <div className={clsx("bg-pink-500/20 border-b-2 btn-primary-fx-pink border-b-pink-500", { "active-fx": pathname == "/arts/music", "h-16": !isSticky, " h-12": isSticky })}>
                                    <MusicalNoteIcon />
                                    <span className="md:block hidden">{ta('music')} </span>
                                </div>
                            </Link>
                        </div>
                        
                    </div>
                    
                </div>
            </Reveal>
        </div>
    );
}
