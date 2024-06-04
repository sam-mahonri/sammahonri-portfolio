import {useTranslations} from 'next-intl';
import { Metadata } from 'next';
import { Reveal } from '@/components/fx/Motion';
import { Title } from '@/components/ui/Titles';

export const metadata: Metadata = {
    title: "Arts"
};

export default function Arts() {
    const tc = useTranslations('Common');
    
    return <>
        <main className="main-section">
            <section className="main-subsection place-content-center items-center">
                
                    <Title title='arts'/>
                    <Reveal delay={1.0}><h4 className=' text-center'>{tc('nothing')}</h4></Reveal>
                
            </section>
        </main>
    </>
}