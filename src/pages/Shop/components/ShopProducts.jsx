import React, { useState } from 'react';
import { 
  Heart, 
  ShoppingCart, 
  ShieldCheck, 
  Package, 
  Truck, 
  Headphones, 
  LayoutGrid, 
  List, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight 
} from 'lucide-react';

import mustangGtImg from "../../../assets/mustang_gt.png";
import haircareComboImg from "../../../assets/haircare_combo.png";
import ballBearingImg from "../../../assets/ball_bearing.png";
import socketSetImg from "../../../assets/socket_set.png";
import brakeDiscImg from "../../../assets/brake_disc.png";
import businessNotebookImg from "../../../assets/business_notebook.png";
import ferrariGtbImg from "../../../assets/ferrari_gtb.png";
import aloeLotionImg from "../../../assets/aloe_lotion.png";
import helicalGearboxImg from "../../../assets/helical_gearbox.png";
import boltsNutsImg from "../../../assets/bolts_nuts.png";
import engineOilImg from "../../../assets/engine_oil.png";
import packagingTapeImg from "../../../assets/packaging_tape.png";

// eslint-disable-next-line react-refresh/only-export-components
export const INITIAL_PRODUCTS = [
  {
    id: 1,
    category: 'Toys & Collectibles',
    title: 'Maisto 1:18 2020 Ford Mustang GT',
    description: 'Die-cast Model Car',
    price: 4999,
    badge: 'New',
    badgeType: 'new',
    image: mustangGtImg,
  },
  {
    id: 2,
    category: 'FMCG & Wellness',
    title: 'Greenbae Hair Care Combo Pack',
    description: 'Shampoo + Hair Mask',
    price: 699,
    badge: 'Bestseller',
    badgeType: 'bestseller',
    image: haircareComboImg,
  },
  {
    id: 3,
    category: 'Industrial Supplies',
    title: 'Deep Groove Ball Bearing 6205',
    description: 'High Performance',
    price: 210,
    badge: null,
    image: ballBearingImg,
  },
  {
    id: 4,
    category: 'Hardware & Tools',
    title: 'Taparia 46 Pcs Socket Set (1/4")',
    description: 'Chrome Vanadium Steel',
    price: 2450,
    badge: 'Popular',
    badgeType: 'popular',
    image: socketSetImg,
  },
  {
    id: 5,
    category: 'Automotive',
    title: 'Brembo Brake Disc (Front)',
    description: 'High Performance',
    price: 3890,
    badge: null,
    image: brakeDiscImg,
  },
  {
    id: 6,
    category: 'Business Essentials',
    title: 'Premium Business Notebook',
    description: 'A5 Size • Hard Bound',
    price: 299,
    badge: null,
    image: businessNotebookImg,
  },
  {
    id: 7,
    category: 'Toys & Collectibles',
    title: 'Bburago 1:24 Ferrari 488 GTB',
    description: 'Die-cast Model Car',
    price: 2199,
    badge: null,
    image: ferrariGtbImg,
  },
  {
    id: 8,
    category: 'FMCG & Wellness',
    title: 'Greenbae Body Lotion Aloe Vera',
    description: 'For All Skin Types',
    price: 349,
    badge: null,
    image: aloeLotionImg,
  },
  {
    id: 9,
    category: 'Industrial Supplies',
    title: 'Helical Gearbox SMR 30',
    description: 'High Efficiency',
    price: 8750,
    badge: null,
    image: helicalGearboxImg,
  },
  {
    id: 10,
    category: 'Hardware & Tools',
    title: 'Stainless Steel Bolt & Nut Set',
    description: 'M6 - M12 • 50 Pcs',
    price: 499,
    badge: null,
    image: boltsNutsImg,
  },
  {
    id: 11,
    category: 'Automotive',
    title: 'Castrol GTX 5W-30 Engine Oil (1L)',
    description: 'Synthetic Technology',
    price: 850,
    badge: null,
    image: engineOilImg,
  },
  {
    id: 12,
    category: 'Business Essentials',
    title: 'Packaging Tape (Brown)',
    description: '48mm x 40m',
    price: 119,
    badge: null,
    image: packagingTapeImg,
  }
];

const CATEGORIES = [
  'All',
  'Toys & Collectibles',
  'FMCG & Wellness',
  'Industrial Supplies',
  'Hardware & Tools',
  'Automotive',
  'Business Essentials'
];

export default function ShopProducts({ onSelectProduct }) {
  const [products] = useState(INITIAL_PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [favorites, setFavorites] = useState({});
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);

  // Toggle favorite status
  const toggleFavorite = (productId) => {
    setFavorites(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  // Filter products by category
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  // Format currency in Indian Rupees format (₹)
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  // Helper for category label colors (matching the unified theme color)
  const getCategoryColor = (_category) => {
    return 'text-blue-600';
  };

  return (
    <div className="w-full space-y-12">
      {/* 1. Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-slate-200">
        <div className="max-w-2xl space-y-4">
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-blue-600 uppercase">
            Our Products
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Quality Products.<br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Trusted by Thousands.
            </span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Explore our wide range of products across collectibles, wellness, industrial, automotive and more.
          </p>
        </div>

        {/* Features badges row matching the reference image layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:flex-row items-center gap-6">
          <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm">
            <div className="p-2.5 rounded-full border border-blue-600/30 text-blue-600 bg-blue-50/50">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-tight">100% Genuine</p>
              <p className="text-[10px] text-slate-500">Authentic & Quality Assured</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm">
            <div className="p-2.5 rounded-full border border-indigo-600/30 text-indigo-600 bg-indigo-50/50">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-tight">Secure Packaging</p>
              <p className="text-[10px] text-slate-500">Safe & Reliable Packaging</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm">
            <div className="p-2.5 rounded-full border border-blue-600/30 text-blue-600 bg-blue-50/50">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-tight">Fast Delivery</p>
              <p className="text-[10px] text-slate-500">Across India On Time</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm">
            <div className="p-2.5 rounded-full border border-purple-600/30 text-purple-600 bg-purple-50/50">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-tight">Dedicated Support</p>
              <p className="text-[10px] text-slate-500">Here to Help You Always</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Category Filters Navigation */}
      <div className="flex flex-wrap gap-2 md:gap-3 overflow-x-auto pb-2 scrollbar-thin">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap cursor-pointer transition-all duration-300 ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20 scale-105'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3. Product Display Grid/List - 6-column grid on large screens */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white hover:border-blue-500/30 hover:shadow-lg transition-all duration-300 h-full p-4"
            >
              {/* Card Image Container */}
              <div 
                onClick={() => onSelectProduct && onSelectProduct(prod)}
                className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-50/30 flex items-center justify-center mb-4 cursor-pointer"
              >
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="w-full h-full object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Badge Overlay */}
                {prod.badge && (
                  <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider text-white shadow-sm z-10 ${
                    prod.badgeType === 'new' ? 'bg-red-600' :
                    prod.badgeType === 'bestseller' ? 'bg-emerald-600' :
                    'bg-amber-600'
                  }`}>
                    {prod.badge}
                  </span>
                )}

                {/* Wishlist Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(prod.id);
                  }}
                  className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-xs border border-slate-200 hover:border-red-500/50 hover:bg-red-50 text-slate-400 hover:text-red-500 transition-all duration-300 cursor-pointer z-10"
                >
                  <Heart className={`w-4 h-4 transition-transform active:scale-95 ${favorites[prod.id] ? 'fill-red-500 text-red-500' : ''}`} />
                </button>
              </div>

              {/* Card Meta & Titles */}
              <div className="flex-1 flex flex-col justify-between space-y-2">
                <div 
                  onClick={() => onSelectProduct && onSelectProduct(prod)}
                  className="space-y-1 cursor-pointer"
                >
                  <span className={`text-[10px] font-bold tracking-wider uppercase ${getCategoryColor(prod.category)}`}>
                    {prod.category}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 min-h-[40px] leading-tight">
                    {prod.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-1">
                    {prod.description}
                  </p>
                </div>

                {/* Pricing & Add to Cart (Light Blue cart button matching reference image) */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <div className="flex flex-col">
                    <span className="text-base font-extrabold text-slate-900">
                      {formatPrice(prod.price)}
                    </span>
                  </div>
                  <button className="p-2.5 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 transform active:scale-95 cursor-pointer">
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // List View Mode
        <div className="flex flex-col gap-4">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="group relative flex flex-col sm:flex-row items-center gap-6 overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-blue-500/30 hover:shadow-lg transition-all duration-300 p-4"
            >
              {/* Image box */}
              <div 
                onClick={() => onSelectProduct && onSelectProduct(prod)}
                className="relative aspect-square w-full sm:w-40 flex-shrink-0 overflow-hidden rounded-xl bg-slate-50/30 flex items-center justify-center cursor-pointer"
              >
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="w-full h-full object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Badge Overlay */}
                {prod.badge && (
                  <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider text-white shadow-sm z-10 ${
                    prod.badgeType === 'new' ? 'bg-red-600' :
                    prod.badgeType === 'bestseller' ? 'bg-emerald-600' :
                    'bg-amber-600'
                  }`}>
                    {prod.badge}
                  </span>
                )}
              </div>

              {/* Information Row */}
              <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4">
                <div 
                  onClick={() => onSelectProduct && onSelectProduct(prod)}
                  className="space-y-2 cursor-pointer flex-1"
                >
                  <span className={`text-[10px] font-bold tracking-wider uppercase ${getCategoryColor(prod.category)}`}>
                    {prod.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {prod.title}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {prod.description}
                  </p>
                </div>

                <div className="flex items-center gap-6 justify-between sm:justify-end border-t sm:border-t-0 pt-4 sm:pt-0 border-slate-100">
                  <div className="flex flex-col sm:text-right">
                    <span className="text-xl font-extrabold text-slate-900">
                      {formatPrice(prod.price)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(prod.id);
                      }}
                      className="p-3 rounded-xl bg-white border border-slate-200 hover:border-red-500/50 hover:bg-red-50 text-slate-400 hover:text-red-500 transition-all duration-300 cursor-pointer"
                    >
                      <Heart className={`w-4 h-4 transition-transform active:scale-95 ${favorites[prod.id] ? 'fill-red-500 text-red-500' : ''}`} />
                    </button>
                    <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 font-semibold transition-all duration-300 transform active:scale-95 cursor-pointer">
                      <ShoppingCart className="w-4 h-4" />
                      <span className="text-xs">Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 4. Bottom Controls / Pagination Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-200">
        {/* Grid/List View Toggles */}
        <div className="flex items-center gap-1.5 bg-slate-100 border border-slate-200/60 p-1 rounded-xl">
          <button
            onClick={() => setViewMode('grid')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              viewMode === 'grid'
                ? 'bg-white text-slate-800 shadow-xs border border-slate-200/60'
                : 'text-slate-500 hover:text-slate-850'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            View as Grid
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              viewMode === 'list'
                ? 'bg-white text-slate-800 shadow-xs border border-slate-200/60'
                : 'text-slate-500 hover:text-slate-850'
            }`}
          >
            <List className="w-3.5 h-3.5" />
            View as List
          </button>
        </div>

        {/* Pagination buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentPage === page
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-105'
                  : 'border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {page}
            </button>
          ))}
          
          <span className="text-slate-400 text-xs px-1">...</span>

          <button
            onClick={() => setCurrentPage(15)}
            className={`w-10 h-10 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              currentPage === 15
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-105'
                : 'border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
          >
            15
          </button>

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, 15))}
            className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* View All Products Action */}
        <button className="group flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 font-semibold px-5 py-3 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer">
          <span className="text-xs">View All Products</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
