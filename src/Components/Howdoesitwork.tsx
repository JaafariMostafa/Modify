import { getLocale, getTranslations } from 'next-intl/server';
import React from 'react'

interface Step {
    id: number;
    titleKey: string;
    icon: React.ReactNode;
}

const Process_Steps: Step[] = [
    {
        id: 1,
        titleKey: 'steps.0.title',
        icon: (
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
                <path d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4" stroke="currentColor" strokeWidth="2" />
            </svg>
        ),
    },
    {
        id: 2,
        titleKey: 'steps.1.title',
        icon: (
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" />
            </svg>
        ),
    },
    {
        id: 3,
        titleKey: 'steps.2.title',
        icon: (
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <circle cx="7" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                <circle cx="17" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                <path d="M10 12h4" stroke="currentColor" strokeWidth="2" />
            </svg>
        ),
    },
    {
        id: 4,
        titleKey: 'steps.3.title',
        icon: (
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <path d="M12 3v18M12 3l4 4M12 3l-4 4" stroke="currentColor" strokeWidth="2" />
            </svg>
        ),
    },
];

export default async function Howdoesitwork() {
    const t = await getTranslations('how_does_it_work');
    const locale = await getLocale();
    const IsArabic = locale === 'ar';

    return (
        <main 
            id='howitworks?'
            className='lg:scroll-mt-0 scroll-mt-28 w-full
                lg:px-20 md:px-12 px-6 py-16 lg:py-24'>
            
            {/* Enhanced Header Section */}
            <div className='w-full flex flex-col items-center mb-16'>
                <div className='relative'>
                    <h1 className='text-3xl lg:text-4xl text-[#892CDC] dark:text-[#D9ACF5] 
                        font-bold text-center mb-4 relative z-10'>
                        {t('title')}
                    </h1>
                    {/* Decorative gradient background */}
                    <div className='absolute -top-2 -left-4 -right-4 -bottom-2 
                        bg-gradient-to-r from-[#892CDC]/5 to-transparent 
                        dark:from-[#D9ACF5]/5 rounded-lg blur-sm -z-10'></div>
                </div>
                <div className='w-24 h-1 bg-gradient-to-r from-[#892CDC] to-[#D9ACF5] 
                    rounded-full mt-2'></div>
            </div>

            {/* Enhanced Steps Section */}
            <section className='w-full relative'>
                {/* Background decoration */}
                <div className='absolute inset-0 bg-gradient-to-br from-[#892CDC]/5 
                    via-transparent to-[#D9ACF5]/5 rounded-2xl blur-3xl'></div>
                
                <div className='relative grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 
                    gap-6 lg:gap-8 p-8 lg:p-12 rounded-2xl 
                    bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm
                    border border-gray-200/50 dark:border-gray-800/50
                    shadow-xl shadow-gray-200/20 dark:shadow-gray-900/20'>
                    
                    {Process_Steps.map((card, index) => {
                        return (
                            <div
                                key={card.id}
                                className='group relative
                                    border border-gray-200/60 dark:border-gray-800/60 
                                    rounded-xl bg-white/80 dark:bg-gray-900/80 
                                    backdrop-blur-sm shadow-lg shadow-gray-200/10 
                                    dark:shadow-gray-900/20 hover:shadow-xl 
                                    hover:shadow-[#892CDC]/10 dark:hover:shadow-[#D9ACF5]/10
                                    transition-all duration-300 hover:-translate-y-2
                                    hover:border-[#892CDC]/30 dark:hover:border-[#D9ACF5]/30'
                            >
                                {/* Gradient overlay on hover */}
                                <div className='absolute inset-0 bg-gradient-to-br 
                                    from-[#892CDC]/5 to-[#D9ACF5]/5 opacity-0 
                                    group-hover:opacity-100 transition-opacity duration-300'></div>
                                
                                {/* Step number badge */}
                                <div className='absolute top-2 right-2 w-8 h-8 
                                    bg-gradient-to-br from-[#892CDC] to-[#D9ACF5] 
                                    rounded-full flex items-center justify-center 
                                    text-white text-sm font-bold shadow-lg
                                    group-hover:scale-110 transition-transform duration-300'>
                                    {card.id}
                                </div>

                                <div className='relative flex flex-col items-center 
                                    justify-center p-6 lg:p-8 space-y-4'>
                                    
                                    {/* Enhanced icon container */}
                                    <div className='relative w-20 h-20 lg:w-24 lg:h-24 
                                        flex items-center justify-center rounded-2xl 
                                        bg-gradient-to-br from-[#892CDC]/10 to-[#D9ACF5]/10
                                        border border-[#892CDC]/20 dark:border-[#D9ACF5]/20
                                        group-hover:scale-110 group-hover:rotate-3
                                        transition-all duration-300 shadow-lg
                                        text-[#892CDC] dark:text-[#D9ACF5]'>
                                        
                                        {/* Pulsing background effect */}
                                        <div className='absolute inset-0 rounded-2xl 
                                            bg-gradient-to-br from-[#892CDC]/5 to-[#D9ACF5]/5 
                                            animate-pulse opacity-0 group-hover:opacity-100 
                                            transition-opacity duration-300'></div>
                                        
                                        <div className='relative z-10'>
                                            {card.icon}
                                        </div>
                                    </div>

                                    {/* Enhanced title */}
                                    <h2
                                        className="text-lg lg:text-xl font-bold 
                                            text-gray-700 dark:text-[#D9ACF5] 
                                            text-center leading-tight
                                            group-hover:text-[#892CDC] 
                                            dark:group-hover:text-white
                                            transition-colors duration-300"
                                        style={{ direction: IsArabic ? 'rtl' : 'ltr' }}
                                    >
                                        {t(card.titleKey)}
                                    </h2>

                                    {/* Progress connector (except for last item) */}
                                    {/* Progress connector (between cards, not inside the card) */}
                                    </div>
                                    {/* Render connector between cards (only on large screens, except after last card) */}
                                    {index < Process_Steps.length - 1 && (
                                        <div className='hidden lg:block absolute top-1/2 -right-8 w-8 h-0.5 
                                            bg-gradient-to-r from-[#892CDC]/30 to-[#D9ACF5]/30 
                                            transform -translate-y-1/2 z-20'>
                                            <div className='absolute right-0 top-1/2 transform 
                                                -translate-y-1/2 w-2 h-2 bg-[#892CDC] 
                                                rounded-full shadow-sm'></div>
                                        </div>
                                    )}
                                </div>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}