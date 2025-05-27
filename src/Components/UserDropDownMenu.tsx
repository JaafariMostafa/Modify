'use client';

import { UserIcon, LogIn, UserPlus } from 'lucide-react';
import Link from 'next/link';
import React, { useRef, useEffect } from 'react';

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

    return (
        <div className='relative hidden sm:block'>
            <button
                ref={buttonRef}
                onClick={toggleMenu}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-900 
                         transition-colors duration-200 border dark:border-neutral-800"
            >
                <UserIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>

            {isOpen && (
                <div
                    ref={menuRef}
                    className="absolute top-full right-0 mt-2 w-40 
                             bg-white dark:bg-black 
                             rounded-lg shadow-lg border 
                             dark:border-neutral-800
                             border-gray-200 
                             overflow-hidden z-50"
                >
                    <Link
                        href="/login"
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
                        href="/register"
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
                </div>
            )}
        </div>
    );
}