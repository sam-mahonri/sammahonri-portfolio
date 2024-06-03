"use client";

import { useState, useEffect } from "react";
import { getSortedArticles, getCategorizedArticles } from "@/lib/articles";
import { DatedArticleItemList, CategorizedArticleItemList } from "../ui/ArticleItemList";
import { Reveal } from "../fx/Motion";
import { useLocale, useTranslations } from "next-intl";
import { ArticleItem } from "@/types";
import clsx from "clsx";
import { GenericAlert } from "../ui/alerts/GenericAlert";


interface Props {
    sortedArticles: ArticleItem[]
    categorizedArticles: Record<string, ArticleItem[]>
}

export function BlogSections({
    sortedArticles,
    categorizedArticles
}: Props){
    const tc = useTranslations("Common")
    const [layout, setLayout] = useState("sorted");
    const locale = useLocale()
    const changeLayout = (layout: string) => {
        setLayout(layout);
    }

    return (<>
        <Reveal delay={0.5}>
            <span className=' flex flex-wrap'>
                <button className={clsx('btn', {'btn-primary': layout =='sorted','btn-secondary': layout == 'categorized'})} onClick={() => changeLayout("sorted")}>{tc("recent")}</button>
                <button className={clsx('btn', {'btn-primary': layout =='categorized','btn-secondary': layout == 'sorted'})} onClick={() => changeLayout("categorized")}>{tc("categories")}</button>
                
            </span>
        </Reveal>
        {locale !== "pt" ? <GenericAlert transMessageKey="incompleteTransBlog" alertType="warning" /> : <> </>} 
        <section className="md:grid md:grid-cols-3 flex flex-col gap-10 items-center justify-center">
            {layout == "sorted" ? <>
                {sortedArticles !== null && <DatedArticleItemList articles={sortedArticles} />}
            </>: <>
                {categorizedArticles !== null && <CategorizedArticleItemList articles={categorizedArticles} />}
            </>}
        </section>
        
        
    </>)

    
}