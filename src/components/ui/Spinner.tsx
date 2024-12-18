import { DynamicLogo } from "./SamLogos";

export default function Spinner(){
    return <span className=" flex items-center justify-center relative">
        <span className="rounded-full blur-xl bg-secondary/25 w-full h-full absolute top-0 left-0"/>
        <span className=" absolute top-4 left-3.5 w-20 h-20 text-secondary">
            
            <DynamicLogo className=" text-secondary animate-pulse"/>
        </span>
        <span className=" rounded-full border-2 border-transparent border-b-secondary animate-spin min-h-28 min-w-28 max-w-20 max-h-20" />
    </span> 
}