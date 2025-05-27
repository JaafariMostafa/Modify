'use client'
import { ModeToggle } from "@/app/ModeToggle";
import UserDropDownMenu from "./UserDropDownMenu";
import SearchProducts from "./SearchProducts";
import SmallScreenMenu from "./SmallScreenMenu";
import { Header_Navigation_Links } from "@/GlobalLinks";
import LanguageSwitcher from "./LanguageSwitcher";



export default function Header(){
    return (
        <header 
            className="sticky top-0 z-50 backdrop-blur 
                dark:bg-black/50 w-full border-b 
                py-3 dark:border-neutral-800 border-neutral-300 
                lg:px-20 md:px-12 px-6 flex gap-8 items-center 
                justify-between">
            <h1 className="text-2xl uppercase font-bold text-[#892CDC] dark:text-white">
                Modify<span className="text-sm lowercase font-normal">.ma</span>
            </h1>
            <ul className="hidden lg:flex items-center justify-center">
                {Header_Navigation_Links.map((link, index) => (
                    <li key={index} className="inline-block">
                        <a
                            href={"#" + (link.href.startsWith("/") ? link.href.slice(1) : link.href)}
                            className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 px-4 py-2"
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
            <section className="flex items-center gap-4">
                <SearchProducts />
                <UserDropDownMenu />
                {/* <select
                    className="rounded-lg border border-neutral-400 bg-neutral-200 bg-transparent 
                        py-2 px-4 text-sm focus:outline-none
                        dark:bg-neutral-900 primary-color dark:text-white cursor-pointer
                        dark:border-neutral-600"
                    defaultValue="English"
                >
                    <option value="العربية">العربية</option>
                    <option value="English">English</option>
                    <option value="French">French</option>
                </select> */}
                <LanguageSwitcher />
                <div className="lg:flex hidden">
                    <ModeToggle />
                </div>
                <SmallScreenMenu />
            </section>
        </header>
    )
}