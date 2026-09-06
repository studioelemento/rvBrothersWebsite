import React, { useState } from 'react';
import { Search, Plus, Filter, ChevronDown, Eye, ChevronLeft, ChevronRight, MoreVertical, Ticket, ShieldCheck, Calendar } from 'lucide-react';

const couponsData = [
  {
    code: 'WELCOME10',
    type: 'Percentage Discount',
    value: '10%',
    description: 'Get 10% off on your first order. Valid for new customers only on all products...'
  },
  {
    code: 'SAVE500',
    type: 'Fixed Discount',
    value: '₹500',
    description: 'Flat ₹500 off on orders above ₹5,000. Applicable on all categories...'
  },
  {
    code: 'INDUSTRY15',
    type: 'Percentage Discount',
    value: '15%',
    description: 'Enjoy 15% off on industrial fittings and pipe accessories. Limited time...'
  },
  {
    code: 'FREESHIP',
    type: 'Fixed Discount',
    value: '₹0',
    description: 'Free shipping on orders above ₹2,000. Valid on prepaid orders only...'
  },
  {
    code: 'BULK1000',
    type: 'Fixed Discount',
    value: '₹1,000',
    description: 'Get flat ₹1,000 off on bulk orders above ₹20,000. Offer valid for B2B...'
  },
  {
    code: 'MEGA20',
    type: 'Percentage Discount',
    value: '20%',
    description: 'Mega savings! Avail 20% discount on selected products. Offer valid till...'
  }
];

export default function Coupons() {
  const [isAdding, setIsAdding] = useState(false);

  if (isAdding) {
    return (
      <div className="p-6 max-w-7xl mx-auto w-full bg-slate-50 min-h-screen">
        {/* Top bar with back button */}
        <button 
          onClick={() => setIsAdding(false)}
          className="flex items-center space-x-2 text-sm font-semibold text-slate-700 bg-white border border-slate-200 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors mb-6 shadow-sm"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Coupons</span>
        </button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#101b43] tracking-tight">Add Discount Coupon</h1>
          <p className="text-slate-500 text-sm mt-1">Create a new discount coupon to offer to your customers.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Card: Coupon Information */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-indigo-50 text-[#4c00ff] rounded-xl flex items-center justify-center">
                <Ticket className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Coupon Information</h3>
                <p className="text-sm text-slate-500">Enter the basic details of your coupon.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">
                  Coupon Name (Code) <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Enter coupon code" 
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] focus:border-transparent text-sm shadow-sm transition-shadow uppercase"
                />
                <p className="text-xs text-slate-500 mt-2">This code will be used by customers at checkout.</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">
                  Coupon Type <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select className="w-full appearance-none px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] focus:border-transparent text-sm bg-white text-slate-700 shadow-sm">
                    <option>Select coupon type</option>
                    <option>Percentage Discount</option>
                    <option>Fixed Discount</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-500 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">
                  Coupon Value <span className="text-red-500">*</span>
                </label>
                <div className="relative flex rounded-lg shadow-sm">
                  <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-slate-200 bg-slate-50 text-slate-500 font-medium sm:text-sm">
                    ₹
                  </span>
                  <input 
                    type="number" 
                    placeholder="Enter value" 
                    className="flex-1 min-w-0 block w-full px-4 py-3 rounded-none rounded-r-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4c00ff] focus:border-transparent text-sm transition-shadow"
                  />
                </div>
                <p className="text-xs text-slate-500 mt-2">Enter the discount value for this coupon.</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">
                  Coupon Description <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <textarea 
                    placeholder="Enter coupon description" 
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] focus:border-transparent text-sm shadow-sm transition-shadow resize-none"
                  ></textarea>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-xs text-slate-500">Provide a short description of this coupon.</p>
                  <span className="text-xs text-slate-400 font-medium">0 / 300</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card: Usage Limits */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-indigo-50 text-[#4c00ff] rounded-xl flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Usage Limits & Restrictions</h3>
                <p className="text-sm text-slate-500">Set validity period and usage limits for this coupon.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">
                  Expiry Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Select expiry date" 
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] focus:border-transparent text-sm shadow-sm transition-shadow"
                  />
                  <Calendar className="w-5 h-5 text-slate-400 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                </div>
                <p className="text-xs text-slate-500 mt-2">Select the date when this coupon will expire.</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">
                  Usage Limit Per Coupon <span className="text-red-500">*</span>
                </label>
                <input 
                  type="number" 
                  placeholder="Enter total usage limit" 
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] focus:border-transparent text-sm shadow-sm transition-shadow"
                />
                <p className="text-xs text-slate-500 mt-2">Total number of times this coupon can be used across all customers.</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">
                  Usage Limit Per User <span className="text-red-500">*</span>
                </label>
                <input 
                  type="number" 
                  placeholder="Enter usage limit per user" 
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] focus:border-transparent text-sm shadow-sm transition-shadow"
                />
                <p className="text-xs text-slate-500 mt-2">Maximum number of times a single user can use this coupon.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-6 bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex justify-end space-x-4">
          <button 
            onClick={() => setIsAdding(false)}
            className="px-6 py-2.5 border border-slate-200 text-slate-700 rounded-lg text-sm font-bold hover:bg-slate-50 transition-colors bg-white shadow-sm"
          >
            Cancel
          </button>
          <button className="px-8 py-2.5 bg-[#4c00ff] text-white rounded-lg text-sm font-bold hover:bg-[#3d00cc] transition-colors shadow-sm">
            Save Coupon
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto w-full bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#101b43] tracking-tight">Discount Coupons</h1>
          <p className="text-slate-500 text-sm mt-1">Manage promotional and discount offers.</p>
        </div>
        
        <div className="flex items-center w-full md:w-auto">
          <button 
            onClick={() => setIsAdding(true)}
            className="bg-[#4c00ff] text-white px-5 py-2.5 rounded-lg flex items-center text-sm font-medium hover:bg-[#3d00cc] shadow-sm transition-colors w-full md:w-auto justify-center"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Coupon
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 mb-6 flex flex-col sm:flex-row items-center gap-4">
        <div className="relative w-full sm:flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search coupons..." 
            className="pl-9 pr-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] focus:border-transparent text-sm w-full transition-shadow" 
          />
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <div className="relative w-full sm:w-44">
             <select className="w-full appearance-none px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] focus:border-transparent text-sm bg-white text-slate-700 font-medium">
                <option>All Types</option>
                <option>Percentage Discount</option>
                <option>Fixed Discount</option>
             </select>
             <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>

          <div className="relative w-full sm:w-44">
             <select className="w-full appearance-none px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] focus:border-transparent text-sm bg-white text-slate-700 font-medium">
                <option>All Status</option>
                <option>Active</option>
                <option>Expired</option>
             </select>
             <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>
          
          <button className="flex items-center justify-center space-x-2 text-sm font-semibold text-[#4c00ff] bg-white border border-[#4c00ff]/20 px-6 py-2.5 rounded-lg hover:bg-indigo-50 shadow-sm transition-colors w-full sm:w-auto">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Table block */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-white text-slate-700 font-semibold border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 w-44">Coupon Code</th>
                <th className="px-6 py-4 w-48">Type</th>
                <th className="px-6 py-4 w-32">Coupon Value</th>
                <th className="px-6 py-4">Description</th>
                <th className="px-6 py-4 w-40 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {couponsData.map((coupon, index) => (
                <tr key={index} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-6">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-bold text-[#4c00ff] border border-[#4c00ff]/20 bg-indigo-50/50 tracking-wide">
                      {coupon.code}
                    </span>
                  </td>
                  <td className="px-6 py-6">
                    {coupon.type === 'Percentage Discount' ? (
                      <span className="inline-flex items-center px-2.5 py-1.5 rounded-md text-xs font-semibold bg-[#f5f3ff] text-[#6d28d9]">
                        {coupon.type}
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-1.5 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-600">
                        {coupon.type}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-6 font-bold text-slate-900 text-lg">
                    {coupon.value}
                  </td>
                  <td className="px-6 py-6 text-slate-500 leading-relaxed max-w-sm pr-8">
                    {coupon.description}
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="flex items-center space-x-1.5 px-3 py-2 text-[#4c00ff] hover:bg-indigo-50 border border-slate-200 rounded-lg text-xs font-bold shadow-sm transition-colors">
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Details</span>
                      </button>
                      <button className="p-2 text-slate-400 hover:text-slate-600 rounded-lg transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 bg-white">
          <span className="text-sm text-slate-500 font-medium">Showing 1 to 6 of 6 coupons</span>
          <div className="flex space-x-2">
            <button className="p-1.5 sm:px-3 sm:py-1.5 border border-slate-200 rounded-lg bg-white text-slate-400 hover:bg-slate-50 hover:text-slate-700 shadow-sm transition-colors flex items-center justify-center">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 sm:w-auto sm:px-3 sm:py-1.5 border-2 border-[#4c00ff] rounded-lg bg-indigo-50 text-[#4c00ff] font-semibold shadow-sm flex items-center justify-center">
              1
            </button>
            <button className="p-1.5 sm:px-3 sm:py-1.5 border border-slate-200 rounded-lg bg-white text-slate-400 hover:bg-slate-50 hover:text-slate-700 shadow-sm transition-colors flex items-center justify-center">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
