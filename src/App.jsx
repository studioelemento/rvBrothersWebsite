import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Business from './pages/Businesses/Businesses';
import Product from './pages/Shop/Shop';
import Brands from './pages/Brands/Brands';
import About from './pages/About/About';
import Partner from './pages/Contact/Partner';
import Footer from './components/Footer';

// Helper to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 antialiased font-sans flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/businesses" element={<Business />} />
          <Route path="/shop" element={<Product />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Partner />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
