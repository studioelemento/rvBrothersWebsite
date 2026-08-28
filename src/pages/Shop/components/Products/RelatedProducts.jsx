import React, { useState } from 'react';
import { 
  Heart, 
  ChevronLeft, 
  ChevronRight, 
  ShoppingBag 
} from 'lucide-react';

// Import assets
import queenVictoriaImg from '../../../../assets/queen_victoria_coin.jpg';
import coinBoxImg from '../../../../assets/british_coin_box.jpg';
import coinObverseImg from '../../../../assets/british_coin_obverse.jpg';
import coinReverseImg from '../../../../assets/british_coin_reverse.jpg';
import mustangGtImg from '../../../../assets/mustang_gt.png';
import ferrariGtbImg from '../../../../assets/ferrari_gtb.png';
import haircareComboImg from '../../../../assets/haircare_combo.png';
import aloeLotionImg from '../../../../assets/aloe_lotion.png';
import socketSetImg from '../../../../assets/socket_set.png';
import boltsNutsImg from '../../../../assets/bolts_nuts.png';
import engineOilImg from '../../../../assets/engine_oil.png';
import brakeDiscImg from '../../../../assets/brake_disc.png';

// Related items by product category
const RELATED_ITEMS_BY_CATEGORY = {
  'Toys & Collectibles': [
    {
      id: 101,
      category: 'Toys & Collectibles',
      subcategory: 'Coins',
      title: '1877 Queen Victoria Commemorative Coin',
      description: 'Stunning commemorative gold-patina proof coin from the British India collection.',
      price: 4499,
      image: queenVictoriaImg,
      images: [queenVictoriaImg]
    },
    {
      id: 102,
      category: 'Toys & Collectibles',
      subcategory: 'Coins',
      title: 'Heritage Coin Set (3 Pieces)',
      description: 'Exclusive velvet-boxed collection of rare coins from the late 19th century.',
      price: 6999,
      image: coinBoxImg,
      images: [coinBoxImg, coinObverseImg, coinReverseImg]
    },
    {
      id: 103,
      category: 'Toys & Collectibles',
      subcategory: 'Coins',
      title: 'Mahatma Gandhi Commemorative Coin',
      description: 'Silver-proof commemorative edition honoring the father of the nation.',
      price: 3299,
      image: coinObverseImg,
      images: [coinObverseImg, coinReverseImg]
    },
    {
      id: 104,
      category: 'Toys & Collectibles',
      subcategory: 'Coins',
      title: 'Republic India Premium Coin 1950',
      description: 'Intricately decorated post-independence historic rupee coin replica.',
      price: 5499,
      image: coinReverseImg,
      images: [coinReverseImg, coinObverseImg]
    },
    {
      id: 1,
      category: 'Toys & Collectibles',
      title: 'Maisto 1:18 2020 Ford Mustang GT',
      description: 'Die-cast Model Car',
      price: 4999,
      image: mustangGtImg,
      images: [mustangGtImg]
    },
    {
      id: 7,
      category: 'Toys & Collectibles',
      title: 'Bburago 1:24 Ferrari 488 GTB',
      description: 'Die-cast Model Car',
      price: 2199,
      image: ferrariGtbImg,
      images: [ferrariGtbImg]
    }
  ],
  'FMCG & Wellness': [
    {
      id: 2,
      category: 'FMCG & Wellness',
      title: 'Greenbae Hair Care Combo Pack',
      description: 'Shampoo + Hair Mask pack for healthy hair treatment.',
      price: 699,
      image: haircareComboImg,
      images: [haircareComboImg]
    },
    {
      id: 8,
      category: 'FMCG & Wellness',
      title: 'Greenbae Body Lotion Aloe Vera',
      description: 'Soothing body hydration lotion suitable for all skin types.',
      price: 349,
      image: aloeLotionImg,
      images: [aloeLotionImg]
    }
  ],
  'Hardware & Tools': [
    {
      id: 4,
      category: 'Hardware & Tools',
      title: 'Taparia 46 Pcs Socket Set (1/4")',
      description: 'Chrome Vanadium Steel sockets package.',
      price: 2450,
      image: socketSetImg,
      images: [socketSetImg]
    },
    {
      id: 10,
      category: 'Hardware & Tools',
      title: 'Stainless Steel Bolt & Nut Set',
      description: 'M6 - M12 hex set featuring 50 premium grade pieces.',
      price: 499,
      image: boltsNutsImg,
      images: [boltsNutsImg]
    }
  ],
  'Automotive': [
    {
      id: 11,
      category: 'Automotive',
      title: 'Castrol GTX 5W-30 Engine Oil (1L)',
      description: 'Synthetic engine protection lubricant.',
      price: 850,
      image: engineOilImg,
      images: [engineOilImg]
    },
    {
      id: 5,
      category: 'Automotive',
      title: 'Brembo Brake Disc (Front)',
      description: 'High Performance front ventilation brake rotor.',
      price: 3890,
      image: brakeDiscImg,
      images: [brakeDiscImg]
    }
  ]
};

const DEFAULT_FALLBACK_RELATED = [
  {
    id: 1,
    category: 'Toys & Collectibles',
    title: 'Maisto 1:18 2020 Ford Mustang GT',
    price: 4999,
    image: mustangGtImg,
    images: [mustangGtImg]
  },
  {
    id: 2,
    category: 'FMCG & Wellness',
    title: 'Greenbae Hair Care Combo Pack',
    price: 699,
    image: haircareComboImg,
    images: [haircareComboImg]
  },
  {
    id: 4,
    category: 'Hardware & Tools',
    title: 'Taparia 46 Pcs Socket Set (1/4")',
    price: 2450,
    image: socketSetImg,
    images: [socketSetImg]
  },
  {
    id: 8,
    category: 'FMCG & Wellness',
    title: 'Greenbae Body Lotion Aloe Vera',
    price: 349,
    image: aloeLotionImg,
    images: [aloeLotionImg]
  }
];

export default function RelatedProducts({ product, onSelectProduct }) {
  if (!product) return null;

  // Retrieve matching items excluding current product
  const rawItems = RELATED_ITEMS_BY_CATEGORY[product.category] || DEFAULT_FALLBACK_RELATED;
  const items = rawItems.filter(item => item.id !== product.id);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState({});

  const handleNext = () => {
    if (currentIndex + 4 < items.length) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const toggleFavorite = (id) => {
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleProductSelect = (selectedItem) => {
    if (onSelectProduct) {
      onSelectProduct(selectedItem);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Format currency
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  if (items.length === 0) return null;

  // Visible items slice (shows up to 4 items on desktop)
  const visibleItems = items.slice(currentIndex, currentIndex + 4);

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 w-full space-y-10 relative">
        
        {/* Header section with gold divider lines */}
        <div className="text-center max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-[1px] w-8 bg-[#b45309]/50" />
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-[#b45309] uppercase">
              You Might Also Like
            </span>
            <div className="h-[1px] w-8 bg-[#b45309]/50" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
            {product.category === 'Toys & Collectibles' ? 'Related Collectibles' : 'Related Products'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Explore more timeless pieces from our curated collection.
          </p>
        </div>

        {/* Carousel Slider Panel */}
        <div className="relative px-2 sm:px-10">
          
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 shadow-sm transition-all z-10 cursor-pointer ${
              currentIndex === 0 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-slate-50 hover:text-slate-900 active:scale-95'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Slider track displaying 4 cards responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visibleItems.map((item) => (
              <div 
                key={item.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white hover:border-blue-500/30 hover:shadow-lg transition-all duration-300 h-full p-4"
              >
                {/* Image card container */}
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-50/30 flex items-center justify-center mb-4">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  
                  {/* Wishlist Heart */}
                  <button
                    onClick={() => toggleFavorite(item.id)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-xs border border-slate-200 hover:border-red-500/50 hover:bg-red-50 text-slate-450 hover:text-red-500 transition-all duration-300 cursor-pointer z-10 shadow-xs"
                  >
                    <Heart className={`w-3.5 h-3.5 transition-transform active:scale-90 ${favorites[item.id] ? 'fill-red-500 text-red-500' : ''}`} />
                  </button>
                </div>

                {/* Details info */}
                <div className="flex-grow flex flex-col justify-between space-y-3">
                  <div className="space-y-1 text-left">
                    <span className="text-[9px] font-bold tracking-widest uppercase text-blue-600">
                      {item.category}
                    </span>
                    <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 line-clamp-2 min-h-[38px] group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Pricing and Action row */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-left">
                      <span className="text-sm font-black text-slate-950">
                        {formatPrice(item.price)}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600">
                        <span className="w-1 h-1 rounded-full bg-emerald-500" />
                        In Stock
                      </span>
                    </div>

                    <button
                      onClick={() => handleProductSelect(item)}
                      className="w-full flex items-center justify-center gap-2 bg-[#0a1128] hover:bg-[#121c3b] text-white font-bold py-2.5 rounded-xl transition-all cursor-pointer text-[11px] shadow-xs active:scale-98"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      View Product
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={currentIndex + 4 >= items.length}
            className={`absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 shadow-sm transition-all z-10 cursor-pointer ${
              currentIndex + 4 >= items.length ? 'opacity-40 cursor-not-allowed' : 'hover:bg-slate-50 hover:text-slate-900 active:scale-95'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

        {/* Carousel Pagination Dots */}
        {items.length > 4 && (
          <div className="flex justify-center gap-1.5 pt-2">
            {Array.from({ length: items.length - 3 }).map((_, dIdx) => (
              <button
                key={dIdx}
                onClick={() => setCurrentIndex(dIdx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === dIdx ? 'bg-blue-900 scale-125 w-4' : 'bg-slate-200 hover:bg-slate-300'
                }`}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
