'use client';
import { ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
    const images = [
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
        <main className="w-full min-h-80 lg:px-20 md:px-12 px-6 pb-6 pt-12">
            <section className="w-full flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
                {/* Left: Text Content */}
                <div className="flex-1 flex flex-col items-start lg:items-start space-y-4">
                    <span
                        className="flex items-center gap-2 px-4 py-1 border-[#892CDC] 
                            text-[#892CDC] rounded-full text-sm 
                            w-max border">
                        <Star size={20} className="text-[#892CDC] fill-[#892CDC]" /> Premium Print On Demand
                    </span>
                    <h1
                        className="text-5xl md:text-6xl lg:text-7xl primary-color font-bold leading-12 
                            py-4 text-left lg:w-3/4 dark:text-white Fade-In">
                        Turn ideas into thriving <span className="text-[#892CDC]">Brands!</span>
                    </h1>
                    <p className="text-xl text-left dark:text-white text-neutral-600">
                        No stock. No capital. No experience needed. <br />
                        <span className="text-sm dark:text-neutral-400">
                            With Modify.ma, you&apos;ll have a powerful partner in branding, technology, and innovation.
                        </span>
                    </p>
                    <div className="py-6 flex flex-col items-center w-full lg:flex-row md:flex-row sm:flex-row gap-2 items-center Fade-In">
                        <button
                            className="flex bg-[#892CDC] hover:bg-[#892CDC]/90
                                transition-all duration-200 items-center gap-2 
                                py-2 px-6 rounded-lg text-white border border-[#892CDC]">
                            Start Today! <ArrowUpRight size={20} />
                        </button>
                        <button
                            className="flex bg-black/10 hover:bg-[#892CDC]/30 dark:bg-neutral-900 dark:hover:bg-neutral-900/10 
                                transition-all duration-200 items-center gap-2 py-2 text-[#892CDC] dark:text-neutral-300
                                px-6 rounded-lg border border-[#892CDC] dark:border-neutral-800">
                            How it works ? <ArrowUpRight size={20} />
                        </button>
                    </div>
                </div>
                {/* Right: Product Image */}

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
            </section>
        </main>
    );
}