'use client'

import { DynamicLogo } from "../ui/SamLogos"
import { motion } from "framer-motion";
import Spinner from "../ui/Spinner"

export default function Splash(){
    return <>
        <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, visibility: "hidden" }}
        transition={{ease: 'easeInOut', duration: 0.75}}
        className="fixed top-0 left-0 w-full h-full bg-background flex items-center justify-center flex-col gap-3"
        >
            <div className=" max-h-28">
                <DynamicLogo className=' text-primary -translate-x-2 animate-pulse'/>
            </div>
            <Spinner />
        </motion.div>

    </>
}