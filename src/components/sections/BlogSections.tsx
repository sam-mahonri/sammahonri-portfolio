"use client";

import { useState, useEffect, useCallback } from "react";
import { DatedArticleItemList, CategorizedArticleItemList } from "../ui/ArticleItemList";
import { Reveal } from "../fx/Motion";
import { useLocale, useTranslations } from "next-intl";
import { ArticleItem } from "@/types";
import clsx from "clsx";
import { GenericAlert } from "../ui/alerts/GenericAlert";
import { useSearchParams } from "next/navigation";
import { usePathname, useRouter } from "@/navigation";

interface Props {
    sortedArticles: ArticleItem[]
    categorizedArticles: Record<string, ArticleItem[]>
    firstPage?: string
}

export function BlogSections({
    sortedArticles,
    categorizedArticles,
    firstPage = "sorted"
}: Props) {
    const tc = useTranslations("Common")
    const [layout, setLayout] = useState(firstPage);
    const locale = useLocale()


    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();



    const changeLayout = useCallback((layout: string) => {
        function handleSearch(term: string) {
            const params = new URLSearchParams(searchParams);
            if (term) {
                params.set('filter', term);
            } else {
                params.delete('filter');
            }
            replace(`${pathname}?${params.toString()}`);
        }

        setLayout(layout);
        handleSearch(layout);
    }, [pathname, replace, searchParams])

    useEffect(() => {
        changeLayout(searchParams.get('filter') || firstPage);
    }, [changeLayout, firstPage, searchParams]);


    return (<>
        <Reveal delay={0.5}>
            <span className=' flex flex-wrap justify-center'>
                <button className={clsx('btn flex-grow', { 'btn-primary': layout == 'sorted', 'btn-secondary': layout == 'categorized' })} onClick={() => changeLayout("sorted")}>{tc("recent")}</button>
                <button className={clsx('btn flex-grow', { 'btn-primary': layout == 'categorized', 'btn-secondary': layout == 'sorted' })} onClick={() => changeLayout("categorized")}>{tc("categories")}</button>

            </span>
        </Reveal>
        {locale !== "pt" ? <GenericAlert transMessageKey="incompleteTransBlog" alertType="warning" /> : <> </>}
        <section className="md:grid md:grid-cols-3 flex flex-col gap-4 items-center justify-center flex-grow">
            {layout == "sorted" ? <>
                {sortedArticles !== null && <DatedArticleItemList articles={sortedArticles} />}
            </> : <>
                {categorizedArticles !== null && <CategorizedArticleItemList articles={categorizedArticles} />}
            </>}
        </section>


    </>)


}