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
    <main className={`w-full p-1 bg-black/50 border border-neutral-800 rounded-2xl
    ${CLASSNAME}`}>
        <div className='relative w-full h-[30vh] shadow-lg border border-neutral-400 rounded-2xl overflow-hidden'>
            <Image 
                src={ProductImage}
                alt="Product Image"
                fill
                className="object-cover"
            />
        </div>
        <div className='p-2 space-y-2'>
            <h1 className='text-xl font-semibold text-neutral-400'>
                {ProductTitle}
            </h1>
            <div className='flex items-center justify-between'>
                <ins className='no-underline text-xl'>{ProductPrice}$</ins>
                <button className='px-6 py-2 border border-neutral-800 hover:text-neutral-300 hover:bg-black/30 rounded-2xl'>
                    Customize Now
                </button>
            </div>
        </div>
    </main>
  )
}
