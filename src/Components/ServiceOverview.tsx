import { ArrowUpRight, Edit3, Package, Truck } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

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
    <section dir={IsArabic ? "rtl" : "ltr"} className="flex flex-col gap-12 mx-auto px-4 items-center">
      {/* Service Overview */}
      <div className="w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-[#892CDC] mb-6">
          {t('product_placement_content.title')}
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          {t('product_placement_content.description')}
        </p>
      </div>
      <ul className="w-full max-w-3xl space-y-6">
        {Content.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="border border-[#892CDC] rounded-full text-[#892CDC] p-1 flex-shrink-0">
              <item.icon />
            </span>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-neutral-400">{t(item.title)}</h3>
              <p className="text-gray-600 text-sm">{t(item.description)}</p>
            </div>
          </li>
        ))}
      </ul>
      <button
        className="flex bg-[#892CDC] hover:bg-[#892CDC]/90
            transition-all duration-200 items-center gap-2 
            py-2 px-6 rounded-lg text-white border border-[#892CDC]">
          {t('product_placement_content.cta_button')} <ArrowUpRight className={` ${Rotate_Icon}`} size={20} />
      </button>
    </section>
  );
}
