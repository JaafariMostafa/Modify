import getSSSession from "@/app/lib/getSSSession";
import { ArrowUpRight } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server"
import CSRCTAButton from "./CSRCTAButton";



export default async function CTAButton(){
    const t = await getTranslations('hero');
    const locale = await getLocale();
    const Rotate_Icon = locale === 'ar' ? '-rotate-90' : '';
    const session = await getSSSession();
    return (
        <CSRCTAButton 
            LABEL={
                <>
                    {t('hero_cta_button')}
                    <ArrowUpRight className={` ${Rotate_Icon}`} size={20} />
                </>
            }
            SESSION={!!session}
            />
    )
}