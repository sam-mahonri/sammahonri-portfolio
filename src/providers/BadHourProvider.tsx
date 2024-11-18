
"use client";

import { defaultBadHour } from '@/config';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BadHourContextType {
    badHour: number;
    setBadHour: (value: number | ((prevState: number) => number)) => void;
}

const BadHourContext = createContext<BadHourContextType | undefined>(undefined);

export const BadHourProvider = ({ children }: { children: ReactNode }) => {
    const [badHour, setBadHour] = useState<number>(defaultBadHour);

    const handleSetBadHour = (value: number | ((prevState: number) => number)) => {
        setBadHour(prevState =>
            typeof value === 'function' ? (value as (prevState: number) => number)(prevState) : value
        );
    };

    return (
        <BadHourContext.Provider value={{ badHour, setBadHour: handleSetBadHour }}>
            {children}
        </BadHourContext.Provider>
    );
};

export const useBadHour = (): BadHourContextType => {
    const context = useContext(BadHourContext);
    if (!context) {
        throw new Error('useBadHour deve ser usado dentro de um BadHourProvider');
    }
    return context;
};
