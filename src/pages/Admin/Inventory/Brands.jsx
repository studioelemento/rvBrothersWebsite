import React, { useState } from 'react';
import { Search, Bell, Plus, Filter, ChevronDown, Edit2, ChevronLeft, ChevronRight, X, CloudUpload } from 'lucide-react';

const brandsData = [
  {
    name: 'Bosch',
    subname: 'bosch',
    logoText: 'BOSCH',
    logoColor: 'text-red-600',
    description: 'Bosch is a global leader in engineering and technology, offering high-quality products and solutions.'
  },
  {
    name: 'Hitachi',
    subname: 'hitachi',
    logoText: 'HITACHI',
    logoColor: 'text-gray-800',
    description: 'Hitachi delivers innovative industrial and electronic solutions that empower a better future.'
  },
  {
    name: 'Danfoss',
    subname: 'danfoss',
    logoText: 'Danfoss',
    logoColor: 'text-red-500 italic',
    description: 'Danfoss specializes in energy-efficient solutions for heating, cooling, and industrial applications.'
  },
  {
    name: 'Wika',
    subname: 'wika',
    logoText: 'WIKA',
    logoColor: 'text-blue-600',
    description: 'WIKA manufactures precision instruments and gauges for measurement and calibration.'
  },
  {
    name: 'Fluke',
    subname: 'fluke',
    logoText: 'FLUKE',
    logoColor: 'text-yellow-500 bg-gray-900 px-1',
    description: 'Fluke provides reliable test and measurement tools trusted by professionals worldwide.'
  },
  {
    name: 'SKF',
    subname: 'skf',
    logoText: 'SKF',
    logoColor: 'text-blue-700',
    description: 'SKF is a leading brand in bearings, seals, and lubrication solutions for industrial applications.'
  }
];

export default function Brands() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-6 max-w-7xl mx-auto w-full bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Brands</h1>
          <p className="text-slate-500 text-sm mt-1">Manage and organize product brands.</p>
        </div>
        
        <div className="flex items-center space-x-3 sm:space-x-4 w-full md:w-auto">
          {/* Top search */}
          <div className="relative hidden md:block">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search by brand name..." 
              className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-sm w-64 lg:w-80 shadow-sm transition-shadow" 
            />
          </div>
          <button className="relative p-2.5 text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-600 rounded-full ring-2 ring-white"></span>
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-indigo-600 text-white px-4 py-2.5 rounded-lg flex items-center text-sm font-medium hover:bg-indigo-700 shadow-sm transition-colors w-full md:w-auto justify-center"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Brand
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center p-4 border-b border-slate-200 gap-4">
          <div className="relative w-full sm:w-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search brands..." 
              className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-sm w-full sm:w-72 shadow-sm" 
            />
          </div>
          <button className="flex items-center justify-center space-x-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 px-4 py-2 rounded-lg hover:bg-slate-50 shadow-sm transition-colors w-full sm:w-auto">
            <Filter className="w-4 h-4 text-slate-500" />
            <span>Filter</span>
            <ChevronDown className="w-4 h-4 text-slate-500" />
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50/50 text-slate-700 font-semibold border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 w-20">SL No.</th>
                <th className="px-6 py-4 w-64">Brand Name</th>
                <th className="px-6 py-4">Brand Description</th>
                <th className="px-6 py-4 w-24 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {brandsData.map((brand, index) => (
                <tr key={index} className="hover:bg-slate-50/80 transition-colors group">
                  <td className="px-6 py-5 font-medium text-slate-900">{index + 1}</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-white border border-slate-200 rounded-lg flex items-center justify-center p-1 shadow-sm">
                        {/* Mock logo representation */}
                        <span className={`font-bold text-xs tracking-wider ${brand.logoColor}`}>
                          {brand.logoText}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 text-base">{brand.name}</p>
                        <p className="text-slate-500 text-xs mt-0.5">{brand.subname}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-slate-500 leading-relaxed pr-12">
                    {brand.description}
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex justify-center">
                      <button className="p-2 text-slate-400 hover:text-indigo-600 bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow transition-all hover:border-indigo-200">
                        <Edit2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 bg-slate-50/50">
          <span className="text-sm text-slate-500 font-medium">Showing 1 to 6 of 6 brands</span>
          <div className="flex space-x-2">
            <button className="p-1.5 sm:px-3 sm:py-1.5 border border-slate-200 rounded-lg bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-700 shadow-sm transition-colors flex items-center justify-center">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 sm:w-auto sm:px-3 sm:py-1.5 border-2 border-indigo-600 rounded-lg bg-indigo-50 text-indigo-700 font-semibold shadow-sm flex items-center justify-center">
              1
            </button>
            <button className="p-1.5 sm:px-3 sm:py-1.5 border border-slate-200 rounded-lg bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-700 shadow-sm transition-colors flex items-center justify-center">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Add Brand</h2>
                <p className="text-sm text-slate-500 mt-1">Enter the details to create a new brand.</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-500 transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5">
              {/* Brand Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">
                  Brand Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Enter brand name" 
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-sm shadow-sm transition-shadow"
                />
              </div>

              {/* Brand Logo */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">
                  Brand Logo <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-slate-50 hover:border-indigo-300 transition-colors cursor-pointer group">
                  <CloudUpload className="w-8 h-8 text-slate-400 mb-3 group-hover:text-indigo-500 transition-colors" />
                  <p className="text-sm font-medium text-slate-700">Click to upload or drag and drop</p>
                  <p className="text-xs text-slate-500 mt-1">PNG, JPG, WEBP up to 2MB</p>
                </div>
              </div>

              {/* Brand Description */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">
                  Brand Description <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <textarea 
                    placeholder="Enter brand description" 
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-sm shadow-sm transition-shadow resize-none"
                  ></textarea>
                  <div className="absolute bottom-3 right-3 text-xs text-slate-400 font-medium bg-white px-1">
                    0 / 300
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-end space-x-3 bg-slate-50/50">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-100 hover:border-slate-300 transition-colors bg-white shadow-sm"
              >
                Cancel
              </button>
              <button className="px-5 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm">
                Save Brand
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
