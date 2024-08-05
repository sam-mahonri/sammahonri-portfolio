import { Unbounded, Major_Mono_Display, IBM_Plex_Mono, Lexend } from "next/font/google";

export const unbounded = Unbounded({
    subsets: ['latin'],
    variable: "--font-unbounded"
});

export const dyslexia = Major_Mono_Display({
    subsets: ['latin'],
    variable: "--font-dyslexia",
    weight: "400"
});

export const mono = IBM_Plex_Mono({
    subsets: ["latin"],
    variable: "--font-ibm-mono",
    weight: "400"
})

export const lexend = Lexend({
    subsets: ["latin"],
    variable: "--font-lexend"
})