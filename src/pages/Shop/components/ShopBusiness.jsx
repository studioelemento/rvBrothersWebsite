import React from 'react';
import { FileText, Phone, ArrowRight, ShieldCheck, Package, Handshake } from 'lucide-react';
import businessCollage from '../../../assets/business_procurement_collage.png';

export default function ShopBusiness() {
  const values = [
    {
      icon: Package,
      title: 'Bulk Pricing',
      desc: 'Competitive pricing for high-volume requirements'
    },
    {
      icon: Handshake,
      title: 'Reliable Supply',
      desc: 'Consistent stock availability and on-time delivery'
    },
    {
      icon: ShieldCheck,
      title: 'Quality Assured',
      desc: '100% genuine products with strict quality standards'
    },
    {
      icon: Phone,
      title: 'Dedicated Support',
      desc: 'Personalized assistance for your business needs'
    }
  ];

  return (
    <section className="mt-20 p-8 sm:p-12 bg-white border border-slate-100 rounded-3xl shadow-sm relative overflow-hidden">
      {/* Background Map Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Side Content */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-extrabold tracking-[0.2em] text-blue-600 uppercase">
              Business Procurement
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-slate-900 tracking-tight leading-[1.2]">
              Need Bulk Orders or<br />
              Distribution Support?
            </h2>
            <div className="w-10 h-[2px] bg-blue-600"></div>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed pt-2 max-w-2xl">
              We partner with retailers, distributors, institutional buyers and businesses to fulfill high-volume requirements across multiple product categories.
            </p>
          </div>

          {/* Value Props Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-2">
            {values.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="space-y-3 border-r border-slate-100 last:border-0 pr-4 last:pr-0">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-950">{item.title}</h4>
                    <p className="text-[11px] text-slate-400 leading-normal">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Buttons & Footer */}
          <div className="space-y-4 pt-4">
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md">
                <FileText className="w-4 h-4" />
                Business Enquiry
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm px-6 py-3.5 rounded-xl border border-slate-200 transition-all duration-300">
                <Phone className="w-4 h-4" />
                Contact Sales
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Trusted by 500+ businesses across India</span>
            </div>
          </div>
        </div>

        {/* Right Side Visuals (Rendered Collage containing map, products, and Who We Serve) */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <img 
            src={businessCollage} 
            alt="Business Procurement and Who We Serve" 
            className="w-full h-auto max-w-[540px] object-contain select-none" 
          />
        </div>
      </div>
    </section>
  );
}
