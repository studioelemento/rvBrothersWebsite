import React, { useState } from 'react';
import { 
  Search, Filter, Plus, Edit2, Eye, ChevronLeft, ChevronRight, ChevronDown,
  ArrowLeft, Image as ImageIcon, Lightbulb, Bold, Italic, Underline, 
  Strikethrough, List, ListOrdered, AlignLeft, AlignCenter, AlignRight, 
  Link2, Quote, ImagePlus, LayoutGrid, MoreHorizontal 
} from 'lucide-react';

export default function Posts() {
  const [isAddingPost, setIsAddingPost] = useState(false);
  const [posts] = useState([
    {
      id: 1,
      date: 'Jun 13, 2024',
      time: '10:30 AM',
      title: 'Understanding Stainless Steel:\nGrades, Types & Applications',
      category: 'Industry Insights',
      categoryColor: 'bg-purple-100 text-purple-700',
      content: 'Stainless steel is one of the most\nversatile materials used across...',
    },
    {
      id: 2,
      date: 'Jun 12, 2024',
      time: '04:15 PM',
      title: 'How to Choose the Right Pipe\nfor Your Project',
      category: 'Guides',
      categoryColor: 'bg-blue-100 text-blue-700',
      content: 'Choosing the right pipe is critical for\nthe safety and efficiency of any...',
    },
    {
      id: 3,
      date: 'Jun 10, 2024',
      time: '09:20 AM',
      title: 'Top 5 Valve Types and Their\nIndustrial Uses',
      category: 'Product Knowledge',
      categoryColor: 'bg-emerald-100 text-emerald-700',
      content: 'Valves are essential components in\ncontrolling the flow of liquids and...',
    },
    {
      id: 4,
      date: 'Jun 8, 2024',
      time: '02:45 PM',
      title: 'Flanges 101: Types, Standards\nand Applications',
      category: 'Technical',
      categoryColor: 'bg-amber-100 text-amber-700',
      content: 'Flanges provide a method of\nconnecting pipes, valves, pumps...',
    },
    {
      id: 5,
      date: 'Jun 6, 2024',
      time: '11:10 AM',
      title: 'Maintaining Industrial Pipes\nfor Long-Term Performance',
      category: 'Maintenance',
      categoryColor: 'bg-purple-100 text-purple-700',
      content: 'Proper maintenance of industrial\npipes can significantly extend...',
    },
    {
      id: 6,
      date: 'Jun 4, 2024',
      time: '03:30 PM',
      title: 'The Role of Gaskets in\nPreventing Leaks',
      category: 'Product Knowledge',
      categoryColor: 'bg-blue-100 text-blue-700',
      content: 'Gaskets are small components\nthat play a big role in ensuring...',
    },
    {
      id: 7,
      date: 'Jun 2, 2024',
      time: '10:05 AM',
      title: 'Carbon Steel vs Stainless Steel:\nWhich is Better?',
      category: 'Industry Insights',
      categoryColor: 'bg-purple-100 text-purple-700',
      content: 'Both carbon steel and stainless steel\nhave unique properties and...',
    },
    {
      id: 8,
      date: 'May 30, 2024',
      time: '01:40 PM',
      title: 'Why Quality Fittings Matter in\nPiping Systems',
      category: 'Guides',
      categoryColor: 'bg-emerald-100 text-emerald-700',
      content: 'Fittings may be small, but they are\ncrucial to the reliability and safety...',
    }
  ]);

  if (isAddingPost) {
    return (
      <div className="w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsAddingPost(false)} 
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors bg-white border border-slate-200 md:border-none md:bg-transparent"
            >
              <ArrowLeft size={20} className="text-[#101b43]" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-[#101b43]">Add Post</h1>
              <p className="mt-1 text-sm text-slate-500">Create a new blog post.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsAddingPost(false)} 
              className="px-5 py-2 border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors bg-white"
            >
              Cancel
            </button>
            <button className="px-5 py-2 bg-[#3b12f6] text-white rounded-lg text-sm font-semibold hover:bg-[#3b12f6]/90 transition-colors">
              Save Post
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column - Form */}
          <div className="flex-1 bg-white border border-slate-100 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] p-6 space-y-6">
            {/* Title */}
            <div>
              <label className="block text-[13px] font-bold text-[#101b43] mb-2">
                Post Title <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                placeholder="Enter post title" 
                className="w-full px-4 py-3 rounded-lg border border-slate-200 text-[13px] font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#3b12f6]/20 focus:border-[#3b12f6] transition-colors placeholder:text-slate-400 placeholder:font-normal"
              />
              <div className="flex justify-between items-center mt-2">
                <p className="text-[11px] text-slate-500 font-semibold">Keep it short and descriptive. Max 100 characters.</p>
                <p className="text-[11px] text-slate-400 font-bold">0 / 100</p>
              </div>
            </div>

            {/* Category */}
            <div>
              <label className="block text-[13px] font-bold text-[#101b43] mb-2">
                Post Category <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select className="w-full px-4 py-3 rounded-lg border border-slate-200 text-[13px] font-medium focus:outline-none focus:ring-2 focus:ring-[#3b12f6]/20 focus:border-[#3b12f6] transition-colors appearance-none text-slate-500 bg-white">
                  <option value="" disabled selected>Select post category</option>
                  <option value="industry-insights">Industry Insights</option>
                  <option value="guides">Guides</option>
                  <option value="product-knowledge">Product Knowledge</option>
                </select>
                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-[13px] font-bold text-[#101b43] mb-2">
                Post Description <span className="text-red-500">*</span>
              </label>
              <div className="border border-slate-200 rounded-lg overflow-hidden flex flex-col h-[400px]">
                {/* Toolbar Fake */}
                <div className="border-b border-slate-200 bg-white p-2 flex items-center flex-wrap gap-1">
                  <div className="flex items-center gap-1 border-r border-slate-200 pr-2 mr-1">
                    <select className="text-[13px] border-none bg-transparent focus:ring-0 text-slate-600 font-medium py-1.5 px-2 cursor-pointer outline-none">
                      <option>Paragraph</option>
                      <option>Heading 1</option>
                      <option>Heading 2</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center gap-0.5 border-r border-slate-200 pr-2 mr-1">
                    <button className="p-2 hover:bg-slate-100 rounded-md text-slate-700"><Bold size={15} strokeWidth={2.5} /></button>
                    <button className="p-2 hover:bg-slate-100 rounded-md text-slate-700 italic"><Italic size={15} /></button>
                    <button className="p-2 hover:bg-slate-100 rounded-md text-slate-700 underline"><Underline size={15} /></button>
                    <button className="p-2 hover:bg-slate-100 rounded-md text-slate-700 line-through"><Strikethrough size={15} /></button>
                  </div>
                  
                  <div className="flex items-center gap-0.5 border-r border-slate-200 pr-2 mr-1">
                    <button className="p-2 hover:bg-slate-100 rounded-md text-slate-700"><List size={15} /></button>
                    <button className="p-2 hover:bg-slate-100 rounded-md text-slate-700"><ListOrdered size={15} /></button>
                  </div>
                  
                  <div className="flex items-center gap-0.5 border-r border-slate-200 pr-2 mr-1">
                    <button className="p-2 hover:bg-slate-100 rounded-md text-slate-700"><AlignLeft size={15} /></button>
                    <button className="p-2 hover:bg-slate-100 rounded-md text-slate-700"><AlignCenter size={15} /></button>
                    <button className="p-2 hover:bg-slate-100 rounded-md text-slate-700"><AlignRight size={15} /></button>
                  </div>
                  
                  <div className="flex items-center gap-0.5 border-r border-slate-200 pr-2 mr-1">
                    <button className="p-2 hover:bg-slate-100 rounded-md text-slate-700"><Link2 size={15} /></button>
                    <button className="p-2 hover:bg-slate-100 rounded-md text-slate-700"><Quote size={15} /></button>
                  </div>
                  
                  <div className="flex items-center gap-0.5 border-r border-slate-200 pr-2 mr-1">
                    <button className="p-2 hover:bg-slate-100 rounded-md text-slate-700"><ImagePlus size={15} /></button>
                    <button className="p-2 hover:bg-slate-100 rounded-md text-slate-700"><LayoutGrid size={15} /></button>
                  </div>
                  
                  <div className="flex items-center gap-0.5">
                    <button className="p-2 hover:bg-slate-100 rounded-md text-slate-700"><MoreHorizontal size={15} /></button>
                  </div>
                </div>
                {/* Textarea */}
                <textarea 
                  className="w-full flex-1 p-4 text-[13px] font-medium text-slate-700 focus:outline-none resize-none placeholder:text-slate-400 placeholder:font-normal bg-[#fafafc]"
                  placeholder="Write your post content here..."
                ></textarea>
                <div className="border-t border-slate-200 px-4 py-2 flex justify-end items-center text-[9px] text-slate-400 font-bold tracking-widest gap-2 bg-white">
                  <span>0 WORDS</span>
                  <span>POWERED BY TINY</span>
                  <div className="w-2 h-2 border-r-2 border-b-2 border-slate-300 ml-1"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[380px] space-y-6">
            {/* Image Upload */}
            <div className="bg-white border border-slate-100 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] p-6">
              <h3 className="text-[15px] font-bold text-[#101b43] mb-4">Post Featured Image</h3>
              
              <div className="border border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors cursor-pointer group min-h-[220px]">
                <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mb-4 relative">
                  <ImageIcon size={32} className="text-slate-300" strokeWidth={1.5} />
                  <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-[#3b12f6] rounded-full flex items-center justify-center text-white shadow-sm ring-4 ring-white">
                    <Plus size={16} strokeWidth={3} />
                  </div>
                </div>
                <p className="text-[13px] font-bold text-[#101b43] mb-1">Click to upload image</p>
                <p className="text-[12px] font-medium text-slate-400 mb-3">or drag and drop</p>
                <p className="text-[11px] text-slate-400 font-medium">JPG, PNG or WEBP. Max size 2MB.</p>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-[#f8f6ff] border border-[#f4f2ff] rounded-xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
              <div className="flex items-center gap-3 mb-2">
                <Lightbulb size={20} className="text-[#3b12f6]" />
                <h4 className="text-[13px] font-bold text-[#101b43]">Tips</h4>
              </div>
              <div className="pl-8 space-y-1">
                <p className="text-[12px] font-medium text-slate-600">
                  Use a high-quality image that represents your post.
                </p>
                <p className="text-[12px] font-medium text-slate-600">
                  Recommended size: 1200 x 675px
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#101b43]">Posts</h1>
          <p className="mt-1 text-sm text-slate-500">Manage and organize your blog posts.</p>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search posts..." 
              className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#3b12f6]/20 focus:border-[#3b12f6] w-[250px]"
            />
          </div>

          {/* Filter */}
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
            <Filter size={16} className="text-slate-500" />
            Filter
            <ChevronDown size={16} className="text-slate-500 ml-1" />
          </button>

          {/* Add Post */}
          <button 
            onClick={() => setIsAddingPost(true)}
            className="flex items-center gap-2 px-5 py-2 bg-[#3b12f6] text-white rounded-lg text-sm font-medium hover:bg-[#3b12f6]/90 transition-colors"
          >
            <Plus size={16} />
            Add Post
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-slate-100 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-[13px] font-bold text-slate-600 bg-white">
                <th className="px-6 py-4 font-bold">SL No.</th>
                <th className="px-6 py-4 font-bold">Date</th>
                <th className="px-6 py-4 font-bold">Post Title</th>
                <th className="px-6 py-4 font-bold">Category</th>
                <th className="px-6 py-4 font-bold">Post Content</th>
                <th className="px-6 py-4 font-bold">Actions</th>
              </tr>
            </thead>
            <tbody className="text-[13px]">
              {posts.map((post) => (
                <tr key={post.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-5 text-[#101b43] font-bold text-center w-20">
                    {post.id}
                  </td>
                  <td className="px-6 py-5">
                    <div className="text-slate-600">{post.date}</div>
                    <div className="text-slate-400 text-xs mt-0.5">{post.time}</div>
                  </td>
                  <td className="px-6 py-5 font-bold text-[#101b43] whitespace-pre-line leading-relaxed">
                    {post.title}
                  </td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1.5 rounded-md text-[11px] font-bold tracking-wide ${post.categoryColor}`}>
                      {post.category}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-slate-600 whitespace-pre-line leading-relaxed">
                    {post.content}
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <button className="p-2 border border-slate-200 rounded-lg text-slate-400 hover:text-[#3b12f6] hover:border-[#3b12f6] transition-colors bg-white">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-2 border border-slate-200 rounded-lg text-slate-400 hover:text-[#3b12f6] hover:border-[#3b12f6] transition-colors bg-white">
                        <Eye size={16} />
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
            Showing 1 to 8 of 23 posts
          </p>
          <div className="flex items-center gap-1.5">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50 bg-white">
              <ChevronLeft size={16} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#3b12f6] bg-[#f4f2ff] text-[#3b12f6] font-bold text-[13px]">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold text-[13px] bg-white">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold text-[13px] bg-white">
              3
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50 bg-white">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
