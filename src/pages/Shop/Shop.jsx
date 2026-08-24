import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ShopProducts from './components/ShopProducts';
import ShopMarketplace from './components/ShopMarketplace';
import ShopBusiness from './components/ShopBusiness';

export default function Shop() {
  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-slate-800 overflow-hidden flex flex-col justify-between pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Breadcrumbs Navigation */}
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-8 sm:mb-12">
          <Link to="/" className="hover:text-slate-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-600">Shop</span>
        </nav>

        {/* Products Grid Component */}
        <ShopProducts />

        {/* Marketplace Presence Component */}
        <ShopMarketplace />

        {/* Business Procurement Component */}
        <ShopBusiness />
      </div>
    </div>
  );
}
