import React from 'react';
import { ShieldCheck, Package, Award, Headphones } from 'lucide-react';
import marketplaceArtwork from '../../../assets/marketplace_artwork.png';

export default function ShopMarketplace() {
  const features = [
    {
      icon: ShieldCheck,
      title: '100% Authentic Products',
      desc: 'Genuine quality you can trust.',
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-50 border border-blue-100'
    },
    {
      icon: Package,
      title: 'Pan India Delivery',
      desc: 'Fast and reliable shipping across India.',
      iconColor: 'text-indigo-600',
      bgColor: 'bg-indigo-50 border border-indigo-100'
    },
    {
      icon: Award,
      title: 'Secure Payments',
      desc: 'Safe, hassle-free and secure transactions.',
      iconColor: 'text-purple-600',
      bgColor: 'bg-purple-50 border border-purple-100'
    },
    {
      icon: Headphones,
      title: 'Customer Support',
      desc: 'Dedicated support across all platforms.',
      iconColor: 'text-sky-600',
      bgColor: 'bg-sky-50 border border-sky-100'
    }
  ];

  return (
    <section className="mt-20 p-8 sm:p-12 bg-white border border-slate-100 rounded-3xl shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-extrabold tracking-[0.2em] text-blue-600 uppercase">
              Our Marketplace Presence
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-slate-900 tracking-tight leading-[1.2]">
              Trusted Across India's<br />
              Leading <span className="text-blue-600">Marketplaces</span>
            </h2>
            <div className="w-10 h-[2px] bg-blue-600"></div>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed pt-2">
              Our products are available on India's most trusted e-commerce platforms, bringing quality and reliability to millions of customers.
            </p>
          </div>

          {/* List of Features */}
          <div className="space-y-4 pt-2">
            {features.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div key={idx} className="flex items-start gap-4">
                  <div className={`p-3 rounded-2xl flex-shrink-0 ${feat.bgColor}`}>
                    <IconComp className={`w-5 h-5 ${feat.iconColor}`} />
                  </div>
                  <div className="space-y-0.5 pt-0.5">
                    <h4 className="text-sm font-bold text-slate-900">{feat.title}</h4>
                    <p className="text-xs text-slate-500">{feat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Map/Cards Column */}
        <div className="lg:col-span-7 flex items-center justify-center">
          <img 
            src={marketplaceArtwork} 
            alt="RV Brothers Marketplace Presence" 
            className="w-full h-auto max-w-[640px] object-contain select-none" 
          />
        </div>
      </div>
    </section>
  );
}
