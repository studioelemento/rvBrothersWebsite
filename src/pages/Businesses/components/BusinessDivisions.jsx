import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Car, Award, Star, Leaf, Sparkles, Heart, ShoppingBag, ShieldCheck, Settings, Wrench, Users, Truck, Store, Grid, Handshake, ArrowRight } from 'lucide-react';
import toysImg from '../../../assets/business_toys.png';
import fmcgImg from '../../../assets/business_fmcg.png';
import industrialImg from '../../../assets/business_industrial.png';
import distributionImg from '../../../assets/business_distribution.png';

export default function BusinessDivisions() {
  const divisions = [
    {
      num: '01',
      badgeColor: 'bg-blue-600/10 text-blue-500 border-blue-500/20',
      title: 'Toys & Collectibles',
      heading: 'Collectibles That Inspire Passion',
      description: 'Premium toys and collectibles for enthusiasts, collectors and hobbyists. From die-cast models to scale miniatures, we bring excitement, precision and nostalgia together.',
      link: '/shop',
      image: toysImg,
      badgeText: 'Curated with precision. Made for true collectors.',
      badgeIcon: Trophy,
      features: [
        { label: 'Die-Cast Models', icon: Car },
        { label: 'Scale Collectibles', icon: Award },
        { label: 'Automotive Miniatures', icon: Car },
        { label: 'Collector Editions', icon: Star },
      ]
    },
    {
      num: '02',
      badgeColor: 'bg-emerald-600/10 text-emerald-500 border-emerald-500/20',
      title: 'FMCG & Wellness',
      heading: 'Wellness and Care, Rooted in Nature',
      description: 'Our wellness and FMCG range is built around natural ingredients, quality formulations and everyday care. Trusted by customers across India.',
      link: '/shop',
      image: fmcgImg,
      badgeText: 'Natural ingredients. Better living. Every day.',
      badgeIcon: Leaf,
      features: [
        { label: 'Natural Products', icon: Leaf },
        { label: 'Herbal & Wellness', icon: Sparkles },
        { label: 'Personal Care', icon: Heart },
        { label: 'FMCG Essentials', icon: ShoppingBag },
      ]
    },
    {
      num: '03',
      badgeColor: 'bg-blue-600/10 text-blue-500 border-blue-500/20',
      title: 'Industrial & Engineering Supplies',
      heading: 'Engineering Reliability. Powering Businesses.',
      description: 'High-quality industrial and engineering products that support performance, durability and efficiency across industries and infrastructure.',
      link: '/shop',
      image: industrialImg,
      badgeText: 'Built for performance. Engineered to last.',
      badgeIcon: ShieldCheck,
      features: [
        { label: 'Bearings & Power Transmission', icon: Settings },
        { label: 'Fasteners & Hardware', icon: Wrench },
        { label: 'Industrial Tools', icon: Settings },
        { label: 'Engineering Solutions', icon: ShieldCheck },
      ]
    },
    {
      num: '04',
      badgeColor: 'bg-emerald-600/10 text-emerald-500 border-emerald-500/20',
      title: 'Distribution & Trade Network',
      heading: 'Strong Network. Wider Impact.',
      description: 'Our distribution and trade network connects quality products with markets across India through trusted partnerships and reliable support.',
      link: '/shop',
      image: distributionImg,
      badgeText: 'Connecting products. Connecting businesses.',
      badgeIcon: Users,
      features: [
        { label: 'Distribution Support', icon: Truck },
        { label: 'Retail Expansion', icon: Store },
        { label: 'Product Sourcing', icon: Grid },
        { label: 'Strategic Partnerships', icon: Handshake },
      ]
    }
  ];

  return (
    <div className="mt-32 sm:mt-40">
      {/* Header Title */}
      <div className="flex flex-col items-center text-center space-y-4 mb-20 sm:mb-24">
        <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-blue-500 uppercase">
          Our Core Business Divisions
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Diverse Businesses. Unified by Trust.
        </h2>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
          RV Brothers operates across multiple industries, delivering quality products, 
          building partnerships and creating value at every step.
        </p>
        <div className="w-16 h-1 bg-blue-600 rounded-full mt-2"></div>
      </div>

      {/* Division Cards Stack */}
      <div className="space-y-24 sm:space-y-32">
        {divisions.map((div, idx) => {
          const isEven = idx % 2 === 1;
          const BadgeIcon = div.badgeIcon;
          return (
            <div
              key={idx}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center`}
            >
              {/* Text Details Block */}
              <div
                className={`lg:col-span-5 space-y-6 sm:space-y-8 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`text-xs font-bold border px-3 py-1.5 rounded-lg ${div.badgeColor}`}>
                    {div.num}
                  </div>
                  <span className="text-sm font-bold tracking-wider text-slate-400 uppercase">
                    {div.title}
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                    {div.heading}
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                    {div.description}
                  </p>
                </div>

                {/* Features Horizontal Grid */}
                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-900">
                  {div.features.map((feat, fidx) => {
                    const FeatIcon = feat.icon;
                    return (
                      <div key={fidx} className="flex gap-3 items-center">
                        <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-900 text-blue-500">
                          <FeatIcon className="w-4 h-4" />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-slate-300">
                          {feat.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Link */}
                <div className="pt-2">
                  <Link
                    to={div.link}
                    className="group inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 font-bold text-sm transition-colors cursor-pointer"
                  >
                    Explore This Division
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Image Grid Block */}
              <div
                className={`lg:col-span-7 relative group ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                {/* Shadow Backplate */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10 rounded-2xl sm:rounded-3xl blur-md -m-2" />
                
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-900/80 bg-slate-950/40 aspect-[4/3] sm:aspect-[16/10]">
                  <img
                    src={div.image}
                    alt={div.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto max-w-sm backdrop-blur-md bg-slate-950/70 border border-slate-800/80 rounded-xl sm:rounded-2xl p-4 flex gap-4 items-center shadow-2xl transition-all duration-300 group-hover:border-slate-700/50">
                    <div className="p-3 rounded-lg bg-blue-600/15 border border-blue-500/25 text-blue-400 flex-shrink-0">
                      <BadgeIcon className="w-5 h-5" />
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-slate-200 leading-snug">
                      {div.badgeText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
