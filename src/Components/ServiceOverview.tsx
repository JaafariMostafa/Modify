'use client';

import { ArrowUpRight, Edit3, Package, Truck } from "lucide-react";

const Content = [
  {
    title: 'Variety of Products',
    description: 'More than 100 products you can customize: clothing, mugs, stationery, and many options.',
    icon: Package
  },
  {
    title: 'Interactive Design',
    description: 'Easy-to-use design tools allow you to place your design in different locations with a live cost preview.',
    icon: Edit3
  },
  {
    title: 'Worldwide Shipping',
    description: 'Fast and reliable shipping to all parts of the world with real-time order tracking.',
    icon: Truck
  }
];
export default function ServiceOverview() {
  return (
    <section className="flex flex-col gap-12 mx-auto px-4 items-center">
      {/* Service Overview */}
      <div className="w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-[#892CDC] mb-6">
          High-Quality Print-on-Demand Services
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          We offer a comprehensive platform to design and sell your products such as t-shirts, mugs, hoodies, and more,
          with the ability to customize every part of the product easily and professionally.
        </p>
      </div>
      <ul>
        {Content.map((item, index) => (
          <li key={index} className="flex items-start gap-1">
            <span className="border border-[#892CDC] rounded-full text-[#892CDC] p-1 flex-shrink-0">
              <item.icon />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-neutral-400">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <button
        className="flex bg-[#892CDC] hover:bg-[#892CDC]/90
            transition-all duration-200 items-center gap-2 
            py-2 px-6 rounded-lg text-white border border-[#892CDC]">
          Explore Our Products <ArrowUpRight size={20} />
      </button>
    </section>
  );
}
