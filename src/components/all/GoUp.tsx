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
        <span className={clsx('fixed bottom-4 right-4 transition-opacity z-50', {
            'opacity-0': isTop,
            'pointer-events-none': isTop,
            'opacity-100': !isTop
        })}>
            <button className='btn btn-selector' onClick={scrollToTop}>
                <ArrowUpIcon />
            </button>
        </span>
    );
}
