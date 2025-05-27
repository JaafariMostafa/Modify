import React from 'react'
import FeaturedProduct from './CradsUI/FeaturedProduct'
import SectionTitle from './SectionTitle';
import { getTranslations } from 'next-intl/server';


const FakeProductData = [
    {
        id: 1,
        title: "Modern Wooden Chair",
        price: 120,
        image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
        styles: 'lg:-rotate-[20deg] lg:translate-x-40 lg:translate-y-10 lg:scale-75 lg:z-10 lg:group-hover:scale-100 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0 lg:group-hover:-rotate-0 lg:transition-transform lg:duration-500 lg:ease-in-out',
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
        styles: 'lg:rotate-[20deg] lg:-translate-x-40 lg:translate-y-10 lg:scale-75 lg:z-10 lg:group-hover:scale-100 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0 lg:group-hover:-rotate-0 lg:transition-transform lg:duration-500 lg:ease-in-out',
    }
];
export default async function FeaturedProducts() {
    const t = await getTranslations('featured_products');
  return (
    <main id="featuredproducts" className='lg:px-20 md:px-12 px-6 py-20'>
        <SectionTitle 
            PrimaryTitle={t('primary_title')}
            SecondaryTitle={t('secondary_title')}
            ButtonContent={t('view_all_button')}
        />
        <section className='group grid place-items-center lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
            {FakeProductData.map((product) => {
                return (
                    <FeaturedProduct
                        key={product.id}
                        ProductImage={product.image}
                        ProductTitle={product.title}
                        Card_BTN_Text={t('customize_your_product')}
                        ProductPrice={product.price}
                        CLASSNAME={product.styles}
                    />
                )
            })}
        </section>
    </main>
  )
}
