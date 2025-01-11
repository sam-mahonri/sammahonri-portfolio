import Link from 'next/link';
import { Metadata } from "next";
import { ArrowLeftIcon } from "@heroicons/react/24/solid"
import { getArticleData } from "@/lib/articles"
import { getLocale, getTranslations } from "next-intl/server";
import { GenericAlert } from '@/components/ui/alerts/GenericAlert';
import BackgroundManager from '@/components/fx/BackgroundManager';
import Image from "next/image";

export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
    const articleData = await getArticleData(params.slug);
    const title = articleData.title;

    const openGraph = articleData.banner
        ? {
            title: title,
            images: [
                {
                    url: articleData.banner,
                    alt: title,
                    width: 1200,
                    height: 630
                },
            ],
        }
        : undefined;

    return {
        title: `${title}`,
        openGraph,
    };
};

const Article = async ({ params }: { params: { slug: string } }) => {
    const articleData = await getArticleData(params.slug)
    const tc = await getTranslations("Common")
    const locale = await getLocale();
    return (
        <main className="main-section pt-0 md:p-8">
            <BackgroundManager banner={articleData.banner} />
            <section className="main-subsection place-content-center items-center pt-4">
                {locale !== "pt" ? <GenericAlert transMessageKey="incompleteTransBlog" alertType="warning" /> : <> </>}

                <div className="flex justify-between font-poppins max-w-7xl w-full items-center">
                    <Link href={"/blog"} className="flex flex-row gap-1 place-items-center">
                        <button className="btn btn-plain"><ArrowLeftIcon width={20} />{tc("blog")}</button>
                    </Link>
                    <p className="font-ibmmono font-bold">{articleData.date.toString()}</p>
                </div>
                {articleData.banner &&
                    <div className='max-w-3xl'>
                        <Image
                            src={articleData.banner}
                            alt={articleData.title}
                            width={1200}
                            height={630}
                            
                            className="object-cover"
                        />
                    </div>
                }


                <article
                    className="article max-w-3xl w-full flex-grow"
                    dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}
                />
            </section>
        </main>
    )
}

export default Article