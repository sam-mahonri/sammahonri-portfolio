'use client';

import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    if (!mounted) return (
        <button className="btn btn-selector opacity-25">
            <ArrowPathIcon className='h-5 w-5' />
        </button>
    )

    return (
        <button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} className="btn btn-selector">
            {resolvedTheme === 'dark' ? <MoonIcon className='h-5 w-5' /> : <SunIcon className='h-5 w-5' />}
        </button>
    );
};