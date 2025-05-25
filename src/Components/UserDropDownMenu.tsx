'use client';
import { UserIcon } from 'lucide-react'
import Link from 'next/link';
import React, { useRef, useEffect } from 'react'

export default function UserDropDownMenu() {
    const [isOpen, setIsOpen] = React.useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const iconRef = useRef<SVGSVGElement>(null)

    const toggleMenu = () => {
        setIsOpen(prev => !prev)
    }

    useEffect(() => {
        if (!isOpen) return

        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                iconRef.current &&
                !iconRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen])

    return (
        <main className='relative hidden sm:block md:block lg:block'>
            <UserIcon
                ref={iconRef}
                onClick={toggleMenu}
                className="text-neutral-700 hover:text-black 
                    dark:text-neutral-300 dark:hover:text-white cursor-pointer"
            />
            {isOpen && (
                <div
                    ref={menuRef}
                    className='absolute top-10 right-0 bg-white dark:bg-black 
                        border border-neutral-300 dark:border-neutral-800 rounded shadow-lg
                        w-48 flex flex-col flex flex-col items-center
                        after:content-[""] after:absolute after:-top-2 
                        after:right-1 after:w-4 after:h-4 
                        dark:after:bg-black after:bg-white z-50 after:-z-10 after:border-t after:border-l 
                        dark:after:border-neutral-800 after:rotate-45'
                >
                    <Link 
                        className='dark:hover:bg-neutral-900 hover:bg-neutral-100 
                            hover:text-black font-semibold transition-all 
                            duration-200 py-1 text-neutral-500 dark:hover:text-white 
                            border-b dark:border-neutral-800 w-full flex justify-center' 
                        href="/"
                    >
                        Login
                    </Link>
                    <Link 
                        className='dark:hover:bg-neutral-900 hover:bg-neutral-100 
                            hover:text-black font-semibold transition-all 
                            duration-200 py-1 text-neutral-500 dark:hover:text-white 
                            border-b dark:border-neutral-800 w-full flex justify-center' 
                        href="/"
                    >
                        Register
                    </Link>
                </div>
            )}
        </main>
    )
}
