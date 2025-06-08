'use client';
import { useTheme } from "next-themes";
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
    const translateY = clampedScrollY * 0; // max 10px at scrollY=100
    const rotateY = -15 + (clampedScrollY / 100) * 15; // from -15deg to 0deg
    const rotateX = 40 - (clampedScrollY / 50) * 20; // from 20deg to 0deg

    const imageTransform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateY(${translateY}px)`;

    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Fix for hydration mismatch (next-themes only works after mount)
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // or a loader

    const imageSrc =
        theme === 'dark'
        ? '/DashboardScreenDark.png'
        : '/DashboardScreenLight.png';
    return (
        <div className="w-full Test-Pattern p-14 lg:px-20 md:px-12 px-6">
            <img
                src={imageSrc}
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
