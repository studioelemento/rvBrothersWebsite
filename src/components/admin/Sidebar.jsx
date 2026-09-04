import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutGrid, 
  ShoppingBag, 
  Package, 
  ChevronDown, 
  ChevronUp, 
  Circle, 
  CircleDot, 
  Store, 
  Tag, 
  BarChart2, 
  FileText, 
  Users, 
  MessageSquare, 
  Settings, 
  LogOut 
} from 'lucide-react';

export default function Sidebar() {
  const [isInventoryOpen, setIsInventoryOpen] = useState(true);
  const location = useLocation();

  const isInventoryActive = location.pathname.includes('/admin/inventory');

  return (
    <aside className="w-[280px] h-screen bg-white border-r border-slate-100 flex flex-col sticky top-0 font-sans shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
      
      {/* LOGO */}
      <div className="px-8 py-8 flex items-center gap-3">
        {/* We can use the text logo to closely match the image */}
        <div className="text-[#3b12f6] text-4xl font-serif tracking-tighter font-bold">Rv</div>
        <div className="flex flex-col">
          <span className="text-[#101b43] font-bold text-sm tracking-widest leading-none mt-1">BROTHERS</span>
          <span className="text-slate-400 text-[9px] font-semibold tracking-wider mt-1 uppercase">Business Consortium</span>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 overflow-y-auto px-4 pb-4 space-y-1 scrollbar-hide">
        
        {/* Dashboard */}
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) => 
            `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
              isActive 
                ? 'bg-[#f4f2ff] text-[#3b12f6]' 
                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
            }`
          }
        >
          <LayoutGrid size={20} strokeWidth={2} />
          Dashboard
        </NavLink>

        {/* Orders */}
        <NavLink
          to="/admin/orders"
          className={({ isActive }) => 
            `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
              isActive 
                ? 'bg-[#f4f2ff] text-[#3b12f6]' 
                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
            }`
          }
        >
          <ShoppingBag size={20} strokeWidth={2} />
          Orders
        </NavLink>

        {/* Inventory (Dropdown) */}
        <div className="pt-2">
          <button
            onClick={() => setIsInventoryOpen(!isInventoryOpen)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
              isInventoryActive || isInventoryOpen
                ? 'bg-[#f4f2ff] text-[#3b12f6]'
                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
            }`}
          >
            <div className="flex items-center gap-3">
              <Package size={20} strokeWidth={2} />
              Inventory
            </div>
            {isInventoryOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {/* Submenu */}
          {isInventoryOpen && (
            <div className="mt-1 ml-4 pl-4 border-l border-slate-100 space-y-1">
              <NavLink
                to="/admin/inventory/products"
                className={({ isActive }) => 
                  `flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-colors ${
                    isActive 
                      ? 'bg-[#f4f2ff] text-[#3b12f6]' 
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive ? <CircleDot size={14} strokeWidth={3} /> : <Circle size={14} strokeWidth={2.5} />}
                    Products
                  </>
                )}
              </NavLink>

              <NavLink
                to="/admin/inventory/categories"
                className={({ isActive }) => 
                  `flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-colors ${
                    isActive 
                      ? 'bg-[#f4f2ff] text-[#3b12f6]' 
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive ? <CircleDot size={14} strokeWidth={3} /> : <Circle size={14} strokeWidth={2.5} />}
                    Categories
                  </>
                )}
              </NavLink>

              <NavLink
                to="/admin/inventory/brands"
                className={({ isActive }) => 
                  `flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-colors ${
                    isActive 
                      ? 'bg-[#f4f2ff] text-[#3b12f6]' 
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                  }`
                }
              >
                <Store size={16} strokeWidth={2} />
                Brands
              </NavLink>

              <NavLink
                to="/admin/inventory/coupons"
                className={({ isActive }) => 
                  `flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-colors ${
                    isActive 
                      ? 'bg-[#f4f2ff] text-[#3b12f6]' 
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                  }`
                }
              >
                <Tag size={16} strokeWidth={2} />
                Discount Coupons
              </NavLink>

              <NavLink
                to="/admin/inventory/analysis"
                className={({ isActive }) => 
                  `flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-colors ${
                    isActive 
                      ? 'bg-[#f4f2ff] text-[#3b12f6]' 
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                  }`
                }
              >
                <BarChart2 size={16} strokeWidth={2} />
                Product Analysis
              </NavLink>
            </div>
          )}
        </div>

        {/* Posts */}
        <div className="pt-2">
          <NavLink
            to="/admin/posts"
            className={({ isActive }) => 
              `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                isActive 
                  ? 'bg-[#f4f2ff] text-[#3b12f6]' 
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
              }`
            }
          >
            <FileText size={20} strokeWidth={2} />
            Posts
          </NavLink>
        </div>

        {/* Customers */}
        <NavLink
          to="/admin/customers"
          className={({ isActive }) => 
            `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
              isActive 
                ? 'bg-[#f4f2ff] text-[#3b12f6]' 
                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
            }`
          }
        >
          <Users size={20} strokeWidth={2} />
          Customers
        </NavLink>

        {/* Customer Queries */}
        <NavLink
          to="/admin/queries"
          className={({ isActive }) => 
            `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
              isActive 
                ? 'bg-[#f4f2ff] text-[#3b12f6]' 
                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
            }`
          }
        >
          <MessageSquare size={20} strokeWidth={2} />
          Customer Queries
        </NavLink>

      </nav>

      {/* FOOTER ACTIONS */}
      <div className="p-4 space-y-4">
        <NavLink
          to="/admin/settings"
          className={({ isActive }) => 
            `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
              isActive 
                ? 'bg-[#f4f2ff] text-[#3b12f6]' 
                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
            }`
          }
        >
          <Settings size={20} strokeWidth={2} />
          Settings
        </NavLink>

        {/* User Profile Box */}
        <div className="border border-slate-100 rounded-2xl p-3 flex items-center justify-between cursor-pointer hover:border-slate-200 transition-colors bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#3b12f6] flex items-center justify-center text-white font-bold text-lg">
              A
            </div>
            <div className="flex flex-col">
              <span className="text-[#101b43] text-sm font-bold">Admin User</span>
              <span className="text-slate-400 text-xs font-medium">Super Admin</span>
            </div>
          </div>
          <ChevronDown size={16} className="text-slate-400" />
        </div>

        {/* Logout */}
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-500 hover:text-red-600 hover:bg-red-50 transition-colors">
          <LogOut size={20} strokeWidth={2} />
          Logout
        </button>
      </div>

    </aside>
  );
}
