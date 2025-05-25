'use client';

import { FlipHorizontal } from 'lucide-react';
import { useState, useRef, useLayoutEffect } from 'react';

const Front_Placements = [
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
    invoicePos: { top: '50%', left: '40%' },
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
    invoicePos: { top: '60%', left: '30%' },
  },
];

const Back_Placements = [
  {
    id: 'back',
    label: 'Back',
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
  }, [selected]);

  const [IsFront, setIsFront] = useState(true);
  return (
    <section className="w-full">
      <h2 className="text-2xl text-[#892CDC] dark:text-[#D9ACF5] font-semibold text-center pb-5">
        Printing places on the product
      </h2>

      <div className="relative w-full h-[500px] bg-neutral-300 rounded-xl shadow-lg" ref={containerRef}>
        {/* صورة المنتج */}
        <img
          src="/HoodieOverviewFront.png"
          alt="Hoodie Overview"
          className={`absolute top-0 left-0 w-full h-full object-contain pointer-events-none transition-opacity duration-500 ${IsFront ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          style={{ transitionProperty: 'opacity' }}
        />
        <img
          src="/HoodieOverviewBack.png"
          alt="Hoodie Overview"
          className={`absolute top-0 left-0 w-full h-full object-contain pointer-events-none transition-opacity duration-500 ${IsFront ? 'opacity-0 z-0' : 'opacity-100 z-10'}`}
          style={{ transitionProperty: 'opacity', zIndex: 10 }}
        />
        <button onClick={() => {
          setIsFront(!IsFront)
          setSelected(null)
          setSvgPath('')
        }} className='absolute right-2 top-2 px-2 flex items-center gap-2 border border-neutral-800 bg-black rounded-lg'>
          Flip to {IsFront ? "Back" : "Front"}<FlipHorizontal size={20}/>
        </button>

        {/* النقاط */}
        {IsFront ? Front_Placements.map((p) => (
          <button
            key={p.id}
            id={`point-${p.id}`}
            onClick={() => setSelected(p.id)}
            style={{ top: p.top, left: p.left }}
            className="absolute w-5 h-5 bg-[#892CDC] rounded-full border-2 
            border-white hover:scale-110 transition z-10"
          />
        )) : Back_Placements.map((p) => (
          <button
            key={p.id}
            id={`point-${p.id}`}
            onClick={() => setSelected(p.id)}
            style={{ top: p.top, left: p.left }}
            className="absolute w-5 h-5 bg-[#892CDC] rounded-full border-2 
            border-white hover:scale-110 transition z-10"
          />
        ))}

        {/* رسم الخط باستخدام SVG */}
        <svg className="absolute top-0 left-0 w-full h-full 
          pointer-events-none z-20">
          <path 
            d={svgPath} 
            stroke="#892CDC" 
            strokeWidth="2" 
            fill="none"
          />
        </svg>

        {/* صناديق الفاتورة */}
        {IsFront ? Front_Placements.map((p) =>
          selected === p.id ? (
            <div
              key={p.id}
              id={`invoice-${p.id}`}
              style={{ top: p.invoicePos.top, left: p.invoicePos.left }}
              className="absolute shadow-lg w-48 bg-black shadow-md border 
              border-neutral-800 rounded-xl p-4 text-left z-20"
            >
              <h3 className="font-semibold text-white mb-1">{p.label}</h3>
              <p>Price: <span className="text-[#892CDC]">${p.price.toFixed(2)}</span></p>
            </div>
          ) : null
        ) : Back_Placements.map((p) =>
          selected === p.id ? (
            <div
              key={p.id}
              id={`invoice-${p.id}`}
              style={{ top: p.invoicePos.top, left: p.invoicePos.left }}
              className="absolute shadow-lg w-48 dark:bg-black shadow-md border 
              border-neutral-800 rounded-xl p-4 text-left z-20"
            >
              <h3 className="font-semibold text-white mb-1">{p.label}</h3>
              <p>Price: <span className="text-[#892CDC]">${p.price.toFixed(2)}</span></p>
            </div>
          ) : null
        )}
      </div>
    </section>
  );
}
