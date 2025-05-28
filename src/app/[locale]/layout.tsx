import type { Metadata } from "next";
import "../../app/globals.css";
import { ThemeProvider } from "next-themes";
import { Cairo, Ubuntu } from 'next/font/google'
import ScrollToTop from "@/Components/ScrollToTop";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import { SessionProvider } from "next-auth/react";

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // اختر الأوزان التي تريدها
  variable: '--font-ubuntu',     // اختياري: لاستخدامه مع CSS variables
})
const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '700'],
  variable: '--font-cairo',
});

export const metadata: Metadata = {
  title: 'Modify | My Print on Demand Platform',
  description: 'Build your brand easily with MODIFY.ma',
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const messages = await getMessages();
  const IsArabic = locale === 'ar';
  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`w-full overflow-x-hidden 
          bg-white dark:bg-[#0a0a0a] 
          ${IsArabic ? cairo.className : ubuntu.className} antialiased`}
      >
        <SessionProvider>
          <ThemeProvider 
            attribute="class" 
            enableSystem 
            defaultTheme="system"
            >
            <NextIntlClientProvider locale={locale} messages={messages}>
              {children}
            </NextIntlClientProvider>
          </ThemeProvider>
          <ScrollToTop />
        </SessionProvider>
      </body>
    </html>
  );
}
