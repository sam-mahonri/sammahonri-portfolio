'use client';

import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon, ArrowPathIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    if (!mounted) return (
        <button className="btn btn-selector opacity-25">
            <ArrowPathIcon />
        </button>
    )

    return (
        <button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} className="btn btn-selector-secondary">
            {resolvedTheme === 'dark' ? <MoonIcon /> : <SunIcon />}
        </button>
    );
};