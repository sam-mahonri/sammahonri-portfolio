import { DynamicLogo } from "./SamLogos";

export default function Spinner(){
    return <span className=" flex items-center justify-center relative">
        <span className=" absolute top-4 left-3 w-12 h-12 text-secondary">
            <DynamicLogo className=" text-secondary animate-pulse"/>
        </span>
        <span className=" rounded-full border-2 border-secondary border-b-transparent animate-spin min-h-20 min-w-20 max-w-20 max-h-20" />
    </span> 
}