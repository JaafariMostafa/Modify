import { Box, ChartNoAxesCombined, Home, MessageCircleQuestion, MessagesSquare, NotepadTextDashed, Settings } from "lucide-react";


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
                dark:bg-neutral-900 border-r dark:border-neutral-800 
                ">
            <div className="border-b border-neutral-800 p-4 flex justify-center items-center">
                <h1
                    className="text-2xl font-semibold"
                >
                    Seller Dashboard
                </h1>
            </div>
            <nav className="p-4 space-y-4">
                <h4 className="text-xs uppercase text-neutral-600">General</h4>
                <ul>
                    {General_Links.map((link, index) => {
                        return (
                            <li 
                            key={index} 
                            className="px-4 py-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 
                                    flex items-center gap-2 transition-colors">
                                <link.icon size={25} /> {link.label}
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <nav className="p-4 space-y-4">
                <h4 className="text-xs uppercase text-neutral-600">Shop</h4>
                <ul>
                    {Shop_Links.map((link, index) => {
                        return (
                            <li 
                            key={index} 
                            className="px-4 py-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 
                                    flex items-center gap-2 transition-colors">
                                <link.icon size={25} /> {link.label}
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <nav className="p-4 space-y-4">
                <h4 className="text-xs uppercase text-neutral-600">Support</h4>
                <ul>
                    {Support_Links.map((link, index) => {
                        return (
                            <li 
                            key={index} 
                            className="px-4 py-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 
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