import React from 'react'
import FeaturedProduct from './CradsUI/FeaturedProduct'
import SectionTitle from './SectionTitle';
import { getTranslations } from 'next-intl/server';


const FakeProductData = [
    {
        id: 1,
        ProductImage: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg",
        ProductTitle: "Brand Designer",
        ProductPrice: 75,
        RegularPrice: 100,
        Card_BTN_Text: "Get In Touch",
        isBestSeller: true,
        name: "Sarah Mitchell",
        description: "I'm a Brand Designer who specializes in creating memorable visual identities for startups and established brands.",
        rating: 4.9,
        earned: "$65k+",
        hourlyRate: "$75/hr",
        isVerified: true,
        category: "Design",
        styles: 'lg:-rotate-[20deg] lg:translate-x-40 lg:translate-y-10 lg:scale-75 lg:z-10 lg:group-hover:scale-100 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0 lg:group-hover:-rotate-0 lg:transition-transform lg:duration-500 lg:ease-in-out',
    },
    {
        id: 2,
        ProductImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
        ProductTitle: "UX/UI Designer",
        ProductPrice: 90,
        RegularPrice: 120,
        Card_BTN_Text: "Hire Me",
        isBestSeller: false,
        name: "Marcus Chen",
        description: "I'm a UX/UI Designer focused on creating intuitive digital experiences that solve real user problems.",
        rating: 4.8,
        earned: "$80k+",
        hourlyRate: "$90/hr",
        isVerified: true,
        category: "UX/UI",
        styles: 'z-20',
    },
    {
        id: 3,
        ProductImage: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
        ProductTitle: "Frontend Developer",
        ProductPrice: 85,
        RegularPrice: 110,
        Card_BTN_Text: "Contact",
        isBestSeller: true,
        name: "Emma Rodriguez",
        description: "I'm a Frontend Developer who builds responsive, performant web applications using modern frameworks and best practices.",
        rating: 4.7,
        earned: "$72k+",
        hourlyRate: "$85/hr",
        isVerified: true,
        category: "Development",
        styles: 'lg:rotate-[20deg] lg:-translate-x-40 lg:translate-y-10 lg:scale-75 lg:z-10 lg:group-hover:scale-100 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0 lg:group-hover:-rotate-0 lg:transition-transform lg:duration-500 lg:ease-in-out',
    },
];
export default async function FeaturedProducts() {
    const t = await getTranslations('featured_products');
  return (
    <main 
        id="featuredproducts" 
        className='lg:px-20 md:px-12 px-6 py-20'>
        <SectionTitle 
            PrimaryTitle={t('primary_title')}
            SecondaryTitle={t('secondary_title')}
            ButtonContent={t('view_all_button')}
        />
        <section 
            className='group grid place-items-center 
                lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-4'>
            {FakeProductData.map((product) => {
                return (
                    <FeaturedProduct
                        key={product.id}
                        ProductImage={product.ProductImage}
                        ProductTitle={product.ProductTitle}
                        ProductPrice={product.ProductPrice}
                        RegularPrice={product.RegularPrice}
                        Card_BTN_Text={product.Card_BTN_Text}
                        isBestSeller={product.isBestSeller}
                        description={product.description}
                        category={product.category}
                        rating={product.rating}
                        CLASSNAME={product.styles}
                    />
                )
            })}
        </section>
    </main>
  )
}
