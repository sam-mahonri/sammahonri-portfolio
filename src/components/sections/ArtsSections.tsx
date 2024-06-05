"use client";

import { useState } from "react";
import { Link } from "@/navigation";
import { ArtItem } from "@/lib/artistic";
import Image from "next/image";
import { Reveal } from "../fx/Motion";

interface Props {
    Arts: ArtItem[]
}

const Gallery = ({ Arts }: Props) => {
    const [isLoading, setLoading] = useState(true);

    return (
        <div className="flex flex-wrap gap-2 items-center justify-center">
            {Arts.map((art, index) => (
                
                    <Link href={art.postUrl} key={index} className=" border-2 border-secondary/20 hover:border-secondary shadow-none hover:shadow-xl transition-colors ">
                        <Reveal>
                        <div style={{ position: 'relative', width: '300px', height: '400px', flex: 1 }}>
                            
                            <Image
                                    alt=""
                                    src={art.imgUrl}
                                    sizes="100%"
                                    fill
                                    className={`duration-700 ease-in-out group-hover:opacity-75 object-cover ${
                                        isLoading ? 'grayscale' : 'grayscale-0'
                                    }`}
                                    onLoad={() => setLoading(false)}
                                    priority={false}
                                />
                        </div>
                        </Reveal>
                    </Link>
            ))}
        </div>
    );
}

export default Gallery;