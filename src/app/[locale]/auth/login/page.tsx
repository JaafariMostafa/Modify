import React from 'react'
import LoginForm from './LoginForm'
import Image from 'next/image'


export default function page() {
  return (
    <main>
      <section className='w-full flex'>
        <LoginForm />
        <div className='relative flex-shrink-0 w-1/2 h-screen overflow-hidden rounded-lg'>
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
