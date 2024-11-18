"use client";

import { useTranslations } from "next-intl"
import { Reveal } from "../fx/Motion"
import { JumpingArrow } from "../fx/JumpingArrow";

export const Title = ({ title }: { title: string }) => {

    const tc = useTranslations("Common")

    return (
        <div className="flex flex-col gap-2 items-center w-full min-h-64 pb-5">
            <div className='flex flex-col gap-8 items-center justify-center w-full flex-grow '>
                <div className='flex flex-row gap-2 items-center w-full'>
                    <span className=' border-t-2 border-dashed border-secondary flex-grow'></span>
                    <Reveal><h1 className='break-all text-secondary'>{tc(title)}</h1></Reveal>
                    <span className=' border-t-2 border-dashed border-secondary flex-grow'></span>
                </div>
                
                <JumpingArrow />
            </div>

        </div>
    )
}
