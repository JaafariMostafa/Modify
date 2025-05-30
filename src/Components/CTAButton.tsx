import getSSSession from "@/app/lib/getSSSession";
import { ArrowUpRight } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server"
import Link from "next/link";



export default async function CTAButton(){
    const t = await getTranslations('hero');
    const locale = await getLocale();
    const Rotate_Icon = locale === 'ar' ? '-rotate-90' : '';
    const session = await getSSSession();
    return (
        <Link href={session ? '/seller' : '/auth/login'}
            className="flex bg-[#892CDC] hover:bg-[#892CDC]/90
                transition-all duration-200 items-center gap-2 
                py-2 px-6 rounded-lg text-white border border-[#892CDC]">
            {t('hero_cta_button')} <ArrowUpRight className={` ${Rotate_Icon}`} size={20} />
        </Link>
    )
}