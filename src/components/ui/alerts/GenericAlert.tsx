import { Reveal } from "@/components/fx/Motion";
import { BugAntIcon, CheckCircleIcon, ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl"

interface Props {
    alertType: "success" | "warning" | "error",
    transMessageKey: string,
    dismiss?: boolean
}

export function GenericAlert({alertType, transMessageKey, dismiss = true} : Props){

    const t = useTranslations("Alerts");
    let alertIcon ;
    let alertMessage = t(transMessageKey);

    switch (alertType) {
        case "success": alertIcon = <CheckCircleIcon />; break;
        case "warning": alertIcon = <ExclamationTriangleIcon className=" h-5 w-5"/>; break;
        case "error": alertIcon = <BugAntIcon />; break;
    }

    return (
        <Reveal sliderColor="rgb(var(--sam-txt-title-color))" delay={0.3}>
            <div className={` alert-${alertType} `}>
                {alertIcon}
                {alertMessage}
            </div>
        </Reveal>
        
    )
}