import React from 'react';
import { 
  Car, 
  Leaf, 
  Settings, 
  Truck, 
  ShoppingCart, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Award, 
  Headphones, 
  Lock 
} from 'lucide-react';

import toysImg from '../assets/business_toys.png';
import fmcgImg from '../assets/business_fmcg.png';
import industrialImg from '../assets/business_industrial.png';
import distributionImg from '../assets/business_distribution.png';
import digitalImg from '../assets/business_digital.png';

export default function Business() {
  const divisions = [
    {
      id: 'toys',
      title: 'Toys & Collectibles',
      description: 'Premium die-cast models, collectibles, hobby products and more for enthusiasts of all ages.',
      image: toysImg,
      icon: Car,
    },
    {
      id: 'fmcg',
      title: 'FMCG & Wellness',
      description: 'Quality FMCG and wellness products that promote a better and healthier lifestyle.',
      image: fmcgImg,
      icon: Leaf,
    },
    {
      id: 'industrial',
      title: 'Industrial & Engineering',
      description: 'Industrial supplies, bearings, fasteners and engineering solutions that power industries.',
      image: industrialImg,
      icon: Settings,
    },
    {
      id: 'distribution',
      title: 'Distribution Network',
      description: 'Strong distribution network and supply chain capabilities ensuring timely delivery across India.',
      image: distributionImg,
      icon: Truck,
    },
    {
      id: 'digital',
      title: 'Digital Commerce Ecosystem',
      description: 'Technology-driven commerce platforms and services building the future of online business.',
      image: digitalImg,
      icon: ShoppingCart,
    },
  ];

  const trustMetrics = [
    {
      icon: ShieldCheck,
      topText: 'Trusted Since',
      bottomText: '2016',
      highlightBottom: true,
    },
    {
      icon: Users,
      topText: '10,000+',
      bottomText: 'Happy Customers',
      highlightTop: true,
    },
    {
      icon: Award,
      topText: 'Quality',
      bottomText: 'Assured',
    },
    {
      icon: Truck,
      topText: 'Pan India',
      bottomText: 'Delivery',
    },
    {
      icon: Headphones,
      topText: 'Dedicated',
      bottomText: 'Support',
    },
    {
      icon: Lock,
      topText: 'Secure',
      bottomText: 'Payments',
    },
  ];

  return (
    <section id="businesses" className="w-full bg-[#F8FAFC] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 font-sans border-t border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. TOP BADGE */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-600/40 text-blue-600 font-semibold text-xs tracking-wider uppercase bg-blue-50/80 shadow-xs">
            OUR BUSINESS ECOSYSTEM
          </div>
        </div>

        {/* 2. SECTION HEADING */}
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Our <span className="text-blue-600">Business</span> Divisions
        </h2>

        {/* 3. SUBHEADING */}
        <p className="text-center text-slate-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mb-12 leading-relaxed font-normal">
          Diverse businesses. One vision – to deliver excellence across categories
          and create lasting value for our partners and customers.
        </p>

        {/* 4. BUSINESS CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {divisions.map((division) => {
            const IconComponent = division.icon;
            return (
              <div 
                key={division.id}
                className="bg-[#0B132A] rounded-2xl overflow-hidden flex flex-col justify-between border border-slate-800 shadow-xl group hover:shadow-2xl hover:border-blue-500/50 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
              >
                {/* Image & Floating Icon Container */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                  <img 
                    src={division.image} 
                    alt={division.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                  />
                  {/* Dark gradient overlay at bottom of image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B132A] via-transparent to-transparent opacity-80"></div>
                  
                  {/* Floating Circular Icon Badge */}
                  <div className="absolute bottom-3 left-4 w-10 h-10 rounded-full bg-[#0F1C3F] border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-lg shadow-black/50 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-400 transition-all duration-300">
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 pt-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-white text-lg font-bold mb-2.5 leading-snug group-hover:text-blue-400 transition-colors">
                      {division.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-6">
                      {division.description}
                    </p>
                  </div>

                  {/* Explore Action Button */}
                  <div className="flex items-center gap-2 text-slate-200 group-hover:text-blue-400 text-sm font-semibold transition-colors mt-auto pt-2">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 5. BOTTOM TRUST & METRICS BANNER */}
        <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/50 p-6 sm:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {trustMetrics.map((metric, idx) => {
              const MetricIcon = metric.icon;
              return (
                <div 
                  key={idx} 
                  className={`flex items-center gap-3 ${idx !== 0 ? 'pt-4 sm:pt-0 sm:pl-4 lg:pl-6' : ''}`}
                >
                  {/* Icon */}
                  <div className="p-2.5 rounded-xl bg-blue-50/80 text-blue-600 border border-blue-100 flex-shrink-0">
                    <MetricIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  {/* Texts */}
                  <div className="flex flex-col">
                    <span className={`text-xs ${metric.highlightTop ? 'font-bold text-slate-900 text-sm sm:text-base' : 'text-slate-500 font-medium'}`}>
                      {metric.topText}
                    </span>
                    <span className={`text-xs ${metric.highlightBottom ? 'font-extrabold text-slate-900 text-sm sm:text-base' : 'text-slate-700 font-bold'}`}>
                      {metric.bottomText}
                    </span>
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
