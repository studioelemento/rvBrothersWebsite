import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Handshake,
  Users,
  Building2,
  Leaf,
} from "lucide-react";

import greenbaeImg from "../../../assets/business_fmcg.png";
import micaeImg from "../../../assets/product_g63.png";
import industrialImg from "../../../assets/business_industrial.png";

export default function Brands() {
  const brandsList = [
    {
      id: "greenbae",
      name: "greenbae™",
      tagline: "Natural. Pure. You.",
      description:
        "Wellness and personal care products made with natural ingredients for a healthier lifestyle.",
      image: greenbaeImg,
      accentColor: "text-emerald-600",
      tagColor: "text-emerald-700",
      linkText: "Explore Brand",
      isGreenCard: true,
    },
    {
      id: "micae",
      name: "MICAE®",
      tagline: "COLLECT. SCALE. EXPERIENCE.",
      description:
        "Premium die-cast scale models and collectibles crafted for true enthusiasts and collectors.",
      image: micaeImg,
      accentColor: "text-red-600",
      tagColor: "text-red-600",
      linkText: "Explore Brand",
    },
    {
      id: "industrial",
      name: "RV INDUSTRIAL",
      tagline: "BUILT TO PERFORM",
      description:
        "High-quality industrial supplies, bearings, fasteners and engineering solutions for every industry.",
      image: industrialImg,
      accentColor: "text-blue-600",
      tagColor: "text-blue-600",
      linkText: "Explore Brand",
    },
    {
      id: "future",
      isFuture: true,
      title: "More to Come. Greater Together.",
      description:
        "We are building a portfolio of future-ready brands across diverse categories.",
      accentColor: "text-amber-500",
      tagColor: "text-[#C59B27]",
      linkText: "Explore Future Brands",
    },
  ];

  const highlights = [
    {
      icon: ShieldCheck,
      title: "Trusted Quality",
      subtitle: "Products you can rely on",
    },
    {
      icon: Award,
      title: "Diverse Categories",
      subtitle: "Solutions for every need",
    },
    {
      icon: Handshake,
      title: "Built for Growth",
      subtitle: "Brands with a vision",
    },
    {
      icon: Users,
      title: "Customer First",
      subtitle: "Your satisfaction, our priority",
    },
  ];

  return (
    <section
      id="brands"
      className="w-full bg-[#F8FAFC] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 font-sans border-t border-b border-slate-200/60"
    >
      <div className="max-w-7xl mx-auto">
        {/* 1. TOP BADGE */}
        <div className="text-center mb-2">
          <span className="text-blue-600 font-bold text-xs tracking-[0.25em] uppercase">
            OUR BRANDS
          </span>
        </div>

        {/* 2. SECTION HEADING */}
        <div className="flex flex-col items-center mb-4">
          <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Featured Brands
          </h2>
          <div className="w-10 h-1 bg-blue-600 rounded-full mt-3"></div>
        </div>

        {/* 3. SUBHEADING */}
        <p className="text-center text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-12 font-normal leading-relaxed">
          Strong brands. Trusted quality. Built with purpose to deliver value
          across every category we serve.
        </p>

        {/* 4. 4-CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {brandsList.map((brand) => {
            if (brand.isFuture) {
              return (
                <div
                  key={brand.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  {/* Future Brands Banner Image */}
                  <div className="h-48 sm:h-52 w-full bg-gradient-to-br from-[#060E26] via-[#0A183C] to-[#040817] flex flex-col items-center justify-center p-6 relative overflow-hidden border-b border-slate-800">
                    {/* Background subtle radial texture */}
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`,
                        backgroundSize: "16px 16px",
                      }}
                    ></div>

                    {/* Gold 3D Cube Monogram */}
                    <div className="w-14 h-14 mb-3 text-[#D4AF37] relative z-10 flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-full h-full stroke-[1.5]"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                        <line x1="12" y1="22.08" x2="12" y2="12"></line>
                      </svg>
                    </div>

                    <span className="text-[#E6C65D] font-extrabold text-sm tracking-[0.25em] uppercase relative z-10">
                      FUTURE BRANDS
                    </span>
                  </div>

                  {/* Future Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-slate-900 font-extrabold text-lg sm:text-xl leading-snug mb-3">
                        {brand.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                        {brand.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-[#C59B27] group-hover:text-amber-600 font-semibold text-sm transition-colors mt-auto pt-2">
                      <span>{brand.linkText}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={brand.id}
                className={`rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                  brand.isGreenCard ? "bg-[#F4F3ED]" : "bg-white"
                }`}
              >
                {/* Brand Image Header */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {brand.isGreenCard && (
                    <div className="absolute inset-x-0 bottom-0 h-6 bg-[#F4F3ED] clip-path-curve"></div>
                  )}
                </div>

                {/* Brand Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Brand Name / Monogram Header */}
                    {brand.id === "greenbae" ? (
                      <div className="flex items-center gap-2 mb-1">
                        <Leaf className="w-5 h-5 text-emerald-700" />
                        <h3 className="text-emerald-800 font-extrabold text-2xl tracking-tight">
                          greenbae<span className="text-xs align-top">™</span>
                        </h3>
                      </div>
                    ) : (
                      <h3 className="text-slate-900 font-extrabold text-2xl tracking-wider uppercase mb-1">
                        {brand.name}
                      </h3>
                    )}

                    {/* Tagline */}
                    <div
                      className={`text-xs font-extrabold tracking-wider uppercase mb-3 ${brand.accentColor}`}
                    >
                      {brand.tagline}
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {brand.description}
                    </p>
                  </div>

                  {/* Explore Link */}
                  <div
                    className={`flex items-center gap-2 font-semibold text-sm transition-colors mt-auto pt-2 ${brand.tagColor}`}
                  >
                    <span>{brand.linkText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 5. MIDDLE TRUST / FEATURE HIGHLIGHTS BAR */}
        <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/50 p-6 sm:p-8 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {highlights.map((item, idx) => {
              const HighlightIcon = item.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-4 ${idx !== 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""}`}
                >
                  <div className="p-3 rounded-2xl bg-blue-50/80 text-blue-600 border border-blue-100 flex-shrink-0">
                    <HighlightIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-extrabold text-sm sm:text-base leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-xs mt-0.5 font-medium">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 6. BOTTOM BANNER */}
        <div className="w-full bg-[#050C1E] rounded-2xl border border-slate-800/90 p-6 sm:p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl relative overflow-hidden">
          {/* Subtle Grid Pattern Watermark */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          ></div>

          {/* Left Content */}
          <div className="flex items-center gap-4 text-center sm:text-left z-10">
            <div className="w-12 h-12 rounded-full bg-blue-950/80 border border-blue-500/30 flex items-center justify-center text-blue-400 flex-shrink-0 shadow-md">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-white font-extrabold text-lg sm:text-xl leading-snug mb-1">
                Stronger Brands. Stronger Tomorrow.
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm font-normal">
                Discover the brands shaping our journey and the future we are
                building together.
              </p>
            </div>
          </div>

          {/* Right Action Button */}
          <div className="z-10 flex-shrink-0">
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-xl flex items-center gap-2.5 transition-all duration-300 shadow-lg shadow-blue-600/25 transform hover:scale-105 cursor-pointer">
              <span>Explore All Brands</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
