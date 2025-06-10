import React from 'react';
import ProductDetails from './ProductDetails';

interface PageProps {
  params: Promise<{
    locale: string;
    pageid: string;
  }>;
}

// Make it async just to be safe (even if no await)
export default async function page({ params }: PageProps) {
  const { pageid } = await params;
  
  switch (pageid) {
    case 'products':
      return (
        <div>
          <ProductDetails />
        </div>
      );
    default:
      return (
        <div>
          Sorry {pageid} not found
        </div>
      );
  }
}