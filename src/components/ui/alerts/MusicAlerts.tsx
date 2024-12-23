"use client";

import { PlayCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import veils from "../../../../public/artistic/arts/veilsoflives.png";
import { useState } from "react";
import { useTranslations } from "next-intl";

export function NewMusic() {
    const [visible, setVisible] = useState(true)
    const ta = useTranslations("Alerts");

    return <>
        {visible && <div className=" items-center justify-center z-50 fixed flex flex-wrap gap-2 bottom-0 left-0 w-full p-2 bg-surface border-t-2 border-secondary">
            <h5 className=" mx-1 md:mr-6 flex flex-row gap-4 md:w-fit w-full items-center"> <button onClick={() => setVisible(false)} className=" p-1.5 hover:bg-secondary hover:text-background transition-colors"> <XMarkIcon /> </button> {ta("new_music")} </h5>
            <span className=" flex flex-row flex-grow items-center justify-center gap-4">
                <Link href={"/arts?art=%252Fartistic%252Farts%252Fveilsoflives.png"}>
                    <Image
                        placeholder="blur"
                        src={veils}
                        alt={""}
                        height={42}
                        width={42}
                    />
                </Link>
                <Link className=" flex-grow flex flex-wrap" href={"https://open.spotify.com/intl-pt/track/1hfK5ceTZYt9sG2TjWEZ4I?si=0ca68e76eb8343d3"}>
                    <span className=" flex flex-row gap-2 text-center flex-grow items-center justify-center"> <strong>Veils Of Lives</strong> <span className=" md:block hidden text-secondary">- Sam Mahonri</span> </span>
                    <PlayCircleIcon className=" h-10" />
                </Link>
            </span>
        </div>}
    </>
}