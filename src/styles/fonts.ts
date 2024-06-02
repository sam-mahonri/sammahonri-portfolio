import { Unbounded, Major_Mono_Display } from "next/font/google";

export const unbounded = Unbounded({
    subsets: ['latin'],
    variable: "--font-unbounded"
});

export const dyslexia = Major_Mono_Display({
    subsets: ['latin'],
    variable: "--font-dyslexia",
    weight: "400"
});

