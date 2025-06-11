import React from 'react';
import ProductDetails from './ProductDetails';

type PageProps = {
    params: Promise<{
        pageid: string;
        productdetails: string;
    }>;
};

export default async function Page({ params }: PageProps) {
    const { productdetails: PRODUCT_DETAILS } = await params;

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