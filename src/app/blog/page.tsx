import {useTranslations} from 'next-intl';
import { Metadata } from 'next';
import { getCategorizedArticles, getSortedArticles } from "@/lib/articles"
import { BlogSections } from '@/components/sections/BlogSections';
import { Title } from '@/components/ui/Titles';

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

                    <Title title='blog' />
                    <BlogSections categorizedArticles={categorizedArticles} sortedArticles={sortedArticles}/>
                    
            </section>
        </main>
    </>
}