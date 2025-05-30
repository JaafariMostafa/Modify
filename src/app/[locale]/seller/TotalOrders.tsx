'use client';

import { ArrowRight, Info } from "lucide-react";



export default function TotalOrders(){
    return (
        <main 
            className="grow shadow-md">
            <section className="p-4">
                <span className="w-full flex items-start justify-between">
                    <h2 className="flex items-center gap-2 text-neutral-800 dark:text-neutral-500 mb-4">
                        Total Orders <Info size={16} />
                    </h2>
                    <select 
                        className="text-sm py-1 px-2 border 
                            dark:border-neutral-800 
                            text-neutral-600 dark:text-neutral-600 
                            bg-transparent rounded"
                        name="" 
                        id=""
                        >
                        <option value="total">Total</option>
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="delivered">Delivered</option>
                        <option value="canceled">Canceled</option>
                    </select>
                </span>
                <p className="text-3xl font-bold text-[#892CDC]">
                    100 <span className="text-sm font-normal text-neutral-500">Order</span>
                </p>
                <p className="text-sm text-neutral-500 mt-2">
                    This is your orders status.
                </p>
            </section>
                <div className="mt-4">
                    <button 
                        className="w-full text-[#892CDC] border-t 
                            flex items-center gap-2 justify-center
                            px-4 py-2 hover:text-[#7a24b0] 
                            dark:border-neutral-800 transition-colors">
                        View Details <ArrowRight size={16} />
                    </button>
                </div>
        </main>
    )
}