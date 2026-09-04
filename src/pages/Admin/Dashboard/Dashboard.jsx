import React from 'react';

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-[#101b43]">Dashboard Overview</h1>
      <p className="mt-2 text-slate-500">Welcome to the RV Brothers admin panel.</p>
      
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="text-sm font-semibold text-slate-400">Stat {i}</div>
            <div className="mt-2 text-3xl font-bold text-[#101b43]">1,234</div>
          </div>
        ))}
      </div>
    </div>
  );
}
