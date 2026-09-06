import React, { useState } from 'react';
import { Search, Bell, Plus, ChevronDown, Filter, RotateCcw, Edit2, Eye, MoreVertical, ChevronUp, ChevronLeft, ChevronRight, X, ShoppingBag, ArrowRight, CheckCircle2, Box, Layers, Info, Image as ImageIcon, FileText, Tag, List, Search as SearchIcon, Settings, Trash2, Lock, Bold, Italic, Underline, Link2, Upload } from 'lucide-react';

export default function Products() {
  const [expandedRow, setExpandedRow] = useState('SKU001');
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [selectedProductType, setSelectedProductType] = useState('simple');
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [isAddVariantModalOpen, setIsAddVariantModalOpen] = useState(false);

  if (isAddingProduct && selectedProductType === 'variable') {
    return (
      <div className="p-6 max-w-[1600px] mx-auto w-full bg-[#f8fafc] min-h-screen font-sans pb-24">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div className="flex items-center space-x-3">
             <button onClick={() => setIsAddingProduct(false)} className="p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors hidden sm:block shadow-sm">
                <ChevronLeft className="w-5 h-5 text-slate-600" />
             </button>
             <div>
               <h1 className="text-3xl font-bold text-[#101b43] tracking-tight">Add New Variable Product</h1>
               <p className="text-slate-500 text-sm mt-1">Create a variable product with multiple variants.</p>
             </div>
          </div>
          
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button 
              onClick={() => setIsAddingProduct(false)}
              className="flex-1 sm:flex-none px-6 py-2.5 border border-slate-200 text-slate-700 rounded-lg text-sm font-bold hover:bg-slate-50 transition-colors bg-white shadow-sm"
            >
              Cancel
            </button>
            <button className="flex-1 sm:flex-none px-6 py-2.5 bg-[#4c00ff] text-white rounded-lg text-sm font-bold hover:bg-[#3d00cc] transition-colors shadow-sm flex items-center justify-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Save Product</span>
            </button>
          </div>
        </div>

        {/* Form Layout */}
        <div className="space-y-6">
          
          {/* Row 1: Info (2/3) & Media (1/3) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
             {/* 1. Product Information */}
             <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 p-6 h-full">
                <div className="flex items-center space-x-2 mb-6">
                   <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center">
                     <Info className="w-4 h-4 text-[#4c00ff]" />
                   </div>
                   <h2 className="text-lg font-bold text-slate-900">1. Product Information</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5 md:col-span-1">
                      <label className="text-sm font-bold text-slate-900">Product Name <span className="text-red-500">*</span></label>
                      <input type="text" placeholder="Enter product name" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] text-sm" />
                    </div>
                    <div className="space-y-1.5 md:col-span-1">
                      <label className="text-sm font-bold text-slate-900">Product Title <span className="text-red-500">*</span></label>
                      <input type="text" placeholder="Enter product title" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] text-sm" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-slate-900">Brand <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <select className="w-full appearance-none px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] text-sm bg-white text-slate-500">
                          <option>Select brand</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-slate-900">Category <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <select className="w-full appearance-none px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] text-sm bg-white text-slate-500">
                          <option>Select category</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>
             </div>

             {/* 2. Product Media */}
             <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 h-full">
                <div className="flex items-center space-x-2 mb-6">
                   <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center">
                     <ImageIcon className="w-4 h-4 text-purple-600" />
                   </div>
                   <h2 className="text-lg font-bold text-slate-900">2. Product Media</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-900">Main Image</label>
                    <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors cursor-pointer bg-slate-50/50">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-3">
                        <ImageIcon className="w-6 h-6 text-slate-400" />
                      </div>
                      <p className="font-bold text-slate-700 text-sm">Click to upload or drag and drop</p>
                      <p className="text-slate-400 text-xs mt-2">PNG, JPG, WEBP up to 5MB</p>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-900">Gallery Images</label>
                    <div className="border border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors cursor-pointer bg-white">
                      <button className="px-4 py-2 border border-slate-200 rounded-lg text-slate-700 font-bold text-sm hover:bg-slate-50 flex items-center space-x-2 mb-2 shadow-sm">
                        <Plus className="w-4 h-4" />
                        <span>Add Images</span>
                      </button>
                      <p className="text-slate-400 text-xs">PNG, JPG, WEBP up to 5MB each</p>
                    </div>
                  </div>
                </div>
             </div>
          </div>

          {/* Row 2: Product Descriptions (Full Width) */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
             <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-blue-600" />
                </div>
                <h2 className="text-lg font-bold text-slate-900">3. Product Descriptions</h2>
             </div>
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
               <div className="space-y-1.5 flex flex-col h-full">
                 <label className="text-sm font-bold text-slate-900">Short Description</label>
                 <textarea placeholder="Enter short description" className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] text-sm resize-none h-[132px]"></textarea>
                 <p className="text-xs text-slate-400 text-left mt-1">0 / 200 characters</p>
               </div>
               <div className="space-y-1.5 flex flex-col h-full">
                 <label className="text-sm font-bold text-slate-900">Long Description</label>
                 <div className="border border-slate-200 rounded-lg overflow-hidden flex flex-col h-[132px]">
                   <div className="bg-slate-50/50 border-b border-slate-200 px-3 py-2 flex items-center space-x-2 overflow-x-auto shrink-0">
                     <select className="text-xs border-none bg-transparent font-medium text-slate-700 focus:ring-0 appearance-none">
                       <option>Paragraph</option>
                     </select>
                     <ChevronDown className="w-3 h-3 text-slate-400 -ml-1 pointer-events-none" />
                     <div className="w-px h-4 bg-slate-300 mx-1"></div>
                     <button className="p-1 text-slate-600 hover:bg-slate-200 rounded"><Bold className="w-3.5 h-3.5" /></button>
                     <button className="p-1 text-slate-600 hover:bg-slate-200 rounded"><Italic className="w-3.5 h-3.5" /></button>
                     <button className="p-1 text-slate-600 hover:bg-slate-200 rounded"><Underline className="w-3.5 h-3.5" /></button>
                     <div className="w-px h-4 bg-slate-300 mx-1"></div>
                     <button className="p-1 text-slate-600 hover:bg-slate-200 rounded"><List className="w-3.5 h-3.5" /></button>
                     <button className="p-1 text-slate-600 hover:bg-slate-200 rounded"><List className="w-3.5 h-3.5 rotate-180" /></button>
                     <div className="w-px h-4 bg-slate-300 mx-1"></div>
                     <button className="p-1 text-slate-600 hover:bg-slate-200 rounded"><Link2 className="w-3.5 h-3.5" /></button>
                   </div>
                   <textarea placeholder="Enter long description" className="flex-1 w-full px-4 py-3 border-none focus:ring-0 text-sm resize-none"></textarea>
                 </div>
                 <p className="text-xs text-slate-400 text-right mt-1">0 / 5000 characters</p>
               </div>
             </div>
          </div>

          {/* Row 3: Attributes (1/2) & Tax (1/2) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
             {/* 4. Product Attributes */}
             <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col h-full">
                 <div className="flex items-center space-x-2 mb-6">
                   <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center">
                     <List className="w-4 h-4 text-orange-600" />
                   </div>
                   <h2 className="text-lg font-bold text-slate-900">4. Product Attributes</h2>
                 </div>
                 <div className="grid grid-cols-2 gap-4 mb-2">
                    <span className="text-xs font-bold text-slate-500 ml-1">Attribute</span>
                    <span className="text-xs font-bold text-slate-500 ml-1">Value</span>
                 </div>
                 <div className="space-y-3 flex-1">
                   <div className="flex items-center space-x-3">
                      <input type="text" defaultValue="Engine" className="flex-1 w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] font-medium text-slate-900 text-sm" />
                      <input type="text" defaultValue="373cc" className="flex-1 w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] font-medium text-slate-900 text-sm" />
                      <button className="p-2.5 text-red-500 bg-red-50 rounded-lg hover:bg-red-100 transition-colors shrink-0">
                        <Trash2 className="w-4 h-4" />
                      </button>
                   </div>
                   <div className="flex items-center space-x-3">
                      <input type="text" defaultValue="Material" className="flex-1 w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] font-medium text-slate-900 text-sm" />
                      <input type="text" defaultValue="Alloy Steel" className="flex-1 w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] font-medium text-slate-900 text-sm" />
                      <button className="p-2.5 text-red-500 bg-red-50 rounded-lg hover:bg-red-100 transition-colors shrink-0">
                        <Trash2 className="w-4 h-4" />
                      </button>
                   </div>
                 </div>
                 <div className="mt-6 pt-4 border-t border-slate-100">
                   <button className="px-4 py-2.5 border border-indigo-100 text-[#4c00ff] font-bold text-sm rounded-lg hover:bg-indigo-50 transition-colors flex items-center space-x-2">
                     <Plus className="w-4 h-4" />
                     <span>Add Attribute</span>
                   </button>
                   <p className="text-xs text-slate-500 mt-3">Add key features or specifications shared by all variants.</p>
                 </div>
             </div>

             {/* 5. Tax Information */}
             <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col h-full">
                 <div className="flex items-center space-x-2 mb-6">
                   <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center">
                     <Tag className="w-4 h-4 text-[#4c00ff]" />
                   </div>
                   <h2 className="text-lg font-bold text-slate-900">5. Tax Information</h2>
                 </div>
                 
                 <div className="space-y-1.5 max-w-sm">
                   <label className="text-sm font-bold text-slate-900">GST (%) <span className="text-red-500">*</span></label>
                   <div className="relative">
                     <select className="w-full appearance-none px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] text-sm bg-white text-slate-500">
                       <option>Select GST</option>
                     </select>
                     <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                   </div>
                 </div>
             </div>
          </div>

          {/* Row 4: Variants (Full Width) */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
             <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
                <div className="flex items-center space-x-3">
                   <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center">
                     <Layers className="w-4 h-4 text-[#4c00ff]" />
                   </div>
                   <div>
                     <h2 className="text-lg font-bold text-slate-900">6. Variants</h2>
                     <p className="text-xs text-slate-500 mt-0.5">Add variants with specific details like pricing, stock and images.</p>
                   </div>
                </div>
                <button onClick={() => setIsAddVariantModalOpen(true)} className="px-4 py-2 bg-[#4c00ff] text-white rounded-lg text-sm font-bold hover:bg-[#3d00cc] transition-colors shadow-sm flex items-center space-x-2">
                  <Plus className="w-4 h-4" />
                  <span>Add Variant</span>
                </button>
             </div>
             
             {/* Empty State for Variants Table */}
             <div className="w-full text-left text-sm text-slate-600">
                <div className="grid grid-cols-8 gap-4 px-4 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                  <div className="col-span-1">#</div>
                  <div className="col-span-1">Variant Image</div>
                  <div className="col-span-1">Variant Name</div>
                  <div className="col-span-1">Variant Value</div>
                  <div className="col-span-1">SKU</div>
                  <div className="col-span-1 text-right">MRP</div>
                  <div className="col-span-1 text-right">Selling Price</div>
                  <div className="col-span-1 text-right">Stock Quantity</div>
                </div>
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <Box className="w-10 h-10 text-slate-300 mb-3" />
                  <p className="font-bold text-slate-700">No variants added yet.</p>
                  <p className="text-slate-500 text-sm mt-1">Click "Add Variant" to create your first variant.</p>
                </div>
             </div>
          </div>

          {/* Row 5: SEO (1/2) & System Info (1/2) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
             {/* 7. SEO Information */}
             <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col h-full">
                 <div className="flex items-center space-x-2 mb-6">
                   <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center">
                     <SearchIcon className="w-4 h-4 text-[#4c00ff]" />
                   </div>
                   <h2 className="text-lg font-bold text-slate-900">7. SEO Information</h2>
                 </div>
                 <div className="space-y-4 flex-1">
                   <div className="space-y-1.5">
                     <label className="text-sm font-bold text-slate-900">Meta Title</label>
                     <input type="text" placeholder="Enter meta title" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] text-sm" />
                     <p className="text-xs text-slate-400 text-left mt-1">0 / 60 characters</p>
                   </div>
                   <div className="space-y-1.5">
                     <label className="text-sm font-bold text-slate-900">Meta Description</label>
                     <textarea rows={3} placeholder="Enter meta description" className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] text-sm resize-none"></textarea>
                     <p className="text-xs text-slate-400 text-left mt-1">0 / 160 characters</p>
                   </div>
                 </div>
             </div>

             {/* 8. System Information */}
             <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col h-full">
                 <div className="flex items-center space-x-2 mb-6">
                   <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                     <Settings className="w-4 h-4 text-[#4c00ff]" />
                   </div>
                   <h2 className="text-lg font-bold text-slate-900">8. System Information</h2>
                 </div>
                 
                 <div className="space-y-6">
                   <div className="space-y-1.5">
                     <label className="text-sm font-bold text-slate-900">Parent SKU (Auto-generated)</label>
                     <div className="relative">
                       <input type="text" disabled defaultValue="AUTO-GENERATED" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-500 font-medium text-sm cursor-not-allowed pl-4 pr-10" />
                       <Lock className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 transform -translate-y-1/2" />
                     </div>
                     <p className="text-xs text-slate-500 mt-1">SKU will be generated after saving</p>
                   </div>
                   
                   <div className="space-y-1.5">
                     <label className="text-sm font-bold text-slate-900">Product Status</label>
                     <div className="relative">
                       <select className="w-full appearance-none pl-9 pr-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] text-sm bg-white text-slate-700 font-bold">
                         <option>Active</option>
                       </select>
                       <div className="w-2 h-2 rounded-full bg-emerald-500 absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none"></div>
                       <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                     </div>
                   </div>
                 </div>
             </div>
          </div>
          
        </div>

        {/* Add Variant Modal */}
        {isAddVariantModalOpen && (
          <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl overflow-hidden flex flex-col">
              <div className="flex items-center justify-between p-6 border-b border-slate-100">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Add Variant</h2>
                  <p className="text-sm text-slate-500 mt-1">Fill in the details to add a new variant.</p>
                </div>
                <button onClick={() => setIsAddVariantModalOpen(false)} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6 space-y-6 overflow-y-auto max-h-[70vh]">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-900">Variant Name <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <select className="w-full appearance-none px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] text-sm bg-white text-slate-700 font-medium">
                        <option>Select variant name</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-900">Variant Value <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Enter variant value" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] text-sm" />
                    <p className="text-xs text-slate-400">E.g. Red, Large, 512GB</p>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-slate-900">Variant Image <span className="text-slate-400 font-normal">(Optional)</span></label>
                  <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors cursor-pointer bg-white">
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-3">
                      <Upload className="w-6 h-6 text-[#4c00ff]" />
                    </div>
                    <p className="font-bold text-slate-700 text-sm">Click to upload or drag and drop</p>
                    <p className="text-slate-400 text-xs mt-1">PNG, JPG, WEBP up to 2MB</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-900">MRP (₹) <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Enter MRP" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] text-sm" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-900">Selling Price (₹) <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Enter selling price" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] text-sm" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-900">Stock Quantity <span className="text-red-500">*</span></label>
                    <input type="number" defaultValue="0" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] text-sm" />
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-slate-100 bg-slate-50 flex items-center justify-end space-x-3">
                <button onClick={() => setIsAddVariantModalOpen(false)} className="px-6 py-2.5 border border-slate-200 text-slate-700 rounded-lg text-sm font-bold hover:bg-white transition-colors bg-white shadow-sm">
                  Cancel
                </button>
                <button onClick={() => setIsAddVariantModalOpen(false)} className="px-6 py-2.5 bg-[#4c00ff] text-white rounded-lg text-sm font-bold hover:bg-[#3d00cc] transition-colors shadow-sm">
                  Add Variant
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    );
  }

  if (isAddingProduct && selectedProductType === 'simple') {
    return (
      <div className="p-6 max-w-[1600px] mx-auto w-full bg-[#f8fafc] min-h-screen font-sans pb-24">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div className="flex items-center space-x-3">
             <button onClick={() => setIsAddingProduct(false)} className="p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors hidden sm:block shadow-sm">
                <ChevronLeft className="w-5 h-5 text-slate-600" />
             </button>
             <div>
               <h1 className="text-3xl font-bold text-[#101b43] tracking-tight">Add New Product</h1>
               <p className="text-slate-500 text-sm mt-1">Fill in the details to create a new single product</p>
             </div>
          </div>
          
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button 
              onClick={() => setIsAddingProduct(false)}
              className="flex-1 sm:flex-none px-6 py-2.5 border border-slate-200 text-slate-700 rounded-lg text-sm font-bold hover:bg-slate-50 transition-colors bg-white shadow-sm"
            >
              Cancel
            </button>
            <button className="flex-1 sm:flex-none px-6 py-2.5 bg-[#4c00ff] text-white rounded-lg text-sm font-bold hover:bg-[#3d00cc] transition-colors shadow-sm flex items-center justify-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Save Product</span>
            </button>
          </div>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          
          {/* Left Column (2/3 width) */}
          <div className="xl:col-span-2 space-y-6">
             {/* 1. Product Information */}
             <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center space-x-2 mb-6">
                   <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center">
                     <Info className="w-4 h-4 text-[#4c00ff]" />
                   </div>
                   <h2 className="text-lg font-bold text-slate-900">1. Product Information</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5 md:col-span-2">
                      <label className="text-sm font-bold text-slate-900">Product Name <span className="text-red-500">*</span></label>
                      <input type="text" placeholder="Enter product name" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] focus:border-transparent text-sm" />
                    </div>
                    <div className="space-y-1.5 md:col-span-2">
                      <label className="text-sm font-bold text-slate-900">Product Title <span className="text-red-500">*</span></label>
                      <input type="text" placeholder="Enter product title" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] focus:border-transparent text-sm" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-slate-900">Brand <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <select className="w-full appearance-none px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] text-sm bg-white text-slate-500">
                          <option>Select brand</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-slate-900">Category <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <select className="w-full appearance-none px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] text-sm bg-white text-slate-500">
                          <option>Select category</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>
             </div>

             {/* 3. Product Descriptions */}
             <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center space-x-2 mb-6">
                   <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                     <FileText className="w-4 h-4 text-blue-600" />
                   </div>
                   <h2 className="text-lg font-bold text-slate-900">3. Product Descriptions</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5 flex flex-col h-full">
                    <label className="text-sm font-bold text-slate-900">Short Description <span className="text-red-500">*</span></label>
                    <textarea placeholder="Enter short description" className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] focus:border-transparent text-sm resize-none h-[132px]"></textarea>
                    <p className="text-xs text-slate-400 text-left mt-1">0 / 200 characters</p>
                  </div>
                  <div className="space-y-1.5 flex flex-col h-full">
                    <label className="text-sm font-bold text-slate-900">Long Description <span className="text-red-500">*</span></label>
                    <div className="border border-slate-200 rounded-lg overflow-hidden flex flex-col h-[132px]">
                      <div className="bg-slate-50/50 border-b border-slate-200 px-3 py-2 flex items-center space-x-2 overflow-x-auto shrink-0">
                        <select className="text-xs border-none bg-transparent font-medium text-slate-700 focus:ring-0 appearance-none">
                          <option>Paragraph</option>
                        </select>
                        <ChevronDown className="w-3 h-3 text-slate-400 -ml-1 pointer-events-none" />
                        <div className="w-px h-4 bg-slate-300 mx-1"></div>
                        <button className="p-1 text-slate-600 hover:bg-slate-200 rounded transition-colors"><Bold className="w-3.5 h-3.5" /></button>
                        <button className="p-1 text-slate-600 hover:bg-slate-200 rounded transition-colors"><Italic className="w-3.5 h-3.5" /></button>
                        <button className="p-1 text-slate-600 hover:bg-slate-200 rounded transition-colors"><Underline className="w-3.5 h-3.5" /></button>
                        <div className="w-px h-4 bg-slate-300 mx-1"></div>
                        <button className="p-1 text-slate-600 hover:bg-slate-200 rounded transition-colors"><List className="w-3.5 h-3.5" /></button>
                        <button className="p-1 text-slate-600 hover:bg-slate-200 rounded transition-colors"><List className="w-3.5 h-3.5 rotate-180" /></button>
                        <div className="w-px h-4 bg-slate-300 mx-1"></div>
                        <button className="p-1 text-slate-600 hover:bg-slate-200 rounded transition-colors"><Link2 className="w-3.5 h-3.5" /></button>
                      </div>
                      <textarea placeholder="Enter long description" className="flex-1 w-full px-4 py-3 border-none focus:ring-0 text-sm resize-none"></textarea>
                    </div>
                    <p className="text-xs text-slate-400 text-right mt-1">0 / 5000 characters</p>
                  </div>
                </div>
             </div>

             {/* 4. Pricing & Inventory */}
             <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center space-x-2 mb-6">
                   <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                     <Tag className="w-4 h-4 text-emerald-600" />
                   </div>
                   <h2 className="text-lg font-bold text-slate-900">4. Pricing & Inventory</h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-slate-900">MRP (₹) <span className="text-red-500">*</span></label>
                      <input type="text" placeholder="Enter MRP" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] focus:border-transparent text-sm" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-slate-900">Selling Price (₹) <span className="text-red-500">*</span></label>
                      <input type="text" placeholder="Enter selling price" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] focus:border-transparent text-sm" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-slate-900">GST (%) <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <select className="w-full appearance-none px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] text-sm bg-white text-slate-500">
                          <option>Select GST</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-slate-900">Stock Quantity <span className="text-red-500">*</span></label>
                      <input type="text" placeholder="Enter stock quantity" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] focus:border-transparent text-sm" />
                    </div>
                </div>
             </div>
             
             {/* Bottom row in left column (5 and 6) */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 5. Product Attributes */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 h-full flex flex-col">
                    <div className="flex items-center space-x-2 mb-6">
                      <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center">
                        <List className="w-4 h-4 text-orange-600" />
                      </div>
                      <h2 className="text-lg font-bold text-slate-900">5. Product Attributes</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-2">
                       <span className="text-xs font-bold text-slate-500 ml-1">Attribute</span>
                       <span className="text-xs font-bold text-slate-500 ml-1">Value</span>
                    </div>
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center space-x-3">
                         <input type="text" defaultValue="Weight" className="flex-1 w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] font-medium text-slate-900 text-sm" />
                         <input type="text" defaultValue="850g" className="flex-1 w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] font-medium text-slate-900 text-sm" />
                         <button className="p-2.5 text-red-500 bg-red-50 rounded-lg hover:bg-red-100 transition-colors shrink-0">
                           <Trash2 className="w-4 h-4" />
                         </button>
                      </div>
                      <div className="flex items-center space-x-3">
                         <input type="text" defaultValue="Material" className="flex-1 w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] font-medium text-slate-900 text-sm" />
                         <input type="text" defaultValue="Stainless Steel" className="flex-1 w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] font-medium text-slate-900 text-sm" />
                         <button className="p-2.5 text-red-500 bg-red-50 rounded-lg hover:bg-red-100 transition-colors shrink-0">
                           <Trash2 className="w-4 h-4" />
                         </button>
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <button className="px-4 py-2.5 border border-indigo-100 text-[#4c00ff] font-bold text-sm rounded-lg hover:bg-indigo-50 transition-colors flex items-center space-x-2">
                        <Plus className="w-4 h-4" />
                        <span>Add Attribute</span>
                      </button>
                      <p className="text-xs text-slate-500 mt-3">Add key features or specifications of this product.</p>
                    </div>
                </div>

                {/* 6. SEO Information */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 h-full flex flex-col">
                    <div className="flex items-center space-x-2 mb-6">
                      <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center">
                        <SearchIcon className="w-4 h-4 text-[#4c00ff]" />
                      </div>
                      <h2 className="text-lg font-bold text-slate-900">6. SEO Information</h2>
                    </div>
                    <div className="space-y-4 flex-1">
                      <div className="space-y-1.5">
                        <label className="text-sm font-bold text-slate-900">Meta Title</label>
                        <input type="text" placeholder="Enter meta title" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] focus:border-transparent text-sm" />
                        <p className="text-xs text-slate-400 text-left mt-1">0 / 60 characters</p>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-bold text-slate-900">Meta Description</label>
                        <textarea rows={3} placeholder="Enter meta description" className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] focus:border-transparent text-sm resize-none"></textarea>
                        <p className="text-xs text-slate-400 text-left mt-1">0 / 160 characters</p>
                      </div>
                    </div>
                </div>
             </div>
          </div>

          {/* Right Column (1/3 width) */}
          <div className="space-y-6">
             {/* 2. Product Media */}
             <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center space-x-2 mb-6">
                   <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center">
                     <ImageIcon className="w-4 h-4 text-purple-600" />
                   </div>
                   <h2 className="text-lg font-bold text-slate-900">2. Product Media</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-900">Main Image <span className="text-red-500">*</span></label>
                    <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-slate-50 hover:border-[#4c00ff]/50 transition-colors cursor-pointer bg-slate-50/50">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-3">
                        <ImageIcon className="w-6 h-6 text-slate-400" />
                      </div>
                      <p className="font-bold text-slate-700 text-sm">Click to upload</p>
                      <p className="text-slate-500 text-sm mt-0.5">or drag and drop</p>
                      <p className="text-slate-400 text-xs mt-2">PNG, JPG, WEBP up to 5MB</p>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-900">Gallery Images</label>
                    <div className="border border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors cursor-pointer bg-white">
                      <button className="px-4 py-2 border border-slate-200 rounded-lg text-slate-700 font-bold text-sm hover:bg-slate-50 flex items-center space-x-2 mb-2 shadow-sm">
                        <Plus className="w-4 h-4" />
                        <span>Add Images</span>
                      </button>
                      <p className="text-slate-400 text-xs">PNG, JPG, WEBP up to 5MB each</p>
                    </div>
                  </div>
                </div>
             </div>

             {/* 7. System Information */}
             <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center space-x-2 mb-6">
                   <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                     <Settings className="w-4 h-4 text-[#4c00ff]" />
                   </div>
                   <h2 className="text-lg font-bold text-slate-900">7. System Information</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-900">SKU</label>
                    <div className="relative">
                      <input type="text" disabled defaultValue="AUTO-GENERATED" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-500 font-medium text-sm cursor-not-allowed pl-4 pr-10" />
                      <Lock className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 transform -translate-y-1/2" />
                    </div>
                    <p className="text-xs text-slate-500 mt-1">SKU will be generated automatically</p>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-900">Product Status</label>
                    <div className="relative">
                      <select className="w-full appearance-none pl-9 pr-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] text-sm bg-white text-slate-700 font-bold">
                        <option>Active</option>
                      </select>
                      <div className="w-2 h-2 rounded-full bg-emerald-500 absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none"></div>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>
             </div>
          </div>
          
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-[1600px] mx-auto w-full bg-[#f8fafc] min-h-screen font-sans">
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#101b43] tracking-tight">Products</h1>
          <p className="text-slate-500 text-sm mt-1">Manage and view all products in your store.</p>
        </div>
        
        <div className="flex items-center space-x-4 w-full lg:w-auto">
          <div className="relative hidden md:block">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search by product name, SKU..." 
              className="pl-9 pr-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] focus:border-transparent text-sm w-72 shadow-sm transition-shadow bg-white" 
            />
          </div>
          <button className="relative p-2.5 text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm hidden sm:block">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-[#4c00ff] border-2 border-white rounded-full"></span>
          </button>
          <div className="flex rounded-lg shadow-sm w-full sm:w-auto">
            <button 
              onClick={() => setIsAddProductModalOpen(true)}
              className="flex-1 lg:flex-none bg-[#4c00ff] text-white px-5 py-2.5 rounded-l-lg flex items-center justify-center text-sm font-medium hover:bg-[#3d00cc] transition-colors border-r border-[#3d00cc]"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add New Product
            </button>
            <button className="bg-[#4c00ff] text-white px-2.5 py-2.5 rounded-r-lg flex items-center justify-center text-sm font-medium hover:bg-[#3d00cc] transition-colors">
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Filters */}
        <div className="p-4 border-b border-slate-100 flex flex-col xl:flex-row xl:items-end justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4">
            
            <div className="flex flex-col space-y-1.5 w-full sm:w-48">
              <label className="text-xs font-bold text-slate-700">Category</label>
              <div className="relative">
                <select className="w-full appearance-none px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] text-sm bg-white text-slate-700 font-medium">
                  <option>All Categories</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col space-y-1.5 w-full sm:w-48">
              <label className="text-xs font-bold text-slate-700">Type</label>
              <div className="relative">
                <select className="w-full appearance-none px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] text-sm bg-white text-slate-700 font-medium">
                  <option>All Types</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col space-y-1.5 w-full sm:w-48">
              <label className="text-xs font-bold text-slate-700">Status</label>
              <div className="relative">
                <select className="w-full appearance-none px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] text-sm bg-white text-slate-700 font-medium">
                  <option>All Status</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col space-y-1.5 w-full sm:w-48">
              <label className="text-xs font-bold text-slate-700">Stock Status</label>
              <div className="relative">
                <select className="w-full appearance-none px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c00ff] text-sm bg-white text-slate-700 font-medium">
                  <option>All</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

          </div>
          
          <div className="flex items-center space-x-3 mt-2 xl:mt-0 w-full xl:w-auto">
            <button className="flex-1 xl:flex-none flex items-center justify-center space-x-2 text-sm font-semibold text-slate-700 bg-white border border-slate-200 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors">
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
            <button className="flex-1 xl:flex-none flex items-center justify-center space-x-2 text-sm font-semibold text-slate-700 bg-white border border-slate-200 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors">
              <RotateCcw className="w-4 h-4" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600 whitespace-nowrap">
            <thead className="bg-slate-50/50 text-slate-500 font-bold text-xs uppercase tracking-wider border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 w-12">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#4c00ff] focus:ring-[#4c00ff]" />
                </th>
                <th className="px-6 py-4">Product</th>
                <th className="px-6 py-4 w-32">Type</th>
                <th className="px-6 py-4 w-48">Category</th>
                <th className="px-6 py-4 w-40">MRP (₹)</th>
                <th className="px-6 py-4 w-40">Selling Price (₹)</th>
                <th className="px-6 py-4 w-32">Quantity</th>
                <th className="px-6 py-4 w-32 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {/* Row 1 */}
              <tr className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-6 py-4">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#4c00ff] focus:ring-[#4c00ff]" />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-xl shadow-sm border border-slate-200">
                      🔧
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">Stainless Steel Pipe Fitting</p>
                      <p className="text-slate-500 text-xs mt-0.5">SKU: SS-PF-001</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded bg-[#f5f3ff] text-[#6d28d9] text-xs font-bold">
                    Single
                  </span>
                </td>
                <td className="px-6 py-4 font-medium text-slate-700">Pipe Fittings</td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-between border border-slate-200 rounded-md px-3 py-1.5 w-28 bg-white group-hover:border-[#4c00ff]/30 transition-colors">
                    <span className="font-semibold text-slate-900">1,250.00</span>
                    <Edit2 className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-between border border-slate-200 rounded-md px-3 py-1.5 w-28 bg-white group-hover:border-[#4c00ff]/30 transition-colors">
                    <span className="font-semibold text-slate-900">950.00</span>
                    <Edit2 className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-between border border-slate-200 rounded-md px-3 py-1.5 w-24 bg-white group-hover:border-[#4c00ff]/30 transition-colors">
                    <span className="font-semibold text-slate-900">120</span>
                    <Edit2 className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center space-x-2">
                    <button className="p-2 text-slate-400 hover:text-[#4c00ff] bg-white border border-slate-200 rounded-lg shadow-sm transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-slate-600 bg-white border border-slate-200 rounded-lg shadow-sm transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 2 (Variable product header) */}
              <tr className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-6 py-4">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#4c00ff] focus:ring-[#4c00ff]" />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-xl shadow-sm border border-slate-200">
                      🏍️
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">KTM RC 390</p>
                      <p className="text-slate-500 text-xs mt-0.5">SKU: SKU001</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded bg-[#f5f3ff] text-[#4c00ff] text-xs font-bold border border-[#4c00ff]/20">
                    Variable
                  </span>
                </td>
                <td className="px-6 py-4 font-medium text-slate-700">Motorcycles</td>
                <td className="px-6 py-4 font-semibold text-slate-400 pl-8">-</td>
                <td className="px-6 py-4 font-semibold text-slate-400 pl-8">-</td>
                <td className="px-6 py-4 font-semibold text-slate-400 pl-6">-</td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center space-x-2">
                    <button 
                      onClick={() => setExpandedRow(expandedRow === 'SKU001' ? null : 'SKU001')}
                      className="p-2 text-[#4c00ff] bg-indigo-50 border border-indigo-100 rounded-lg shadow-sm transition-colors"
                    >
                      <ChevronUp className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-slate-600 bg-white border border-slate-200 rounded-lg shadow-sm transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 2 Expanded variants */}
              {expandedRow === 'SKU001' && (
                <tr className="bg-[#f8fafc]">
                  <td colSpan="8" className="px-6 py-4">
                    <div className="border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden">
                      <div className="px-6 py-3 border-b border-slate-100 bg-slate-50/50">
                        <h4 className="text-xs font-bold text-slate-700 uppercase">Variants</h4>
                      </div>
                      <table className="w-full text-left text-sm text-slate-600">
                        <thead className="text-slate-400 font-bold text-xs uppercase tracking-wider border-b border-slate-100">
                          <tr>
                            <th className="px-6 py-3 w-12"></th>
                            <th className="px-6 py-3">Variant</th>
                            <th className="px-6 py-3 w-48">SKU</th>
                            <th className="px-6 py-3 w-40">MRP (₹)</th>
                            <th className="px-6 py-3 w-40">Selling Price (₹)</th>
                            <th className="px-6 py-3 w-32">Quantity</th>
                            <th className="px-6 py-3 w-32 text-center">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {/* Variant 1 */}
                          <tr className="hover:bg-slate-50/50 transition-colors group/variant">
                            <td className="px-6 py-4">
                              <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#4c00ff] focus:ring-[#4c00ff]" />
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-slate-100 rounded border border-slate-200 flex items-center justify-center text-sm">🏍️</div>
                                <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                                <span className="font-bold text-slate-900">Blue Color</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 font-bold text-slate-700">SKU001-01</td>
                            <td className="px-6 py-4">
                              <div className="flex items-center justify-between border border-slate-200 rounded-md px-3 py-1.5 w-32 bg-white group-hover/variant:border-[#4c00ff]/30 transition-colors">
                                <span className="font-semibold text-slate-900">4,50,000.00</span>
                                <Edit2 className="w-3.5 h-3.5 text-slate-400" />
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center justify-between border border-slate-200 rounded-md px-3 py-1.5 w-32 bg-white group-hover/variant:border-[#4c00ff]/30 transition-colors">
                                <span className="font-semibold text-slate-900">3,95,000.00</span>
                                <Edit2 className="w-3.5 h-3.5 text-slate-400" />
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center justify-between border border-slate-200 rounded-md px-3 py-1.5 w-24 bg-white group-hover/variant:border-[#4c00ff]/30 transition-colors">
                                <span className="font-semibold text-slate-900">2</span>
                                <Edit2 className="w-3.5 h-3.5 text-slate-400" />
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center justify-center space-x-2">
                                <button className="p-1.5 text-slate-400 hover:text-[#4c00ff] bg-white border border-slate-200 rounded-lg shadow-sm transition-colors">
                                  <Eye className="w-3.5 h-3.5" />
                                </button>
                                <button className="p-1.5 text-slate-400 hover:text-slate-600 bg-white border border-slate-200 rounded-lg shadow-sm transition-colors">
                                  <MoreVertical className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          {/* Variant 2 */}
                          <tr className="hover:bg-slate-50/50 transition-colors group/variant">
                            <td className="px-6 py-4">
                              <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#4c00ff] focus:ring-[#4c00ff]" />
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-slate-100 rounded border border-slate-200 flex items-center justify-center text-sm">🏍️</div>
                                <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                                <span className="font-bold text-slate-900">Orange Color</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 font-bold text-slate-700">SKU001-02</td>
                            <td className="px-6 py-4">
                              <div className="flex items-center justify-between border border-slate-200 rounded-md px-3 py-1.5 w-32 bg-white group-hover/variant:border-[#4c00ff]/30 transition-colors">
                                <span className="font-semibold text-slate-900">4,50,000.00</span>
                                <Edit2 className="w-3.5 h-3.5 text-slate-400" />
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center justify-between border border-slate-200 rounded-md px-3 py-1.5 w-32 bg-white group-hover/variant:border-[#4c00ff]/30 transition-colors">
                                <span className="font-semibold text-slate-900">3,95,000.00</span>
                                <Edit2 className="w-3.5 h-3.5 text-slate-400" />
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center justify-between border border-slate-200 rounded-md px-3 py-1.5 w-24 bg-white group-hover/variant:border-[#4c00ff]/30 transition-colors">
                                <span className="font-semibold text-slate-900">1</span>
                                <Edit2 className="w-3.5 h-3.5 text-slate-400" />
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center justify-center space-x-2">
                                <button className="p-1.5 text-slate-400 hover:text-[#4c00ff] bg-white border border-slate-200 rounded-lg shadow-sm transition-colors">
                                  <Eye className="w-3.5 h-3.5" />
                                </button>
                                <button className="p-1.5 text-slate-400 hover:text-slate-600 bg-white border border-slate-200 rounded-lg shadow-sm transition-colors">
                                  <MoreVertical className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}

              {/* Row 3 */}
              <tr className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-6 py-4">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#4c00ff] focus:ring-[#4c00ff]" />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-xl shadow-sm border border-slate-200">
                      🚰
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">Industrial Valves 2 inch</p>
                      <p className="text-slate-500 text-xs mt-0.5">SKU: IV-2IN-002</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded bg-[#f5f3ff] text-[#6d28d9] text-xs font-bold">
                    Single
                  </span>
                </td>
                <td className="px-6 py-4 font-medium text-slate-700">Industrial Valves</td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-between border border-slate-200 rounded-md px-3 py-1.5 w-28 bg-white group-hover:border-[#4c00ff]/30 transition-colors">
                    <span className="font-semibold text-slate-900">2,890.00</span>
                    <Edit2 className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-between border border-slate-200 rounded-md px-3 py-1.5 w-28 bg-white group-hover:border-[#4c00ff]/30 transition-colors">
                    <span className="font-semibold text-slate-900">1,990.00</span>
                    <Edit2 className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-between border border-slate-200 rounded-md px-3 py-1.5 w-24 bg-white group-hover:border-[#4c00ff]/30 transition-colors">
                    <span className="font-semibold text-slate-900">85</span>
                    <Edit2 className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center space-x-2">
                    <button className="p-2 text-slate-400 hover:text-[#4c00ff] bg-white border border-slate-200 rounded-lg shadow-sm transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-slate-600 bg-white border border-slate-200 rounded-lg shadow-sm transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 4 */}
              <tr className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-6 py-4">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#4c00ff] focus:ring-[#4c00ff]" />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-xl shadow-sm border border-slate-200">
                      ⚙️
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">Mild Steel Flange</p>
                      <p className="text-slate-500 text-xs mt-0.5">SKU: MS-FL-010</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded bg-[#f5f3ff] text-[#6d28d9] text-xs font-bold">
                    Single
                  </span>
                </td>
                <td className="px-6 py-4 font-medium text-slate-700">Flanges</td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-between border border-slate-200 rounded-md px-3 py-1.5 w-28 bg-white group-hover:border-[#4c00ff]/30 transition-colors">
                    <span className="font-semibold text-slate-900">950.00</span>
                    <Edit2 className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-between border border-slate-200 rounded-md px-3 py-1.5 w-28 bg-white group-hover:border-[#4c00ff]/30 transition-colors">
                    <span className="font-semibold text-slate-900">650.00</span>
                    <Edit2 className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-between border border-slate-200 rounded-md px-3 py-1.5 w-24 bg-white group-hover:border-[#4c00ff]/30 transition-colors">
                    <span className="font-semibold text-slate-900">200</span>
                    <Edit2 className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center space-x-2">
                    <button className="p-2 text-slate-400 hover:text-[#4c00ff] bg-white border border-slate-200 rounded-lg shadow-sm transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-slate-600 bg-white border border-slate-200 rounded-lg shadow-sm transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 5 */}
              <tr className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-6 py-4">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#4c00ff] focus:ring-[#4c00ff]" />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-xl shadow-sm border border-slate-200">
                      🔩
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">GI Pipe 3 inch</p>
                      <p className="text-slate-500 text-xs mt-0.5">SKU: GI-PI-003</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded bg-[#f5f3ff] text-[#6d28d9] text-xs font-bold">
                    Single
                  </span>
                </td>
                <td className="px-6 py-4 font-medium text-slate-700">GI Pipes</td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-between border border-slate-200 rounded-md px-3 py-1.5 w-28 bg-white group-hover:border-[#4c00ff]/30 transition-colors">
                    <span className="font-semibold text-slate-900">1,150.00</span>
                    <Edit2 className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-between border border-slate-200 rounded-md px-3 py-1.5 w-28 bg-white group-hover:border-[#4c00ff]/30 transition-colors">
                    <span className="font-semibold text-slate-900">850.00</span>
                    <Edit2 className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-between border border-slate-200 rounded-md px-3 py-1.5 w-24 bg-white group-hover:border-[#4c00ff]/30 transition-colors">
                    <span className="font-semibold text-slate-900">150</span>
                    <Edit2 className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center space-x-2">
                    <button className="p-2 text-slate-400 hover:text-[#4c00ff] bg-white border border-slate-200 rounded-lg shadow-sm transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-slate-600 bg-white border border-slate-200 rounded-lg shadow-sm transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 bg-white">
          <span className="text-sm text-slate-500 font-bold">Showing 1 to 10 of 128 products</span>
          <div className="flex space-x-1.5">
            <button className="p-1.5 sm:px-2.5 sm:py-1.5 border border-slate-200 rounded-lg bg-white text-slate-400 hover:bg-slate-50 shadow-sm transition-colors flex items-center justify-center">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 sm:w-auto sm:px-3 sm:py-1.5 border-2 border-[#4c00ff] rounded-lg bg-indigo-50 text-[#4c00ff] font-bold shadow-sm flex items-center justify-center text-sm">
              1
            </button>
            <button className="w-8 h-8 sm:w-auto sm:px-3 sm:py-1.5 border border-slate-200 rounded-lg bg-white text-slate-600 font-bold hover:bg-slate-50 shadow-sm flex items-center justify-center text-sm">
              2
            </button>
            <button className="w-8 h-8 sm:w-auto sm:px-3 sm:py-1.5 border border-slate-200 rounded-lg bg-white text-slate-600 font-bold hover:bg-slate-50 shadow-sm flex items-center justify-center text-sm">
              3
            </button>
            <span className="w-8 h-8 sm:w-auto sm:px-2 sm:py-1.5 flex items-center justify-center text-slate-400">...</span>
            <button className="w-8 h-8 sm:w-auto sm:px-3 sm:py-1.5 border border-slate-200 rounded-lg bg-white text-slate-600 font-bold hover:bg-slate-50 shadow-sm flex items-center justify-center text-sm">
              13
            </button>
            <button className="p-1.5 sm:px-2.5 sm:py-1.5 border border-slate-200 rounded-lg bg-white text-slate-400 hover:bg-slate-50 shadow-sm transition-colors flex items-center justify-center">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Add Product Type Modal */}
      {isAddProductModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="relative pt-8 pb-4 px-8 text-center">
              <button 
                onClick={() => setIsAddProductModalOpen(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-100 shadow-sm">
                <ShoppingBag className="w-6 h-6 text-[#4c00ff]" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Choose Product Type</h2>
              <p className="text-sm text-slate-500 mt-2">Select the type of product you want to add.</p>
            </div>

            {/* Modal Body */}
            <div className="p-8 pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Simple Product Card */}
                <div 
                  onClick={() => setSelectedProductType('simple')}
                  className={`relative cursor-pointer rounded-2xl p-6 border-2 transition-all duration-200 ${
                    selectedProductType === 'simple' 
                      ? 'border-[#4c00ff] bg-purple-50/30' 
                      : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="h-32 mb-6 relative flex items-center justify-center">
                     <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-fuchsia-50 rounded-xl opacity-50"></div>
                     <Box className="w-16 h-16 text-purple-400 drop-shadow-md z-10" />
                     <div className="absolute top-4 right-6 text-purple-300 font-serif">✦</div>
                     <div className="absolute bottom-6 left-6 text-purple-300 font-serif text-xl">✦</div>
                  </div>
                  
                  <div className="flex items-start space-x-3 mb-2">
                    <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedProductType === 'simple' ? 'border-[#4c00ff]' : 'border-slate-300'
                    }`}>
                      {selectedProductType === 'simple' && <div className="w-2.5 h-2.5 rounded-full bg-[#4c00ff]" />}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">Simple Product</h3>
                    </div>
                  </div>
                  
                  <p className="text-sm text-slate-500 ml-8 mb-6 h-10">A single product with one price and one stock.</p>
                  
                  <div className="ml-8 inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-purple-100/50 text-[#4c00ff] text-xs font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Best for individual items</span>
                  </div>
                </div>

                {/* Variable Product Card */}
                <div 
                  onClick={() => setSelectedProductType('variable')}
                  className={`relative cursor-pointer rounded-2xl p-6 border-2 transition-all duration-200 ${
                    selectedProductType === 'variable' 
                      ? 'border-blue-500 bg-blue-50/30' 
                      : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="h-32 mb-6 relative flex items-center justify-center">
                     <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-50 rounded-xl opacity-50"></div>
                     <Layers className="w-16 h-16 text-blue-400 drop-shadow-md z-10" />
                     <div className="absolute top-6 left-8 text-blue-300 font-serif text-lg">✦</div>
                     <div className="absolute bottom-8 right-6 text-blue-300 font-serif">✦</div>
                  </div>
                  
                  <div className="flex items-start space-x-3 mb-2">
                    <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedProductType === 'variable' ? 'border-blue-600' : 'border-slate-300'
                    }`}>
                      {selectedProductType === 'variable' && <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">Variable Product</h3>
                    </div>
                  </div>
                  
                  <p className="text-sm text-slate-500 ml-8 mb-6 h-10">A product with multiple variants like size, color, or style.</p>
                  
                  <div className="ml-8 inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-blue-100/50 text-blue-600 text-xs font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Best for products with variants</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-8 py-5 border-t border-slate-100 flex items-center justify-center sm:justify-end space-x-4 bg-slate-50/50">
              <button 
                onClick={() => setIsAddProductModalOpen(false)}
                className="px-6 py-2.5 border border-slate-200 text-slate-700 rounded-lg text-sm font-bold hover:bg-white transition-colors bg-white shadow-sm"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  setIsAddProductModalOpen(false);
                  setIsAddingProduct(true);
                }}
                className="px-6 py-2.5 bg-[#4c00ff] text-white rounded-lg text-sm font-bold hover:bg-[#3d00cc] transition-colors shadow-sm flex items-center space-x-2"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
