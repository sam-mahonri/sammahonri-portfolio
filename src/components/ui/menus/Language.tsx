"use client";

import SimpleDropdown, { DropdownButton } from "../Dropdown";
import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";
import HRDivider from "../ornaments/Dividers";
import { GlobeAmericasIcon, LanguageIcon } from "@heroicons/react/24/solid";
import { setUserLocale } from '@/services/locale';
import { Locale } from "@/config";

export function DropdownLangSelector({ type = "btn-selector" }: { type?: "btn-selector" | "btn-secondary" }) {
    const l = useLocale();
    const t = useTranslations("Common")
    const [isPending, startTransition] = useTransition();

    function onChange(value: string) {
        const locale = value as Locale;
        startTransition(() => {
            setUserLocale(locale);
        });
    }

    return <SimpleDropdown
        disabled={isPending}
        icon={<LanguageIcon />}
        type={type}
        buttonText={type != "btn-selector" ? t("lang") : ""}
        closeOnClick={false}>
            <h5 className="px-4 flex flex-row gap-2 items-center"><GlobeAmericasIcon className=" h-7 w-7" /> {t("lang")} </h5>
            <HRDivider />
            <DropdownButton callback={async () => { if (l !== "pt") onChange("pt") }} active={l === "pt"}>
                <LanguageIcon />
                Português - BR
            </DropdownButton>
            <DropdownButton callback={async () => { if (l !== "en") onChange("en") }} active={l === "en"}>
                <LanguageIcon />
                English - US
            </DropdownButton>
            <DropdownButton callback={async () => { if (l !== "es") onChange("es") }} active={l === "es"}>
                <LanguageIcon />
                Español - ES
            </DropdownButton>
    </SimpleDropdown>
}