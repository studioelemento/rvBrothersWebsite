<<<<<<< HEAD
import React, { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
>>>>>>> 8d5a7f143c8eb222d696dd51d8c59f0da9988b3c
import { ChevronRight } from 'lucide-react';
import ShopProducts, { INITIAL_PRODUCTS } from './components/ShopProducts';
import ShopMarketplace from './components/ShopMarketplace';
import ShopBusiness from './components/ShopBusiness';
import SingleProductHero from './components/Products/SingleProductHero';

export default function Shop() {
<<<<<<< HEAD
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productIdParam = searchParams.get('product');
  const prevProductIdParamRef = useRef(null);

  useEffect(() => {
    const prevProductIdParam = prevProductIdParamRef.current;

    if (productIdParam) {
      const prodId = parseInt(productIdParam, 10);
      const foundProduct = INITIAL_PRODUCTS.find(p => p.id === prodId);
      if (foundProduct) {
        setSelectedProduct(foundProduct);
        // Scroll to top for product view
        window.scrollTo(0, 0);
      } else {
        setSelectedProduct(null);
      }
    } else {
      setSelectedProduct(null);
      // When going back to the catalog from a product detail, restore scroll position
      if (prevProductIdParam) {
        const savedScroll = sessionStorage.getItem('shop_scroll_pos');
        if (savedScroll) {
          // Use setTimeout to ensure the DOM has rendered the catalog list
          setTimeout(() => {
            window.scrollTo({
              top: parseInt(savedScroll, 10),
              behavior: 'instant'
            });
          }, 50);
        }
      }
    }
    // Track previous value
    prevProductIdParamRef.current = productIdParam;
  }, [productIdParam]);

  const handleSelectProduct = (prod) => {
    // Only save scroll position if we are currently on the catalog page
    if (!searchParams.get('product')) {
      sessionStorage.setItem('shop_scroll_pos', window.scrollY);
    }
    setSearchParams({ product: prod.id });
  };

  const handleBackToCatalog = () => {
    setSearchParams({});
=======
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleBackToCatalog = () => {
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
>>>>>>> 8d5a7f143c8eb222d696dd51d8c59f0da9988b3c
  };

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-slate-800 overflow-hidden flex flex-col justify-between pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Render Single Product view or standard grid */}
        {selectedProduct ? (
          <SingleProductHero 
            product={selectedProduct} 
            onBack={handleBackToCatalog} 
<<<<<<< HEAD
            onSelectProduct={handleSelectProduct}
=======
            onSelectProduct={setSelectedProduct}
>>>>>>> 8d5a7f143c8eb222d696dd51d8c59f0da9988b3c
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
<<<<<<< HEAD
            <ShopProducts onSelectProduct={handleSelectProduct} />
=======
            <ShopProducts onSelectProduct={setSelectedProduct} />
>>>>>>> 8d5a7f143c8eb222d696dd51d8c59f0da9988b3c

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
