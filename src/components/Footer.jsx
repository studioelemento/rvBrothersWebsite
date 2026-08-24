import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Truck,
  Headphones,
  ChevronRight,
  Send,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  MapPin,
  Handshake,
  TrendingUp
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#02050f] text-slate-300 pt-16 pb-8 border-t border-slate-900/60 relative overflow-hidden font-sans">
      {/* Background soft glow blobs */}
      <div className="absolute right-[-10%] bottom-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute left-[-10%] top-[-10%] w-[40%] h-[40%] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* TOP LEVEL: MAIN FOOTER COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16">

          {/* Column 1: Logo, Intro & Brand Trust Features */}
          <div className="lg:col-span-4 flex flex-col items-start">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group cursor-pointer mb-6"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/20 transform group-hover:scale-105 transition-all duration-300">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 18V6H9.5C11.5 6 13 7.2 13 9C13 10.2 12.2 11.2 11 11.6L14.5 18H11.5L8.5 12.5H6.5V18H4ZM6.5 10.5H9.2C10.2 10.5 11 10 11 9C11 8 10.2 7.5 9.2 7.5H6.5V10.5Z" fill="currentColor" />
                  <path d="M15 6L18 13.5L21 6H23.5L19.25 15.5H16.75L12.5 6H15Z" fill="currentColor" />
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold tracking-wider text-white leading-none">
                  RV BROTHERS
                </div>
                <div className="text-[8px] tracking-[0.25em] text-slate-400 font-medium uppercase mt-0.5">
                  BUSINESS CONSORTIUM
                </div>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              RV Brothers is a business consortium committed to delivering quality products
              through strong partnerships, reliable distribution and customer trust.
            </p>
            <div className="w-8 h-[2px] bg-blue-600 rounded-full mb-8"></div>

            {/* Brand Trust List */}
            <div className="space-y-5 w-full">
              {/* Feature 1 */}
              <div className="flex items-start gap-4 group">
                <div className="p-2.5 bg-blue-950/40 rounded-full text-blue-500 border border-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">Trusted Quality</h4>
                  <p className="text-xs text-slate-400 mt-1">Carefully sourced and verified products</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4 group">
                <div className="p-2.5 bg-blue-950/40 rounded-full text-blue-500 border border-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">Reliable Distribution</h4>
                  <p className="text-xs text-slate-400 mt-1">Strong logistics and supply chain network</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4 group">
                <div className="p-2.5 bg-blue-950/40 rounded-full text-blue-500 border border-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">24/7 Dedicated Support</h4>
                  <p className="text-xs text-slate-400 mt-1">Always available to assist our partners</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold tracking-widest text-white uppercase mb-4 relative pb-2 inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-6 h-[2px] bg-blue-600 rounded-full"></span>
            </h3>
            <ul className="space-y-3 mt-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Our Businesses', path: '/businesses' },
                { name: 'Shop', path: '/shop' },
                { name: 'Brands', path: '/brands' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-xs text-slate-400 hover:text-white flex items-center justify-between group transition-all duration-200 transform hover:translate-x-1"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-blue-500 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Categories */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold tracking-widest text-white uppercase mb-4 relative pb-2 inline-block">
              Our Categories
              <span className="absolute bottom-0 left-0 w-6 h-[2px] bg-blue-600 rounded-full"></span>
            </h3>
            <ul className="space-y-3 mt-4">
              {[
                'Industrial Supplies',
                'Bearings & Power Transmission',
                'Automotive & Electricals',
                'Tools & Hardware',
                'Packaging & Consumables',
                'View All Categories',
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to="/shop"
                    className="text-xs text-slate-400 hover:text-white flex items-center justify-between group transition-all duration-200 transform hover:translate-x-1"
                  >
                    <span>{item}</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-blue-500 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h3 className="text-xs font-bold tracking-widest text-white uppercase mb-4 relative pb-2 inline-block">
                Partner With Us
                <span className="absolute bottom-0 left-0 w-6 h-[2px] bg-blue-600 rounded-full"></span>
              </h3>
              <ul className="space-y-3 mt-4">
                {[
                  'Distributors',
                  'Resellers',
                  'Retail Partnerships',
                  'Manufacturer Collaboration',
                  'Institutional Supply',
                  'Partnership Enquiry',
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to="/contact"
                      className="text-xs text-slate-400 hover:text-white flex items-center justify-between group transition-all duration-200 transform hover:translate-x-1"
                    >
                      <span>{item}</span>
                      <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-blue-500 transition-opacity duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Stay Connected & Follow Us */}
          <div className="lg:col-span-3 flex flex-col">
            {/* Stay Connected */}
            <h3 className="text-xs font-bold tracking-widest text-white uppercase mb-4 relative pb-2 inline-block">
              Stay Connected
              <span className="absolute bottom-0 left-0 w-6 h-[2px] bg-blue-600 rounded-full"></span>
            </h3>
            <p className="text-slate-400 text-xs mt-4 mb-4 leading-relaxed">
              Subscribe to get the latest updates on new products, offers and industry insights.
            </p>

            {/* Subscription Box */}
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center bg-[#050b18]/60 border border-slate-900 rounded-xl p-1.5 focus-within:border-blue-600 transition-colors mb-8 shadow-inner">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-transparent border-none outline-none text-xs text-slate-200 px-3 py-2 font-medium"
              />
              <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white rounded-lg p-2.5 transition-all duration-300 shadow-md shadow-blue-600/10">
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Follow Us */}
            <h3 className="text-xs font-bold tracking-widest text-white uppercase mb-4 relative pb-2 inline-block">
              Follow Us
              <span className="absolute bottom-0 left-0 w-6 h-[2px] bg-blue-600 rounded-full"></span>
            </h3>
            <div className="flex items-center gap-3 mt-4">
              {[
                { icon: <Facebook className="w-4 h-4" />, link: 'https://facebook.com' },
                { icon: <Linkedin className="w-4 h-4" />, link: 'https://linkedin.com' },
                { icon: <Instagram className="w-4 h-4" />, link: 'https://instagram.com' },
                { icon: <Youtube className="w-4 h-4" />, link: 'https://youtube.com' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-950 border border-slate-900 rounded-full text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/5 hover:scale-105 transition-all duration-300 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* MIDDLE LEVEL: HORIZONTAL HIGHLIGHTS ROW */}
        <div className="border-t border-b border-slate-900/60 bg-[#030712]/40 py-8 my-8 rounded-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-8">

            {/* Highlight 1 */}
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-blue-950/40 rounded-full text-blue-500 border border-blue-500/10 group-hover:border-blue-500/30 group-hover:scale-105 transition-all duration-300 shadow-md">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-extrabold tracking-wider text-white uppercase leading-none">Pan India Presence</h4>
                <p className="text-[10px] text-slate-400 leading-normal mt-1.5">Delivering products and solutions across every state in India.</p>
              </div>
            </div>

            {/* Highlight 2 */}
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-blue-950/40 rounded-full text-blue-500 border border-blue-500/10 group-hover:border-blue-500/30 group-hover:scale-105 transition-all duration-300 shadow-md">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-extrabold tracking-wider text-white uppercase leading-none">Quality Assured</h4>
                <p className="text-[10px] text-slate-400 leading-normal mt-1.5">We partner with trusted brands and verified manufacturers.</p>
              </div>
            </div>

            {/* Highlight 3 */}
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-blue-950/40 rounded-full text-blue-500 border border-blue-500/10 group-hover:border-blue-500/30 group-hover:scale-105 transition-all duration-300 shadow-md">
                <Handshake className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-extrabold tracking-wider text-white uppercase leading-none">Built On Trust</h4>
                <p className="text-[10px] text-slate-400 leading-normal mt-1.5">Strong relationships, transparent dealings and lasting partnerships.</p>
              </div>
            </div>

            {/* Highlight 4 */}
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-blue-950/40 rounded-full text-blue-500 border border-blue-500/10 group-hover:border-blue-500/30 group-hover:scale-105 transition-all duration-300 shadow-md">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-extrabold tracking-wider text-white uppercase leading-none">Committed To Growth</h4>
                <p className="text-[10px] text-slate-400 leading-normal mt-1.5">Enabling businesses to grow with reliable products and support.</p>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM LEVEL: COPYRIGHT & LEGAL SUB-LINKS */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-slate-900/40 text-[10px] text-slate-500 gap-4">
          <div>
            &copy; 2024 RV Brothers Business Consortium. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <span className="text-slate-800">|</span>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms & Conditions</Link>
            <span className="text-slate-800">|</span>
            <Link to="/shipping" className="hover:text-slate-300 transition-colors">Shipping Policy</Link>
            <span className="text-slate-800">|</span>
            <Link to="/return" className="hover:text-slate-300 transition-colors">Return Policy</Link>
            <span className="text-slate-800">|</span>
            <Link to="/sitemap" className="hover:text-slate-300 transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
