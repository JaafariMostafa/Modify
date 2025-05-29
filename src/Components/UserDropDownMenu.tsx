'use client';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useEffect } from 'react';
import { UserIcon, LogIn, UserPlus, LayoutDashboard, ShoppingBag, Settings, LifeBuoy } from 'lucide-react';



const Authenticated_User_Links = [
    {
        label: 'Profile',
        href: '/profile',
        icon: <UserIcon className="w-4 h-4" />
    },
    {
        label: 'Dashboard',
        href: '/dashboard',
        icon: <LayoutDashboard className="w-4 h-4" />
    },
    {
        label: 'My Orders',
        href: '/myorders',
        icon: <ShoppingBag className="w-4 h-4" />
    },
    {
        label: 'Settings',
        href: '/settings',
        icon: <Settings className="w-4 h-4" />
    },
    {
        label: 'Support',
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
                    className="absolute top-full right-0 mt-2 min-w-40 
                        bg-white dark:bg-black 
                        rounded-lg shadow-lg border 
                        dark:border-neutral-800
                        border-gray-200 
                        overflow-hidden z-50"
                >
                    {session.status === 'authenticated' ? (
                        <>
                        <div className='flex items-center gap-2 px-3 py-2'>
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
                                <h1 className='text-sm'>
                                    {session?.data?.user?.name}
                                </h1>
                                <p className='text-xs text-gray-500 dark:text-gray-400'>
                                    {session?.data?.user?.email}
                                </p>
                            </span>
                        </div>
                        <ul>
                            {Authenticated_User_Links.map((link, index) => {
                                return (
                                    <Link 
                                        key={index}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-2 px-3 py-2
                                            text-sm text-gray-700 dark:text-gray-300 hover:text-white
                                            hover:bg-[#892CDC] dark:hover:bg-neutral-800
                                            transition-colors border-t dark:border-neutral-800"
                                    >
                                        {link.icon}
                                        {link.label}
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
                                Logout
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