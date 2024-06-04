import { Link } from "@/navigation";
import type { ArticleItem } from "@/types";
import { Reveal } from "../fx/Motion";
import { useTranslations } from "next-intl";
import { getSortedArticles, getCategorizedArticles } from "@/lib/articles";

interface CProps {
    articles: Record<string, ArticleItem[]>
}

interface SProps {
    articles: ArticleItem[]
}

export const CategorizedArticleItemList = ({
    articles
}: CProps) => {
    const tc = useTranslations("BlogCategories");
    const tc2 = useTranslations("Common");

    return (
        <>
            {Object.keys(articles).length === 0 ? (
                <h3 className=" w-full text-center">{tc2("nothing")}</h3>
            ) : (
                Object.keys(articles).map((category) => (
                    <div key={category} className="flex flex-col gap-5 items-center text-center justify-center">
                        <Reveal>
                            <h3 className="font-dyslexia">{tc(category)}</h3>
                        </Reveal>
                        <div className="flex flex-col gap-2.5 font-unbounded text-lg text-center items-center justify-center">
                            {articles[category].slice().reverse().map((article, index) => (
                                <Reveal key={article.id}>
                                    <span className="flex flex-wrap gap-2 items-center justify-center">
                                        <Link
                                            href={`blog/${article.id}`}
                                            className="olink slink"
                                        >
                                            {article.title}
                                        </Link>
                                        {index === 0 && <p className="p-new-tag-ns">{tc2("new")}</p>}
                                    </span>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                ))
            )}
        </>
    );
}


export const DatedArticleItemList = ({
    articles
}: SProps) => {
    const tc = useTranslations("BlogCategories");
    const tc2 = useTranslations("Common");

    return (
        <>
            {articles.length === 0 ? (
                <h3 className=" w-full text-center">{tc2("nothing")}</h3>
            ) : (
                articles.slice().reverse().map((article, id) => (
                    <Link href={`blog/${article.id}`} key={article.id} className="w-full">
                        <Reveal width="100%">
                            <div className="border-2 border-transparent hover:border-secondary hover:bg-secondary/10 p-4 flex flex-col gap-2 justify-start items-start transition-colors">
                                <span className="flex flex-wrap">
                                    <p className="p-tag">{tc(article.category)}</p>
                                    {id === 0 && <p className="p-new-tag">{tc2("new")}</p>}
                                </span>
                                <h3>{article.title}</h3>
                                <p className="font-dyslexia font-bold">{article.date}</p>
                            </div>
                        </Reveal>
                    </Link>
                ))
            )}
        </>
    );
}
