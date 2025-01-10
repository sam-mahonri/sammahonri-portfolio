"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface BackgroundContextType {
    setCustomBackground: (image: string | null) => void;
    resetBackground: () => void;
    customImage: string | null;
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

export const BackgroundProvider = ({ children }: { children: React.ReactNode }) => {
    const [customImage, setCustomImage] = useState<string | null>(null);

    const resetBackground = () => setCustomImage(null);

    return (
        <BackgroundContext.Provider value={{ setCustomBackground: setCustomImage, resetBackground, customImage }}>
            {children}
        </BackgroundContext.Provider>
    );
};

export const useBackground = () => {
    const context = useContext(BackgroundContext);
    if (!context) {
        throw new Error("useBackground must be used within a BackgroundProvider");
    }
    return context;
};
