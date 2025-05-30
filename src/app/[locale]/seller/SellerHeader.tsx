import LanguageSwitcher from "@/Components/LanguageSwitcher";
import UserDropDownMenu from "@/Components/UserDropDownMenu";


export default function HeaderSeller(){
    return (
        <main className="w-full flex justify-between items-center dark:bg-neutral-900 p-3">
            <h1>
                Modify.ma
            </h1>
            <section className="flex items-center gap-2">
                <UserDropDownMenu />
                <LanguageSwitcher />
            </section>
        </main>
    )
}