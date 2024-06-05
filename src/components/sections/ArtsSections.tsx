"use client";

import { useState } from "react";
import { ArtItem } from "@/lib/artistic";
import Image from "next/image";
import { Reveal } from "../fx/Motion";
import placeholderImage from "/public/placeholders/img.jpeg";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { XMarkIcon, HeartIcon } from "@heroicons/react/24/solid";
import { Link } from "@/navigation";

interface Props {
    Arts: ArtItem[]
}

const Gallery = ({ Arts }: Props) => {
    const [isLoading, setLoading] = useState(true);
    const [fullScreenImage, setFullScreenImage] = useState<ArtItem | null>(null);

    const handleImageClick = (art: ArtItem) => {
        setFullScreenImage(art);
    };

    const closeFullScreen = () => {
        setFullScreenImage(null);
    };

    const tc = useTranslations("Common")

    return (
        <div>
            <div className="md:grid md:grid-cols-3 flex flex-col items-center justify-center flex-grow w-full gap-3">
                {Arts.map((art, index) => (
                    <div 
                        key={index} 
                        className={clsx("border-2 border-secondary/20 hover:border-secondary w-full transition-all duration-300 cursor-pointer", {
                            "opacity-0": isLoading,
                            "opacity-100": !isLoading
                        })}
                        onClick={() => handleImageClick(art)}
                    >
                        <Reveal width="100%">
                            <div style={{ 
                                position: "relative",
                                height: "60vh",
                                width: "100%",
                                maxWidth: "700px"
                            }}
                                className="transition-transform duration-500 hover:scale-105"
                            >
                                <Image
                                    alt=""
                                    placeholder="blur"
                                    blurDataURL={placeholderImage.src}
                                    className="transform transition will-change-auto"
                                    style={{ objectFit: "cover" }}
                                    loading="lazy"
                                    src={art.imgUrl}
                                    fill
                                    sizes="(max-width: 640px) 100vw,
                                    (max-width: 1280px) 50vw,
                                    (max-width: 1536px) 33vw,
                                    25vw"
                                    onLoad={() => setLoading(false)}
                                />
                            </div>
                        </Reveal>
                    </div>
                ))}
            </div>

            {fullScreenImage && (
                <div className="fixed top-0 z-50 left-0 w-full h-full flex flex-col justify-center items-center bg-background/90 pt-20" style={{zIndex: 9999}}>
                    
                    <div className="relative w-full max-w-7xl flex-grow p-8 flex flex-col gap-2">
                            <div className="flex flex-row items-center justify-center">
                                <button className="btn btn-secondary" onClick={closeFullScreen}><XMarkIcon /> {tc("close")} </button>
                                <Link href={fullScreenImage.postUrl} target="blank"><button className="btn btn-primary" onClick={closeFullScreen}><HeartIcon /> {tc("like")} </button></Link>
                            </div>
                            <div style={{ 
                                position: "relative",
                                height: "100%",
                                width: "100%",
                            }}>
                                <Image
                                    alt=""
                                    placeholder="blur"
                                    blurDataURL={placeholderImage.src}
                                    className="transform transition will-change-auto"
                                    style={{ objectFit: "contain" }}
                                    loading="lazy"
                                    src={fullScreenImage.imgUrl}
                                    fill
                                    sizes="(max-width: 640px) 100vw,
                                    (max-width: 1280px) 50vw,
                                    (max-width: 1536px) 33vw,
                                    25vw"
                                    onLoad={() => setLoading(false)}
                                />
                            </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Gallery;
