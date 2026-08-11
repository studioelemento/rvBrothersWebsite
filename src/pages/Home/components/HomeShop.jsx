import React, { useState, useRef } from "react";
import {
  Star,
  Heart,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  Tag,
  ArrowRight,
  Car,
  Leaf,
  Settings,
  Sparkles,
  Check,
} from "lucide-react";

import g63Img from "../../../assets/product_g63.png";
import aloeImg from "../../../assets/business_fmcg.png";
import bearingImg from "../../../assets/business_industrial.png";
import lamborghiniImg from "../../../assets/business_toys.png";
import herbalImg from "../../../assets/business_fmcg.png";

export default function Product() {
  const [activeTab, setActiveTab] = useState("All Products");
  const [wishlist, setWishlist] = useState({});
  const [toastMessage, setToastMessage] = useState(null);
  const scrollContainerRef = useRef(null);

  const categories = [
    { name: "All Products", icon: Sparkles },
    { name: "Toys & Collectibles", icon: Car },
    { name: "FMCG & Wellness", icon: Leaf },
    { name: "Industrial & Engineering", icon: Settings },
    { name: "Accessories", icon: Tag },
  ];

  const products = [
    {
      id: 1,
      title: "Mercedes-Benz G 63 AMG 1:18 Scale Die-Cast Model",
      category: "Toys & Collectibles",
      categoryColor: "bg-blue-50 text-blue-600",
      price: "₹4,999",
      rating: 5,
      reviews: 128,
      image: g63Img,
      badge: "New",
    },
    {
      id: 2,
      title: "Greenbae Aloe Vera Gel 200ml",
      category: "FMCG & Wellness",
      categoryColor: "bg-emerald-50 text-emerald-600",
      price: "₹299",
      rating: 5,
      reviews: 96,
      image: aloeImg,
    },
    {
      id: 3,
      title: "Deep Groove Ball Bearing 6205 (Pack of 2)",
      category: "Industrial & Engineering",
      categoryColor: "bg-indigo-50 text-indigo-600",
      price: "₹180",
      rating: 5,
      reviews: 84,
      image: bearingImg,
    },
    {
      id: 4,
      title: "Lamborghini Huracán EVO 1:18 Scale Model",
      category: "Toys & Collectibles",
      categoryColor: "bg-blue-50 text-blue-600",
      price: "₹4,499",
      rating: 5,
      reviews: 73,
      image: lamborghiniImg,
    },
    {
      id: 5,
      title: "Greenbae Hair Care Herbal Powder 100g",
      category: "FMCG & Wellness",
      categoryColor: "bg-emerald-50 text-emerald-600",
      price: "₹249",
      rating: 5,
      reviews: 68,
      image: herbalImg,
    },
  ];

  const filteredProducts =
    activeTab === "All Products"
      ? products
      : products.filter(
          (p) =>
            p.category === activeTab ||
            (activeTab === "Accessories" &&
              p.category === "Industrial & Engineering"),
        );

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleAddToCart = (productTitle) => {
    setToastMessage(`Added "${productTitle}" to cart!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section
      id="shop"
      className="w-full bg-[#F8FAFC] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 font-sans border-t border-b border-slate-200/60 relative"
    >
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl border border-slate-800 flex items-center gap-3 animate-bounce">
          <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Check className="w-4 h-4" />
          </div>
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        {/* 1. TOP BADGE */}
        <div className="text-center mb-2">
          <span className="text-blue-600 font-bold text-xs tracking-[0.25em] uppercase">
            OUR PICKS
          </span>
        </div>

        {/* 2. SECTION HEADING */}
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
          Featured Products
        </h2>

        {/* 3. SUBHEADING */}
        <p className="text-center text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
          Handpicked quality products from our diverse range of categories.{" "}
          <br className="hidden sm:block" />
          Built for quality. Chosen for you.
        </p>

        {/* 4. CATEGORY TABS & CAROUSEL NAVIGATION ROW */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 w-full md:w-auto">
            {categories.map((cat) => {
              const TabIcon = cat.icon;
              const isActive = activeTab === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveTab(cat.name)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/20 font-semibold"
                      : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80 shadow-2xs"
                  }`}
                >
                  <TabIcon
                    className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-slate-500"}`}
                  />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Carousel Arrows */}
          <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
            <button
              onClick={scrollLeft}
              aria-label="Scroll Left"
              className="w-9 h-9 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-600 hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900 transition-all shadow-2xs cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollRight}
              aria-label="Scroll Right"
              className="w-9 h-9 rounded-full border border-blue-500 bg-white flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-all shadow-2xs cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 5. PRODUCT CARDS GRID / CAROUSEL */}
        <div
          ref={scrollContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12 overflow-x-auto scrollbar-none scroll-smooth pb-2"
        >
          {filteredProducts.map((product) => {
            const isWishlisted = wishlist[product.id];
            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                {/* Product Image & Badge Container */}
                <div className="relative h-48 sm:h-52 w-full bg-slate-100/70 overflow-hidden p-4 flex items-center justify-center">
                  {/* Floating Badge (e.g., "New") */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-xs z-10 uppercase tracking-wider">
                      {product.badge}
                    </div>
                  )}

                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out rounded-xl"
                  />
                </div>

                {/* Product Details */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category Tag */}
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-md text-[11px] font-semibold mb-2.5 ${product.categoryColor}`}
                    >
                      {product.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-slate-900 font-bold text-sm leading-snug line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors">
                      {product.title}
                    </h3>

                    {/* Star Rating & Reviews */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 text-amber-400 fill-amber-400"
                        />
                      ))}
                      <span className="text-slate-400 text-xs font-medium ml-1">
                        ({product.reviews})
                      </span>
                    </div>
                  </div>

                  {/* Price & Action Buttons */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <span className="text-slate-900 font-extrabold text-lg sm:text-xl tracking-tight">
                      {product.price}
                    </span>

                    <div className="flex items-center gap-2">
                      {/* Wishlist Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleWishlist(product.id);
                        }}
                        aria-label="Wishlist"
                        className={`p-2 rounded-full transition-colors cursor-pointer ${
                          isWishlisted
                            ? "text-red-500 bg-red-50"
                            : "text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        <Heart
                          className={`w-4 h-4 ${isWishlisted ? "fill-red-500" : ""}`}
                        />
                      </button>

                      {/* Add to Cart Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToCart(product.title);
                        }}
                        aria-label="Add to Cart"
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center transition-all duration-300 shadow-md shadow-blue-600/20 active:scale-95 cursor-pointer"
                      >
                        <ShoppingCart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 6. BOTTOM BANNER */}
        <div className="w-full bg-[#050C1E] rounded-2xl border border-slate-800/90 p-6 sm:p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl relative overflow-hidden">
          {/* Subtle Background Bag Graphic Watermark */}
          <div className="absolute right-[-20px] bottom-[-30px] opacity-10 pointer-events-none text-blue-400 hidden lg:block">
            <svg
              className="w-64 h-64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 01-8 0"></path>
            </svg>
          </div>

          {/* Left Content */}
          <div className="flex items-center gap-4 text-center sm:text-left z-10">
            <div className="w-12 h-12 rounded-full bg-blue-950/80 border border-blue-500/30 flex items-center justify-center text-blue-400 flex-shrink-0 shadow-md">
              <Tag className="w-5 h-5 transform -rotate-45" />
            </div>
            <div>
              <h3 className="text-white font-extrabold text-lg sm:text-xl leading-snug mb-1">
                Can't find what you are looking for?
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm font-normal">
                Explore our full collection with 1000+ products across multiple
                categories.
              </p>
            </div>
          </div>

          {/* Right Action Button */}
          <div className="z-10 flex-shrink-0">
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-xl flex items-center gap-2.5 transition-all duration-300 shadow-lg shadow-blue-600/25 transform hover:scale-105 cursor-pointer">
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
