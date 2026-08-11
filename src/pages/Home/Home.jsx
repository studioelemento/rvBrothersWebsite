import React from "react";
import HomeHero from "./components/HomeHero";
import HomeBusinesses from "./components/HomeBusinesses";
import HomeShop from "./components/HomeShop";
import HomeBrands from "./components/HomeBrands";
import HomeAbout from "./components/HomeAbout";
import HomePartner from "./components/HomePartner";

export default function Home() {
  return (
    <div className="w-full bg-[#020617] text-slate-100 flex flex-col font-sans overflow-x-hidden selection:bg-blue-600 selection:text-white">
      {/* HERO CONTENT SECTION */}
      <HomeHero />

      {/* ADDITIONAL SECTIONS */}
      <HomeBusinesses />
      <HomeShop />
      <HomeBrands />
      <HomeAbout />
      <HomePartner />
    </div>
  );
}
