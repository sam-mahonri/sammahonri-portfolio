"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { ArtItem } from "@/lib/artistic";
import Image from "next/image";
import { Reveal } from "../fx/Motion";
import placeholderImage from "/public/placeholders/img.jpeg";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { XMarkIcon, HeartIcon, ShareIcon, CheckIcon, ArrowDownTrayIcon, ArrowLeftCircleIcon, ArrowRightCircleIcon, ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from 'next/link';
import Spinner from "../ui/Spinner";
import { Share } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
    Arts: ArtItem[];
}

export default function Gallery({ Arts }: Props) {
    const totalArtsCount = Arts.length;
    const [fullScreenImage, setFullScreenImage] = useState<ArtItem | null>(null);
    const [currentPID, setPID] = useState(0);
    const [visibleArts, setVisibleArts] = useState<ArtItem[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [fullImageLoaded, setFILoaded] = useState(false);
    const [sliding, setSliding] = useState(false);
    const loadMoreRef = useRef<HTMLDivElement>(null);
    const searchParams = useSearchParams();
    const [copied, setCopied] = useState(false);
    const tc = useTranslations("Common");

    useEffect(() => {
        setVisibleArts(Arts.slice(0, 9));
    }, [Arts]);

    const handleCopyUrl = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const loadMore = useCallback(() => {
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
        }, 250); // Pequeno delay para evitar carregamento total de uma vez só. E também pq eu gosto de fazer as pessoas esperarem :3
    }, [Arts, visibleArts.length])

    useEffect(() => {
        const handleScroll = () => {
            if (loadMoreRef.current) {
                const rect = loadMoreRef.current.getBoundingClientRect();
                if (rect.top <= window.innerHeight + 64 && !loadingMore) {
                    loadMore();
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [visibleArts, loadingMore, loadMore]);

    const handleImageClick = (art: ArtItem, index: number) => {
        setPID(index)
        const params = new URLSearchParams(window.location.search);
        params.set("art", encodeURIComponent(art.imgUrl));
        const newUrl = `${window.location.pathname}?${params.toString()}`;
        window.history.pushState(null, '', newUrl);
    };

    const closeFullScreen = () => {
        setFILoaded(false);
        setFullScreenImage(null);
        const params = new URLSearchParams(window.location.search);
        params.delete("art");
        const newUrl = `${window.location.pathname}?${params.toString()}`;
        window.history.pushState(null, '', newUrl);
    };

    const replaceCurrent = (newIndex: number) => {
        setSliding(true);
        setTimeout(() => {
            setSliding(false);
            setFILoaded(false);
            setFullScreenImage(null);
            handleImageClick(Arts[newIndex], newIndex)
        }, 250);
    }

    // Abrir a arte caso tenha sido compartilhada avulsa :3
    useEffect(() => {
        const artImgUrl = searchParams.get("art");

        if (artImgUrl && Arts) {
            const artIndex = Arts.findIndex(a => a.imgUrl === decodeURIComponent(artImgUrl));

            if (artIndex !== -1) {
                const art = Arts[artIndex];
                setFullScreenImage(art);
                setPID(artIndex)
            }
        } else {
            closeFullScreen();
        }

    }, [Arts, searchParams]);

    return (
        <>
            <div className="md:grid md:grid-cols-3 flex flex-col items-center justify-center flex-grow w-full gap-3">
                {visibleArts.map((art, index) => (
                    <div
                        key={index}
                        className="border-2 border-secondary/20 hover:border-secondary w-full transition-all duration-500 cursor-pointer ring-secondary/75 hover:ring-8 overflow-hidden"
                        onClick={() => handleImageClick(art, index)}
                    >
                        <Reveal width="100%">
                            <div style={{
                                position: "relative",
                                height: "60vh",
                                width: "100%",
                                maxWidth: "700px"
                            }}
                                className="transition-transform duration-300 hover:scale-105"
                            >
                                <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                                    <Spinner />
                                </span>
                                <Image
                                    alt=""
                                    placeholder="blur"
                                    blurDataURL={placeholderImage.src}
                                    className="object-cover opacity-0 transition-all duration-500"
                                    loading="lazy"
                                    src={art.imgUrl}
                                    fill
                                    sizes="(max-width: 1280px) 100vw,
                                    (max-width: 1536px) 75vw,
                                    (max-width: 1920px) 50vw,
                                    25vw"
                                    onLoad={(event) => {
                                        const target = event.target as HTMLImageElement;
                                        target.classList.remove("opacity-0");
                                    }}
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
            <AnimatePresence>
                {fullScreenImage && (
                    <motion.div
                        initial={{
                            translateY: "100vw",
                            opacity: 0
                        }}
                        animate={{
                            translateY: 0,
                            opacity: 1
                        }}
                        exit={{
                            translateY: "100vw",
                            opacity: 0
                        }}
                        transition={{
                            duration: 0.75, ease: "circInOut"
                        }}
                        className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-background/95 border-t-2 border-secondary backdrop-blur-sm"
                        style={{ zIndex: 9998 }}
                    >
                        <div className="relative w-full max-w-7xl flex-grow p-8 pt-2 flex flex-col gap-2">
                            <h4 className=" self-center">{currentPID + 1} / {totalArtsCount}</h4>
                            {!fullImageLoaded &&
                                <span className=" flex w-full items-center justify-center absolute top-2/4 left-0 -translate-y-12">
                                    <Spinner />
                                </span>
                            }
                            <div className=" flex flex-row flex-grow justify-center items-center gap-1">
                                <div style={{
                                    position: "relative",
                                    height: "100%",
                                }} className={clsx(" transition-all duration-500 flex-grow", {
                                    "opacity-25 scale-90": !fullImageLoaded || sliding
                                })}
                                >
                                    <Image

                                        alt=""
                                        placeholder="blur"
                                        blurDataURL={placeholderImage.src}
                                        className=" object-contain opacity-0 transition-all duration-500 scale-90"
                                        loading="lazy"
                                        src={fullScreenImage.imgUrl}
                                        fill
                                        sizes="(max-width: 100%) 100vw"
                                        onLoad={(event) => {
                                            const target = event.target as HTMLImageElement;
                                            target.classList.remove("opacity-0", "scale-90");
                                            setFILoaded(true)
                                        }}
                                        unoptimized
                                    />

                                </div>
                            </div>

                            <div className="flex flex-row items-center justify-center gap-1">
                                <button className={clsx(" btn btn-selector-alt mx-4", {
                                    "opacity-10 pointer-events-none": currentPID == 0 || sliding || !fullImageLoaded
                                })} onClick={() => replaceCurrent(currentPID - 1)}>
                                    <ArrowLeftIcon />
                                </button>
                                <button className="btn btn-selector-generic btn-error" onClick={closeFullScreen} title="Ocultar / Close">
                                    <XMarkIcon />
                                </button>
                                <button className="btn btn-selector-secondary" onClick={handleCopyUrl} title="Copiar Link / Copy Link">
                                    {copied ? <CheckIcon /> : <ShareIcon />}
                                </button>
                                <a href={fullScreenImage.imgUrl} download={true} >
                                    <button className="btn btn-selector-secondary" title="Download">
                                        <ArrowDownTrayIcon />
                                    </button>
                                </a>
                                <button className={clsx(" btn btn-selector-alt mx-4", {
                                    "opacity-10 pointer-events-none": currentPID == totalArtsCount - 1 || sliding || !fullImageLoaded
                                })} onClick={() => replaceCurrent(currentPID + 1)}>
                                    <ArrowRightIcon />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    );
};

