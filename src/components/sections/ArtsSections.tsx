"use client";

import { useState, useEffect, useRef } from "react";
import { ArtItem } from "@/lib/artistic";
import Image from "next/image";
import { Reveal } from "../fx/Motion";
import placeholderImage from "/public/placeholders/img.jpeg";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { XMarkIcon, HeartIcon } from "@heroicons/react/24/solid";
import { Link } from "@/navigation";
import Spinner from "../ui/Spinner";

interface Props {
    Arts: ArtItem[];
}

const Gallery = ({ Arts }: Props) => {
    const [loadingStates, setLoadingStates] = useState<{ [key: number]: boolean }>({});
    const [fullScreenImage, setFullScreenImage] = useState<ArtItem | null>(null);
    const [visibleArts, setVisibleArts] = useState<ArtItem[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const loadMoreRef = useRef<HTMLDivElement>(null);

    const tc = useTranslations("Common");

    useEffect(() => {
        setVisibleArts(Arts.slice(0, 9));
    }, [Arts]);

    useEffect(() => {
        const handleScroll = () => {
            if (loadMoreRef.current) {
                const rect = loadMoreRef.current.getBoundingClientRect();
                if (rect.top <= window.innerHeight && !loadingMore) {
                    loadMore();
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [visibleArts, loadingMore]);

    const loadMore = () => {
        setLoadingMore(true);
        setTimeout(() => {
            if (visibleArts.length < Arts.length) {
                setVisibleArts(prev => [
                    ...prev,
                    ...Arts.slice(prev.length, prev.length + 9),
                ]);
            } else {
                setHasMore(false);
            }
            setLoadingMore(false);
        }, 1000); // Costumo deixar as pessoas esperando só pra ver o spinner UwU
    };

    const handleImageClick = (art: ArtItem) => {
        setFullScreenImage(art);
    };

    const closeFullScreen = () => {
        setFullScreenImage(null);
    };

    const handleImageLoad = (index: number) => {
        setLoadingStates(prev => ({
            ...prev,
            [index]: false,
        }));
    };

    return (
        <div>
            <div className="md:grid md:grid-cols-3 flex flex-col items-center justify-center flex-grow w-full gap-3">
                {visibleArts.map((art, index) => (
                    <div
                        key={index}
                        className={clsx("border-2 border-secondary/20 hover:border-secondary w-full transition-all duration-300 cursor-pointer", {
                            "opacity-0": loadingStates[index] !== false,
                            "opacity-100": loadingStates[index] === false
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
                                    onLoad={() => handleImageLoad(index)}
                                />
                            </div>
                        </Reveal>
                    </div>
                ))}
            </div>

            {hasMore && (
                <div ref={loadMoreRef} className="w-full h-10 flex justify-center items-center my-8">
                    <Spinner />
                </div>
            )}

            {fullScreenImage && (
                <div className="fixed top-0 z-50 left-0 w-full h-full flex flex-col justify-center items-center bg-background/90 pt-20" style={{zIndex: 9999}}>
                    <div className="relative w-full max-w-7xl flex-grow p-8 flex flex-col gap-2">
                        <div className="flex flex-row items-center justify-center">
                            <button className="btn btn-secondary" onClick={closeFullScreen}>
                                <XMarkIcon /> {tc("close")} 
                            </button>
                            <Link href={fullScreenImage.postUrl} target="blank">
                                <button className="btn btn-primary" onClick={closeFullScreen}>
                                    <HeartIcon /> {tc("like")} 
                                </button>
                            </Link>
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
                                sizes=""
                                onLoad={() => handleImageLoad(-1)}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
