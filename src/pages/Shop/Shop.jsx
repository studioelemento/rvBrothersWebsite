import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ShopProducts from './components/ShopProducts';
import ShopMarketplace from './components/ShopMarketplace';
import ShopBusiness from './components/ShopBusiness';
import SingleProductHero from './components/Products/SingleProductHero';

export default function Shop() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleBackToCatalog = () => {
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-slate-800 overflow-hidden flex flex-col justify-between pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Render Single Product view or standard grid */}
        {selectedProduct ? (
          <SingleProductHero 
            product={selectedProduct} 
            onBack={handleBackToCatalog} 
            onSelectProduct={setSelectedProduct}
            onAddToCart={(prod) => console.log('Add to cart:', prod)}
          />
        ) : (
          <>
            {/* Breadcrumbs Navigation */}
            <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-8 sm:mb-12">
              <Link to="/" className="hover:text-slate-655 transition-colors font-semibold">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-650 font-bold">Shop</span>
            </nav>

            {/* Products Grid Component */}
            <ShopProducts onSelectProduct={setSelectedProduct} />

            {/* Marketplace Presence Component */}
            <ShopMarketplace />

            {/* Business Procurement Component */}
            <ShopBusiness />
          </>
        )}
      </div>
    </div>
  );
}
