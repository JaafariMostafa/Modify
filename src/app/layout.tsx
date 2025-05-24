import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Ubuntu } from 'next/font/google'
import ScrollToTop from "@/Components/ScrollToTop";

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // اختر الأوزان التي تريدها
  variable: '--font-ubuntu',     // اختياري: لاستخدامه مع CSS variables
})

export const metadata: Metadata = {
  title: 'My Print on Demand Platform',
  description: 'Build your brand easily with MODIFY.ma',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`w-full overflow-x-hidden bg-white dark:bg-[#0a0a0a] ${ubuntu.className} antialiased`}
      >
        <ThemeProvider 
          attribute="class" 
          enableSystem 
          defaultTheme="system"
        >
          {children}
        </ThemeProvider>
        <ScrollToTop />
      </body>
    </html>
  );
}
