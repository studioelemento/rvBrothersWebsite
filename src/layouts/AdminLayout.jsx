import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/admin/Sidebar';
import { Menu, X } from 'lucide-react';

export default function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar - fixed on mobile, static on desktop */}
      <div className={`fixed inset-y-0 left-0 z-50 transform lg:transform-none lg:static transition-transform duration-200 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-slate-100 z-30 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="text-[#3b12f6] text-2xl font-serif tracking-tighter font-bold">Rv</div>
            <div className="flex flex-col">
              <span className="text-[#101b43] font-bold text-[10px] tracking-widest leading-none mt-1">BROTHERS</span>
            </div>
          </div>
          <button 
            onClick={toggleSidebar}
            className="p-2 -mr-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
            aria-label="Toggle Menu"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto bg-[#F8F9FA] p-4 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
