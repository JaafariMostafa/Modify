import { ModeToggle } from "@/app/ModeToggle";
import LanguageSwitcher from "@/Components/LanguageSwitcher";
import UserDropDownMenu from "@/Components/UserDropDownMenu";


export default function HeaderSeller(){
    return (
        <main className="w-full border-b dark:border-neutral-800 
            border-neutral-300 flex justify-between items-center p-3">
            <LanguageSwitcher />
            <section className="flex items-center gap-2">
                <UserDropDownMenu />
                <ModeToggle />
            </section>
        </main>
    )
}