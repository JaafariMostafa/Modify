'use client';
import { Info } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";


export default function TotalGainCard(){
    const t = useTranslations('dashboard_seller_page_content');
    const locale = useLocale();
    const IsArabic = locale === 'ar';
    return (
        <main className="col-span-1 border border-neutral-300 dark:border-neutral-800 rounded-lg p-4 shadow-md">
            <span 
                dir={IsArabic ? 'rtl' : 'ltr'}
                className="w-full flex items-start justify-between">
                <h2 
                    className="flex items-center gap-2 text-neutral-800 
                    dark:text-neutral-500 mb-4">
                    {t('dashboard_cards.total_gain_card.total_gain_title')} <Info size={16} />
                </h2>
                <select 
                    className="text-sm py-1 px-2 border 
                        dark:border-neutral-800 
                        text-neutral-600 dark:text-neutral-600 
                        bg-transparent rounded"
                    name="" 
                    id=""
                    >
                    <option value="today">{t('dashboard_cards.total_gain_card.filter.today')}</option>
                    <option value="this-week">{t('dashboard_cards.total_gain_card.filter.this_week')}</option>
                    <option value="this-month">{t('dashboard_cards.total_gain_card.filter.this_month')}</option>
                    <option value="this-year">{t('dashboard_cards.total_gain_card.filter.this_year')}</option>
                    <option value="all-time">{t('dashboard_cards.total_gain_card.filter.all_time')}</option>
                </select>
            </span>
            <p className="text-3xl font-bold text-[#892CDC]">
                10,000 <span className="text-sm font-normal text-neutral-500">{t('dashboard_cards.total_gain_card.currency')}</span>
            </p>
            <p className={`text-sm text-neutral-500 mt-2
            ${IsArabic ? 'text-end' : 'text-start'}`}>
                {t('dashboard_cards.total_gain_card.total_gain_description')}
            </p>
            <div className="mt-4">
                <button className="w-full bg-[#892CDC] text-white px-4 py-2 rounded-lg hover:bg-[#7a24b0] transition-colors">
                    {t('dashboard_cards.total_gain_card.view_details')}
                </button>
            </div>
        </main>
    )
}