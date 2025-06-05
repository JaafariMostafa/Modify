import React from 'react';
import ProductDetails from './ProductDetails';

type PageProps = {
  params: {
    pageid: string;
    productdetails: string;
  };
};

// Make it async just to be safe (even if no await)
export default async function Page({ params }: PageProps) {
  switch (params.pageid) {
    case 'products':
      return (
        <div>
          <ProductDetails />
        </div>
      );
    default:
      return (
        <section 
          className='flex gap-2 items-center justify-center w-full h-screen text-2xl font-bold text-neutral-500 dark:text-neutral-400'>
          Sorry <span className='dark:text-neutral-200'>&quot;{params.productdetails}&quot;</span> not found
        </section>
      );
  }
}
