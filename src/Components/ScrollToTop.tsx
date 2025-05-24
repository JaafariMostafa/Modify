'use client';
import { ArrowUp } from 'lucide-react';
import React, { useEffect, useState } from 'react'

export default function ScrollToTop() {
    const [ShowScrollToTop, setShowScrollToTop] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollToTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[])
    return (
        <>
            {ShowScrollToTop && (
                <div className='p-1 rounded-full bg-neutral-800
                    fixed bottom-4 right-4 z-50 cursor-pointer hover:bg-neutral-600 dark:hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors duration-200'
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <ArrowUp size={20} />
                </div>
            )}
        </>
);
}
