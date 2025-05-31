'use client';
import { Box, ChartNoAxesCombined, Codesandbox, Home, MessageCircleQuestion, MessagesSquare, NotepadTextDashed, PackageSearch, Settings } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";


// ------ Generals
const General_Links = [
    {
        label: 'sidebar.general_links.general_labels.0.label',
        href: '/seller',
        icon: Home,
    },{
        label: 'sidebar.general_links.general_labels.1.label',
        href: 'statistics',
        icon: ChartNoAxesCombined,
    },
];
// ------ Shop Section
const Shop_Links = [
    {
        label: 'sidebar.shop_links.shop_labels.0.label',
        href: 'products',
        icon: PackageSearch,
    },{
        label: 'sidebar.shop_links.shop_labels.1.label',
        href: 'orders',
        icon: Box,
    },{
        label: 'sidebar.shop_links.shop_labels.2.label',
        href: 'mytemplates',
        icon: NotepadTextDashed,
    },{
        label: 'sidebar.shop_links.shop_labels.3.label',
        href: 'notifications',
        icon: MessagesSquare,
    }
];
// ------ Support
const Support_Links = [
    {
        label: 'sidebar.support_links.support_labels.0.label',
        href: 'settings',
        icon: Settings,
    },{
        label: 'sidebar.support_links.support_labels.1.label',
        href: 'help',
        icon: MessageCircleQuestion,
    },
];
export default function SideBar(){
    const pathname = usePathname();
    const segments = pathname.split('/').filter(Boolean);
    const CurrentPage = segments[segments.length - 1];
    const t = useTranslations('dashboard_seller_page');
    const locale = useLocale();
    const IsArabic = locale === 'ar';
    return (
        <main 
            className="w-64 flex-shrink-0 h-screen sticky top-0">
            <Link href='/' className="pt-4 flex justify-center items-center">
                <h1 className="text-2xl border dark:border-neutral-800 dark:bg-neutral-900 bg-neutral-100 py-2 px-6 rounded-lg font-bold text-[#892CDC] flex items-center gap-1">
                    <span className="border border-[#892CDC] p-0.5 rounded"><Codesandbox size={22} /></span>Modify<span className="dark:text-white text-neutral-800">.ma</span>
                </h1>
            </Link>
            <section dir={IsArabic ? 'rtl' : 'ltr'}>
                <nav className="p-4 space-y-2">
                    <h4 
                        className="text-xs uppercase flex items-center gap-2
                            dark:text-neutral-600 text-neutral-400">
                                {t('sidebar.general_links.primary_title')} <hr className="w-full dark:border-neutral-900" />
                    </h4>
                    <ul className="space-y-1">
                        {General_Links.map((link, index) => {
                            return (
                                <Link 
                                    href={link.href !== '/seller' ? `/seller/${link.href}` : link.href}
                                    key={index} 
                                    className={`capitalize px-4 py-2 rounded-lg 
                                        flex items-center gap-2 transition-colors
                                        ${CurrentPage === link.href.split('/').pop() ? 'bg-[#892CDC]/20 text-[#892CDC] border border-[#892CDC]/20 cursor-default' : 'dark:text-neutral-400 hover:text-[#892CDC] text-neutral-600 cursor-pointer hover:bg-[#892CDC]/10'}`}>
                                    <link.icon size={25} /> {t(link.label)}
                                </Link>
                            )
                        })}
                    </ul>
                </nav>
                <nav className="px-4 space-y-2">
                    <h4 className="text-xs uppercase dark:text-neutral-600 
                    text-neutral-400  flex items-center gap-2">
                        {t('sidebar.shop_links.primary_title')} <hr className="w-full dark:border-neutral-900" />
                    </h4>
                    <ul className="space-y-1">
                        {Shop_Links.map((link, index) => {
                            return (
                                <Link
                                    href={link.href !== '/seller' ? `/seller/${link.href}` : link.href}
                                    key={index} 
                                    className={`relative capitalize px-4 py-2 rounded-lg 
                                        flex items-center gap-2 transition-colors
                                        ${CurrentPage === link.href.split('/').pop() ? 'bg-[#892CDC]/20 text-[#892CDC] border border-[#892CDC]/20 cursor-default' : 'dark:text-neutral-400 hover:text-[#892CDC] text-neutral-600 cursor-pointer hover:bg-[#892CDC]/10'}`}>
                                    <link.icon size={25} /> {t(link.label)} {index === 2 && (
                                        <span 
                                        className="absolute z-20 right-2 text-sm px-2 py-0.5
                                                rounded border dark:border-neutral-800 
                                                border-[#892CDC] bg-[#892CDC]/30 
                                                dark:bg-neutral-900/60 dark:text-neutral-400 text-[#892CDC]">
                                                    0
                                        </span>
                                    )}
                                </Link>
                            )
                        })}
                    </ul>
                </nav>
                <nav className="p-4 space-y-2">
                    <h4 className="text-xs uppercase dark:text-neutral-600 
                    text-neutral-400 flex items-center gap-2">
                        {t('sidebar.support_links.primary_title')}  <hr className="w-full dark:border-neutral-900" />
                    </h4>
                    <ul className="space-y-1">
                        {Support_Links.map((link, index) => {
                            return (
                                <Link
                                    href={link.href !== '/seller' ? `/seller/${link.href}` : link.href}
                                    key={index} 
                                    className={`capitalize px-4 py-2 rounded-lg 
                                        flex items-center gap-2 transition-colors
                                        ${CurrentPage === link.href.split('/').pop() ? 'bg-[#892CDC]/20 text-[#892CDC] border border-[#892CDC]/20 cursor-default' : 'dark:text-neutral-400 hover:text-[#892CDC] text-neutral-600 cursor-pointer hover:bg-[#892CDC]/10'}`}>
                                    <link.icon size={25} /> {t(link.label)}
                                </Link>
                            )
                        })}
                    </ul>
                </nav>
            </section>
        </main>
    )
}