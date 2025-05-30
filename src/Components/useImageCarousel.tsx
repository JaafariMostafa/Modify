'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageCarousel() {
    const images: string[] = [
        "https://images.pexels.com/photos/15127553/pexels-photo-15127553/free-photo-of-a-man-in-a-white-hoodie-and-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/26447865/pexels-photo-26447865/free-photo-of-man-standing-in-t-shirt-and-cap.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3399996/pexels-photo-3399996.jpeg?auto=compress&cs=tinysrgb&w=600"
    ];

    function useImageCarousel(imgs: string[], interval = 10000) {
        const [index, setIndex] = useState(0);
        useEffect(() => {
            const timer = setInterval(() => {
                setIndex((prev) => (prev + 1) % imgs.length);
            }, interval);
            return () => clearInterval(timer);
        }, [imgs, interval]);
        return imgs[index];
    }

    const currentImage = useImageCarousel(images);
    return (
        <div className="lg:block md:block sm:block hidden w-[400px] h-[60vh] shadow relative overflow-hidden rounded-lg">
            {/* Product Image */}
            <Image 
                src={currentImage}
                alt="Product"
                fill
                className="object-cover Fade-In-Image"
                key={currentImage}
            />
        </div>
);
}