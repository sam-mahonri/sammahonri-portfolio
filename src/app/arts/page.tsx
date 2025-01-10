import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { getArtCategorizedRefs } from '@/lib/artistic';
import Gallery from '@/components/sections/ArtsSections';

export const generateMetadata = async ({ params, searchParams }: { params: { slug: string }, searchParams: any }): Promise<Metadata> => {
    const t = await getTranslations("Common");
    const urlParams = new URLSearchParams(searchParams);
    const artsContent = getArtCategorizedRefs();
    const artParam = urlParams.get('art') as unknown as number; 

    const openGraph = artParam
        ? {
            title: `${t('arts')}`,
            images: [
                {
                    url: artsContent[artParam].imgUrl,
                    alt: t('arts'),
                },
            ],
        }
        : undefined;

    return {
        title: `${t('arts')}`,
        openGraph,
    };
};

export default function Arts() {
    const artsContent = getArtCategorizedRefs();

    return <Gallery Arts={artsContent} />

}