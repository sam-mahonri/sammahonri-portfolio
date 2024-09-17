"use client";

import { motion } from "framer-motion"
import { Arrow } from "../ui/SamLogos"

export const JumpingArrow = ({className = "h-6" }: {className?: string}) => {

    return <span className={className}>
                <motion.div
                    className={className}
                    animate={{ y: ["0%", "-50%", "0%"] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'circInOut'}}
                >
                    <Arrow className="text-secondary"/>
                </motion.div>
            </span>
}