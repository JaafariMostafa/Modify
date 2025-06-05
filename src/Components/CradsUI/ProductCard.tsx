'use client';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'
import LoadingImage from './LoadingImage';
import Link from 'next/link';

interface ProductCardProps {
    ProductImages: string[];
    ProductTitle: string;
    ProductColors: string[];
    ProductPrice: number;
    ProductId: string;
}
export default function ProductCard({ 
    ProductImages, 
    ProductTitle, 
    ProductColors, 
    ProductPrice,
    ProductId,
} : ProductCardProps ){
    const [CurrentImage, setCurrentImage] = useState(0);
    const [IsLoadingImage, setIsLoadingImage] = useState(true);

    const HandlePrevImage = () => {
        setCurrentImage((prev) => {
            const nextIdx = (prev - 1 + ProductImages.length) % ProductImages.length;
            setIsLoadingImage(true);
            return nextIdx;
        });
    }
    const HandleNextImage = () => {
        setCurrentImage((prev) => {
            const nextIdx = (prev + 1) % ProductImages.length;
            setIsLoadingImage(true);
            return nextIdx;
        });
    }


    return (
        <main className='w-full min-h-10 p-1 rounded-lg dark:bg-neutral-900 border dark:border-neutral-800'>
            <div 
                className={`relative overflow-hidden w-full h-[200px] transition-all
                    rounded-lg flex items-center justify-center`}>
                {IsLoadingImage && <LoadingImage />}
                <Link href={`/seller/products/${ProductId}`}>
                    <Image 
                        src={ProductImages[CurrentImage]}
                        alt={ProductTitle}
                        fill
                        className={`object-cover transition-opacity duration-300 ${IsLoadingImage ? 'opacity-0' : 'opacity-100'}`}
                        onLoad={() => setIsLoadingImage(false)}
                        priority
                        />
                </Link>
            </div>
            <span className='w-full flex justify-center items-center gap-2 text-sm text-neutral-500 dark:text-neutral-600 p-2'>
                <ArrowLeft 
                    onClick={HandlePrevImage} 
                    className='cursor-pointer dark:hover:text-white' 
                    size={16}
                />
                {CurrentImage + 1} of {ProductImages.length} 
                <ArrowRight 
                    onClick={HandleNextImage} 
                    className='cursor-pointer dark:hover:text-white' 
                    size={16}
                />
            </span>
            <div className="px-2 py-1">
                <h2 className="font-semibold text-lg mb-1 text-neutral-800 dark:text-white">{ProductTitle}</h2>
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">Colors:</span>
                    {ProductColors.map((color, idx) => (
                        <span
                            key={idx}
                            className="w-4 h-4 rounded-full border border-neutral-300 inline-block"
                            style={{ backgroundColor: color }}
                            title={color}
                        />
                    ))}
                </div>
                <div className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                    ${ProductPrice.toFixed(2)}
                </div>
            </div>
        </main>
    )
}
