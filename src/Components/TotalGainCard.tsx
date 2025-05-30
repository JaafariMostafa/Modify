'use client';

import { Info } from "lucide-react";



export default function TotalGainCard(){
    return (
        <main className="col-span-1 border border-neutral-300 dark:border-neutral-800 rounded-lg p-4 shadow-md">
            <span className="w-full flex items-start justify-between">
                <h2 className="flex items-center gap-2 text-neutral-800 dark:text-neutral-500 mb-4">
                    Total Gain <Info size={16} />
                </h2>
                <select 
                    className="text-sm py-1 px-2 border 
                        dark:border-neutral-800 
                        text-neutral-600 dark:text-neutral-600 
                        bg-transparent rounded"
                    name="" 
                    id=""
                    >
                    <option value="today">Today</option>
                    <option value="this-week">This Week</option>
                    <option value="this-month">This Month</option>
                    <option value="this-year">This Year</option>
                    <option value="all-time">All Time</option>
                </select>
            </span>
            <p className="text-3xl font-bold text-[#892CDC]">
                10,000 <span className="text-sm font-normal text-neutral-500">Dh</span>
            </p>
            <p className="text-sm text-neutral-500 mt-2">
                This is your total gain from all sales.
            </p>
            <div className="mt-4">
                <button className="w-full bg-[#892CDC] text-white px-4 py-2 rounded-lg hover:bg-[#7a24b0] transition-colors">
                    View Details
                </button>
            </div>
        </main>
    )
}