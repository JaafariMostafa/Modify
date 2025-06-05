'use client';
import React, { useState } from 'react';
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Fake_Products } from '../../FakeProductsData';
import LanguageSwitcher from '@/Components/LanguageSwitcher';
import { ModeToggle } from '@/app/ModeToggle';
import { CheckCircleIcon } from 'lucide-react';
import ProductCard from '@/Components/CradsUI/ProductCard';

export default function ProductDetails_Images() {
    const pathname = usePathname();
    const params = useParams();
    const ProductId = params?.productdetails;
    const segments = pathname.split('/').filter(Boolean);
    const RemoveLocaleLanguage = segments.slice(1, segments.length);
    // Build breadcrumb items with links
    const breadcrumbs = RemoveLocaleLanguage.map((segment, idx) => {
        const href = '/' + segments.slice(1, idx + 2).join('/');
        // Capitalize segment for display
        const label = decodeURIComponent(segment.charAt(0).toUpperCase() + segment.slice(1));
        return (
            <span 
                key={href}
                className={`text-sm lowercase ${idx === segments.length - 2 ? 'dark:text-neutral-200 text-neutral-800 font-semibold' : 'dark:hover:text-neutral-400 text-neutral-400'} flex items-center`}>
                <Link 
                    href={href}>
                        {label}
                </Link>
                    {idx < segments.length - 2 && (
                        <span 
                            className="mx-2 text-gray-400" 
                            aria-hidden="true">
                            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                    )}
            </span>
        );
    });
    const Selected_Product = Fake_Products.find((product) => product.id === ProductId);
    const [CurrentPrimaryImage, setCurrentPrimaryImage] = useState(0);
    
    return (
        <main>
            <header className='w-full border-b pb-2 dark:border-neutral-800 flex justify-between items-center'>
                <nav 
                    aria-label="breadcrumb"
                    className='w-max flex border dark:border-neutral-800 
                    py-0.5 px-4 rounded '>
                    {breadcrumbs}
                </nav>
                <div className='flex items-center gap-2'>
                    <LanguageSwitcher />
                    <ModeToggle />
                </div>
            </header>
            <section className='w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 py-8'>
                <div>
                    <div 
                        className='relative rounded-t-lg overflow-hidden 
                            w-full h-[60vh]'>
                        <Image 
                            src={Selected_Product?.images[CurrentPrimaryImage] || ''}
                            alt=''
                            fill
                            className='object-cover object-center'
                        />
                    </div>
                    <div className='w-full grid grid-cols-4 gap-2'>
                        {Selected_Product?.images.map((image, index) => (
                            <div 
                                onClick={() => setCurrentPrimaryImage(index)}
                                key={index} 
                                className={`relative rounded-b-lg overflow-hidden 
                                    w-full h-24 mt-2 cursor-pointer
                                    ${CurrentPrimaryImage === index ? 'border border-violet-600' : ''}`}>
                                <Image 
                                    src={image}
                                    alt={`Product Image ${index + 1}`}
                                    fill
                                    className='object-cover object-center'
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div 
                    className="relative shadow border dark:border-neutral-900 
                    rounded-lg p-6 flex flex-col gap-6 shadow-md">
                    <h1 className="text-3xl font-bold text-violet-700 dark:text-violet-400 mb-2">
                        {Selected_Product?.title}
                    </h1>
                    <div className="flex items-center gap-4">
                        <span className="text-xl font-semibold text-neutral-700 dark:text-neutral-200">
                            ${Selected_Product?.price}
                        </span>
                        {Selected_Product?.discount && (
                            <span className="text-sm bg-violet-100 dark:bg-violet-800 text-violet-700 dark:text-violet-200 px-2 py-1 rounded">
                                {Selected_Product.discount}% OFF
                            </span>
                        )}
                        <span className="ml-auto text-sm text-neutral-500 dark:text-neutral-400">
                            In stock: {Selected_Product?.stock}
                        </span>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-300 text-base leading-relaxed">
                        {Selected_Product?.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {Selected_Product?.tags?.map((tag: string) => (
                            <span
                                key={tag}
                                className="bg-violet-50 dark:bg-violet-900 text-violet-700 dark:text-violet-200 px-3 py-1 rounded-full text-xs font-medium"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                    <div 
                        className="absolute mt-5 left-0 bottom-4 
                            px-4 w-full flex 
                            justify-center">
                        <div 
                            className='w-full space-y-4 bg-violet-600/10 p-4 
                                border border-violet-400 dark:border-violet-600/40 
                                rounded-lg'>
                            <div className='text-violet-500 space-y-4'>
                                <p className='text-sm'>
                                    Get the best price and quality on every order 
                                    with <ins className='flex items-end gap-1 text-xl font-semibold'>Modify <span className='text-sm'>Choice.</span></ins>
                                </p>
                                <ul>
                                    <li className='flex items-center gap-2 text-sm'>
                                        <CheckCircleIcon size={16} /> 100% <span className='text-xl font-semibold'>Cotton.</span>
                                    </li>
                                    <li className='flex items-center gap-2 text-sm'>
                                        <CheckCircleIcon size={16} /> Fast <span className='text-xl font-semibold'>Delivery.</span>
                                    </li>
                                </ul>
                            </div>
                            <button
                                className="w-full h-max bg-violet-700 
                                    hover:bg-violet-800 text-white 
                                    font-semibold py-2 rounded-lg 
                                    transition-colors">
                                Customize Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='my-10'>
                <div className='flex items-center gap-4'>
                    <h1 className='text-2xl text-nowrap font-semibold text-neutral-800 dark:text-neutral-200'>
                        Frequently sold together
                    </h1> <hr className='border-neutral-200 dark:border-neutral-800 w-full'/>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mt-6'>
                    {Fake_Products.map((product, index) => {
                        return (
                            <ProductCard
                                key={index}
                                ProductColors={product.colors}
                                ProductId={product.id}
                                ProductPrice={product.price}
                                ProductImages={product.images}
                                ProductTitle={product.title}
                            />
                        )
                    })}
                </div>
            </section>
        </main>
    );
}
