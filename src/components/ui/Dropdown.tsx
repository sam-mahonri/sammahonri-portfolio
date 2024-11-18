"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { SimpleDropdownProps } from "@/lib/definitions";

export default function SimpleDropdown({
    children,
    buttonText = "",
    icon = null,
    closeOnClick = true,
    autoClose = true,
    type = "btn-selector",
    disabled = false
}: SimpleDropdownProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [hasCalculated, setHasCalculated] = useState(false);
    const [overflowY, setOverflowY] = useState<'auto' | 'hidden'>('hidden');
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});
    const transition = { duration: 0.5, ease: "circInOut" };


    useEffect(() => {
        function calculatePosition() {
            if (dropdownRef.current) {
                requestAnimationFrame(() => {
                    const dropdownRect = dropdownRef.current!.getBoundingClientRect();

                    const viewportWidth = window.innerWidth;
                    const viewportHeight = window.innerHeight;

                    const adjustments: [boolean, React.CSSProperties][] = [
                        [dropdownRect.right > viewportWidth, { right: 0, left: 'auto', translate: "0 8px" }],
                        [dropdownRect.bottom > viewportHeight, { bottom: 0, top: 'auto', translate: "0 -8px" }],
                        [dropdownRect.top < 0, { top: 0, translate: "0 8px" }],
                        [dropdownRect.left < 0, { left: 0, translate: "0 8px" }]
                    ];

                    const newStyle: React.CSSProperties = adjustments
                        .filter(([condition]) => condition)
                        .reduce((acc, [, style]) => ({ ...acc, ...style }), {});

                    if (Object.keys(newStyle).length === 0) {
                        newStyle.translate = "0 8px";
                    }

                    const hasStyleChanged = Object.keys(newStyle).some(key => {
                        const styleKey = key as keyof React.CSSProperties;
                        return dropdownStyle[styleKey] !== newStyle[styleKey];
                    });

                    if (hasStyleChanged) {
                        setDropdownStyle(newStyle);
                    }
                });
            }
        }

        if (isVisible) {
            calculatePosition();
            window.addEventListener('resize', calculatePosition);
        }

        return () => {
            window.removeEventListener('resize', calculatePosition);
        };
    }, [isVisible, dropdownStyle]);


    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                if (
                    buttonRef.current &&
                    buttonRef.current.contains(event.target as Node)
                ) {
                    return;
                }

                setIsVisible(false);
            }
        }

        if (isVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isVisible]);

    return (
        <div className={`relative transition-opacity ${disabled && 'opacity-50 pointer-events-none'}`}>
            <button ref={buttonRef} className={`btn ${type} ${isVisible ? 'active' : ''}`} onClick={() => { setIsVisible(prev => !prev); }}>
                {buttonText}
                {icon}
            </button>

            <AnimatePresence >
                {isVisible &&
                    <>
                        <motion.div
                            className={clsx("bg-surface min-w-32 flex flex-col gap-1 shadow-2xl shadow-primary/50 border-y-2 border-b-primary border-t-secondary z-50", {
                                " overflow-y-auto": overflowY === "auto",
                                " overflow-y-hidden ": overflowY === "hidden"
                            })}
                            ref={dropdownRef}
                            style={{
                                position: 'absolute',
                                maxHeight: '80vh',
                                maxWidth: '90vh',
                                ...dropdownStyle
                            }}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0, overflowY: "hidden" }}
                            transition={transition}
                            onClick={() => { if (closeOnClick) { setIsVisible(false) } }}
                            onMouseLeave={() => { if (autoClose) { setIsVisible(false) } }}
                            onAnimationStart={() => setOverflowY('hidden')}
                            onAnimationComplete={() => setOverflowY('auto')}


                        >
                            
                            <div className=" py-3 pb-2 min-w-72 relative">
                                <span className="absolute w-full top-0 bg-gradient-to-b from-secondary/20 to-transparent h-16 -z-10"/>
                                <span className="absolute w-full bottom-0 bg-gradient-to-t from-primary/20 to-transparent h-16 -z-10"/>
                                <div className=" h-full w-full flex flex-col gap-1.5 z-50">
                                    {children}
                                </div>
                                
                                
                            </div>
                        </motion.div>
                    </>

                }
            </AnimatePresence>
        </div>
    );
}

export function DropdownButton({ children, callback = () => { }, active = false }: { children: ReactNode, callback?: Function, active?: boolean }) {
    return <button className={clsx(" context", {
        "active": active
    })} onClick={() => callback()}>
        {children}
        {active && <> <span className="flex-1" /> <CheckCircleIcon /></>}
    </button>
}