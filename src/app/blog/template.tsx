"use client"

import { motion } from "framer-motion";
import React from "react";

export default function Transition({
    children
}:{
    children: React.ReactNode
}){
    return (
        <motion.div
        initial={{ y: 64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ease: 'circInOut', duration: 0.75, delay: 0.5}}
        >
            {children}
        </motion.div>
    )
}