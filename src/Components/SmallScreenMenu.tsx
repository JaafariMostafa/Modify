'use client';
import { ModeToggle } from '@/app/ModeToggle';
import { Header_Navigation_Links } from '@/GlobalLinks';
import { MenuIcon, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'

export default function SmallScreenMenu() {
    const [IsOpen, setIsOpen] = useState(false);
    const MenuRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (MenuRef.current && !MenuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <main className='lg:hidden block'>
            <MenuIcon 
                onClick={() => setIsOpen(true)} 
                className="cursor-pointer text-neutral-700 dark:text-white"/>
            <div
                className={`
                    fixed dark:bg-black/40 bg-white/20 right-0 top-0 w-full flex justify-end h-screen z-50
                    transition-all duration-300 ease-in-out border-l border-neutral-200 dark:border-neutral-800
                    ${IsOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                `}
            >
                <section 
                    ref={MenuRef}
                    className={`w-1/2 dark:bg-black bg-white
                    ${IsOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
                    {/* -------- Header -------- */}
                    <div className='border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between p-3.5'>
                        <ModeToggle />
                        <span 
                            onClick={() => setIsOpen(false)} 
                            className='border border-neutral-700 dark:border-neutral-400 dark:text-neutral-400 dark:hover:border-neutral-700 hover:border-neutral-400 p-0.5 rounded-full text-neutral-700 hover:text-neutral-400'
                        >
                            <X size={14} className="cursor-pointer transition-all duration-200" />
                        </span>
                    </div>
                    {/* -------- Body --------- */}
                    <div>
                        <ul className="flex flex-col items-center justify-center">
                            {Header_Navigation_Links.map((link, index) => (
                                <a
                                    key={index}
                                    href={"#" + (link.href.startsWith("/") ? link.href.slice(1) : link.href)}
                                    className="text-sm w-full flex justify-center
                                        text-neutral-700 dark:text-neutral-300 
                                        hover:text-primary-500 dark:hover:text-primary-400 
                                        transition-colors duration-200 px-4 py-2 border-b
                                        border-neutral-200 dark:border-neutral-800
                                        hover:bg-neutral-100 dark:hover:bg-neutral-900/30"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </main>
    )
}
