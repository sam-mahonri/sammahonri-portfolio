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
    type = "only-icon",
    disabled = false
}: SimpleDropdownProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [hasCalculated, setHasCalculated] = useState(false);
    const [overflowY, setOverflowY] = useState<'auto' | 'hidden'>('hidden');
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});
    const transition = { duration: 0.3 };

    useEffect(() => {
        if (isVisible && dropdownRef.current && !hasCalculated) {
            requestAnimationFrame(() => {
                const dropdownRect = dropdownRef.current!.getBoundingClientRect();
                
                const viewportWidth = window.innerWidth;
                const viewportHeight = window.innerHeight;

                const adjustments: [boolean, React.CSSProperties][] = [
                    [dropdownRect.right > viewportWidth, { right: 16, left: 'auto', translate: "0 8px" }],
                    [dropdownRect.bottom > viewportHeight, { bottom: 16, top: 'auto', translate: "0 8px" }],
                    [dropdownRect.top < 0, { top: 16, translate: "0 8px" }],
                    [dropdownRect.left < 0, { left: 16, translate: "0 8px" }]
                ];

                const newStyle = adjustments
                    .filter(([condition]) => condition)
                    .reduce((acc, [, style]) => ({ ...acc, ...style }), {});

                setDropdownStyle(newStyle);
                setHasCalculated(true); // Marcar o cálculo como feito
            });
        }
    }, [isVisible, hasCalculated]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
        <div className={` transition-opacity ${ disabled && 'opacity-50 pointer-events-none' }`}>
            <button className={`${type} ${isVisible ? 'active' : ''}`} onClick={() => setIsVisible(prev => !prev)}>
                {buttonText}
                {icon}
            </button>

            <AnimatePresence >
                {isVisible && 
                    <motion.div
                        className={clsx("bg-surface rounded-sm min-w-32 flex flex-col gap-1 shadow-lg border-y-2 border-primary", {
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
                        onClick={() => {if (closeOnClick) {setIsVisible(false)}}}
                        onMouseLeave={() => {if (autoClose) {setIsVisible(false)}}}
                        onAnimationStart={() => setOverflowY('hidden')}
                        onAnimationComplete={() => setOverflowY('auto')}
                        
                        
                    >
                        <div className=" w-full flex flex-col gap-1.5 py-3 pb-2 min-w-64">
                            {children}
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    );
}

export function DropdownButton({ children, callback = () => {}, active = false }: { children: ReactNode, callback?: Function, active?: boolean }) {
    return <button className={clsx("context", {
        "active": active
    })} onClick={() => callback()}>
        {children}
        {active && <> <span className="flex-1" /> <CheckCircleIcon /></>}
    </button>
}