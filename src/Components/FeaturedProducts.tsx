import React from 'react'
import FeaturedProduct from './CradsUI/FeaturedProduct'


const FakeProductData = [
    {
        id: 1,
        title: "Modern Wooden Chair",
        price: 120,
        image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
        styles: '-rotate-[20deg] translate-x-40 translate-y-10 scale-75 z-10 group-hover:scale-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:-rotate-0 transition-transform duration-500 ease-in-out',
    },
    {
        id: 2,
        title: "Minimalist Table Lamp",
        price: 80,
        image: "https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg",
        styles: 'z-20',
    },
    {
        id: 3,
        title: "Cozy Fabric Sofa",
        price: 350,
        image: "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg",
        styles: 'rotate-[20deg] -translate-x-40 translate-y-10 scale-75 z-10 group-hover:scale-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:-rotate-0 transition-transform duration-500 ease-in-out',
    }
];
export default function FeaturedProducts() {
  return (
    <main className='lg:px-20 md:px-12 px-6 py-20'>
        <section className='group grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
            {FakeProductData.map((product) => {
                return (
                    <FeaturedProduct
                    key={product.id}
                    ProductImage={product.image}
                    ProductTitle={product.title}
                    ProductPrice={product.price}
                    CLASSNAME={product.styles}
                    />
                )
            })}
        </section>
    </main>
  )
}
