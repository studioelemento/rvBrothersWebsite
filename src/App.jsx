import React, { useState, useEffect } from 'react';
import Navbar from './Home/Navbar';
import Hero from './Home/Hero';
import Business from './Home/Business';
import Product from './Home/Product';
import Brands from './Home/Brands';
import About from './Home/About';
import Partner from './Home/Partner';
import Contact from './Home/contact';
import Footer from './Home/Footer';

function App() {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'businesses' || hash === 'our-businesses') {
        setActivePage('businesses');
      } else if (hash === 'shop' || hash === 'products') {
        setActivePage('shop');
      } else if (hash === 'brands' || hash === 'our-brands') {
        setActivePage('brands');
      } else if (hash === 'about' || hash === 'about-us' || hash === 'why-rv-brothers') {
        setActivePage('about');
      } else if (hash === 'contact' || hash === 'partner' || hash === 'contact-us') {
        setActivePage('contact');
      } else {
        setActivePage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 antialiased font-sans flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      <div>
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        {activePage === 'businesses' ? (
          <Business setActivePage={setActivePage} />
        ) : activePage === 'shop' ? (
          <Product setActivePage={setActivePage} />
        ) : activePage === 'brands' ? (
          <Brands setActivePage={setActivePage} />
        ) : activePage === 'about' ? (
          <About setActivePage={setActivePage} />
        ) : activePage === 'contact' ? (
          <Partner setActivePage={setActivePage} />
        ) : (
          <Hero setActivePage={setActivePage} />
        )}
      </div>
      <Footer activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}

export default App;
