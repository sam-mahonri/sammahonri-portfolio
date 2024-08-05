"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { ArtItem } from "@/lib/artistic";
import Image from "next/image";
import { Reveal } from "../fx/Motion";
import placeholderImage from "/public/placeholders/img.jpeg";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { XMarkIcon, HeartIcon, ShareIcon, CheckIcon } from "@heroicons/react/24/solid";
import { Link } from "@/navigation";
import Spinner from "../ui/Spinner";
import { Share } from "next/font/google";

interface Props {
    Arts: ArtItem[];
}

export default function Gallery({ Arts }: Props) {
    const [fullScreenImage, setFullScreenImage] = useState<ArtItem | null>(null);
    const [visibleArts, setVisibleArts] = useState<ArtItem[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
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
        }, 250); // Costumo deixar as pessoas esperando só pra ver o spinner
    };

    const handleImageClick = (art: ArtItem) => {
        setFullScreenImage(art);
        const params = new URLSearchParams(window.location.search);
        params.set("art", encodeURIComponent(art.imgUrl));
        const newUrl = `${window.location.pathname}?${params.toString()}`;
        window.history.pushState(null, '', newUrl);
    };

    const closeFullScreen = () => {
        setFullScreenImage(null);
        const params = new URLSearchParams(window.location.search);
        params.delete("art");
        const newUrl = `${window.location.pathname}?${params.toString()}`;
        window.history.pushState(null, '', newUrl);
    };

    useEffect(() => {
        const artImgUrl = searchParams.get("art");
        setTimeout(() => {
            if (artImgUrl) {
                const art = Arts.find(a => a.imgUrl === decodeURIComponent(artImgUrl));
                if (art) {
                    setFullScreenImage(art);
                }
            }
        }, 1000);
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className="md:grid md:grid-cols-3 flex flex-col items-center justify-center flex-grow w-full gap-3">
                {visibleArts.map((art, index) => (
                    <div
                        key={index}
                        className={clsx("border-2 border-secondary/20 hover:border-secondary w-full transition-all duration-1000 cursor-pointer", {

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
                                    className="object-cover opacity-0 transition-all duration-1000"
                                    loading="lazy"
                                    src={art.imgUrl}
                                    fill
                                    sizes="(max-width: 640px) 100vw,
                                    (max-width: 1280px) 50vw,
                                    (max-width: 1536px) 33vw,
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

            {fullScreenImage && (
                <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-background/90" style={{zIndex: 9999}}>
                    <div className="relative w-full max-w-7xl flex-grow p-8 flex flex-col gap-2">
                        <div style={{ 
                            position: "relative",
                            height: "100%",
                            width: "100%",
                        }} className={clsx(" transition-opacity duration-1000",{})}>
                            
                            <Image
                                alt=""
                                placeholder="blur"
                                blurDataURL={placeholderImage.src}
                                className=" object-contain opacity-0 transition-all duration-1000 scale-90"
                                loading="lazy"
                                src={fullScreenImage.imgUrl}
                                fill
                                sizes=""
                                onLoad={(event) => {
                                    const target = event.target as HTMLImageElement;
                                    target.classList.remove("opacity-0", "scale-90");
                                }}
                            />
                        </div>
                        <div className="flex flex-row items-center justify-center gap-1">
                            <button className="btn btn-selector" onClick={closeFullScreen}>
                                <XMarkIcon />
                            </button>
                            <Link href={fullScreenImage.postUrl} target="blank">
                                <button className="btn btn-selector-secondary" onClick={closeFullScreen}>
                                    <HeartIcon />
                                </button>
                            </Link>
                            <button className="btn btn-selector-secondary" onClick={handleCopyUrl}>
                                {copied ? <CheckIcon /> : <ShareIcon />}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

