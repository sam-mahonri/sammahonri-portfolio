"use client";

import { useEffect } from "react";
import { useBackground } from "@/providers/BackgroundProvider";

interface BackgroundManagerProps {
    banner: string | null;
}

const BackgroundManager: React.FC<BackgroundManagerProps> = ({ banner }) => {
    const { setCustomBackground } = useBackground();

    useEffect(() => {
        if (banner) {
            setCustomBackground(banner);
        } else {
            setCustomBackground(null);
        }
    }, [banner, setCustomBackground]);

    return null;
};

export default BackgroundManager;
