'use client';
import { useEffect, useState } from "react";


export default function DashboardScreen() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Clamp scrollY to 100 for calculations
    const clampedScrollY = Math.min(scrollY, 100);

    // Interpolate values based on clampedScrollY
    const translateY = clampedScrollY * 0.2; // max 10px at scrollY=100
    const rotateY = -15 + (clampedScrollY / 100) * 15; // from -15deg to 0deg
    const rotateX = 40 - (clampedScrollY / 50) * 20; // from 20deg to 0deg

    const imageTransform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateY(${translateY}px)`;

    return (
        <div className="w-full p-4">
            <img
                src="/DashboardScreen.png"
                alt="Modify Dashboard"
                className="object-cover w-full h-full rounded-lg 
                    overflow-hidden border border-neutral-200 
                    dark:border-neutral-900
                    transition-transform duration-700 ease-in-out
                    shadow-xl"
                style={{
                    transform: imageTransform,
                }}
            />
        </div>
    );
}
