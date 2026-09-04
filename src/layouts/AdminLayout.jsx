import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/admin/Sidebar';

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      <Sidebar />
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* We can add an Admin Header/Navbar here if needed */}
        <div className="flex-1 overflow-y-auto bg-[#F8F9FA] p-6 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
