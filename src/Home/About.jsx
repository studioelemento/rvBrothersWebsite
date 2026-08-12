import React from 'react';
import { 
  ShieldCheck, 
  ShoppingBag, 
  Handshake, 
  Truck, 
  Award, 
  Headphones, 
  Users, 
  Package, 
  Building2, 
  MapPin, 
  TrendingUp 
} from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Trusted Since 2016',
      description: 'Years of consistent quality, reliability and customer satisfaction.',
    },
    {
      icon: ShoppingBag,
      title: 'Diverse Product Portfolio',
      description: 'From collectibles to industrial supplies, we serve multiple industries and needs.',
    },
    {
      icon: Handshake,
      title: 'Strong Business Network',
      description: 'A robust network of partners, vendors and distributors across India.',
    },
    {
      icon: Truck,
      title: 'Pan India Delivery',
      description: 'Efficient logistics and timely delivery to every corner of the country.',
    },
    {
      icon: Award,
      title: 'Quality You Can Rely On',
      description: 'Carefully sourced products that meet the highest quality standards.',
    },
    {
      icon: Headphones,
      title: 'Customer First Approach',
      description: 'Dedicated support and long-term relationships built on trust and transparency.',
    },
  ];

  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Happy Customers',
      sublabel: 'Across India and growing every day.',
    },
    {
      icon: Package,
      value: '25,000+',
      label: 'Products Delivered',
      sublabel: 'Successfully delivered to customers nationwide.',
    },
    {
      icon: Building2,
      value: '100+',
      label: 'Business Partners',
      sublabel: 'Strong network of partners and trusted vendors.',
    },
    {
      icon: MapPin,
      value: 'All India',
      label: 'Presence',
      sublabel: 'Serving customers in every state of India.',
    },
    {
      icon: TrendingUp,
      value: '8+ Years',
      label: 'Of Excellence',
      sublabel: 'A journey built on trust, quality and performance.',
    },
  ];

  return (
    <section id="about" className="w-full bg-[#020617] text-slate-100 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden border-t border-b border-slate-900/60">
      
      {/* Background World Map Watermark Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
        <svg viewBox="0 0 1000 500" className="w-full h-full fill-slate-300">
          <path d="M150,150 Q250,80 350,150 T550,150 T750,150" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" />
          <path d="M200,200 Q400,100 600,200 T900,200" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6,6" />
        </svg>
      </div>

      {/* Giant Stylized RV Logo Graphic  (Top Right) */}
      <div className="absolute right-[-2%] top-8 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] opacity-[0.05] text-blue-500 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
          <path d="M10 90V10H37.5C47.5 10 55 16 55 25C55 31 51 36 45 38L62.5 90H47.5L32.5 42.5H22.5V90H10ZM22.5 30H36C41 30 45 27.5 45 22.5C45 17.5 41 15 36 15H22.5V30Z" />
          <path d="M65 10L80 47.5L95 10H107.5L86.25 90H73.75L52.5 10H65Z" />
        </svg>
      </div>

      {/* Soft Ambient Glow Blobs */}
      <div className="absolute left-[-10%] top-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute right-[-10%] bottom-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 1. TOP BADGE */}
        <div className="text-center mb-2">
          <span className="text-blue-500 font-bold text-xs tracking-[0.25em] uppercase">
            WHY CHOOSE US
          </span>Watermark
        </div>

        {/* 2. MAIN HEADING */}
        <h2 className="text-center text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
          Why <span className="text-blue-500">RV</span> Brothers?
        </h2>

        {/* 3. SUBHEADING */}
        <p className="text-center text-slate-400 text-sm sm:text-base max-w-3xl mx-auto mb-16 sm:mb-20 font-normal leading-relaxed">
          A legacy of trust, innovation and performance. We are committed to delivering quality products, building strong partnerships and creating value across every business we operate.
        </p>

        {/* 4. 6 CORE FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16 sm:mb-20 relative">
          
          {/* Subtle Grid Dividers on Desktop */}
          <div className="hidden md:block absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-slate-800/70 pointer-events-none"></div>
          <div className="hidden md:block absolute top-0 bottom-0 left-1/3 w-[1px] bg-slate-800/70 pointer-events-none"></div>
          <div className="hidden md:block absolute top-0 bottom-0 left-2/3 w-[1px] bg-slate-800/70 pointer-events-none"></div>

          {features.map((feature, idx) => {
            const FeatureIcon = feature.icon;
            return (
              <div 
                key={idx}
                className="flex flex-col items-start p-4 sm:p-6 group cursor-default"
              >
                {/* Icon Badge */}
                <div className="w-14 h-14 rounded-2xl bg-blue-950/40 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-6 shadow-md shadow-blue-950/50 group-hover:border-blue-500/40 group-hover:scale-105 group-hover:bg-blue-900/30 transition-all duration-300">
                  <FeatureIcon className="w-6 h-6" />
                </div> 
                {/* Title */}
                <h3 className="text-white font-bold text-lg sm:text-xl mb-2 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* 5. BOTTOM STATS BANNER */}
        <div className="w-full bg-[#050C1E]/80 backdrop-blur-md rounded-2xl border border-slate-800/80 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 divide-y sm:divide-y-0 lg:divide-x divide-slate-800/80">
            {stats.map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <div 
                  key={idx}
                  className={`flex items-center gap-4 ${idx !== 0 ? 'pt-4 sm:pt-0 lg:pl-6' : ''}`}
                >
                  {/* Icon Circle */}
                  <div className="w-12 h-12 rounded-2xl bg-blue-950/50 border border-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 shadow-md">
                    <StatIcon className="w-5 h-5" />
                  </div>

                  {/* Stat Text */}
                  <div>
                    <div className="text-white font-extrabold text-lg sm:text-xl tracking-tight leading-none mb-1">
                      {stat.value}
                    </div>
                    <div className="text-slate-200 font-bold text-xs sm:text-sm leading-tight">
                      {stat.label}
                    </div>
                    <div className="text-slate-400 text-[11px] font-normal leading-tight mt-1">
                      {stat.sublabel}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
