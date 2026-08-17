import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Car, Leaf, Settings, Truck } from 'lucide-react';
import toysImg from '../../../assets/business_toys.png';
import fmcgImg from '../../../assets/business_fmcg.png';
import industrialImg from '../../../assets/business_industrial.png';
import distributionImg from '../../../assets/business_distribution.png';

export default function BusinessHero() {
  const businesses = [
    {
      title: 'Toys & Collectibles',
      image: toysImg,
      icon: Car,
      color: 'from-red-500/20 to-orange-500/20 hover:shadow-red-500/10',
      iconColor: 'text-red-400 border-red-500/30 bg-red-950/20',
    },
    {
      title: 'FMCG & Wellness',
      image: fmcgImg,
      icon: Leaf,
      color: 'from-green-500/20 to-emerald-500/20 hover:shadow-green-500/10',
      iconColor: 'text-green-400 border-green-500/30 bg-green-950/20',
    },
    {
      title: 'Industrial & Engineering Supplies',
      image: industrialImg,
      icon: Settings,
      color: 'from-blue-500/20 to-indigo-500/20 hover:shadow-blue-500/10',
      iconColor: 'text-blue-400 border-blue-500/30 bg-blue-950/20',
    },
    {
      title: 'Distribution & Trade Network',
      image: distributionImg,
      icon: Truck,
      color: 'from-purple-500/20 to-fuchsia-500/20 hover:shadow-purple-500/10',
      iconColor: 'text-purple-400 border-purple-500/30 bg-purple-950/20',
    },
  ];

  return (
    <>
      {/* 1. Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-8 sm:mb-12">
        <Link to="/" className="hover:text-slate-300 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <span className="text-slate-400">Our Businesses</span>
      </nav>

      {/* 2. Main Content Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16 sm:mb-24">
        
        {/* Left Column: Heading & Intro */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6 md:space-y-8">
          <div className="space-y-3">
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-blue-500 uppercase">
              Our Businesses
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              A Diversified <br />
              <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Business
              </span> <br />
              Ecosystem
            </h1>
          </div>
          
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-lg">
            From collectibles and wellness products to industrial supplies and strategic distribution, 
            RV Brothers operates across multiple sectors with a focus on quality, reliability, and scalable growth.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/shop"
              className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-blue-600/25 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              Explore Products
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="group flex items-center gap-2 border border-slate-800 hover:border-slate-700 bg-slate-900/40 hover:bg-slate-900/60 text-slate-300 hover:text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              Partner With Us
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Right Column: Skewed Grid of Businesses */}
        <div className="lg:col-span-7 relative">
          {/* Background Diagonal Cut Card Area */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 via-blue-950/10 to-transparent rounded-[32px] blur-sm -m-4 lg:-m-6 z-0" />
          
          {/* Skewed Container for Grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:skew-x-[-7deg] origin-center">
            {businesses.map((biz, idx) => {
              const IconComponent = biz.icon;
              return (
                <div
                  key={idx}
                  className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-900 bg-slate-950/40 hover:border-slate-800/80 transition-all duration-500 shadow-xl hover:shadow-2xl ${biz.color} h-[240px] sm:h-[280px] flex flex-col justify-end p-5 sm:p-6 cursor-pointer`}
                >
                  {/* Background Image Container with Zoom Effect */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={biz.image}
                      alt={biz.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 md:scale-105 md:group-hover:scale-115"
                    />
                    {/* Dark overlay gradients for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 transition-opacity group-hover:opacity-85" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/10 via-transparent to-[#020617]/80" />
                  </div>

                  {/* Unskewed Content Wrapper */}
                  <div className="relative z-10 flex flex-col items-start gap-4 md:skew-x-[7deg] origin-center">
                    <div className={`p-3 rounded-xl border transition-all duration-300 group-hover:scale-110 ${biz.iconColor}`}>
                      <IconComponent className="w-5 h-5 sm:w-6 h-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                      {biz.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </>
  );
}
