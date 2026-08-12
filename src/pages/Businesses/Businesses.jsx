import React from 'react';
import { Link } from 'react-router-dom';
import {
  Car,
  Leaf,
  Settings,
  Truck,
  Calendar,
  Grid,
  MapPin,
  Handshake,
  ShieldCheck,
  ArrowRight,
  ChevronRight,
  Trophy,
  Users,
  Star,
  Sparkles,
  ShoppingBag,
  Heart,
  Wrench,
  Store,
  Briefcase,
  Award,
  Factory,
  Check,
  Phone,
  ShoppingCart
} from 'lucide-react';

// Import assets
import toysImg from '../../assets/business_toys.png';
import fmcgImg from '../../assets/business_fmcg.png';
import industrialImg from '../../assets/business_industrial.png';
import distributionImg from '../../assets/business_distribution.png';

export default function Business() {
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

  const partnerships = [
    {
      title: 'Distributors',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
      icon: Truck,
      description: 'Expand your portfolio with trusted products and strong brand support.',
      bullets: [
        'Competitive margins',
        'Marketing & product support',
        'Reliable supply & timely delivery'
      ],
      linkText: 'Become a Distributor',
      link: '/contact'
    },
    {
      title: 'Retailers & Resellers',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80',
      icon: ShoppingCart,
      description: 'Grow your business with in-demand products across multiple categories.',
      bullets: [
        'Wide product range',
        'Best-in-class quality',
        'Consistent availability'
      ],
      linkText: 'Partner as Retailer / Reseller',
      link: '/contact'
    },
    {
      title: 'Manufacturers',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
      icon: Factory,
      description: 'Collaborate with us to distribute and scale your products across markets.',
      bullets: [
        'Pan India distribution network',
        'Brand visibility & growth',
        'Strategic collaboration'
      ],
      linkText: 'Partner as Manufacturer',
      link: '/contact'
    },
    {
      title: 'Institutional Buyers',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
      icon: Briefcase,
      description: 'Bulk purchasing solutions tailored for your organizational needs.',
      bullets: [
        'Customized solutions',
        'Priority support',
        'Reliable & on-time fulfillment'
      ],
      linkText: 'Partner as Institutional Buyer',
      link: '/contact'
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#020617] text-slate-100 overflow-hidden flex flex-col justify-between pt-8 pb-16">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-blue-950/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 w-[600px] h-[600px] bg-indigo-950/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
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

        {/* 3. Bottom Metrics / Features Bar */}
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

        {/* 4. Core Business Divisions Section */}
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

        {/* 5. Partnership Opportunities Section */}
        <div className="mt-32 sm:mt-40">
          {/* Header Title */}
          <div className="flex flex-col items-center text-center space-y-4 mb-20 sm:mb-24">
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-blue-500 uppercase">
              Partnership Opportunities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Business Partnerships That Scale
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              We collaborate with businesses, entrepreneurs and organizations 
              to create value, expand reach and build long-term growth together.
            </p>
            <div className="w-16 h-1 bg-blue-600 rounded-full mt-2"></div>
          </div>

          {/* Partnership Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerships.map((partner, idx) => {
              const PartnerIcon = partner.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col h-full bg-slate-950/40 border border-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 hover:border-slate-800/80 hover:-translate-y-1 group"
                >
                  {/* Top Image & Floating Icon */}
                  <div className="relative aspect-[16/10]">
                    <div className="w-full h-full overflow-hidden rounded-t-2xl sm:rounded-t-3xl relative">
                      <img
                        src={partner.image}
                        alt={partner.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                    </div>
                    
                    {/* Floating Circular Icon */}
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border border-blue-500/35 bg-[#030712] text-blue-400 flex items-center justify-center shadow-lg shadow-[#000]/60 z-20 transition-transform duration-300 group-hover:scale-110 group-hover:border-blue-400/50">
                      <PartnerIcon className="w-5.5 h-5.5 text-blue-400" />
                    </div>
                  </div>

                  {/* Details Block */}
                  <div className="flex-1 flex flex-col pt-10 pb-6 px-6 sm:px-8 text-center justify-between">
                    <div className="space-y-4">
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {partner.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed min-h-[48px]">
                        {partner.description}
                      </p>
                      
                      {/* Checkmarks Checklist */}
                      <ul className="space-y-2.5 text-left border-t border-slate-900/60 pt-4 max-w-[200px] mx-auto">
                        {partner.bullets.map((bullet, bidx) => (
                          <li key={bidx} className="flex gap-2 items-start text-xs text-slate-300">
                            <Check className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6">
                      <Link
                        to={partner.link}
                        className="group inline-flex items-center gap-1.5 text-blue-500 hover:text-blue-400 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
                      >
                        {partner.linkText}
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Let's Build Success Together CTA Banner */}
          <div className="mt-16 relative overflow-hidden bg-slate-950/30 backdrop-blur-sm border border-slate-900/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-2xl">
            {/* Left: Headline & details */}
            <div className="flex gap-5 items-center w-full lg:w-auto text-left">
              <div className="p-4 rounded-full border border-blue-500/20 bg-blue-950/10 text-blue-500 shadow-md flex-shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-extrabold text-base sm:text-lg text-white">
                  Let's Build Success Together
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light max-w-xl">
                  Join hands with RV Brothers and unlock new opportunities for growth, expansion and long-term success.
                </p>
              </div>
            </div>

            {/* Right Side buttons & contacts */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center w-full lg:w-auto justify-end divide-y sm:divide-y-0 sm:divide-x divide-slate-900/85">
              <Link
                to="/contact"
                className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-blue-600/20 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto text-center justify-center"
              >
                Discuss Partnership Opportunities
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <div className="flex items-center gap-4 w-full sm:w-auto justify-center pt-6 sm:pt-0 sm:pl-8">
                <div className="p-3 rounded-full border border-slate-800/80 bg-slate-900/40 text-blue-500 shadow-sm flex-shrink-0">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    Have questions?
                  </span>
                  <span className="block text-sm font-extrabold text-white mt-0.5 whitespace-nowrap">
                    +91 12345 67890
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6. Vision and Stats Footer */}
        <div className="mt-32 sm:mt-40 border-t border-slate-900 pt-16">
          <div className="relative overflow-hidden bg-slate-950/30 backdrop-blur-sm border border-slate-900/80 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col lg:flex-row gap-10 lg:gap-16 items-center justify-between">
            {/* Left: Mission statement */}
            <div className="flex gap-5 items-start max-w-xl">
              <div className="p-4 rounded-full border border-blue-500/20 bg-blue-950/10 text-blue-500 shadow-md">
                <Users className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h4 className="font-extrabold text-base sm:text-lg text-white">
                  One Vision. Multiple Strengths.
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                  Different industries. One commitment — delivering value, building trust and growing together.
                </p>
              </div>
            </div>

            {/* Right: Numbers stats */}
            <div className="grid grid-cols-3 gap-6 sm:gap-12 w-full lg:w-auto divide-x divide-slate-900">
              <div className="text-center px-4">
                <span className="block text-2xl sm:text-3.5xl font-black text-white bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  4+
                </span>
                <span className="block text-[10px] sm:text-xs text-slate-400 tracking-wider font-bold mt-1 uppercase">
                  Core Business Divisions
                </span>
              </div>
              <div className="text-center px-4">
                <span className="block text-2xl sm:text-3.5xl font-black text-white bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  1000+
                </span>
                <span className="block text-[10px] sm:text-xs text-slate-400 tracking-wider font-bold mt-1 uppercase">
                  Products Across Categories
                </span>
              </div>
              <div className="text-center px-4">
                <span className="block text-2xl sm:text-3.5xl font-black text-white bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  5000+
                </span>
                <span className="block text-[10px] sm:text-xs text-slate-400 tracking-wider font-bold mt-1 uppercase">
                  Happy Business Partners
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
