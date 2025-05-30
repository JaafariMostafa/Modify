'use client';
import { Box, ChartNoAxesCombined, Codesandbox, Home, MessageCircleQuestion, MessagesSquare, NotepadTextDashed, Settings } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";


// ------ Generals
const General_Links = [
    {
        label: 'sidebar.general_links.general_labels.0.label',
        href: '/seller',
        icon: Home,
    },{
        label: 'sidebar.general_links.general_labels.1.label',
        href: '/statistics',
        icon: ChartNoAxesCombined,
    },
];
// ------ Shop Section
const Shop_Links = [
    {
        label: 'sidebar.shop_links.shop_labels.0.label',
        href: '/orders',
        icon: Box,
    },{
        label: 'sidebar.shop_links.shop_labels.1.label',
        href: '/mytemplates',
        icon: NotepadTextDashed,
    },{
        label: 'sidebar.shop_links.shop_labels.2.label',
        href: '/notifications',
        icon: MessagesSquare,
    }
];
// ------ Support
const Support_Links = [
    {
        label: 'sidebar.support_links.support_labels.0.label',
        href: '/settings',
        icon: Settings,
    },{
        label: 'sidebar.support_links.support_labels.1.label',
        href: '/help',
        icon: MessageCircleQuestion,
    },
];
export default function SideBar(){

    const t = useTranslations('dashboard_seller_page');
    const locale = useLocale();
    const IsArabic = locale === 'ar';
    return (
        <main 
            className="w-64 flex-shrink-0 h-screen sticky top-0">
            <div className="pt-4 flex justify-center items-center">
                <h1 className="text-2xl border dark:border-neutral-800 dark:bg-neutral-900 bg-neutral-100 py-2 px-6 rounded-lg font-bold text-[#892CDC] flex items-center gap-1">
                <span className="border border-[#892CDC] p-0.5 rounded"><Codesandbox size={22} /></span>Modify<span className="dark:text-white text-neutral-800">.ma</span>
            </h1>
            </div>
            <section dir={IsArabic ? 'rtl' : 'ltr'}>
                <nav className="p-4 space-y-2">
                    <h4 
                        className="text-xs uppercase flex items-center gap-2
                            dark:text-neutral-600 text-neutral-400">
                                {t('sidebar.general_links.primary_title')} <hr className="w-full border-neutral-900" />
                    </h4>
                    <ul>
                        {General_Links.map((link, index) => {
                            return (
                                <li 
                                key={index} 
                                className="capitalize px-4 py-2 rounded-lg dark:text-neutral-400 text-neutral-600 hover:bg-neutral-200 dark:hover:bg-neutral-800 
                                        flex items-center gap-2 transition-colors">
                                    <link.icon size={25} /> {t(link.label)}
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <nav className="px-4 space-y-2">
                    <h4 className="text-xs uppercase dark:text-neutral-600 
                    text-neutral-400  flex items-center gap-2">
                        {t('sidebar.shop_links.primary_title')} <hr className="w-full border-neutral-900" />
                    </h4>
                    <ul>
                        {Shop_Links.map((link, index) => {
                            return (
                                <li 
                                key={index} 
                                className="relative capitalize px-4 py-2 rounded-lg dark:text-neutral-400 text-neutral-600 hover:bg-neutral-200 dark:hover:bg-neutral-800 
                                flex items-center gap-2 transition-colors">
                                    <link.icon size={25} /> {t(link.label)} {link.label.toLowerCase() === 'notifications' && (
                                        <span 
                                        className="absolute right-2 text-sm px-2 py-0.5
                                                rounded border dark:border-neutral-800 
                                                border-[#892CDC] bg-[#892CDC]/30 
                                                dark:bg-neutral-900/60 dark:text-neutral-400 text-[#892CDC]">
                                                    0
                                        </span>
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <nav className="p-4 space-y-2">
                    <h4 className="text-xs uppercase dark:text-neutral-600 
                    text-neutral-400 flex items-center gap-2">
                        {t('sidebar.support_links.primary_title')}  <hr className="w-full border-neutral-900" />
                    </h4>
                    <ul>
                        {Support_Links.map((link, index) => {
                            return (
                                <li 
                                key={index} 
                                className="capitalize px-4 py-2 rounded-lg dark:text-neutral-400 text-neutral-600 hover:bg-neutral-200 dark:hover:bg-neutral-800 
                                        flex items-center gap-2 transition-colors">
                                    <link.icon size={25} /> {t(link.label)}
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </section>
        </main>
    )
}