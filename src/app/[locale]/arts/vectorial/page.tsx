import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { getArtCategorizedRefs } from '@/lib/artistic';
import Gallery from '@/components/sections/ArtsSections';

export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
    const t = await getTranslations("Common")
    return {
        title: `${t('arts')}`,
    };
};
export default function Arts() {
    const artsContent = getArtCategorizedRefs("vectorial");

    return <Gallery Arts={artsContent}/>
    
}