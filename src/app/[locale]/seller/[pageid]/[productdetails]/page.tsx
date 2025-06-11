import React from 'react';
import ProductDetails from './ProductDetails';

export default async function Page({ params }) {
  const { PRODUCT_DETAILS } = params.productdetails;

  switch (PRODUCT_DETAILS) {
    case 'products':
      return (
        <div>
          <ProductDetails />
        </div>
      );
    default:
      return (
        <div>
          Sorry {PRODUCT_DETAILS} not found
        </div>
      );
  }
}
