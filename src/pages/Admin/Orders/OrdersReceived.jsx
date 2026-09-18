import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Printer, 
  ChevronDown, 
  User, 
  MapPin, 
  Info
} from 'lucide-react';

import productImg1 from '../../../assets/ball_bearing.png';
import productImg2 from '../../../assets/helical_gearbox.png';
import productImg3 from '../../../assets/brake_disc.png';

export default function OrdersReceived() {
  return (
    <div className="w-full pb-10">
      {/* Top Navigation */}
      <Link to="/admin/orders" className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors mb-6">
        <ArrowLeft size={16} />
        Back to Orders
      </Link>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-[#101b43]">Order #ORD-10036</h1>
            <span className="inline-flex px-3 py-1 text-sm font-medium bg-orange-100 text-orange-600 rounded-md">
              Received
            </span>
          </div>
          <p className="mt-1 text-sm text-slate-500">Placed on May 27, 2024 at 10:24 AM</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
            <Printer size={16} />
            Print Invoice
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
            More Actions
            <ChevronDown size={16} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Order & Customer Details */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <h2 className="text-lg font-bold text-[#101b43] mb-6">Order & Customer Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Customer Info */}
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-4">
                  <User size={18} className="text-indigo-500" />
                  Customer Information
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-lg font-semibold text-slate-600 shrink-0">
                    R
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#101b43]">Rahul Sharma</p>
                    <p className="text-sm text-indigo-600 mt-1">rahul.sharma@email.com</p>
                    <p className="text-sm text-slate-500 mt-1">+91 98765 43210</p>
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-4">
                  <MapPin size={18} className="text-indigo-500" />
                  Shipping Address
                </div>
                <div className="pl-7">
                  <p className="text-sm font-bold text-[#101b43]">Rahul Sharma</p>
                  <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                    23, Industrial Area, Phase 2<br />
                    Gurugram, Haryana - 122001<br />
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <h2 className="text-lg font-bold text-[#101b43] mb-6">Order Summary</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="pb-4 text-xs font-semibold text-slate-500 uppercase">Product</th>
                    <th className="pb-4 text-xs font-semibold text-slate-500 uppercase text-right">Price</th>
                    <th className="pb-4 text-xs font-semibold text-slate-500 uppercase text-center w-24">Qty</th>
                    <th className="pb-4 text-xs font-semibold text-slate-500 uppercase text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center shrink-0 border border-slate-200 overflow-hidden p-1">
                          <img src={productImg1} alt="Product" className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#101b43]">Stainless Steel Pipe Fitting</p>
                          <p className="text-xs text-slate-500 mt-0.5">SKU: SS-PF-001</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-sm font-medium text-[#101b43] text-right">₹1,250.00</td>
                    <td className="py-4 text-sm font-medium text-[#101b43] text-center">2</td>
                    <td className="py-4 text-sm font-medium text-[#101b43] text-right">₹2,500.00</td>
                  </tr>
                  <tr>
                    <td className="py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center shrink-0 border border-slate-200 overflow-hidden p-1">
                          <img src={productImg2} alt="Product" className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#101b43]">Industrial Valves 2 inch</p>
                          <p className="text-xs text-slate-500 mt-0.5">SKU: IV-2IN-002</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-sm font-medium text-[#101b43] text-right">₹2,890.00</td>
                    <td className="py-4 text-sm font-medium text-[#101b43] text-center">1</td>
                    <td className="py-4 text-sm font-medium text-[#101b43] text-right">₹2,890.00</td>
                  </tr>
                  <tr>
                    <td className="py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center shrink-0 border border-slate-200 overflow-hidden p-1">
                          <img src={productImg3} alt="Product" className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#101b43]">Mild Steel Flange</p>
                          <p className="text-xs text-slate-500 mt-0.5">SKU: MS-FL-010</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-sm font-medium text-[#101b43] text-right">₹950.00</td>
                    <td className="py-4 text-sm font-medium text-[#101b43] text-center">3</td>
                    <td className="py-4 text-sm font-medium text-[#101b43] text-right">₹2,850.00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Totals */}
            <div className="mt-6 flex justify-end">
              <div className="w-full max-w-sm space-y-3 text-sm">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-medium text-[#101b43]">₹8,240.00</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Shipping Charge</span>
                  <span className="font-medium text-[#101b43]">₹250.00</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>GST (18%)</span>
                  <span className="font-medium text-[#101b43]">₹1,519.20</span>
                </div>
                <div className="pt-4 border-t border-slate-100 flex justify-between">
                  <span className="text-base font-bold text-[#101b43]">Order Total</span>
                  <span className="text-lg font-bold text-[#101b43]">₹10,009.20</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <h2 className="text-lg font-bold text-[#101b43] mb-6">Payment Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center justify-between sm:block">
                <span className="text-sm text-slate-500 block sm:mb-1">Payment Method</span>
                <span className="text-sm font-bold text-[#101b43]">Bank Transfer</span>
              </div>
              <div className="flex items-center justify-between sm:block">
                <span className="text-sm text-slate-500 block sm:mb-1">Transaction ID</span>
                <span className="text-sm font-bold text-[#101b43]">TXN-2778457665</span>
              </div>
              <div className="flex items-center justify-between sm:block">
                <span className="text-sm text-slate-500 block sm:mb-1">Payment Status</span>
                <span className="inline-flex px-2 py-0.5 text-xs font-bold bg-green-100 text-green-700 rounded-md mt-1">
                  Paid
                </span>
              </div>
              <div className="flex items-center justify-between sm:block">
                <span className="text-sm text-slate-500 block sm:mb-1">Payment Date</span>
                <span className="text-sm font-bold text-[#101b43]">May 27, 2024 at 10:26 AM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Order Status */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <h2 className="text-lg font-bold text-[#101b43] mb-8">Order Status</h2>
            
            {/* Stepper */}
            <div className="relative mb-10">
              <div className="absolute top-4 left-4 right-4 h-0.5 bg-slate-200"></div>
              <div className="flex justify-between relative z-10">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-sm border-4 border-white mb-2 shadow-[0_0_0_4px_rgba(99,102,241,0.2)]">
                    1
                  </div>
                  <span className="text-xs font-bold text-[#101b43]">Received</span>
                  <span className="text-[10px] text-slate-500 mt-0.5 text-center">May 27, 10:24 AM</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-500 font-bold text-sm border-2 border-slate-200 mb-2">
                    2
                  </div>
                  <span className="text-xs font-medium text-slate-500">Ready for<br />Pickup</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-500 font-bold text-sm border-2 border-slate-200 mb-2">
                    3
                  </div>
                  <span className="text-xs font-medium text-slate-500">Shipped</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-500 font-bold text-sm border-2 border-slate-200 mb-2">
                    4
                  </div>
                  <span className="text-xs font-medium text-slate-500">Delivered</span>
                </div>
              </div>
            </div>

            {/* Alert */}
            <div className="bg-indigo-50/50 border border-indigo-100 rounded-lg p-4 flex gap-3">
              <Info className="text-indigo-600 shrink-0 mt-0.5" size={18} />
              <p className="text-sm text-indigo-900 leading-relaxed">
                Add <span className="font-bold">tracking details</span> to mark this order as Ready for Pickup and notify the customer.
              </p>
            </div>
          </div>

          {/* Shipping & Tracking */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <h2 className="text-lg font-bold text-[#101b43] mb-6">Shipping & Tracking</h2>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5">Courier Partner</label>
                <div className="relative">
                  <select className="w-full pl-4 pr-10 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-[#101b43] focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 appearance-none">
                    <option>Delhivery</option>
                    <option>Blue Dart</option>
                    <option>DTDC</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5">Tracking Number</label>
                <input 
                  type="text" 
                  defaultValue="12345678901234" 
                  className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-[#101b43] focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5">Tracking Link (Optional)</label>
                <input 
                  type="text" 
                  defaultValue="https://www.delhivery.com/track/12345678901234" 
                  className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-[#101b43] focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 truncate"
                />
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-bold hover:bg-indigo-700 transition-colors">
                Save Tracking Details
              </button>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-indigo-200 bg-white text-indigo-600 rounded-lg text-sm font-bold hover:bg-indigo-50 transition-colors">
                <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 21c-1.566 0-3.09-.413-4.42-1.196l-.317-.187-3.29.862.877-3.208-.206-.327a8.966 8.966 0 0 1-1.378-4.78C3.297 7.218 7.22 3.3 12.031 3.3c2.347 0 4.55.913 6.208 2.57 1.658 1.658 2.571 3.86 2.571 6.207 0 4.862-3.923 8.923-8.779 8.923zm-5.748-2.607a7.223 7.223 0 0 0 5.748 2.06c3.9 0 7.079-3.176 7.079-7.073 0-1.892-.736-3.668-2.073-5.006A7.042 7.042 0 0 0 12.031 5a7.075 7.075 0 0 0-7.078 7.073c0 1.25.32 2.474.927 3.551l1.012 1.603-1.636 5.986z"/>
                  <path d="M16.927 14.156c-.267-.133-1.585-.783-1.833-.873-.248-.09-.43-.133-.611.134-.182.266-.692.872-.848 1.05-.157.178-.314.201-.582.068-.268-.134-1.133-.418-2.158-1.332-.797-.71-1.335-1.588-1.493-1.856-.157-.267-.017-.411.117-.544.12-.121.268-.312.402-.468.134-.156.178-.267.268-.445.09-.178.044-.334-.022-.467-.067-.134-.611-1.472-.837-2.016-.22-.53-.444-.457-.611-.466-.156-.008-.335-.01-.514-.01-.179 0-.47.067-.716.334-.246.267-.939.917-.939 2.235s.961 2.589 1.096 2.766c.134.178 1.884 2.875 4.561 4.03.637.274 1.134.437 1.52.56.64.203 1.222.174 1.68.106.516-.076 1.585-.648 1.808-1.274.223-.626.223-1.162.156-1.274-.067-.111-.246-.178-.514-.312z"/>
                </svg>
                Send Tracking Info via WhatsApp
              </button>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <h2 className="text-lg font-bold text-[#101b43] mb-6">Timeline</h2>
            
            <div className="relative pl-6 space-y-6">
              <div className="absolute left-2.5 top-2 bottom-2 w-px bg-slate-100"></div>
              
              <div className="relative">
                <div className="absolute -left-6 w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center border-[3px] border-indigo-100 mt-0.5">
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-bold text-[#101b43]">Order Placed</p>
                  </div>
                  <span className="text-xs text-slate-500">May 27, 2024 at 10:24 AM</span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-6 w-5 h-5 bg-slate-300 rounded-full flex items-center justify-center border-[3px] border-white mt-0.5">
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-[#101b43]">Ready for Pickup</p>
                  </div>
                  <span className="text-xs text-slate-400">-</span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-6 w-5 h-5 bg-slate-300 rounded-full flex items-center justify-center border-[3px] border-white mt-0.5">
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-[#101b43]">Shipped</p>
                  </div>
                  <span className="text-xs text-slate-400">-</span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-6 w-5 h-5 bg-slate-300 rounded-full flex items-center justify-center border-[3px] border-white mt-0.5">
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-[#101b43]">Delivered</p>
                  </div>
                  <span className="text-xs text-slate-400">-</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
