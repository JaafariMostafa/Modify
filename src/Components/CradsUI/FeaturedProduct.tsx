'use client';

import { Star, Bookmark, PenTool } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface FeaturedProductCardProps {
    ProductImage: string;
    ProductTitle: string;
    ProductPrice: number;
    Card_BTN_Text: string;
    CLASSNAME?: string;
    RegularPrice: number;
    isBestSeller: boolean;
    description?: string;
    rating?: number;
    category: string;
}

export default function FeaturedProductCard({
    ProductImage,
    ProductTitle,
    ProductPrice,
    CLASSNAME,
    RegularPrice,
    isBestSeller = false,
    rating,
    category,
}: FeaturedProductCardProps) {
    const t = useTranslations('featured_products')
    return (
        <main className={`relative w-full max-w-[400px] 
            bg-gradient-to-br from-white via-neutral-50 to-neutral-100 
            dark:bg-gradient-to-br dark:from-neutral-900 dark:via-neutral-800 dark:to-black
            rounded-xl overflow-hidden shadow-xl 
            dark:shadow-2xl dark:shadow-neutral-500/10
            border border-neutral-200/50 dark:border-neutral-700/50
            backdrop-blur-sm
            hover:shadow-2xl dark:hover:shadow-neutral-500/20
            transition-all duration-300 ease-out
            ${CLASSNAME}`}>
            
            {/* Luxury Background Pattern/Overlay - Dark Mode Only */}
            <div 
                className="absolute inset-0 bg-gradient-to-br
                
                dark:from-black dark:via-neutral-900 dark:to-black"></div>
            
            <div className="relative w-full h-64 overflow-hidden">
                <Image
                    src={ProductImage}
                    alt={ProductTitle}
                    fill
                    className="object-cover 
                        transition-transform duration-500 ease-out
                        hover:scale-105"
                />
                
                {/* Luxury Gradient Overlay on Image */}
                <div className="absolute inset-0 
                    bg-gradient-to-t from-black/20 via-transparent to-transparent
                    dark:from-black/40"></div>
                
                {/* Bookmark Icon */}
                <button className="absolute top-4 right-4 w-12 h-12 
                    bg-white/80 dark:bg-black/60 backdrop-blur-md 
                    rounded-full flex items-center justify-center 
                    hover:bg-white dark:hover:bg-black/80
                    transition-all duration-300 ease-out
                    shadow-lg dark:shadow-purple-500/20
                    border border-white/20 dark:border-purple-500/20
                    group">
                    <Bookmark size={20} className="text-gray-700 dark:text-white
                        group-hover:scale-110 transition-transform duration-200" />
                </button>

                {/* Best Seller Badge */}
                {isBestSeller && (
                    <div className="absolute top-4 left-4 
                        bg-transparent text-neutral-700
                        dark:bg-gradient-to-r dark:from-black dark:to-neutral-800
                        dark:text-white text-sm px-3 py-1.5 
                        rounded-full flex items-center gap-1.5 
                        shadow-lg backdrop-blur-sm
                        border border-neutral-300 dark:border-neutral-800">
                        <Star size={14} className="fill-current" />
                        Best Seller
                    </div>
                )}
            </div>

            {/* Product Info */}
            <div className="relative p-6 space-y-4">
                {/* Title and Category */}
                <div className="flex flex-col gap-1">
                    <h2 className="text-neutral-900 dark:text-white text-xl font-bold 
                        bg-gradient-to-r from-neutral-900 to-neutral-700
                        dark:from-white dark:to-neutral-200
                        bg-clip-text text-transparent">
                        {ProductTitle}
                    </h2>
                    <span className="text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10 px-3 py-1 rounded-full w-fit border border-purple-200 dark:border-purple-500/20">
                        {category}
                    </span>
                </div>

                {/* Price and Rating */}
                <div className="flex items-center justify-between">
                    <div>
                        <div className="flex items-end gap-2">
                            <span className="text-lg font-bold text-green-600 dark:text-green-400">
                                ${ProductPrice.toFixed(2)}
                            </span>
                            <span className="text-sm line-through text-gray-400">
                                ${RegularPrice.toFixed(2)}
                            </span>
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                            Sale Price
                        </div>
                    </div>
                    {typeof rating === 'number' && (
                        <div className="flex items-center gap-1">
                            <Star size={16} className="text-yellow-400 fill-current" />
                            <span className="font-semibold text-gray-800 dark:text-white">{rating}</span>
                        </div>
                    )}
                </div>

                {/* Action Button */}
                <Link 
                    href='/'
                    className='text-white 
                        bg-purple-600 dark:bg-black 
                        hover:bg-purple-700 dark:hover:bg-neutral-900
                        transition-colors duration-300 ease-in-out border 
                        dark:border-neutral-800 border-neutral-300
                        px-6 py-3 rounded-full shadow-lg
                        flex items-center justify-center gap-2'>
                    {t('customize_your_product')} <PenTool size={20}/>
                </Link>
            </div>
        </main>
    );
}
