
import {useTranslations} from 'next-intl';
import { Metadata } from 'next';
import { Reveal } from '@/components/fx/Motion';
import { getCategorizedArticles, getSortedArticles } from "@/lib/articles"
import { CategorizedArticleItemList, DatedArticleItemList } from '@/components/ui/ArticleItemList';
import { useState } from 'react';
import { BlogSections } from '@/components/sections/BlogSections';
import { GenericAlert } from '@/components/ui/alerts/GenericAlert';
import { getLocale } from 'next-intl/server';

export const metadata: Metadata = {
    title: "Blog"
};

export default function Blog() {
    const tc = useTranslations('Common');
    const categorizedArticles = getCategorizedArticles()
    const sortedArticles = getSortedArticles()

    return <>

        <main className="main-section">
            <section className="main-subsection place-content-center items-center">

                    <div className='flex flex-row gap-2 items-center w-full'>
                        <span className=' border-t-2 border-dashed border-secondary flex-grow'></span>
                        <Reveal><h1 className=' break-all text-secondary'>{tc("blog")}</h1></Reveal>
                        <span className=' border-t-2 border-dashed border-secondary flex-grow'></span>
                    </div>

                    <BlogSections categorizedArticles={categorizedArticles} sortedArticles={sortedArticles}/>
                    
            </section>
        </main>
    </>
}