import React from 'react';
import { Calendar, Grid, MapPin, Handshake, ShieldCheck } from 'lucide-react';

export default function BusinessMetrics() {
  const metrics = [
    {
      icon: Calendar,
      topText: 'SINCE',
      bottomText: '2016',
      description: 'Years of trust, experience and business excellence',
    },
    {
      icon: Grid,
      topText: 'MULTI-CATEGORY',
      bottomText: 'Operations',
      description: 'Serving diverse industries and customer needs',
    },
    {
      icon: MapPin,
      topText: 'PAN INDIA',
      bottomText: 'Distribution',
      description: 'Strong presence across all major states',
    },
    {
      icon: Handshake,
      topText: 'B2B & RETAIL',
      bottomText: 'Network',
      description: 'Building relationships that drive growth',
    },
    {
      icon: ShieldCheck,
      topText: 'TRUSTED',
      bottomText: 'Partnerships',
      description: 'Collaborating with leading brands and businesses',
    },
  ];

  return (
    <div className="mt-16 sm:mt-24">
      <div className="relative overflow-hidden bg-slate-950/40 backdrop-blur-sm border border-slate-900/80 rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 shadow-2xl">
        
        {/* Header: OUR BUSINESS AT A GLANCE */}
        <div className="flex flex-col items-center justify-center mb-12 sm:mb-16">
          <div className="flex items-center gap-6 w-full max-w-2xl justify-center">
            <div className="h-[1px] flex-grow bg-slate-900/80"></div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.35em] text-slate-400 uppercase text-center whitespace-nowrap">
              Our Business At A Glance
            </span>
            <div className="h-[1px] flex-grow bg-slate-900/80"></div>
          </div>
          <div className="w-10 h-1 bg-blue-600 rounded-full mt-3"></div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-2 relative z-10">
          {metrics.map((metric, idx) => {
            const MetricIcon = metric.icon;
            return (
              <div
                key={idx}
                className="relative flex flex-col items-center text-center px-2"
              >
                {/* Vertical Divider (only for large screens and not for the last element) */}
                {idx < metrics.length - 1 && (
                  <div className="hidden lg:block absolute right-[-4px] top-4 bottom-4 w-[1px] bg-slate-900" />
                )}

                {/* Icon inside styled circle */}
                <div className="relative flex items-center justify-center w-16 h-16 rounded-full border border-blue-500/30 bg-blue-950/20 text-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.05)] transition-all duration-300 hover:scale-105 mb-5">
                  <MetricIcon className="w-5.5 h-5.5" />
                </div>

                {/* Stacked Title */}
                <div className="flex flex-col items-center min-h-[56px] justify-center">
                  <span className="text-[10px] sm:text-xs font-bold tracking-widest text-slate-400 uppercase">
                    {metric.topText}
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-white mt-1">
                    {metric.bottomText}
                  </span>
                </div>

                {/* Blue separator */}
                <div className="w-7 h-[2px] bg-indigo-600/80 my-3.5" />

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed max-w-[170px]">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* World/India map dot effect or gradient on the background */}
        <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-[0.07] pointer-events-none bg-[radial-gradient(#3b82f6_1.5px,transparent_1.5px)] [background-size:16px_16px]" />
      </div>
    </div>
  );
}
