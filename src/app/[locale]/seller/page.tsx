import { Plus } from "lucide-react";
import HeaderSeller from "./SellerHeader";
import TotalGainCard from "@/Components/TotalGainCard";
import TotalOrders from "./TotalOrders";
import TotalTemplates from "./TotalTemplates";



export default function Page(){
    return (
        <main className="w-full min-h-screen rounded-lg dark:bg-neutral-900 border dark:border-neutral-800">
            <HeaderSeller />
            <section className="p-4">
                <div className="w-full flex justify-between items-center">
                    <span>
                        <h1 
                            className="text-2xl font-bold 
                                text-[#892CDC] dark:text-white">
                            Dashboard
                        </h1>
                        <p className='text-sm dark:text-neutral-500 text-neutral-400'>
                                Welcome to your seller dashboard! 
                                Here you can manage your profits.
                        </p>
                    </span>
                    <button 
                        className="flex items-center gap-1 
                            bg-[#892CDC] text-white px-4 
                            py-2 rounded-lg hover:bg-[#7a24b0] 
                            text-sm transition-colors mt-4">
                        <Plus size={16}/> Add Templates
                    </button>
                </div>
                <div className="w-full grid grid-cols-3 gap-2 py-4">
                    <TotalGainCard />
                    <div className="col-span-2 rounded-lg border border-neutral-300 dark:border-neutral-800">
                        <div className="w-full flex">
                            <TotalOrders />
                            <TotalTemplates />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}