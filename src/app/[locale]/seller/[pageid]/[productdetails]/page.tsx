import React from 'react';
import ProductDetails from './ProductDetails';

type PageProps = {
  params: {
    productdetails: {
      PRODUCT_DETAILS: string;
    };
  };
};

export default async function Page({ params }: PageProps) {
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
