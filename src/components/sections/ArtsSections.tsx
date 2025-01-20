"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { ArtItem } from "@/lib/artistic";
import Image from "next/image";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { XMarkIcon, ShareIcon, CheckIcon, ArrowDownTrayIcon, ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Spinner from "../ui/Spinner";
import { AnimatePresence, motion } from "framer-motion";
import placeholderImage from "/public/placeholders/img.jpeg";

interface Props {
    Arts: ArtItem[];
}

const INITIAL_ARTS_COUNT = 6;
const LOAD_MORE_COUNT = 9;
const ANIMATION_DURATION = 250;

export default function Gallery({ Arts }: Props) {
    const totalArtsCount = Arts.length;
    const ArtsInv = useMemo(() => Arts.slice().reverse(), [Arts]);
    const [fullScreenImage, setFullScreenImage] = useState<ArtItem | null>(null);
    const [currentPID, setPID] = useState(0);
    const [visibleArts, setVisibleArts] = useState<ArtItem[]>(ArtsInv.slice(0, INITIAL_ARTS_COUNT));
    const [hasMore, setHasMore] = useState(Arts.length > INITIAL_ARTS_COUNT);
    const [loadingMore, setLoadingMore] = useState(false);
    const [fullImageLoaded, setFILoaded] = useState(false);
    const [sliding, setSliding] = useState(false);
    const [copied, setCopied] = useState(false);

    const loadMoreRef = useRef<HTMLDivElement>(null);
    const searchParams = useSearchParams();
    const tc = useTranslations("Common");

    const loadMore = useCallback(() => {
        if (!hasMore || loadingMore) return;
        setLoadingMore(true);
        setTimeout(() => {
            const newVisibleArts = ArtsInv.slice(0, visibleArts.length + LOAD_MORE_COUNT);
            setVisibleArts(newVisibleArts);
            setHasMore(newVisibleArts.length < ArtsInv.length);
            setLoadingMore(false);
        }, ANIMATION_DURATION);
    }, [ArtsInv, visibleArts.length, hasMore, loadingMore]);

    useEffect(() => {
        const handleScroll = () => {
            if (loadMoreRef.current && loadMoreRef.current.getBoundingClientRect().top <= window.innerHeight + 64 && !loadingMore) {
                loadMore();
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [loadMore, loadingMore]);

    const updateUrlWithIndex = useCallback((index: number) => {
        const params = new URLSearchParams(window.location.search);
        params.set("art", index.toString());
        window.history.pushState(null, "", `${window.location.pathname}?${params.toString()}`);
    }, []);

    const handleImageClick = useCallback((art: ArtItem, index: number) => {
        setPID(index);
        setFullScreenImage(art);
        updateUrlWithIndex(index);
    }, [updateUrlWithIndex]);

    const closeFullScreen = useCallback(() => {
        setFILoaded(false);
        setFullScreenImage(null);
        const params = new URLSearchParams(window.location.search);
        params.delete("art");
        window.history.pushState(null, "", `${window.location.pathname}?${params.toString()}`);
    }, []);

    const replaceCurrent = useCallback((newIndex: number) => {
        if (newIndex < 0 || newIndex >= totalArtsCount || sliding) return;
        setSliding(true);
        setTimeout(() => {
            setSliding(false);
            setFILoaded(false);
            handleImageClick(Arts[newIndex], newIndex);
        }, ANIMATION_DURATION);
    }, [Arts, totalArtsCount, sliding, handleImageClick]);

    useEffect(() => {
        const artIndex = searchParams.get("art");
        if (artIndex) {
            const index = parseInt(artIndex, 10);
            if (!isNaN(index) && index >= 0 && index < Arts.length) {
                setPID(index);
                setFullScreenImage(Arts[index]);
            }
        } else {
            closeFullScreen();
        }
    }, [Arts, searchParams, closeFullScreen]);

    const handleCopyUrl = useCallback(() => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    }, []);

    return (
        <>
            <div className="md:grid md:grid-cols-3 flex flex-col items-center gap-3">
                {visibleArts.map((art, index) => (
                    <div
                        key={totalArtsCount - index -1}
                        className="border-2 border-secondary/20 hover:border-secondary w-full transition-all opacity-0 duration-500 cursor-pointer overflow-hidden"
                        onClick={() => handleImageClick(art, totalArtsCount - index -1)}
                    >
                        <div
                            className="relative h-[60vh] w-full max-w-[700px] transition-all duration-500 hover:scale-110"
                        >
                            <Image
                                alt=""
                                className="object-cover"
                                loading="lazy"
                                src={art.imgUrl}
                                fill
                                sizes="(max-width: 1280px) 100vw, 25vw"
                                onLoad={(event) => {
                                    const target = event.target as HTMLImageElement;
                                    target.closest(".border-2")?.classList.remove("opacity-0");
                                }}
                            />
                        </div>
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
                            opacity: 0
                        }}
                        animate={{
                            translateY: 0,
                            opacity: 1
                        }}
                        exit={{
                            opacity: 0
                        }}
                        transition={{
                            duration: 0.75, ease: "circInOut"
                        }}
                        className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-background"
                        style={{ zIndex: 9998 }}
                    >
                        <div className="relative w-full max-w-7xl flex-grow p-8 pt-2 flex flex-col gap-2">
                            <h4 className=" self-center">{totalArtsCount - currentPID} / {totalArtsCount}</h4>
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
                                    "opacity-0 scale-90": !fullImageLoaded || sliding
                                })}
                                >
                                    <Image
                                        alt=""
                                        className=" object-contain opacity-0 transition-all duration-500"
                                        loading="lazy"
                                        src={fullScreenImage.imgUrl}
                                        fill
                                        sizes="(max-width: 100%) 100vw"
                                        onLoad={(event) => {
                                            const target = event.target as HTMLImageElement;
                                            target.classList.remove("opacity-0");
                                            setFILoaded(true)
                                        }}
                                    />

                                </div>
                            </div>

                            <div className="flex flex-row items-center justify-center gap-1">
                                <button className={clsx(" btn btn-selector-alt mx-4", {
                                    "opacity-10 pointer-events-none": currentPID == totalArtsCount - 1 || sliding || !fullImageLoaded
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
                                    "opacity-10 pointer-events-none": currentPID == 0 || sliding || !fullImageLoaded
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
}
