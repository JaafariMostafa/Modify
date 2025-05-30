'use client';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useEffect } from 'react';
import { UserIcon, LogIn, UserPlus, LayoutDashboard, ShoppingBag, Settings, LifeBuoy } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';



const Authenticated_User_Links = [
    {
        label: 'user_dropdown_menu.0.label',
        href: '/profile',
        icon: <UserIcon className="w-4 h-4" />
    },
    {
        label: 'user_dropdown_menu.1.label',
        href: '/dashboard',
        icon: <LayoutDashboard className="w-4 h-4" />
    },
    {
        label: 'user_dropdown_menu.2.label',
        href: '/myorders',
        icon: <ShoppingBag className="w-4 h-4" />
    },
    {
        label: 'user_dropdown_menu.3.label',
        href: '/settings',
        icon: <Settings className="w-4 h-4" />
    },
    {
        label: 'user_dropdown_menu.4.label',
        href: '/support',
        icon: <LifeBuoy className="w-4 h-4" />
    }
];
export default function UserDropDownMenu() {
    const [isOpen, setIsOpen] = React.useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const session = useSession();
    const t = useTranslations();
    const locale = useLocale();
    const IsArabic = locale === 'ar';
    return (
        <div className='relative hidden sm:block'>
            <button
                ref={buttonRef}
                onClick={toggleMenu}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-900 
                    transition-colors duration-200 border dark:border-neutral-800"
            >
                <UserIcon className="w-5 h-5 text-neutral-500 dark:text-gray-400" />
            </button>

            {isOpen && (
                <div
                    ref={menuRef}
                    className="absolute top-11 right-0 mt-2 min-w-40 
                        bg-white dark:bg-black 
                        rounded-lg shadow-lg border 
                        dark:border-neutral-800
                        border-gray-200 
                        overflow-hidden z-50"
                >
                    {session.status === 'authenticated' ? (
                        <>
                        <div dir={IsArabic ? 'rtl' : 'ltr'} className='flex items-center gap-2 px-3 py-2'>
                            <div className='relative w-10 h-10 rounded-full overflow-hidden border dark:border-white'>
                                {session?.data?.user?.image && (
                                    <Image
                                        src={session?.data?.user?.image}
                                        alt=''
                                        fill
                                        className='object-cover'
                                    />
                                )}
                            </div>
                            <span className=''>
                                <h1 className='text-sm text-neutral-700 dark:text-neutral-200'>
                                    {session?.data?.user?.name}
                                </h1>
                                <p className='text-xs text-gray-400 dark:text-gray-400'>
                                    {session?.data?.user?.email}
                                </p>
                            </span>
                        </div>
                        <ul dir={IsArabic ? 'rtl' : 'ltr'}>
                            {Authenticated_User_Links.map((link, index) => {
                                return (
                                    <Link 
                                        key={index}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-2 px-3 py-2
                                            text-sm text-gray-700 dark:text-gray-300
                                            hover:bg-[#892CDC]/20 hover:text-[#892CDC] 
                                            hover:font-semibold dark:hover:bg-neutral-800
                                            transition-colors border-t dark:border-neutral-800"
                                    >
                                        {link.icon}
                                        {t(link.label)}
                                    </Link>
                                )
                            })}
                            <button
                                className="w-full flex items-center 
                                gap-2 px-3 py-2 text-sm
                                bg-red-800 hover:bg-red-800/80"
                                onClick={() => signOut({ callbackUrl: '/' })}
                            >
                                <LogIn className="w-4 h-4 rotate-180" />
                                {t('user_dropdown_menu.5.label')}
                            </button>
                        </ul>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/auth/login"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-2 px-3 py-2 
                                    text-sm text-gray-700 dark:text-gray-300 hover:text-white
                                    hover:bg-[#892CDC] dark:hover:bg-neutral-800 
                                    transition-colors"
                            >
                                <LogIn className="w-4 h-4" />
                                Login
                            </Link>
                            <Link
                                href="/auth/register"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-2 px-3 py-2 
                                    text-sm text-gray-700 dark:text-gray-300 
                                    dark:hover:bg-neutral-800 
                                    hover:bg-[#892CDC] hover:text-white
                                    transition-colors"
                            >
                                <UserPlus className="w-4 h-4" />
                                Register
                            </Link>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}