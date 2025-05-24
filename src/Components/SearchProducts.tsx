'use client';
import { Search, X } from 'lucide-react'
import React from 'react'

export default function SearchProducts() {
    const [IsOpen, setIsOpen] = React.useState(false);
    const SearchRef = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (SearchRef.current && !SearchRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
  return (
    <main>
        <span 
            className="flex border border-neutral-600 dark:hover:border-white
                text-neutral-700 hover:text-black dark:text-neutral-400 dark:hover:text-white cursor-pointer rounded-full p-1">
            <Search onClick={() => setIsOpen(!IsOpen)} size={20} />
        </span>
        {IsOpen && (
            <section 
                className='absolute top-0 left-0 z-50 w-full h-screen 
                    bg-black/50 flex items-center justify-center'>
                <section 
                    ref={SearchRef}
                    className='min-w-[400px] w-1/2 min-h-50 rounded-lg
                        bg-neutral-800 dark:bg-black border border-neutral-400 dark:border-neutral-800'>
                    <div className='border-b dark:border-neutral-800 border-neutral-400 p-3 flex items-center gap-2'>
                        <Search size={20} className="text-neutral-500"/>
                        <input 
                            className='px-2 grow bg-transparent border-none outline-none placeholder:text-neutral-600 placeholder:text-sm'
                            type="text" 
                            name="" 
                            id=""
                            placeholder='Search for products, categories, brands...'
                            onFocus={() => setIsOpen(true)}
                        />
                        <X size={16} className='cursor-pointer hover:text-neutral-500' />
                    </div>
                    test 
                </section>
            </section>
        )}
    </main>
  )
}
