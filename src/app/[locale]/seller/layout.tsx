import { Cairo, Ubuntu } from "next/font/google";
import SideBar from "./SideBar";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";


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
export default async function Layout({ children, params }: { children: React.ReactNode; params: Promise<{locale: string}>;}) {
    const {locale} = await params;
      if (!hasLocale(routing.locales, locale)) {
        notFound();
      }
    const IsArabic = locale === 'ar';
    return (
        <main className={`${IsArabic ? cairo.className : ubuntu.className} antialiased`}>
            <section className="w-full min-h-screen flex">
                <SideBar />
                <div className="p-4 w-full">
                    {children}
                </div>
            </section>
            <footer className="bg-gray-800 text-white p-4 text-center">
                © 2023 Your Company
            </footer>
        </main>
    );
}