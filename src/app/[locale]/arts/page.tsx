import {useTranslations} from 'next-intl';
import { Metadata } from 'next';
import { Reveal } from '@/components/fx/Motion';
import { Title } from '@/components/ui/Titles';
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
    const tc = useTranslations('Common');
    const artsContent = getArtCategorizedRefs();
    console.log(artsContent)
    return <>
        <main className="main-section">
            <section className="main-subsection place-content-center items-center">
                
                    <Title title='arts'/>
                    <Reveal delay={1.0}><h4 className=' text-center'>{tc('nothing')}</h4></Reveal>
                    <Gallery Arts={artsContent}/>
            </section>
        </main>
    </>
}