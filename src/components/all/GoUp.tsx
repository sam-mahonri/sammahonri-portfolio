"use client";

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { ArrowUpIcon } from '@heroicons/react/24/solid';

export default function GoUp() {
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsTop(scrollTop === 0);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <span className={clsx('fixed bottom-5 right-5 transition-all duration-500 z-50', {
            'opacity-0 pointer-events-none scale-0 translate-y-24': isTop,
            'opacity-100 scale-100 translate-y-0': !isTop
        })}>
            <button className='btn btn-selector' onClick={scrollToTop}>
                <ArrowUpIcon />
            </button>
        </span>
    );
}
