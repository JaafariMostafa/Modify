import { ArrowUpRight, Edit3, Package, Truck } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";

const Content = [
  {
    title: 'product_placement_content.features_list.0.title',
    description: 'product_placement_content.features_list.0.description',
    icon: Package
  },
  {
    title: 'product_placement_content.features_list.1.title',
    description: 'product_placement_content.features_list.1.description',
    icon: Edit3
  },
  {
    title: 'product_placement_content.features_list.2.title',
    description: 'product_placement_content.features_list.2.description',
    icon: Truck
  }
];

export default async function ServiceOverview() {
  const t = await getTranslations('product_placement');
  const locale = await getLocale();
  const IsArabic = locale === 'ar';
  const Rotate_Icon = IsArabic ? '-rotate-90' : '';

  return (
    <section className="w-full px-4 lg:px-8 py-8 lg:py-12">
      {/* Header */}
      <div className="mb-8">
        <p className="text-gray-600 dark:text-gray-300 text-base lg:text-lg leading-relaxed max-w-2xl">
          {t('product_placement_content.description')}
        </p>
      </div>

      {/* Features as Flex Column */}
      <div className="flex flex-col gap-4 mb-8">
        {Content.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              style={{ animationDelay: `${index * 100}ms` }}
              className="group flex items-start gap-4 p-4 lg:p-6
                bg-gradient-to-r from-white via-gray-50 to-gray-100
                dark:from-gray-800 dark:via-gray-900 dark:to-black
                border border-gray-200/50 dark:border-gray-700/50
                rounded-xl shadow-md shadow-gray-300/20 dark:shadow-gray-900/30
                hover:shadow-lg hover:shadow-[#892CDC]/10 dark:hover:shadow-[#892CDC]/20
                transition-all duration-300 ease-out
                hover:scale-[1.02] hover:border-[#892CDC]/30
                animate-slideIn"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 lg:w-14 lg:h-14 
                  bg-gradient-to-br from-[#892CDC] to-[#6B1A99]
                  rounded-xl flex items-center justify-center
                  shadow-md shadow-[#892CDC]/20
                  group-hover:shadow-lg group-hover:shadow-[#892CDC]/30
                  transition-all duration-300
                  group-hover:scale-110">
                  <IconComponent 
                    size={22} 
                    className="text-white" 
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg lg:text-xl mb-2
                  text-gray-900 dark:text-white
                  group-hover:text-[#892CDC] dark:group-hover:text-[#D9ACF5]
                  transition-colors duration-300">
                  {t(item.title)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 
                  text-sm lg:text-base leading-relaxed
                  group-hover:text-gray-700 dark:group-hover:text-gray-200
                  transition-colors duration-300">
                  {t(item.description)}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Button */}
      <div className="mt-8">
        <Link
          href="/seller/products"
          className="group inline-flex items-center gap-3 px-6 py-3 
            bg-gradient-to-r from-[#892CDC] to-[#6B1A99]
            hover:from-[#7A25B8] hover:to-[#5A1580]
            text-white font-semibold
            rounded-xl shadow-lg shadow-[#892CDC]/20
            transition-all duration-300 ease-out"
        >
          <span className="text-white">
            {t('product_placement_content.cta_button')}
          </span>
          <ArrowUpRight 
            size={18} 
            className={`text-white 
              group-hover:translate-x-1 group-hover:-translate-y-1 
              transition-transform duration-300 ${Rotate_Icon}`}
          />
        </Link>
      </div>
    </section>
  );
}