import Link from 'next/link';
import type { ArticleItem } from "@/types";
import { Reveal } from "../fx/Motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import clsx from 'clsx';
import { DynamicLogo } from './SamLogos';

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
                            <h3>{tc(category)}</h3>
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


function getRandomBgClass() {
    const colors = [
        "bg-error/20",
        "bg-primary/20",
        "bg-secondary/20",
        "bg-sam-orange-color/20"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
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
                    <Link href={`blog/${article.id}`} key={article.id} className={clsx("w-full h-full", { "hidden": article.id.startsWith("tos-") })}>
                        <Reveal width="100%" className='h-full'>
                            <div className={clsx("border-2 border-transparent hover:border-secondary hover:bg-secondary/10 flex flex-col gap-2 justify-start items-start transition-colors", { "border-2 border-primary shadow-primary/50 shadow-2xl": id == 0 })}>
                                {article?.banner ?
                                    <div className=' relative w-full h-64 overflow-hidden'>
                                        <Image
                                            fill
                                            src={article?.banner || "/placeholders/blog.png"}
                                            alt={article.title}
                                            sizes='(max-width: 1280px) 100vw,
                                    (max-width: 1536px) 75vw,
                                    (max-width: 1920px) 50vw,
                                    25vw'
                                            className='object-cover opacity-0 transition-all duration-500'
                                            onLoad={(event) => {
                                                const target = event.target as HTMLImageElement;
                                                target.classList.remove("opacity-0");
                                            }}
                                        />
                                    </div>
                                    :
                                    <div className={`relative w-full h-64 overflow-hidden flex justify-center items-center ${getRandomBgClass()}`}>
                                        <div className=' h-2/3 w-2/3 -translate-x-4'>
                                            <DynamicLogo />
                                        </div>

                                    </div>
                                }
                                <div className=' p-5 flex flex-col gap-1'>
                                    <span className="flex flex-wrap">
                                        <p className="p-tag">{tc(article.category)}</p>
                                        {id === 0 && <p className="p-new-tag">{tc2("new")}</p>}
                                    </span>

                                    <p className="font-newserif font-bold">{article.date}</p>

                                    <h3>{article.title}</h3>
                                </div>
                                {id === 0 &&
                                    <span className='absolute h-4 w-4 rounded-full bg-error right-4 top-4'>
                                        <span className='absolute animate-ping h-full w-full rounded-full bg-primary' />
                                    </span>
                                }

                            </div>
                        </Reveal>
                    </Link>
                ))
            )}
        </>
    );
};