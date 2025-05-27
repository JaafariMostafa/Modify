'use client';
import { ArrowUpRight, Star } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
    const images = [
        "https://images.pexels.com/photos/15127553/pexels-photo-15127553/free-photo-of-a-man-in-a-white-hoodie-and-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/26447865/pexels-photo-26447865/free-photo-of-man-standing-in-t-shirt-and-cap.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3399996/pexels-photo-3399996.jpeg?auto=compress&cs=tinysrgb&w=600"
    ];

    function useImageCarousel(imgs: string[], interval = 10000) {
        const [index, setIndex] = useState(0);
        useEffect(() => {
            const timer = setInterval(() => {
                setIndex((prev) => (prev + 1) % imgs.length);
            }, interval);
            return () => clearInterval(timer);
        }, [imgs, interval]);
        return imgs[index];
    }

    const currentImage = useImageCarousel(images);
    const t = useTranslations('hero');
    const locale = useLocale();
    const IsArabic = locale === 'ar';
    const Rotate_Icon = IsArabic ? '-rotate-90' : '';
    return (
        <main className="w-full min-h-80 lg:px-20 md:px-12 px-6 pb-6 pt-12">
            <section className="w-full flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
                {/* Left: Text Content */}
                <div className="flex-1 flex flex-col lg:items-start md:items-start items-center space-y-4">
                    <span
                        className="flex items-center gap-2 px-4 py-1 border-[#892CDC] 
                            text-[#892CDC] rounded-full text-sm 
                            w-max border">
                        <Star size={20} className="text-[#892CDC] fill-[#892CDC]" /> {t('printOnDemandPremium')}
                    </span>
                    <h1
                        className={`lg:text-[10vh] md:text-[9vh] text-5xl flex flex-col primary-color font-bold
                            py-4 lg:w-3/4 dark:text-white Fade-In lg:text-start md:text-start text-center
                            ${IsArabic ? "lg:gap-8 md:gap-8 sm:gap-6 gap-4" : ""}`}>
                        {t('hero_title')} <span className="text-[#892CDC]">{t('hero_title_marks')}</span>
                    </h1>
                    <p className="text-xl lg:text-start md:text-start text-center dark:text-white text-neutral-600">
                        {t('noStockNoCapitalNoExperience')} <br />
                        <span className="text-sm dark:text-neutral-400">
                            {t('modifyPartnerDescription')}
                        </span>
                    </p>
                    <div 
                        className="py-6 flex flex-col w-full lg:flex-row md:flex-row 
                            sm:flex-row gap-2 lg:items-start md:items-start items-center Fade-In">
                        <button
                            className="flex bg-[#892CDC] hover:bg-[#892CDC]/90
                                transition-all duration-200 items-center gap-2 
                                py-2 px-6 rounded-lg text-white border border-[#892CDC]">
                            {t('hero_cta_button')} <ArrowUpRight className={` ${Rotate_Icon}`} size={20} />
                        </button>
                        <button
                            className="flex bg-transparent hover:bg-[#892CDC]/10 dark:bg-neutral-900 dark:hover:bg-neutral-900/10 
                                transition-all duration-200 items-center gap-2 py-2 text-[#892CDC] dark:text-neutral-300
                                px-6 rounded-lg border border-[#892CDC]/50 dark:border-neutral-800">
                            {t('hero_cta_button_secondary')} <ArrowUpRight className={` ${Rotate_Icon}`} size={20} />
                        </button>
                    </div>
                </div>
                {/* Right: Product Image */}

                <div className="lg:block md:block sm:block hidden w-[400px] h-[60vh] shadow relative overflow-hidden rounded-lg">
                    {/* Product Image */}
                    <Image 
                        src={currentImage}
                        alt="Product"
                        fill
                        className="object-cover Fade-In-Image"
                        key={currentImage}
                    />
                </div>
            </section>
        </main>
    );
}