import React from 'react';
import ProductDetails from './ProductDetails';


interface ParamsType {
  pageid: string;
}

export default async function page({ params }: { params: ParamsType }) {
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