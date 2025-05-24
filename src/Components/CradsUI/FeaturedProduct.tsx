import Image from 'next/image'
import React from 'react'


interface ProductCardTyes{
    ProductImage: string;
    ProductTitle: string;
    ProductPrice: number;
    CLASSNAME?: string;
}
export default function FeaturedProduct({ProductImage, ProductTitle, ProductPrice, CLASSNAME}:ProductCardTyes) {
  return (
    <main className={`w-full max-w-[500px] p-1 bg-gray-100
        dark:bg-black border border-neutral-300 shadow-lg
        dark:border-neutral-800 rounded-2xl ${CLASSNAME}`}>
        <div className='relative w-full h-[30vh] shadow-lg border 
            border-neutral-400 rounded-2xl overflow-hidden'>
            <Image 
                src={ProductImage}
                alt="Product Image"
                fill
                className="object-cover"
            />
        </div>
        <div className='p-2 space-y-2'>
            <h1 className='text-xl font-semibold 
                dark:text-neutral-400 dark:text-[#892CDC] 
                text-neutral-600'>
                {ProductTitle}
            </h1>
            <div className='flex items-center justify-between'>
                <ins className='no-underline text-xl 
                    dark:text-neutral-300 text-neutral-500'>
                        {ProductPrice}$
                </ins>
                <button 
                    className='px-6 py-2 border border-neutral-300 dark:border-neutral-800 
                    dark:hover:text-neutral-300 text-neutral-700 dark:hover:bg-black/30 
                    hover:bg-[#892CDC]/10 rounded-2xl'>
                    Customize Now
                </button>
            </div>
        </div>
    </main>
  )
}
