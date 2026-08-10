import React from 'react';
import { 
  Users, 
  ArrowRight, 
  ShieldCheck, 
  MapPin, 
  TrendingUp, 
  Handshake, 
  Truck, 
  ShoppingCart, 
  Factory, 
  Building2, 
  ChevronRight, 
  Package, 
  Award, 
  Headphones 
} from 'lucide-react';

import truckImg from '../assets/business_distribution.png';

export default function Partner() {
  const opportunities = [
    {
      icon: Truck,
      title: 'Distributors',
      description: 'Expand regional market presence through trusted distribution partnerships.',
    },
    {
      icon: ShoppingCart,
      title: 'Retailers & Resellers',
      description: 'Access curated products across multiple growing categories to sell in your market.',
    },
    {
      icon: Factory,
      title: 'Manufacturers',
      description: 'Present your products for distribution evaluation and explore market expansion opportunities.',
    },
    {
      icon: Building2,
      title: 'Institutional Buyers',
      description: 'Source reliable products with structured pricing, consistent supply and dedicated support.',
    },
  ];

  const leftHighlights = [
    {
      icon: ShieldCheck,
      title: 'Trusted Since 2016',
      description: 'Years of reliability and professional business relationships.',
    },
    {
      icon: MapPin,
      title: 'Pan India Network',
      description: 'Strong distribution capabilities across the country.',
    },
    {
      icon: TrendingUp,
      title: 'Growing Categories',
      description: 'Diverse portfolio of products across high demand segments.',
    },
    {
      icon: Handshake,
      title: 'Long Term Partnership',
      description: 'We believe in growth that is built on trust and transparency.',
    },
  ];

  const bottomStats = [
    {
      icon: Package,
      value: '25,000+',
      label: 'Products Across',
      sublabel: 'Multiple Categories',
    },
    {
      icon: MapPin,
      value: 'All India',
      label: 'Strong Distribution',
      sublabel: 'Network',
    },
    {
      icon: Award,
      value: 'Quality Assured',
      label: 'Carefully Sourced',
      sublabel: 'and Verified Products',
    },
    {
      icon: Headphones,
      value: 'Dedicated Support',
      label: 'Relationship-Driven',
      sublabel: 'Business Approach',
    },
    {
      icon: TrendingUp,
      value: 'Sustainable Growth',
      label: 'Building Long Term',
      sublabel: 'Partnerships',
    },
  ];

  const handlePartnerAction = () => {
    window.location.href = 'mailto:partner@rvbrothers.com?subject=Partnership%20Enquiry';
  };

  return (
    <section id="partner-section" className="w-full bg-[#020617] text-slate-100 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden border-b border-slate-900/60">
      
      {/* Ambient background glows */}
      <div className="absolute left-[-10%] top-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute right-[-10%] bottom-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main split grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/25 bg-blue-950/40 text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-6">
              <Users className="w-4 h-4 text-blue-500" />
              <span>PARTNER WITH RV BROTHERS</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
              Grow Through <br />
              <span className="text-blue-500">Strategic</span> Distribution
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mb-8 font-normal">
              We collaborate with distributors, retailers, resellers, manufacturers and institutional buyers to expand market reach, strengthen product visibility and build long-term business relationships.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
              <button 
                onClick={handlePartnerAction}
                className="w-full sm:w-auto px-7 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl flex items-center justify-center gap-2.5 transition-all duration-300 shadow-lg shadow-blue-600/25 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Become a Distribution Partner</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={handlePartnerAction}
                className="w-full sm:w-auto px-7 py-4 bg-slate-900/80 hover:bg-slate-900 border border-slate-700/80 text-white font-semibold text-sm rounded-xl flex items-center justify-center gap-2.5 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Discuss Your Brand</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* 4 Trust Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-slate-800/80 w-full">
              {leftHighlights.map((item, idx) => {
                const HighlightIcon = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-start">
                    <div className="p-2.5 rounded-xl bg-blue-950/40 border border-blue-500/20 text-blue-400 mb-3">
                      <HighlightIcon className="w-5 h-5" />
                    </div>
                    <h4 className="text-white font-bold text-xs sm:text-sm leading-snug mb-1">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Truck and Floating Opportunities Card */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            
            {/* Split Logistics Truck Image */}
            <div className="relative w-full h-64 sm:h-72 lg:h-80 rounded-3xl overflow-hidden mb-6 shadow-2xl border border-slate-800">
              <img 
                src={truckImg} 
                alt="RV Brothers Logistics Distribution"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80"></div>
              
              {/* Handshake Overlay Badge */}
              <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 text-white px-4 py-2.5 rounded-xl flex items-center gap-3 shadow-lg">
                <div className="p-2 rounded-lg bg-blue-600 text-white">
                  <Handshake className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold">Strategic Alliance</div>
                  <div className="text-[10px] text-slate-400">Expanding Pan-India Reach</div>
                </div>
              </div>
            </div>

            {/* Opportunities List Card */}
            <div className="w-full bg-white text-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-2xl z-20">
              <div className="mb-6 font-sans">
                <h3 className="text-slate-900 font-extrabold text-xs tracking-widest uppercase relative pb-2 inline-block border-b-2 border-blue-600">
                  PARTNERSHIP OPPORTUNITIES
                </h3>
              </div>

              <div className="space-y-4">
                {opportunities.map((opp, idx) => {
                  const OppIcon = opp.icon;
                  return (
                    <div 
                      key={idx}
                      onClick={handlePartnerAction}
                      className="p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-100 hover:border-blue-200 transition-all duration-300 flex items-start gap-4 group cursor-pointer"
                    >
                      <div className="p-2.5 rounded-xl bg-blue-100/70 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                        <OppIcon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-slate-900 font-bold text-sm group-hover:text-blue-600 transition-colors">
                            {opp.title}
                          </h4>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">
                          {opp.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

        {/* Bottom stats banner */}
        <div className="w-full bg-white text-slate-900 rounded-2xl border border-slate-200/90 shadow-xl p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
            {bottomStats.map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <div 
                  key={idx}
                  className={`flex items-center gap-4 ${idx !== 0 ? 'pt-4 sm:pt-0 lg:pl-6' : ''}`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50/80 border border-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <StatIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-slate-900 font-extrabold text-base sm:text-lg leading-tight">
                      {stat.value}
                    </div>
                    <div className="text-slate-700 font-bold text-xs leading-tight">
                      {stat.label}
                    </div>
                    <div className="text-slate-500 text-[11px] font-normal leading-tight">
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
