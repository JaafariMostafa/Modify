'use client';

import { useState, useRef, useLayoutEffect } from 'react';

const placements = [
  {
    id: 'front',
    label: 'Front',
    price: 5.99,
    top: '45%',
    left: '48%',
    invoicePos: { top: '80%', left: '20%' },
  },
  {
    id: 'necklabel',
    label: 'Neck Label',
    price: 4.99,
    top: '22%',
    left: '49%',
    invoicePos: { top: '70%', left: '70%' },
  },
  {
    id: 'leftSleeve',
    label: 'Left Sleeve',
    price: 2.99,
    top: '45%',
    left: '22%',
    invoicePos: { top: '10%', left: '10%' },
  },
  {
    id: 'rightSleeve',
    label: 'Right Sleeve',
    price: 2.99,
    top: '45%',
    left: '75%',
    invoicePos: { top: '10%', left: '80%' },
  },
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
  }, [selected]);

  const selectedData = placements.find((p) => p.id === selected);

  return (
    <section className="w-full">
      <h2 className="text-2xl text-[#892CDC] dark:text-[#D9ACF5] font-semibold text-center pb-10">Printing places on the product</h2>

      <div className="relative w-full h-[500px] bg-neutral-300 rounded-xl shadow-lg" ref={containerRef}>
        {/* صورة المنتج */}
        <img
          src="/HoodieOverview.png"
          alt="Hoodie Overview"
          className="absolute top-0 left-0 w-full h-full object-contain 
          pointer-events-none"
        />

        {/* النقاط */}
        {placements.map((p) => (
          <button
            key={p.id}
            id={`point-${p.id}`}
            onClick={() => setSelected(p.id)}
            style={{ top: p.top, left: p.left }}
            className="absolute w-5 h-5 bg-blue-500 rounded-full border-2 
            border-white hover:scale-110 transition z-10"
          />
        ))}

        {/* رسم الخط باستخدام SVG */}
        <svg className="absolute top-0 left-0 w-full h-full 
          pointer-events-none z-0">
          <path 
            d={svgPath} 
            stroke="#3b82f6" 
            strokeWidth="2" 
            fill="none"
          />
        </svg>

        {/* صناديق الفاتورة */}
        {placements.map((p) =>
          selected === p.id ? (
            <div
              key={p.id}
              id={`invoice-${p.id}`}
              style={{ top: p.invoicePos.top, left: p.invoicePos.left }}
              className="absolute w-48 bg-white shadow-md border border-blue-200 rounded-xl p-4 text-left z-20"
            >
              <h3 className="font-semibold text-blue-600 mb-1">{p.label}</h3>
              <p>Price: ${p.price.toFixed(2)}</p>
            </div>
          ) : null
        )}
      </div>
    </section>
  );
}
