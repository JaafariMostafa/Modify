'use client';
import { FlipHorizontal } from 'lucide-react';
import { useState, useRef, useLayoutEffect } from 'react';
import { useLocale, useTranslations } from "next-intl";

const Front_Placements = [
  {
    id: 'front',
    labelKey: 'placements.0.label',
    price: 5.99,
    top: '45%',
    left: '48%',
    invoicePos: { top: '80%', left: '20%' },
  },
  {
    id: 'necklabel',
    labelKey: 'placements.1.label',
    price: 4.99,
    top: '22%',
    left: '49%',
    invoicePos: { top: '50%', left: '40%' },
  },
  {
    id: 'leftSleeve',
    labelKey: 'placements.2.label',
    price: 2.99,
    top: '45%',
    left: '22%',
    invoicePos: { top: '10%', left: '10%' },
  },
  {
    id: 'rightSleeve',
    labelKey: 'placements.3.label',
    price: 2.99,
    top: '45%',
    left: '75%',
    invoicePos: { top: '60%', left: '30%' },
  },
];

const Back_Placements = [
  {
    id: 'back',
    labelKey: 'placements.4.label',
    price: 5.99,
    top: '45%',
    left: '48%',
    invoicePos: { top: '80%', left: '20%' },
  }
];

export default function ProductPlacement() {
  const [selected, setSelected] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgPath, setSvgPath] = useState<string>('');

  useLayoutEffect(() => {
    if (!selected) return;

    const container = containerRef.current;
    const point = document.getElementById(`point-${selected}`);
    const invoice = document.getElementById(`invoice-${selected}`);

    if (container && point && invoice) {
      const cRect = container.getBoundingClientRect();
      const pRect = point.getBoundingClientRect();
      const iRect = invoice.getBoundingClientRect();

      const startX = pRect.left + pRect.width / 2 - cRect.left;
      const startY = pRect.top + pRect.height / 2 - cRect.top;
      const endX = iRect.left + iRect.width / 2 - cRect.left;
      const endY = iRect.top + iRect.height / 2 - cRect.top;

      const controlX = (startX + endX) / 2;
      const controlY = Math.min(startY, endY) - 80;

      const path = `M ${startX},${startY} Q ${controlX},${controlY} ${endX},${endY}`;
      setSvgPath(path);
    }
    function handleClickOutside(event: MouseEvent) {
    const container = containerRef.current;
    const invoice = document.getElementById(`invoice-${selected}`);
    const point = document.getElementById(`point-${selected}`);
    if (
      container &&
      !container.contains(event.target as Node)
    ) {
      setSelected(null);
      setSvgPath('');
    } else if (
      invoice &&
      !invoice.contains(event.target as Node) &&
      point &&
      !point.contains(event.target as Node)
    ) {
      setSelected(null);
      setSvgPath('');
    }
  }
  document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      setSvgPath('');
    }
  }, [selected]);

  const [IsFront, setIsFront] = useState(true);

  const t = useTranslations('product_placement');
  const locale = useLocale();
  const IsArabic = locale === 'ar';
  
  return (
    <section className="w-full px-4 lg:px-8 py-8 lg:py-12">
      {/* Enhanced Header */}
      <div className="text-center mb-10">
        <div className="relative inline-block">
          <h2 className="text-3xl lg:text-4xl text-[#892CDC] dark:text-[#D9ACF5] 
            font-bold mb-4 relative z-10">
            {t('title')}
          </h2>
          {/* Decorative gradient background */}
          <div className="absolute -top-2 -left-6 -right-6 -bottom-2 
            bg-gradient-to-r from-[#892CDC]/10 via-[#D9ACF5]/5 to-transparent 
            rounded-xl blur-sm -z-10"></div>
        </div>
        <div className="w-32 h-1 bg-gradient-to-r from-[#892CDC] to-[#D9ACF5] 
          rounded-full mx-auto"></div>
      </div>

      {/* Enhanced Main Container */}
      <div className="relative max-w-6xl mx-auto">
        <div 
          className="relative w-full h-[500px] lg:h-[600px] 
            rounded-2xl shadow-2xl shadow-gray-300/50 dark:shadow-gray-900/50
            border border-gray-200/50 dark:border-gray-700/50
            overflow-hidden backdrop-blur-sm" 
          ref={containerRef}
        >
          {/* Enhanced Product Images */}
          <img
            src="/HoodieOverviewFront.png"
            alt="Hoodie Overview Front"
            className={`absolute top-0 left-0 w-full h-full object-contain 
              pointer-events-none transition-all duration-700 ease-in-out
              ${IsFront ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-95'}`}
          />
          <img
            src="/HoodieOverviewBack.png"
            alt="Hoodie Overview Back"
            className={`absolute top-0 left-0 w-full h-full object-contain 
              pointer-events-none transition-all duration-700 ease-in-out
              ${IsFront ? 'opacity-0 z-0 scale-95' : 'opacity-100 z-10 scale-100'}`}
          />

          {/* Enhanced Flip Button */}
          <button 
            onClick={() => {
              setIsFront(!IsFront)
              setSelected(null)
              setSvgPath('')
            }} 
            className="absolute right-4 top-4 px-4 py-3 flex items-center gap-3 
              bg-transparent
              dark:from-neutral-900 dark:to-black
              border border-gray-300 dark:border-neutral-800
              rounded-xl shadow-lg shadow-black/20
              text-neutral-700 dark:text-white text-sm font-medium              transition-all duration-300 ease-out
              hover:scale-105 active:scale-95
              backdrop-blur-sm z-30
              group"
          >
            <span className="text-xs lg:text-sm font-semibold">
              {t('flip_button')} {IsFront ? t('flip_to_back_button_text') : t('flip_to_front_button_text')}
            </span>
            <FlipHorizontal 
              size={18} 
              className="group-hover:rotate-180 transition-transform duration-500"
            />
          </button>

          {/* Enhanced Placement Points */}
          {IsFront ? Front_Placements.map((p, index) => (
            <button
              key={p.id}
              id={`point-${p.id}`}
              onClick={() => setSelected(p.id)}
              style={{ 
                top: p.top, 
                left: p.left,
                animationDelay: `${index * 150}ms`
              }}
              className={`absolute w-6 h-6 lg:w-7 lg:h-7
                bg-gradient-to-br from-[#892CDC] to-[#6B1A99]
                rounded-full border-3 border-white
                shadow-lg shadow-[#892CDC]/30
                hover:scale-125 hover:shadow-xl hover:shadow-[#892CDC]/50
                active:scale-110
                transition-all duration-300 ease-out z-20
                animate-pulse hover:animate-none
                ${selected === p.id ? 'scale-125 shadow-xl ring-4 ring-[#892CDC]/30' : ''}
                before:absolute before:inset-0 before:rounded-full
                before:bg-white before:opacity-0 hover:before:opacity-20
                before:transition-opacity before:duration-300
                after:absolute after:inset-0 after:rounded-full
                after:border-2 after:border-[#892CDC] after:scale-150
                after:opacity-0 hover:after:opacity-100 after:animate-ping
                after:transition-opacity after:duration-300`}
            >
              <div className="absolute inset-1 bg-white rounded-full opacity-20"></div>
            </button>
          )) : Back_Placements.map((p, index) => (
            <button
              key={p.id}
              id={`point-${p.id}`}
              onClick={() => setSelected(p.id)}
              style={{ 
                top: p.top, 
                left: p.left,
                animationDelay: `${index * 150}ms`
              }}
              className={`absolute w-6 h-6 lg:w-7 lg:h-7
                bg-gradient-to-br from-[#892CDC] to-[#6B1A99]
                rounded-full border-3 border-white
                shadow-lg shadow-[#892CDC]/30
                hover:scale-125 hover:shadow-xl hover:shadow-[#892CDC]/50
                active:scale-110
                transition-all duration-300 ease-out z-20
                animate-pulse hover:animate-none
                ${selected === p.id ? 'scale-125 shadow-xl ring-4 ring-[#892CDC]/30' : ''}
                before:absolute before:inset-0 before:rounded-full
                before:bg-white before:opacity-0 hover:before:opacity-20
                before:transition-opacity before:duration-300
                after:absolute after:inset-0 after:rounded-full
                after:border-2 after:border-[#892CDC] after:scale-150
                after:opacity-0 hover:after:opacity-100 after:animate-ping
                after:transition-opacity after:duration-300`}
            >
              <div className="absolute inset-1 bg-white rounded-full opacity-20"></div>
            </button>
          ))}

          {/* Enhanced SVG Path */}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-20">
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#892CDC" />
                <stop offset="100%" stopColor="#D9ACF5" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <path 
              d={svgPath} 
              stroke="url(#pathGradient)" 
              strokeWidth="3" 
              fill="none"
              strokeDasharray="8,4"
              filter="url(#glow)"
              className="animate-pulse"
            />
          </svg>

          {/* Enhanced Invoice Cards */}
          {IsFront ? Front_Placements.map((p) =>
            selected === p.id ? (
              <div
                key={p.id}
                dir={IsArabic ? "rtl" : "ltr"}
                id={`invoice-${p.id}`}
                style={{ top: p.invoicePos.top, left: p.invoicePos.left }}
                className="absolute w-56 lg:w-56 z-30
                  bg-gradient-to-br from-gray-900 via-black to-gray-800
                  dark:from-gray-800 dark:via-gray-900 dark:to-black
                  border border-gray-700/50 dark:border-gray-600/50
                  rounded-2xl p-5 lg:p-4 shadow-2xl shadow-black/50
                  backdrop-blur-sm animate-slideIn"
              > 
                {/* Content */}
                <div className="relative">
                  <h3 className="font-bold text-white text-lg lg:text-xl mb-3 
                    bg-gradient-to-r from-white to-gray-300 bg-clip-text 
                    text-transparent">
                    {t(p.labelKey)}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm lg:text-base font-medium">
                      {t('sale_price')}:
                    </span>
                    <span className="text-[#D9ACF5] text-xl lg:text-2xl font-bold 
                      bg-gradient-to-r from-[#892CDC] to-[#D9ACF5] bg-clip-text text-transparent
                      drop-shadow-sm">
                      ${p.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ) : null
          ) : Back_Placements.map((p) =>
            selected === p.id ? (
              <div
                key={p.id}
                dir={IsArabic ? "rtl" : "ltr"}
                id={`invoice-${p.id}`}
                style={{ top: p.invoicePos.top, left: p.invoicePos.left }}
                className="absolute w-56 lg:w-56 z-30
                  bg-gradient-to-br from-gray-900 via-black to-gray-800
                  dark:from-gray-800 dark:via-gray-900 dark:to-black
                  border border-gray-700/50 dark:border-gray-600/50
                  rounded-2xl p-5 lg:p-4 shadow-2xl shadow-black/50
                  backdrop-blur-sm animate-slideIn"
              > 
                {/* Content */}
                <div className="relative">
                  <h3 className="font-bold text-white text-lg lg:text-xl mb-3 
                    bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {t(p.labelKey)}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm lg:text-base font-medium">
                      {t('sale_price')}:
                    </span>
                    <span className="text-[#D9ACF5] text-xl lg:text-2xl font-bold 
                      bg-gradient-to-r from-[#892CDC] to-[#D9ACF5] bg-clip-text text-transparent
                      drop-shadow-sm">
                      ${p.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
}