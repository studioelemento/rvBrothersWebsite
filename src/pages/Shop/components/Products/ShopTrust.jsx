import React from 'react';
import { 
  Award, 
  Package, 
  ShieldCheck, 
  Truck 
} from 'lucide-react';

export default function ShopTrust() {
  const trustItems = [
    {
      icon: <Award className="w-7 h-7 text-[#0f172a]" />,
      title: "Quality Assured",
      desc: "Curated products you can trust"
    },
    {
      icon: <Package className="w-7 h-7 text-[#0f172a]" />,
      title: "Secure Packaging",
      desc: "Carefully packed to ensure safe delivery"
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-[#0f172a]" />,
      title: "Trusted Marketplace Seller",
      desc: "Verified seller across leading commerce platforms"
    },
    {
      icon: <Truck className="w-7 h-7 text-[#0f172a]" />,
      title: "Pan India Delivery",
      desc: "Fast and reliable delivery across India"
    }
  ];

  return (
    <div className="w-full bg-white border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-xs mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative">
        {trustItems.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center text-center px-4 group relative"
          >
            {/* Divider for larger screens */}
            {index < 3 && (
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-slate-100" />
            )}
            
            {/* Icon Wrapper with circular background */}
            <div className="w-14 h-14 rounded-full bg-[#f8fafc] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 shadow-xs border border-slate-50">
              {item.icon}
            </div>

            {/* Title & Description */}
            <h3 className="text-sm sm:text-base font-extrabold text-[#0f172a] mb-2 tracking-tight">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-[200px] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
