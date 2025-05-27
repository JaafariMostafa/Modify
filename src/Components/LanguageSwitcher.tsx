'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

// Add as many languages as you want here
const locales = [
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'العربية' },
  // Add more languages as needed
];

function getPathWithLocale(pathname: string, locale: string) {
  const localeCodes = locales.map(l => l.code);
  const segments = pathname.split('/');
  if (segments[0] === '') segments.shift();
  if (localeCodes.includes(segments[0])) segments.shift();
  return `/${locale}/${segments.join('/')}`;
}

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <div>
      {locales.map(({ code, label }) => {
        const newPath = getPathWithLocale(pathname, code);
        const search = searchParams.toString();
        const href = search ? `${newPath}?${search}` : newPath;

        return (
          <Link
            key={code}
            href={href}
            locale={false}
            replace
          >
            <button>
              {label}
            </button>
          </Link>
        );
      })}
    </div>
  );
}
