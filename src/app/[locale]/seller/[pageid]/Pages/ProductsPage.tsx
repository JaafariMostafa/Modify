import React from 'react'
import HeaderSeller from '../../SellerHeader'
import ProductCard from '@/Components/CradsUI/ProductCard'


const Fake_Products = [
  {
    id: "product-1",
    price: 115,
    title: "Modern Sneakers",
    colors: ["Black", "White", "Gray"],
    images: [
      "https://images.pexels.com/photos/19090/pexels-photo.jpg", // black
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg", // white
      "https://images.pexels.com/photos/2529149/pexels-photo-2529149.jpeg"  // gray
    ]
  },
  {
    id: "product-2",
    price: 255,
    title: "Casual Hoodie",
    colors: ["Red", "Blue", "Beige"],
    images: [
      "https://images.pexels.com/photos/7679726/pexels-photo-7679726.jpeg", // red
      "https://images.pexels.com/photos/7679730/pexels-photo-7679730.jpeg", // blue
      "https://images.pexels.com/photos/7679718/pexels-photo-7679718.jpeg"  // beige
    ]
  },
  {
    id: "product-3",
    price: 300,
    title: "Comfy T-Shirt",
    colors: ["Green", "Black", "Brown"],
    images: [
      "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg", // green
      "https://images.pexels.com/photos/6311390/pexels-photo-6311390.jpeg", // black
      "https://images.pexels.com/photos/6311388/pexels-photo-6311388.jpeg"  // brown
    ]
  }
];

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
