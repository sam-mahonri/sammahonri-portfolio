import { Link } from "@/navigation";
import { Metadata } from "next";
import { ArrowLeftIcon } from "@heroicons/react/24/solid"
import { getArticleData } from "@/lib/articles"
import { getTranslations } from "next-intl/server";
import { ArticleItem } from "@/types";

export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
    const articleData = await getArticleData(params.slug);
    const title = articleData.title;
    return {
        title: `${title}`,
    };
};

const Article = async ({ params }: { params: { slug: string } }) => {
    const articleData = await getArticleData(params.slug)
    const tc = await getTranslations("Common")
    return (
        <main className="main-section">
            <section className="main-subsection place-content-center items-center">
                <div className="flex justify-between font-poppins w-full">
                    <Link href={"/blog"} className="flex flex-row gap-1 place-items-center">
                        <button className="btn btn-secondary"><ArrowLeftIcon width={20} />{tc("back")}</button>
                    </Link>
                    <p className="font-dyslexia font-bold">{articleData.date.toString()}</p>
                </div>
                <article
                    className="article max-w-4xl flex-grow"
                    dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}
                />
            </section>
        </main>
    )
}

export default Article