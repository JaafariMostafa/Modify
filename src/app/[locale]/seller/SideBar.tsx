'use client';
import { Box, ChartNoAxesCombined, Codesandbox, Home, MessageCircleQuestion, MessagesSquare, NotepadTextDashed, Settings } from "lucide-react";


// ------ Generals
const General_Links = [
    {
        label: 'Dashboard',
        href: '/seller',
        icon: Home,
    },{
        label: 'Statistics',
        href: '/statistics',
        icon: ChartNoAxesCombined,
    },
];
// ------ Shop Section
const Shop_Links = [
    {
        label: 'Orders',
        href: '/orders',
        icon: Box,
    },{
        label: 'My Templates',
        href: '/mytemplates',
        icon: NotepadTextDashed,
    },{
        label: 'Notifications',
        href: '/notifications',
        icon: MessagesSquare,
    }
];
// ------ Support
const Support_Links = [
    {
        label: 'Settings',
        href: '/settings',
        icon: Settings,
    },{
        label: 'Help',
        href: '/help',
        icon: MessageCircleQuestion,
    },
];
export default function SideBar(){

    return (
        <main 
            className="w-64 flex-shrink-0 h-screen sticky top-0  
                ">
            <div className="pt-4 flex justify-center items-center">
                <h1 className="text-2xl border dark:border-neutral-800 dark:bg-neutral-900 bg-neutral-100 py-2 px-6 rounded-lg font-bold text-[#892CDC] flex items-center gap-1">
                <span className="border border-[#892CDC] p-0.5 rounded"><Codesandbox size={22} /></span>Modify<span className="dark:text-white text-neutral-800">.ma</span>
            </h1>
            </div>
            <nav className="p-4 space-y-2">
                <h4 className="text-xs uppercase dark:text-neutral-600 text-neutral-400">General</h4>
                <ul>
                    {General_Links.map((link, index) => {
                        return (
                            <li 
                            key={index} 
                            className="px-4 py-2 rounded-lg dark:text-neutral-400 text-neutral-600 hover:bg-neutral-200 dark:hover:bg-neutral-800 
                                    flex items-center gap-2 transition-colors">
                                <link.icon size={25} /> {link.label}
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <nav className="p-4 space-y-2">
                <h4 className="text-xs uppercase dark:text-neutral-600 text-neutral-400">Shop</h4>
                <ul>
                    {Shop_Links.map((link, index) => {
                        return (
                            <li 
                            key={index} 
                            className="relative px-4 py-2 rounded-lg dark:text-neutral-400 text-neutral-600 hover:bg-neutral-200 dark:hover:bg-neutral-800 
                                    flex items-center gap-2 transition-colors">
                                <link.icon size={25} /> {link.label} {link.label.toLowerCase() === 'notifications' && (
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
                <h4 className="text-xs uppercase dark:text-neutral-600 text-neutral-400">Support</h4>
                <ul>
                    {Support_Links.map((link, index) => {
                        return (
                            <li 
                            key={index} 
                            className="px-4 py-2 rounded-lg dark:text-neutral-400 text-neutral-600 hover:bg-neutral-200 dark:hover:bg-neutral-800 
                                    flex items-center gap-2 transition-colors">
                                <link.icon size={25} /> {link.label}
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </main>
    )
}