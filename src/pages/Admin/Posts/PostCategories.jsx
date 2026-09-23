import React, { useState } from 'react';
import { Search, Plus, Edit2, ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function PostCategories() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categories] = useState([
    {
      id: 1,
      name: 'Industry Insights',
      slug: 'industry-insights',
      postsCount: 12
    },
    {
      id: 2,
      name: 'Product Knowledge',
      slug: 'product-knowledge',
      postsCount: 18
    },
    {
      id: 3,
      name: 'Guides & How To',
      slug: 'guides-how-to',
      postsCount: 15
    },
    {
      id: 4,
      name: 'Technical Articles',
      slug: 'technical-articles',
      postsCount: 9
    },
    {
      id: 5,
      name: 'Maintenance Tips',
      slug: 'maintenance-tips',
      postsCount: 8
    },
    {
      id: 6,
      name: 'Case Studies',
      slug: 'case-studies',
      postsCount: 6
    },
    {
      id: 7,
      name: 'Company News',
      slug: 'company-news',
      postsCount: 7
    },
    {
      id: 8,
      name: 'Events & Updates',
      slug: 'events-updates',
      postsCount: 5
    }
  ]);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#101b43]">Post Categories</h1>
          <p className="mt-1 text-sm text-slate-500">Manage blog post categories.</p>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search categories..." 
              className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#3b12f6]/20 focus:border-[#3b12f6] w-full sm:w-[280px]"
            />
          </div>

          {/* Add Category */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-5 py-2 bg-[#3b12f6] text-white rounded-lg text-sm font-medium hover:bg-[#3b12f6]/90 transition-colors"
          >
            <Plus size={16} />
            Add Category
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-slate-100 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-[13px] font-bold text-slate-600 bg-white">
                <th className="px-6 py-4 font-bold text-center w-24">SL No.</th>
                <th className="px-6 py-4 font-bold">Category Name</th>
                <th className="px-6 py-4 font-bold">No. of Posts</th>
                <th className="px-6 py-4 font-bold">Actions</th>
              </tr>
            </thead>
            <tbody className="text-[13px]">
              {categories.map((category) => (
                <tr key={category.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-5 text-[#101b43] font-bold text-center">
                    {category.id}
                  </td>
                  <td className="px-6 py-5">
                    <div className="font-bold text-[#101b43] mb-1">{category.name}</div>
                    <div className="text-slate-500 font-medium">{category.slug}</div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1.5 rounded-md text-[11px] font-bold tracking-wide bg-[#f4f2ff] text-[#3b12f6]">
                      {category.postsCount} Posts
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <button className="p-2 border border-slate-200 rounded-lg text-slate-400 hover:text-[#3b12f6] hover:border-[#3b12f6] transition-colors bg-white">
                        <Edit2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="px-6 py-5 border-t border-slate-100 flex items-center justify-between bg-white">
          <p className="text-[13px] text-slate-500 font-medium">
            Showing 1 to 8 of 8 categories
          </p>
          <div className="flex items-center gap-1.5">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50 bg-white">
              <ChevronLeft size={16} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#3b12f6] bg-[#f4f2ff] text-[#3b12f6] font-bold text-[13px]">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50 bg-white">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Add Category Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#101b43]/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-md p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X size={20} />
            </button>
            
            <h2 className="text-xl font-bold text-[#101b43] mb-1">Add Category</h2>
            <p className="text-[13px] text-slate-500 mb-8 font-medium">Enter the details to create a new category.</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-[13px] font-bold text-[#101b43] mb-2">
                  Category Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Enter category name" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 text-[13px] font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#3b12f6]/20 focus:border-[#3b12f6] transition-colors placeholder:text-slate-400 placeholder:font-normal"
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2.5 border border-slate-200 rounded-lg text-[13px] font-bold text-slate-700 hover:bg-slate-50 transition-colors bg-white w-full sm:w-auto"
              >
                Cancel
              </button>
              <button className="px-6 py-2.5 bg-[#3b12f6] text-white rounded-lg text-[13px] font-bold hover:bg-[#3b12f6]/90 transition-colors w-full sm:w-auto">
                Save Category
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
