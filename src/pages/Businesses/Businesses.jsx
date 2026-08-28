import React from 'react';
import BusinessHero from './components/BusinessHero';
import BusinessMetrics from './components/BusinessMetrics';
import BusinessDivisions from './components/BusinessDivisions';
import BusinessPartnerships from './components/BusinessPartnerships';

export default function Business() {
  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-slate-800 overflow-hidden flex flex-col justify-between pt-8 pb-16">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <BusinessHero />
        <BusinessMetrics />
        <BusinessDivisions />
        <BusinessPartnerships />
      </div>
    </div>
  );
}
