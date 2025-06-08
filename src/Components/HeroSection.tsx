import { ArrowUpRight, Star } from "lucide-react";
import SSRCTAButton from "./CTAButton/SSRCTAButton";
import DashboardScreen from "./DashboardScreen";
import { getLocale, getTranslations } from "next-intl/server";

export default async function HeroSection() {
    const t = await getTranslations('hero');
    const locale = await getLocale();
    const IsArabic = locale === 'ar';
    const Rotate_Icon = IsArabic ? '-rotate-90' : '';
    return (
        <main className="w-full min-h-80 pb-6 pt-20">
            <section 
                className="w-full flex flex-col
                    items-center justify-center space-y-8 
                    lg:space-y-0">
                {/* Left: Text Content */}
                <div 
                    className="w-full flex-1 flex flex-col lg:items-center 
                        md:items-start items-center space-y-4
                        lg:px-20 md:px-12 px-6 lg:mb:32 md:mb-32">
                    <span
                        className="flex items-center gap-2 px-4 py-1 border-[#892CDC] 
                            text-[#892CDC] rounded-full text-sm 
                            w-max border">
                        <Star size={20} className="text-[#892CDC] fill-[#892CDC]" /> {t('printOnDemandPremium')}
                    </span>
                    <h1
                        className={`lg:text-[10vh] md:text-[9vh] text-5xl 
                            flex flex-col primary-color font-bold
                            py-4 lg:w-3/4 dark:text-white Fade-In 
                            text-center
                            ${IsArabic ? "lg:gap-8 md:gap-8 sm:gap-6 gap-4" : ""}`}>
                        {t('hero_title')} <span className="text-[#892CDC]">{t('hero_title_marks')}</span>
                    </h1>
                    <p 
                        className="text-xl text-center dark:text-white 
                            text-neutral-600">
                        {t('noStockNoCapitalNoExperience')} <br />
                        <span className="text-sm dark:text-neutral-400">
                            {t('modifyPartnerDescription')}
                        </span>
                    </p>
                    <div 
                        className="py-6 w-full flex justify-center 
                            gap-2 items-center Fade-In">
                        <SSRCTAButton />
                        <button
                            className="flex justify-between bg-transparent hover:bg-[#892CDC]/10 dark:bg-neutral-900 dark:hover:bg-neutral-900/10 
                                transition-all duration-200 items-center gap-2 py-2 text-[#892CDC] dark:text-neutral-300
                                min-w-48 px-6 rounded-lg border border-[#892CDC]/50 dark:border-neutral-800">
                            {t('hero_cta_button_secondary')} <ArrowUpRight className={` ${Rotate_Icon}`} size={20} />
                        </button>
                    </div>
                </div>
                {/* Right: Product Image */}
                <DashboardScreen />
            </section>
        </main>
    );
}