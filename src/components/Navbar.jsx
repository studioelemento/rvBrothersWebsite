import React, { useState } from 'react';
import logoImg from '../assets/logo.jpg';
import { Link, useLocation } from 'react-router-dom';
import Login from './Login';
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

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [cartCount] = useState(2);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

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
          <Link
            to="/"
            className="flex items-center group cursor-pointer"
          >
            <img 
              src={logoImg} 
              alt="RV Brothers Business Consortium" 
              className="h-14 w-auto object-contain rounded-md transform group-hover:scale-[1.03] transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-semibold relative py-2 transition-colors ${isActive('/') ? 'text-white' : 'text-slate-300 hover:text-white'}`}
            >
              Home
              {isActive('/') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
              )}
            </Link>

            <Link
              to="/businesses"
              className={`text-sm font-semibold relative py-2 transition-colors ${isActive('/businesses') ? 'text-white' : 'text-slate-300 hover:text-white'}`}
            >
              Our Businesses
              {isActive('/businesses') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
              )}
            </Link>

            <Link
              to="/shop"
              className={`text-sm font-semibold relative py-2 transition-colors ${isActive('/shop') ? 'text-white' : 'text-slate-300 hover:text-white'}`}
            >
              Shop
              {isActive('/shop') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
              )}
            </Link>

            <Link
              to="/brands"
              className={`text-sm font-semibold relative py-2 transition-colors ${isActive('/brands') ? 'text-white' : 'text-slate-300 hover:text-white'}`}
            >
              Brands
              {isActive('/brands') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
              )}
            </Link>

            <Link
              to="/about"
              className={`text-sm font-semibold relative py-2 transition-colors ${isActive('/about') ? 'text-white' : 'text-slate-300 hover:text-white'}`}
            >
              About
              {isActive('/about') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
              )}
            </Link>

            <Link
              to="/contact"
              className={`text-sm font-semibold relative py-2 transition-colors ${isActive('/contact') ? 'text-white' : 'text-slate-300 hover:text-white'}`}
            >
              Contact
              {isActive('/contact') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
              )}
            </Link>
          </nav>

          {/* Right Utility & CTA */}
          <div className="hidden md:flex items-center gap-6">
            <button className="text-slate-300 hover:text-white transition-colors p-1.5 hover:bg-slate-900 rounded-lg">
              <Search className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsLoginOpen(true)}
              className="text-slate-300 hover:text-white transition-colors p-1.5 hover:bg-slate-900 rounded-lg"
            >
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
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-lg shadow-blue-600/25 transition-all duration-300 transform hover:scale-105 cursor-pointer block"
            >
              Partner With Us
            </Link>
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
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full text-left px-3 py-2 rounded-lg text-base font-semibold ${isActive('/') ? 'text-white bg-slate-900' : 'text-slate-300 hover:text-white hover:bg-slate-900/50'}`}
            >
              Home
            </Link>
            <Link
              to="/businesses"
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full text-left px-3 py-2 rounded-lg text-base font-semibold ${isActive('/businesses') ? 'text-white bg-slate-900' : 'text-slate-300 hover:text-white hover:bg-slate-900/50'}`}
            >
              Our Businesses
            </Link>
            <Link
              to="/shop"
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full text-left px-3 py-2 rounded-lg text-base font-semibold ${isActive('/shop') ? 'text-white bg-slate-900' : 'text-slate-300 hover:text-white hover:bg-slate-900/50'}`}
            >
              Shop
            </Link>
            <Link
              to="/brands"
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full text-left px-3 py-2 rounded-lg text-base font-semibold ${isActive('/brands') ? 'text-white bg-slate-900' : 'text-slate-300 hover:text-white hover:bg-slate-900/50'}`}
            >
              Brands
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full text-left px-3 py-2 rounded-lg text-base font-semibold ${isActive('/about') ? 'text-white bg-slate-900' : 'text-slate-300 hover:text-white hover:bg-slate-900/50'}`}
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full text-left px-3 py-2 rounded-lg text-base font-semibold ${isActive('/contact') ? 'text-white bg-slate-900' : 'text-slate-300 hover:text-white hover:bg-slate-900/50'}`}
            >
              Contact
            </Link>

            <div className="pt-4 flex flex-col gap-3 px-3">
              <div className="flex gap-4">
                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-slate-800 rounded-lg text-sm text-slate-300 hover:text-white">
                  <Search className="w-4 h-4" /> Search
                </button>
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsLoginOpen(true);
                  }}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-slate-800 rounded-lg text-sm text-slate-300 hover:text-white"
                >
                  <User className="w-4 h-4" /> Profile
                </button>
              </div>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg text-sm transition-all duration-300 text-center block"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        )}
      </header>
      
      {/* Login Modal/Drawer */}
      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}
