"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { DynamicLogo } from '../SamLogos';
import { Reveal } from '@/components/fx/Motion';

const TimeHSM: React.FC = () => {
    const [showComponent, setShowComponent] = useState<boolean>(false);

    useEffect(() => {

        const checkTime = () => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();

            if (((hours === 7 || hours === 19) && minutes === 8) 
                || ((hours === 8 || hours === 20) && minutes === 5)
                || (hours === 14 && minutes === 53)) {
                setShowComponent(true);
            } else {
                setShowComponent(false);
            }
        };

        checkTime()
        const intervalId = setInterval(checkTime, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
            <>
            
            { !showComponent ? (
                <Reveal delay={0.1} overflow='visible' showSlider={0}>
                    <div className=' md:h-52 h-36'>
                        <DynamicLogo className=' text-primary -translate-x-5' />
                        
                    </div>
                </Reveal>
                
            ) : (
                <div className=' animate-pulse flex justify-center items-center flex-col' title='"Draco parvus felinum parvum invenit, ut sic in aeternum felices viverent.🌻✨"'>
                    <Reveal delay={0.1} overflow='visible' showSlider={0}>
                        <Image
                            src="/icons/seven.svg"
                            alt="Draco parvus felinum parvum invenit, ut sic in aeternum felices viverent.🌻✨"
                            height={300}
                            width={300}
                            className=' hover:scale-110 transition-transform duration-500'
                        />
                    </Reveal>
                    <p className='p-tag text-center'>Draco parvus felinum parvum invenit, ut sic in aeternum felices viverent.🌻✨</p>
                </div>
                
            )}
        </>
    );
};

export default TimeHSM;
