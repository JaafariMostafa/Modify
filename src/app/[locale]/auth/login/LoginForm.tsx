'use client';
import { ModeToggle } from '@/app/ModeToggle';
import LanguageSwitcher from '@/Components/LanguageSwitcher';
import { Codesandbox } from 'lucide-react';
import React from 'react'
import { useLocale, useTranslations } from "next-intl";
import Link from 'next/link';


export default function LoginForm() {
    const t = useTranslations('login_page');
    const locale = useLocale();
    const IsArabic = locale === 'ar';
  return (
    <main className='p-16 w-full plex flex-col justify-center items-center'>
        <div className='fixed top-2 right-2 z-50 flex items-center gap-2'>
            <LanguageSwitcher />
            <ModeToggle />
        </div>
        <Link href='/' className='flex items-center gap-2 text-[#892CDC]'>
            <span className='p-1 rounded-full dark:bg-neutral-900 border 
            dark:border-neutral-800'>
                <Codesandbox size={22} />
                </span> 
                <h2 className='text-xl font-semibold'>
                    Modify
                </h2>
        </Link>
        <section className='p-10' dir={IsArabic ? "rtl" : "ltr"}>
            <div className={` ${IsArabic ? "space-y-4" : ""}`}>
                <h1 className='text-3xl font-semibold'>
                    {t('primary_title')} <span className='text-[#892CDC]'>{t('primary_title_marks')}</span>
                </h1>
                <p className='text-sm text-neutral-500'>
                    {t('secondary_title')}
                </p>
            </div>
            <form className='pt-8 space-y-4'>
                <div className={`flex flex-col items-start ${IsArabic && "gap-2"}`}>
                    <label 
                        htmlFor="Email" 
                        className='capitalize flex gap-1'>
                            {t('email_label')}
                            <span className='text-red-600'>
                                *
                            </span>
                    </label>
                    <input 
                        type="text" 
                        id='Email' 
                        placeholder={t('email_placeholder')}
                        className='w-full border dark:border-neutral-800 rounded-lg p-2 bg-transparent'
                        />
                </div>
                <div className={`flex flex-col items-start ${IsArabic && "gap-2"}`}>
                    <label 
                        htmlFor="Password"
                        className='capitalize flex gap-1'>
                            {t('password_label')}
                            <span className='text-red-600'>
                                *
                            </span>
                    </label>
                    <input 
                        type="password" 
                        id='Password' 
                        placeholder={t('password_placeholder')}
                        className='w-full border dark:border-neutral-800 rounded-lg p-2 bg-transparent'
                        />
                </div>
                <button 
                    type='submit'
                    className='w-full bg-black py-2 
                        rounded-lg hover:shadow-lg capitalize
                        dark:hover:bg-black/60 transition-colors'
                    >
                        {t('login_button')}
                    </button>
            </form>
            <div>
                <div className='w-full flex items-center gap-2'>
                    <span className='w-full border-t border-neutral-800'></span>
                    <span>{t('or')}</span>
                    <span className='w-full border-t border-neutral-800'></span>
                </div>
                <div>
                    <button
                        type="button"
                        className="w-full flex items-center justify-center gap-2 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg py-2 mt-4 hover:shadow transition-colors"
                    >
                        <img 
                        src='/GoogleIcon.png'
                        width={20}
                        />
                        {t('login_with_google_provider')}
                    </button>
                    {/* <button
                        type="button"
                        className="w-full flex items-center justify-center gap-2 bg-[#1877F2] text-white rounded-lg py-2 mt-4 hover:bg-[#145db2] transition-colors"
                    >
                        <img 
                        src='/FacebookIcon.png'
                        width={20}
                        className='bg-white rounded p-0.5'
                        />
                        Login with Facebook
                    </button> */}
                </div>
            </div>
        </section>
    </main>
  )
}
