import React, { useState } from 'react';
import logoImg from '../assets/logo.jpg';
import {
  Shield,
  Award,
  Package,
  Search,
  User,
  ShoppingCart,
  Menu,
  X
} from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(2);

  const navigateTo = (page, hash = '') => {
    setActivePage(page);
    window.location.hash = hash || (page === 'home' ? '#home' : `#${page}`);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="w-full bg-[#030712] border-b border-slate-900 text-slate-400 text-xs py-3 px-4 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 hover:text-slate-200 transition-colors cursor-default">
            <Award className="w-4 h-4 text-blue-500" />
            <span>Building Scalable Businesses Across India</span>
          </div>
          <div className="flex items-center gap-2 hover:text-slate-200 transition-colors cursor-default">
            <Shield className="w-4 h-4 text-blue-500" />
            <span>Trusted Since 2016</span>
          </div>
          <div className="flex items-center gap-2 hover:text-slate-200 transition-colors cursor-default">
            <Package className="w-4 h-4 text-blue-500" />
            <span>Multi-Category Commerce Ecosystem</span>
          </div>
        </div>
      </div>

      {/* 2. NAVBAR HEADER */}
      <header className="w-full bg-[#020617]/90 backdrop-blur-md sticky top-0 z-40 border-b border-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

          {/* Logo */}
          <div
            onClick={() => navigateTo('home')}
            className="flex items-center group cursor-pointer"
          >
            <img 
              src={logoImg} 
              alt="RV Brothers Business Consortium" 
              className="h-14 w-auto object-contain rounded-md transform group-hover:scale-[1.03] transition-all duration-300"
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => navigateTo('home')}
              className={`text-sm font-semibold relative py-2 transition-colors ${activePage === 'home' ? 'text-white' : 'text-slate-300 hover:text-white'
                }`}
            >
              Home
              {activePage === 'home' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
              )}
            </button>

            <button
              onClick={() => navigateTo('businesses')}
              className={`text-sm font-semibold relative py-2 transition-colors ${activePage === 'businesses' ? 'text-white' : 'text-slate-300 hover:text-white'
                }`}
            >
              Our Businesses
              {activePage === 'businesses' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
              )}
            </button>

            <button
              onClick={() => navigateTo('shop')}
              className={`text-sm font-semibold relative py-2 transition-colors ${activePage === 'shop' ? 'text-white' : 'text-slate-300 hover:text-white'
                }`}
            >
              Shop
              {activePage === 'shop' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
              )}
            </button>

            <button
              onClick={() => navigateTo('brands')}
              className={`text-sm font-semibold relative py-2 transition-colors ${activePage === 'brands' ? 'text-white' : 'text-slate-300 hover:text-white'
                }`}
            >
              Brands
              {activePage === 'brands' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
              )}
            </button>

            <button
              onClick={() => navigateTo('about')}
              className={`text-sm font-semibold relative py-2 transition-colors ${activePage === 'about' ? 'text-white' : 'text-slate-300 hover:text-white'
                }`}
            >
              About
              {activePage === 'about' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
              )}
            </button>

            <button
              onClick={() => navigateTo('home', '#contact')}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors py-2 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </button>
          </nav>

          {/* Right Utility & CTA */}
          <div className="hidden md:flex items-center gap-6">
            <button className="text-slate-300 hover:text-white transition-colors p-1.5 hover:bg-slate-900 rounded-lg">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-slate-300 hover:text-white transition-colors p-1.5 hover:bg-slate-900 rounded-lg">
              <User className="w-5 h-5" />
            </button>
            <button className="text-slate-300 hover:text-white transition-colors p-1.5 hover:bg-slate-900 rounded-lg relative">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-md">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-lg shadow-blue-600/25 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              Partner With Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button className="text-slate-300 hover:text-white p-1.5 relative">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2 hover:bg-slate-900 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#030712] border-b border-slate-900 px-4 pt-2 pb-6 space-y-3 absolute w-full left-0 transition-all duration-300 shadow-xl z-50">
            <button
              onClick={() => navigateTo('home')}
              className={`block w-full text-left px-3 py-2 rounded-lg text-base font-semibold ${activePage === 'home' ? 'text-white bg-slate-900' : 'text-slate-300 hover:text-white hover:bg-slate-900/50'
                }`}
            >
              Home
            </button>
            <button
              onClick={() => navigateTo('businesses')}
              className={`block w-full text-left px-3 py-2 rounded-lg text-base font-semibold ${activePage === 'businesses' ? 'text-white bg-slate-900' : 'text-slate-300 hover:text-white hover:bg-slate-900/50'
                }`}
            >
              Our Businesses
            </button>
            <button
              onClick={() => navigateTo('shop')}
              className={`block w-full text-left px-3 py-2 rounded-lg text-base font-semibold ${activePage === 'shop' ? 'text-white bg-slate-900' : 'text-slate-300 hover:text-white hover:bg-slate-900/50'
                }`}
            >
              Shop
            </button>
            <button
              onClick={() => navigateTo('brands')}
              className={`block w-full text-left px-3 py-2 rounded-lg text-base font-semibold ${activePage === 'brands' ? 'text-white bg-slate-900' : 'text-slate-300 hover:text-white hover:bg-slate-900/50'
                }`}
            >
              Brands
            </button>
            <button
              onClick={() => navigateTo('about')}
              className={`block w-full text-left px-3 py-2 rounded-lg text-base font-semibold ${activePage === 'about' ? 'text-white bg-slate-900' : 'text-slate-300 hover:text-white hover:bg-slate-900/50'
                }`}
            >
              About
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className={`block w-full text-left px-3 py-2 rounded-lg text-base font-semibold ${activePage === 'contact' ? 'text-white bg-slate-900' : 'text-slate-300 hover:text-white hover:bg-slate-900/50'
                }`}
            >
              Contact
            </button>

            <div className="pt-4 flex flex-col gap-3 px-3">
              <div className="flex gap-4">
                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-slate-800 rounded-lg text-sm text-slate-300 hover:text-white">
                  <Search className="w-4 h-4" /> Search
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-slate-800 rounded-lg text-sm text-slate-300 hover:text-white">
                  <User className="w-4 h-4" /> Profile
                </button>
              </div>
              <button
                onClick={() => navigateTo('contact')}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg text-sm transition-all duration-300 cursor-pointer"
              >
                Partner With Us
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
