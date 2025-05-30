import { Plus } from "lucide-react";
import HeaderSeller from "./SellerHeader";
import TotalGainCard from "@/Components/TotalGainCard";
import TotalOrders from "./TotalOrders";
import TotalTemplates from "./TotalTemplates";
// import SellerTable from "./SellerTable";
import { getLocale, getTranslations } from "next-intl/server";
import SalesBarChart from "@/Components/SalesBarChart";



export default async function Page(){
    const t = await getTranslations('dashboard_seller_page_content');
    const locale = await getLocale();
    const IsArabic = locale === 'ar';
    return (
        <main className="w-full min-h-screen rounded-lg dark:bg-neutral-900 border dark:border-neutral-800">
            <HeaderSeller />
            <section className="p-4">
                <div 
                    dir={IsArabic ? 'rtl' : 'ltr'}
                    className="w-full flex justify-between items-center">
                    <span className="space-y-2">
                        <h1 
                            className="text-2xl font-bold capitalize
                                text-[#892CDC] dark:text-white">
                            {t('title')}
                        </h1>
                        <p className='text-sm dark:text-neutral-500 text-neutral-400'>
                               {t('description')}
                        </p>
                    </span>
                    <button 
                        className="flex items-center gap-1 
                            bg-[#892CDC] text-white px-4 
                            py-2 rounded-lg hover:bg-[#7a24b0] 
                            text-sm transition-colors mt-4">
                        <Plus size={16}/> {t('cta_button')}
                    </button>
                </div>
                <div className="w-full grid grid-cols-3 gap-2 py-4">
                    <TotalGainCard />
                    <div 
                        className="col-span-2 rounded-lg shadow-md border 
                            border-neutral-200 dark:border-neutral-800">
                        <div className="w-full flex">
                            <TotalOrders />
                            <TotalTemplates />
                        </div>
                    </div>
                </div>
                {/* <SellerTable /> */}
                {/* <div className="w-1/3">
                    <SalesBarChart />
                </div> */}
            </section>
        </main>
    )
}