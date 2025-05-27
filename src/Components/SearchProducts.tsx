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
            className="flex cursor-pointer p-2 rounded-full 
                hover:bg-gray-100 dark:hover:bg-neutral-900 
                transition-colors duration-200 border 
                dark:border-neutral-800">
            <Search 
                className="w-5 h-5 text-neutral-500 dark:text-gray-400"
                onClick={() => setIsOpen(!IsOpen)} size={20} />
        </span>
        {IsOpen && (
            <section 
                className='absolute top-0 left-0 z-50 w-full h-screen 
                    bg-black/80 flex items-center justify-center'>
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
