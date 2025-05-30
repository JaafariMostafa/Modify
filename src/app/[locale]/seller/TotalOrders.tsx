'use client';

import { ArrowRight, Info } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";



export default function TotalOrders(){
    const t = useTranslations('dashboard_seller_page_content.dashboard_cards.total_orders_card');
    const locale = useLocale();
    const IsArabic = locale === 'ar';
    return (
        <main 
            className="grow">
            <section className="p-4">
                <span 
                    dir={IsArabic ? 'rtl' : 'ltr'}
                    className="w-full flex items-start justify-between">
                    <h2 className="flex items-center gap-2 text-neutral-800 dark:text-neutral-500 mb-4">
                        {t('total_orders_title')} <Info size={16} />
                    </h2>
                    <select 
                        className="text-sm py-1 px-2 border 
                            dark:border-neutral-800 
                            text-neutral-600 dark:text-neutral-600 
                            bg-transparent rounded"
                        name="" 
                        id=""
                        >
                        <option value="total">{t('filter.total')}</option>
                        <option value="pending">{t('filter.pending')}</option>
                        <option value="confirmed">{t('filter.confirmed')}</option>
                        <option value="delivered">{t('filter.delivered')}</option>
                        <option value="canceled">{t('filter.canceled')}</option>
                    </select>
                </span>
                <p className="text-3xl font-bold text-[#892CDC]">
                    100 <span className="text-sm font-normal text-neutral-500">
                        {t('order_label')}
                    </span>
                </p>
                <p 
                    dir={IsArabic ? 'rtl' : 'ltr'}
                    className="text-sm text-neutral-500 mt-2">
                    {t('total_orders_description')}
                </p>
            </section>
                <div className="mt-4">
                    <button 
                        className="w-full text-[#892CDC] border-t 
                            flex items-center gap-2 justify-center
                            px-4 py-2 hover:text-[#7a24b0] 
                            dark:border-neutral-800 transition-colors">
                        {t('view_details')} <ArrowRight size={16} />
                    </button>
                </div>
        </main>
    )
}