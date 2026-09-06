import React, { useState } from 'react';
import { Search, Plus, Filter, ChevronDown, Edit2, ChevronLeft, ChevronRight, MoreVertical, X, CloudUpload } from 'lucide-react';

const categoriesData = [
  {
    name: 'Pipe Fittings',
    slug: 'pipe-fittings',
    description: 'Stainless steel industrial pipe fittings used for plumbing, oil & gas, chemical...',
    productsCount: 24,
    icon: '🔧' // Mock placeholder for image
  },
  {
    name: 'Valves',
    slug: 'valves',
    description: 'High quality valves for controlling the flow of liquids and gases in industrial...',
    productsCount: 18,
    icon: '🚰'
  },
  {
    name: 'Flanges',
    slug: 'flanges',
    description: 'Durable stainless steel flanges available in various sizes and pressure...',
    productsCount: 32,
    icon: '⚙️'
  },
  {
    name: 'Steel Pipes',
    slug: 'steel-pipes',
    description: 'Premium quality steel pipes for construction, infrastructure and...',
    productsCount: 112,
    icon: '🔩'
  },
  {
    name: 'Gaskets',
    slug: 'gaskets',
    description: 'Industrial gaskets for leak-proof sealing in high pressure applications.',
    productsCount: 15,
    icon: '⭕'
  }
];

export default function Categories() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-6 max-w-7xl mx-auto w-full bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Categories</h1>
          <p className="text-slate-500 text-sm mt-1">Manage and organize product categories.</p>
        </div>
        
        <div className="flex items-center space-x-3 sm:space-x-4 w-full md:w-auto">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#4c00ff] text-white px-5 py-2.5 rounded-lg flex items-center text-sm font-medium hover:bg-[#3d00cc] shadow-sm transition-colors w-full md:w-auto justify-center"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Category
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
              placeholder="Search categories..." 
              className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-sm w-full sm:w-80 shadow-sm transition-shadow" 
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
                <th className="px-6 py-4 w-64">Category Name</th>
                <th className="px-6 py-4">Description</th>
                <th className="px-6 py-4 w-40 text-center">Products Count</th>
                <th className="px-6 py-4 w-28 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {categoriesData.map((category, index) => (
                <tr key={index} className="hover:bg-slate-50/80 transition-colors group">
                  <td className="px-6 py-5 font-medium text-slate-900">{index + 1}</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white border border-slate-200 rounded-lg flex items-center justify-center shadow-sm text-xl">
                        {category.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 text-base">{category.name}</p>
                        <p className="text-slate-500 text-xs mt-0.5">{category.slug}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-slate-500 leading-relaxed max-w-xs sm:max-w-sm truncate">
                    {category.description}
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex justify-center">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-[#f5f3ff] text-[#6d28d9] border border-[#ede9fe]">
                        {category.productsCount} Products
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center justify-center space-x-2">
                      <button className="p-2 text-slate-400 hover:text-[#4c00ff] bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow transition-all hover:border-indigo-200">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-slate-600 bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow transition-all">
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
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 bg-slate-50/50">
          <span className="text-sm text-slate-500 font-medium">Showing 1 to 5 of 5 categories</span>
          <div className="flex space-x-2">
            <button className="p-1.5 sm:px-3 sm:py-1.5 border border-slate-200 rounded-lg bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-700 shadow-sm transition-colors flex items-center justify-center">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 sm:w-auto sm:px-3 sm:py-1.5 border-2 border-[#4c00ff] rounded-lg bg-indigo-50 text-[#4c00ff] font-semibold shadow-sm flex items-center justify-center">
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
                <h2 className="text-xl font-bold text-slate-900">Add Category</h2>
                <p className="text-sm text-slate-500 mt-1">Enter the details to create a new product category.</p>
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
              {/* Category Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">
                  Category Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Enter category name" 
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-sm shadow-sm transition-shadow"
                />
              </div>

              {/* Category Description */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">
                  Category Description <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <textarea 
                    placeholder="Enter category description" 
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-sm shadow-sm transition-shadow resize-none"
                  ></textarea>
                  <div className="absolute bottom-3 right-3 text-xs text-slate-400 font-medium bg-white px-1">
                    0 / 300
                  </div>
                </div>
              </div>

              {/* Category Image */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">
                  Category Image <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-slate-50 hover:border-indigo-300 transition-colors cursor-pointer group">
                  <CloudUpload className="w-8 h-8 text-slate-400 mb-3 group-hover:text-indigo-500 transition-colors" />
                  <p className="text-sm font-medium text-slate-700">Click to upload or drag and drop</p>
                  <p className="text-xs text-slate-500 mt-1">PNG, JPG, WEBP up to 2MB</p>
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
              <button className="px-5 py-2 bg-[#4c00ff] text-white rounded-lg text-sm font-medium hover:bg-[#3d00cc] transition-colors shadow-sm">
                Save Category
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
