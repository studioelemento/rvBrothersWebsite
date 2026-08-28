import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, ShoppingCart, Factory, Briefcase, Check, ArrowRight, Users, Phone } from 'lucide-react';

export default function BusinessPartnerships() {
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
    <div className="mt-32 sm:mt-40">
      {/* Header Title */}
      <div className="flex flex-col items-center text-center space-y-4 mb-20 sm:mb-24">
        <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-blue-600 uppercase">
          Partnership Opportunities
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Business Partnerships That Scale
        </h2>
        <p className="text-slate-650 text-base sm:text-lg max-w-2xl leading-relaxed">
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
              className="flex flex-col h-full bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 hover:border-slate-300 hover:-translate-y-1 group shadow-xs"
            >
              {/* Top Image & Floating Icon */}
              <div className="relative aspect-[16/10]">
                <div className="w-full h-full overflow-hidden rounded-t-2xl sm:rounded-t-3xl relative">
                  <img
                    src={partner.image}
                    alt={partner.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                </div>
                
                {/* Floating Circular Icon */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border border-blue-100 bg-white text-blue-600 flex items-center justify-center shadow-md z-20 transition-transform duration-300 group-hover:scale-110 group-hover:border-blue-200">
                  <PartnerIcon className="w-5.5 h-5.5 text-blue-600" />
                </div>
              </div>

              {/* Details Block */}
              <div className="flex-1 flex flex-col pt-10 pb-6 px-6 sm:px-8 text-center justify-between">
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {partner.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed min-h-[48px]">
                    {partner.description}
                  </p>
                  
                  {/* Checkmarks Checklist */}
                  <ul className="space-y-2.5 text-left border-t border-slate-100 pt-4 max-w-[200px] mx-auto">
                    {partner.bullets.map((bullet, bidx) => (
                      <li key={bidx} className="flex gap-2 items-start text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <Link
                    to={partner.link}
                    className="group inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-500 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
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
      <div className="mt-16 relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-sm">
        {/* Left: Headline & details */}
        <div className="flex gap-5 items-center w-full lg:w-auto text-left">
          <div className="p-4 rounded-full border border-blue-100 bg-blue-50 text-blue-600 shadow-xs flex-shrink-0">
            <Users className="w-6 h-6" />
          </div>
          <div className="space-y-1.5">
            <h3 className="font-extrabold text-base sm:text-lg text-slate-900">
              Let's Build Success Together
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light max-w-xl">
              Join hands with RV Brothers and unlock new opportunities for growth, expansion and long-term success.
            </p>
          </div>
        </div>

        {/* Right Side buttons & contacts */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center w-full lg:w-auto justify-end divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          <Link
            to="/contact"
            className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-blue-600/20 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto text-center justify-center"
          >
            Discuss Partnership Opportunities
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <div className="flex items-center gap-4 w-full sm:w-auto justify-center pt-6 sm:pt-0 sm:pl-8">
            <div className="p-3 rounded-full border border-slate-200 bg-slate-50 text-blue-600 shadow-xs flex-shrink-0">
              <Phone className="w-4.5 h-4.5" />
            </div>
            <div className="text-left">
              <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                Have questions?
              </span>
              <span className="block text-sm font-extrabold text-slate-900 mt-0.5 whitespace-nowrap">
                +91 12345 67890
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Vision and Stats Footer */}
      <div className="mt-32 sm:mt-40 border-t border-slate-200 pt-16">
        <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-sm flex flex-col lg:flex-row gap-10 lg:gap-16 items-center justify-between">
          {/* Left: Mission statement */}
          <div className="flex gap-5 items-start max-w-xl">
            <div className="p-4 rounded-full border border-blue-100 bg-blue-50 text-blue-600 shadow-xs">
              <Users className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h4 className="font-extrabold text-base sm:text-lg text-slate-900">
                One Vision. Multiple Strengths.
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light">
                Different industries. One commitment — delivering value, building trust and growing together.
              </p>
            </div>
          </div>

          {/* Right: Numbers stats */}
          <div className="grid grid-cols-3 gap-6 sm:gap-12 w-full lg:w-auto divide-x divide-slate-200">
            <div className="text-center px-4">
              <span className="block text-2xl sm:text-3.5xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                4+
              </span>
              <span className="block text-[10px] sm:text-xs text-slate-500 tracking-wider font-bold mt-1 uppercase">
                Core Business Divisions
              </span>
            </div>
            <div className="text-center px-4">
              <span className="block text-2xl sm:text-3.5xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                1000+
              </span>
              <span className="block text-[10px] sm:text-xs text-slate-500 tracking-wider font-bold mt-1 uppercase">
                Products Across Categories
              </span>
            </div>
            <div className="text-center px-4">
              <span className="block text-2xl sm:text-3.5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                5000+
              </span>
              <span className="block text-[10px] sm:text-xs text-slate-500 tracking-wider font-bold mt-1 uppercase">
                Happy Business Partners
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
