import { ModeToggle } from "@/app/ModeToggle";
import UserDropDownMenu from "./UserDropDownMenu";
import SearchProducts from "./SearchProducts";
import SmallScreenMenu from "./SmallScreenMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import { getTranslations } from "next-intl/server";

export const Header_Navigation_Links = [
    { name: "header.0.href", href: "/" },
    { name: "header.1.href", href: "/featuredproducts" },
    { name: "header.2.href", href: "/howitworks?" },
    { name: "header.3.href", href: "/pricing" },
];

export default async function Header(){
    const t = await getTranslations();
    return (
        <header 
            className="sticky top-0 z-50 backdrop-blur 
                dark:bg-black/50 w-full border-b 
                py-3 dark:border-neutral-800 border-neutral-100 
                lg:px-20 md:px-12 px-6 flex gap-8 items-center 
                justify-between">
            <h1 className="text-2xl uppercase font-bold text-[#892CDC] dark:text-white">
                Modify<span className="text-sm lowercase font-normal">.ma</span>
            </h1>
            <ul className="hidden lg:flex items-center justify-center">
                {Header_Navigation_Links.map((link, index) => (
                    <li key={index} className="inline-block capitalize">
                        <a
                            href={"#" + (link.href.startsWith("/") ? link.href.slice(1) : link.href)}
                            className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 px-4 py-2"
                        >
                            {t(link.name)}
                        </a>
                    </li>
                ))}
            </ul>
            <section className="flex items-center gap-4">
                <SearchProducts />
                <UserDropDownMenu />
                <LanguageSwitcher />
                <div className="lg:flex hidden">
                    <ModeToggle />
                </div>
                <SmallScreenMenu />
            </section>
        </header>
    )
}