'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState, useCallback } from 'react';
interface CSRCTAButtonProps {
    SESSION: boolean | null;
    LABEL: React.ReactNode;
}
export default function CSRCTAButton({ SESSION, LABEL } : CSRCTAButtonProps) {
    const pathname = usePathname();
    const [CurrentPath, setCurrentPath] = useState(pathname);
    const [IsLoadingBtn, setIsLoadingBtn] = useState(false);

    useEffect(() => {
        if (pathname !== CurrentPath) {
            setCurrentPath(pathname);
            setIsLoadingBtn(false); // Stop loading when route changes
        }
    }, [pathname, CurrentPath]);

    const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (IsLoadingBtn) {
            e.preventDefault();
            return;
        }
        setIsLoadingBtn(true);
    }, [IsLoadingBtn]);

    return (
        <Link
            href={SESSION ? '/seller' : '/auth/login'}
            className={`flex justify-between bg-[#892CDC] hover:bg-[#892CDC]/90
                transition-all duration-200 items-center gap-2 
                py-2 min-w-48 px-6 rounded-lg text-white border border-[#892CDC]
                ${IsLoadingBtn ? 'cursor-not-allowed opacity-50' : ''}`}
            onClick={handleClick}
            aria-disabled={IsLoadingBtn}
        >
            {LABEL}
        </Link>
    );
}
