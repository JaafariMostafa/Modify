import React from 'react'
import HeaderSeller from '../../SellerHeader'
import ProductCard from '@/Components/CradsUI/ProductCard'
import { Fake_Products } from '../../FakeProductsData'


export default function ProductsPage() {
  return (
    <main className='w-full min-h-screen rounded-lg dark:bg-neutral-900 border dark:border-neutral-800'>
        <HeaderSeller />
        <section 
            className='w-full grid lg:grid-cols-3 md:grid-cols-3 
                sm:grid-cols-2 grid-cols-1 gap-2 p-4'>
                    {Fake_Products.map((product, index) => {
                        return (
                            <ProductCard
                                key={index}
                                ProductColors={product.colors}
                                ProductId={product.id}
                                ProductImages={product.images}
                                ProductTitle={product.title}
                                ProductPrice={product.price}
                            />
                        )
                    })}
        </section>
    </main>
  )
}
