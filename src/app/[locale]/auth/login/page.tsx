import React from 'react'
import LoginForm from './LoginForm'
import Image from 'next/image'


export default function page() {
  return (
    <main>
      <section className='w-full lg:flex justify-center md:flex block'>
        <LoginForm />
        <div className='relative lg:block hidden flex-shrink-0 w-1/2 h-screen overflow-hidden rounded-lg'>
          <Image
            src='/LoginBg.jpg'
            fill
            alt=''
            className='object-cover'
            />
        </div>
      </section>
    </main>
  )
}
