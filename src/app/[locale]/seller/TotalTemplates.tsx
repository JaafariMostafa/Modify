'use client';

import { ArrowRight, Info } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";



export default function TotalTemplates(){
    const t = useTranslations('dashboard_seller_page_content.dashboard_cards.total_templates_card');
        const locale = useLocale();
        const IsArabic = locale === 'ar';
    return (
        <main 
            className="grow border-l border-neutral-200 
            dark:border-neutral-800">
            <section className="p-4">
                <span 
                    dir={IsArabic ? 'rtl' : 'ltr'}
                    className="w-full flex items-start justify-between">
                    <h2 className="flex items-center gap-2 text-neutral-800 dark:text-neutral-500 mb-4">
                        {t('total_templates_title')} <Info size={16} />
                    </h2>
                    <select 
                        className="text-sm py-1 px-2 border 
                            dark:border-neutral-800 
                            text-neutral-600 dark:text-neutral-600 
                            bg-transparent rounded"
                        name="" 
                        id=""
                        >
                        <option value="today">{t('filter.today')}</option>
                        <option value="this-week">{t('filter.this_week')}</option>
                        <option value="this-month">{t('filter.this_month')}</option>
                        <option value="this-year">{t('filter.this_year')}</option>
                        <option value="all-time">{t('filter.all_time')}</option>
                    </select>
                </span>
                <p className="text-3xl font-bold text-[#892CDC]">
                    25 <span className="text-sm font-normal text-neutral-500">
                        {t('template_label')}
                    </span>
                </p>
                <p 
                    dir={IsArabic ? 'rtl' : 'ltr'}
                    className="text-sm text-neutral-500 mt-2">
                    {t('total_templates_description')}
                </p>
            </section>
            <div className="mt-4">
                <button 
                    className="w-full flex items-center gap-2 justify-center text-[#892CDC] border-t 
                        px-4 py-2 hover:text-[#7a24b0] 
                        dark:border-neutral-800 border-neutral-200 transition-colors">
                    {t('view_details')} <ArrowRight size={16} />
                </button>
            </div>
        </main>
    )
}