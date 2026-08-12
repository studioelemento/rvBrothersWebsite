import React from 'react';
import {
  Award,
  ArrowRight,
  Users,
  Truck,
  Lock
} from 'lucide-react';
import showcaseeImg from '../assets/back.png';

export default function Hero({ setActivePage }) {
  const goToShop = () => {
    if (setActivePage) {
      setActivePage('shop');
      window.location.hash = '#shop';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToBusinesses = () => {
    if (setActivePage) {
      setActivePage('businesses');
      window.location.hash = '#businesses';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[#020617] text-slate-100 flex flex-col font-sans overflow-x-hidden selection:bg-blue-600 selection:text-white">
      {/* HERO CONTENT SECTION */}
      <main className="flex-1 relative flex items-center justify-center py-12 lg:py-20">

        {/* Dynamic diagonal background decoration on desktop */}
        <div className="absolute right-0 top-0 bottom-0 w-[52%] bg-[#eae6dd] clip-path-diagonal hidden lg:block z-0 shadow-2xl">
          {/* Subtle grid pattern inside cream area */}
          <div className="absolute inset-0 opacity-15" style={{
            backgroundImage: `radial-gradient(#1e293b 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}></div>

          {/* Styled Dotted World Map in Cream Section */}
          <div className="absolute right-8 top-12 w-[85%] h-[60%] opacity-20 pointer-events-none">
            <svg viewBox="0 0 1000 500" className="w-full h-full fill-slate-800">
              <path d="M150,150 Q250,80 350,150 T550,150 T750,150" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
              <path d="M200,200 Q400,100 600,200 T900,200" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4,4" />
              <circle cx="150" cy="150" r="4" className="animate-ping" fill="#2563eb" />
              <circle cx="150" cy="150" r="3" fill="#2563eb" />
              <circle cx="350" cy="150" r="3" fill="#2563eb" />
              <circle cx="550" cy="150" r="3" fill="#2563eb" />
              <circle cx="750" cy="150" r="4" className="animate-ping" fill="#2563eb" />
              <circle cx="750" cy="150" r="3" fill="#2563eb" />
              <circle cx="200" cy="200" r="3" fill="#2563eb" />
              <circle cx="600" cy="200" r="3" fill="#2563eb" />
              <circle cx="900" cy="200" r="3" fill="#2563eb" />
            </svg>
          </div>
        </div>

        {/* Ambient glow blobs on dark (left) side */}
        <div className="absolute left-[-10%] top-[-10%] w-[50%] h-[60%] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none z-0"></div>
        <div className="absolute left-[20%] bottom-[-10%] w-[40%] h-[50%] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* LEFT COLUMN: Texts and CTA */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/25 bg-blue-950/40 text-blue-400 text-xs font-semibold tracking-wider mb-6 animate-fade-in">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                ONE ECOSYSTEM. ENDLESS POSSIBILITIES.
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
                Building Modern <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                  Commerce
                </span> <br />
                Across India
              </h1>

              {/* Paragraph */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
                From collectibles and wellness products to industrial supplies and digital commerce,
                RV Brothers connects brands, products, and opportunities through a unified business ecosystem.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
                <button
                  onClick={goToShop}
                  className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl flex items-center justify-center gap-2 group transition-all duration-300 shadow-lg shadow-blue-600/20 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  Explore Products
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={goToBusinesses}
                  className="w-full sm:w-auto px-8 py-4 bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 font-semibold rounded-xl flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5 backdrop-blur-sm cursor-pointer"
                >
                  Our Businesses
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom Feature/Stats Grid */}
              <div className="w-full bg-[#050b18]/60 backdrop-blur-md border border-slate-900/80 rounded-2xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-6 relative shadow-inner">
                {/* Stats 1 */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-500 border border-blue-500/15">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-medium uppercase leading-tight">Trusted Since</div>
                    <div className="text-sm font-bold text-white leading-none mt-1">2016</div>
                  </div>
                </div>

                {/* Stats 2 */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-500 border border-blue-500/15">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white leading-none">10,000+</div>
                    <div className="text-[10px] text-slate-400 font-medium uppercase leading-tight mt-1">Happy Customers</div>
                  </div>
                </div>

                {/* Stats 3 */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-500 border border-blue-500/15">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-medium uppercase leading-tight">Pan India</div>
                    <div className="text-sm font-bold text-white leading-none mt-1">Delivery</div>
                  </div>
                </div>

                {/* Stats 4 */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-500 border border-blue-500/15">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-medium uppercase leading-tight">Secure</div>
                    <div className="text-sm font-bold text-white leading-none mt-1">Payments</div>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Visual Showcase */}
            <div className="lg:col-span-6 flex items-center justify-center relative z-10 w-full">

              {/* Cream-colored circular platform backing for smaller screens (mobile/tablet) */}
              <div className="absolute inset-0 bg-[#eae6dd] rounded-3xl lg:hidden -z-10 shadow-lg"></div>

              {/* Main product showcase image container */}
              <div className="w-full max-w-[540px] lg:max-w-none flex items-center justify-center p-4 sm:p-8 lg:p-0 relative group">
                {/* Floating ambient glow blob behind image */}
                <div className="absolute w-[80%] h-[80%] bg-blue-500/10 blur-[80px] rounded-full pointer-events-none -z-10 hidden lg:block"></div>

                <img
                  src={showcaseeImg}
                  alt="RV Brothers Product Showcase"
                  className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] transform group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
              </div>

            </div>

          </div>
        </div>

      </main>
    </div>
  );
}
