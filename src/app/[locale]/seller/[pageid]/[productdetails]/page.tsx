import React from 'react';
import ProductDetails from './ProductDetails';

interface ParamsType {
  pageid: string;
  productdetails: string;
  locale: string;
}

// الطريقة الصحيحة لتعريف الـ props في app router
interface PageProps {
  params: ParamsType;
}

export default async function Page({ params }: PageProps) {
  const { pageid } = params;

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