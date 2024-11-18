export default function HRDivider() {
    return <span className=" w-full border-b border-foreground/10" />
}

export function EnfDivider({className = ""}: {className?: string}){
    return <div className={` min-h-0.5 min-w-10 max-h-0.5 rounded-full bg-secondary ${className}`} />
}

export function EnfExpand(){
    return <span className=" flex-1"></span>
}