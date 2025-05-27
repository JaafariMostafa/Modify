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
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4" stroke="#892CDC" strokeWidth="2" />
                <path d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4" stroke="#892CDC" strokeWidth="2" />
            </svg>
        ),
    },
    {
        id: 2,
        titleKey: 'steps.0.title',
        icon: (
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="2" stroke="#892CDC" strokeWidth="2" />
                <path d="M12 8v8M8 12h8" stroke="#892CDC" strokeWidth="2" />
            </svg>
        ),
    },
    {
        id: 3,
        titleKey: 'steps.0.title',
        icon: (
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <circle cx="7" cy="12" r="3" stroke="#892CDC" strokeWidth="2" />
                <circle cx="17" cy="12" r="3" stroke="#892CDC" strokeWidth="2" />
                <path d="M10 12h4" stroke="#892CDC" strokeWidth="2" />
            </svg>
        ),
    },
    {
        id: 4,
        titleKey: 'steps.0.title',
        icon: (
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <path d="M12 3v18M12 3l4 4M12 3l-4 4" stroke="#892CDC" strokeWidth="2" />
            </svg>
        ),
    },
];
export default async function Howdoesitwork() {
    const t = await getTranslations('how_does_it_work');
    const locale = await getLocale();
    const IsArabic = locale === 'ar';
  return (
    <main id='howitworks?' className='lg:scroll-mt-44 scroll-mt-28 w-full lg:px-20 md:px-12 px-6'>
        <div className='w-full flex justify-center mb-10'>
            <h1 className='text-2xl text-[#892CDC] dark:text-[#D9ACF5] font-semibold'>
                {t('title')}
            </h1>
        </div>
        <section 
            className='w-full shadow grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1
                p-10 rounded-2xl dark:bg-black bg-violet-50 dark:border border-neutral-900 gap-4'>
            {Process_Steps.map((card) => {
                return (
                    <div 
                        key={card.id}
                        className='dark:border shadow border-neutral-800 rounded-lg dark:bg-transparent'
                        >
                        <div className='flex flex-col items-center justify-center p-4 space-y-2'>
                            <div className='w-16 h-16 flex items-center justify-center rounded-full bg-[#892CDC]/10'>
                                {card.icon}
                            </div>
                            <h2
                                className="text-lg font-semibold text-neutral-500 dark:text-[#D9ACF5]"
                                style={{ direction: IsArabic ? 'rtl' : 'ltr' }}
                            >
                                {card.id + '.' + ' ' + t(card.titleKey)}
                            </h2>
                        </div>
                    </div>
                )
            })}
        </section>
    </main>
  )
}
