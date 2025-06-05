import { ChevronRight } from 'lucide-react';
import { getLocale } from 'next-intl/server';
import Link from 'next/link';
import React from 'react';

type Props = {
  PrimaryTitle: string;
  SecondaryTitle: string;
  ButtonContent: string;
};

export default async function SectionTitle({ PrimaryTitle, SecondaryTitle, ButtonContent }: Props) {
    const locale = await getLocale();
    const IsArabic = locale === 'ar';
    const Rotate_Icon = IsArabic ? 'rotate-180' : '';
  return (
    <main dir={IsArabic ? 'rtl' : 'ltr'} className='w-full pb-10 flex justify-between items-start'>
      <div className='w-full pb-10 flex flex-col justify-start items-start'>
        <h1 className='font-bold lg:text-3xl md:text-3xl sm:text-2xl text-xl text-neutral-700 dark:text-neutral-300'>
          {PrimaryTitle}
        </h1>
        <span className='text-neutral-500 text-sm dark:text-[#D9ACF5]'>
          {SecondaryTitle}
        </span>
      </div>
      <Link
        href='/seller/products'
        className='text-nowrap text-xs text-[#892CDC]
          dark:text-neutral-400 hover:text-neutral-500
          dark:hover:text-[#D9ACF5] transition-colors 
          duration-200 py-1 border-b
          border-[#892CDC]/50 dark:border-neutral-800
          flex items-center gap-1'
      >
        {ButtonContent} <ChevronRight className={`${Rotate_Icon}`} size={14} />
      </Link>
    </main>
  );
}
