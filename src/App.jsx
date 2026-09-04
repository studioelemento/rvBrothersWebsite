import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import PublicLayout from './layouts/PublicLayout';
import AdminLayout from './layouts/AdminLayout';

import AdminDashboard from './pages/Admin/Dashboard/Dashboard';
import AdminOrders from './pages/Admin/Orders/Orders';
import AdminProducts from './pages/Admin/Inventory/Products';
import AdminCategories from './pages/Admin/Inventory/Categories';
import AdminBrands from './pages/Admin/Inventory/Brands';
import AdminCoupons from './pages/Admin/Inventory/Coupons';
import AdminAnalysis from './pages/Admin/Inventory/Analysis';
import AdminPosts from './pages/Admin/Posts/Posts';
import AdminCustomers from './pages/Admin/Customers/Customers';
import AdminQueries from './pages/Admin/Queries/Queries';
import AdminSettings from './pages/Admin/Settings/Settings';

import Home from './pages/Home/Home';
import Business from './pages/Businesses/Businesses';
import Product from './pages/Shop/Shop';
import Brands from './pages/Brands/Brands';
import About from './pages/About/About';
import Partner from './pages/Contact/Partner';

import collectiblesImage from './assets/collectibles.png';


// --------------------------------------------------
// SCROLL TO TOP
// --------------------------------------------------

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


// --------------------------------------------------
// COLLECTIBLES DISCUSSION PAGE
// --------------------------------------------------

function CollectiblesDiscussion() {
  return (
    <section className="w-full bg-white">
      
      {/* HERO IMAGE */}
      <div className="relative mx-auto w-full max-w-[1380px] overflow-hidden">
        <img
          src={collectiblesImage}
          alt="Rare collectibles"
          className="h-[420px] w-full object-cover md:h-[520px] lg:h-[600px]"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />

        {/* CONTENT */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-6 pb-10 md:px-10 md:pb-14 lg:px-16 lg:pb-16">
            
            {/* CATEGORY */}
            <span className="inline-flex rounded-full bg-blue-600 px-4 py-2 text-xs font-bold tracking-[0.12em] text-white md:text-sm">
              MARKET INSIGHTS
            </span>

            {/* TITLE */}
            <h1 className="mt-5 max-w-[850px] text-3xl font-bold leading-[1.08] tracking-[-0.035em] text-white md:text-5xl lg:text-6xl">
              The Future of Collectibles:
              <br className="hidden md:block" />
              Trends Shaping Tomorrow's Marketplace
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-[760px] text-base leading-7 text-white/90 md:text-lg md:leading-8">
              From rare finds to digital collectibles, explore the key trends,
              emerging opportunities, and evolving consumer behaviors driving
              the collectibles industry forward.
            </p>

            {/* AUTHOR */}
            <div className="mt-7 flex items-center gap-4">
              
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-400 text-lg font-serif text-white md:h-14 md:w-14 md:text-xl">
                RV
              </div>

              <div>
                <p className="text-sm font-bold text-white md:text-base">
                  RV Brothers Team
                </p>

                <p className="mt-1 text-xs text-white/80 md:text-sm">
                  May 18, 2025&nbsp; • &nbsp;6 min read
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>


      {/* ARTICLE CONTENT */}
      <article className="mx-auto max-w-[900px] px-6 py-12 md:px-10 md:py-16">
        
        <h2 className="text-2xl font-bold tracking-[-0.025em] text-[#101b43] md:text-3xl">
          The Rising Value of Rare Collectibles
        </h2>

        <p className="mt-5 text-base leading-7 text-[#536487] md:text-lg md:leading-8">
          Collectibles continue to evolve as consumers discover new ways to
          connect with products that carry cultural, historical, and personal
          value. Rare items can create opportunities for collectors while
          opening new possibilities across modern marketplaces.
        </p>

        <h2 className="mt-10 text-2xl font-bold tracking-[-0.025em] text-[#101b43] md:text-3xl">
          Digital Collectibles and New Opportunities
        </h2>

        <p className="mt-5 text-base leading-7 text-[#536487] md:text-lg md:leading-8">
          The growth of digital marketplaces has expanded the way collectors
          discover, evaluate, and exchange unique products. Technology is
          creating new opportunities for businesses and collectors to interact
          with these markets.
        </p>

        <h2 className="mt-10 text-2xl font-bold tracking-[-0.025em] text-[#101b43] md:text-3xl">
          What Comes Next?
        </h2>

        <p className="mt-5 text-base leading-7 text-[#536487] md:text-lg md:leading-8">
          As consumer behavior continues to change, collectibles are likely to
          remain an important part of emerging commerce trends. Understanding
          market movements, consumer preferences, and new technologies can help
          businesses identify opportunities for sustainable growth.
        </p>

      </article>

    </section>
  );
}


// --------------------------------------------------
// APP
// --------------------------------------------------

function App() {
  return (
    <>
      <ScrollToTop />
      
      <Routes>
        
        {/* PUBLIC ROUTES (Uses Navbar & Footer) */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/businesses" element={<Business />} />
          <Route path="/shop" element={<Product />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/brands/collectibles" element={<CollectiblesDiscussion />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Partner />} />
        </Route>

        {/* ADMIN ROUTES (Uses Sidebar) */}
        <Route path="/admin" element={<AdminLayout />}>
          {/* Default redirect or dashboard */}
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="orders" element={<AdminOrders />} />
          
          {/* Inventory */}
          <Route path="inventory/products" element={<AdminProducts />} />
          <Route path="inventory/categories" element={<AdminCategories />} />
          <Route path="inventory/brands" element={<AdminBrands />} />
          <Route path="inventory/coupons" element={<AdminCoupons />} />
          <Route path="inventory/analysis" element={<AdminAnalysis />} />
          
          {/* Other Admin Pages */}
          <Route path="posts" element={<AdminPosts />} />
          <Route path="customers" element={<AdminCustomers />} />
          <Route path="queries" element={<AdminQueries />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;