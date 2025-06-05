import { Star } from 'lucide-react';
import Image from 'next/image'
import React from 'react'

interface ProductCardTyes{
    ProductImage: string;
    ProductTitle: string;
    ProductPrice: number;
    Card_BTN_Text: string;
    CLASSNAME?: string;
    RegularPrice: number;
    isBestSeller: boolean; // Add this prop if you want to control it from parent
}

export default function FeaturedProduct({
    ProductImage,
    ProductTitle,
    ProductPrice,
    Card_BTN_Text,
    CLASSNAME,
    RegularPrice,
    isBestSeller = false // Default to false
}: ProductCardTyes) {
    const hasDiscount = RegularPrice && RegularPrice > ProductPrice;
    const discountPercent = hasDiscount
        ? Math.round(((RegularPrice - ProductPrice) / RegularPrice) * 100)
        : 0;

    return (
        <main 
            className={`w-full max-w-[500px] p-1 bg-gray-100
                shadow-lg dark:bg-neutral-900
                rounded ${CLASSNAME}`}>
            <div className='relative w-full h-[30vh] shadow-lg rounded overflow-hidden'>
                {isBestSeller && (
                    <span 
                        className="absolute top-2 left-2 z-10 
                            bg-neutral-900 text-xs font-bold 
                            p-1 rounded flex items-center gap-1 shadow">
                        <Star size={16} /> Best Seller
                    </span>
                )}
                <Image
                    src={ProductImage}
                    alt="Product Image"
                    fill
                    className="object-cover"
                />
            </div>
            <div className='p-2 space-y-2'>
                <h1 className='font-semibold dark:text-neutral-300 text-neutral-600'>
                    {ProductTitle}
                </h1>
                <div className='flex items-center justify-between'>
                    <div className="flex items-center space-x-2">
                        <ins className='dark:text-neutral-300 no-underline text-xl text-neutral-500'>
                            {ProductPrice}$
                        </ins>
                        {hasDiscount && (
                            <>
                                <del className="text-neutral-400 dark:text-neutral-500 text-base">
                                    {RegularPrice}$
                                </del>
                                <span className="bg-green-500/20 px-1 rounded text-green-600 text-sm font-semibold">
                                    -{discountPercent}%
                                </span>
                            </>
                        )}
                    </div>
                    <button 
                        className='px-6 py-2 border border-neutral-300
                        text-neutral-700 dark:text-neutral-500
                        hover:bg-[#892CDC]/10 dark:hover:bg-neutral-800 rounded-2xl dark:border-neutral-800'>
                        {Card_BTN_Text}
                    </button>
                </div>
            </div>
        </main>
    )
}
