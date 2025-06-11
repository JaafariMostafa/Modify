import React from 'react';
import ProductDetails from './ProductDetails';

export default async function Page({ params }) {
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
