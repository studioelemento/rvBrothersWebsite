import React, { useState } from 'react';
import { 
  Briefcase, 
  ArrowRight, 
  Users, 
  Tag, 
  ShieldCheck, 
  Truck,
  X,
  Check,
  Send
} from 'lucide-react';

export default function BusinessEnquiry({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [quantity, setQuantity] = useState('50');
  const [message, setMessage] = useState(
    product 
      ? `Hi, we are looking for bulk supply of "${product.title}". Please send wholesale pricing and catalog.` 
      : 'Hi, we are interested in business procurement options. Please get in touch.'
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsModalOpen(false);
      // Reset fields
      setName('');
      setEmail('');
      setPhone('');
      setCompany('');
      setQuantity('50');
    }, 2000);
  };

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 pb-16">
      <div className="max-w-7xl mx-auto px-4 w-full">
        
        {/* Main Banner Card */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Column: Heading & Description */}
          <div className="flex-1 flex gap-5 items-start text-left">
            <div className="w-14 h-14 rounded-full bg-blue-50/70 border border-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
              <Briefcase className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
                Need Bulk Orders or<br className="hidden sm:inline" /> Business Procurement?
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 max-w-lg leading-relaxed">
                We support retailers, distributors, institutional buyers, and procurement requirements across multiple categories.
              </p>
            </div>
          </div>

          {/* Divider line for large screens */}
          <div className="hidden lg:block w-px h-24 bg-slate-200" />

          {/* Right Column: CTA & Mini Trust Indicators */}
          <div className="w-full lg:w-auto flex flex-col items-center lg:items-start gap-6">
            
            {/* CTA Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full lg:w-auto flex items-center justify-center gap-3 bg-[#0a1128] hover:bg-[#121c3b] text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300 transform active:scale-98 shadow-md hover:shadow-lg cursor-pointer text-sm"
            >
              <span>Discuss Business Requirements</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Trust row */}
            <div className="grid grid-cols-4 gap-4 sm:gap-6 w-full lg:w-auto">
              
              <div className="flex flex-col items-center text-center space-y-1">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-[9px] font-bold text-slate-500 leading-tight">Bulk Order<br/>Support</span>
              </div>

              <div className="flex flex-col items-center text-center space-y-1">
                <Tag className="w-5 h-5 text-blue-600" />
                <span className="text-[9px] font-bold text-slate-500 leading-tight">Competitive<br/>Pricing</span>
              </div>

              <div className="flex flex-col items-center text-center space-y-1">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                <span className="text-[9px] font-bold text-slate-500 leading-tight">Trusted<br/>Partnerships</span>
              </div>

              <div className="flex flex-col items-center text-center space-y-1">
                <Truck className="w-5 h-5 text-blue-600" />
                <span className="text-[9px] font-bold text-slate-500 leading-tight">Pan India<br/>Delivery</span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Local Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 backdrop-blur-xs p-4 animate-fade-in">
          <div className="bg-white w-full max-w-lg rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8 relative overflow-hidden">
            
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-655 hover:bg-slate-50 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-5">
              <div className="flex items-center gap-2 text-blue-600">
                <Briefcase className="w-6 h-6" />
                <h3 className="font-extrabold text-xl text-slate-900">Business Procurement Enquiry</h3>
              </div>
              <p className="text-xs text-slate-550 leading-relaxed">
                Provide your requirements below and our wholesale division will get back to you with custom quotes.
              </p>

              {formSubmitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-3 bg-emerald-50 rounded-2xl border border-emerald-100 p-6">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                    <Check className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-emerald-800">Request Sent Successfully!</h4>
                    <p className="text-xs text-emerald-600 mt-1">Our procurement executive will contact you shortly.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">Contact Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Enter name"
                        className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-xs sm:text-sm rounded-xl py-2.5 px-3.5 outline-none transition-all"
                        value={name}
                        onChange={e => setName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">Company Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Enter company/business name"
                        className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-xs sm:text-sm rounded-xl py-2.5 px-3.5 outline-none transition-all"
                        value={company}
                        onChange={e => setCompany(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">Business Email</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="email@company.com"
                        className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-xs sm:text-sm rounded-xl py-2.5 px-3.5 outline-none transition-all"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">Contact Phone</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+91..."
                        className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-xs sm:text-sm rounded-xl py-2.5 px-3.5 outline-none transition-all"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">Approx. Target Quantity</label>
                    <input 
                      type="number" 
                      required 
                      min="1"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-xs sm:text-sm rounded-xl py-2.5 px-3.5 outline-none transition-all"
                      value={quantity}
                      onChange={e => setQuantity(e.target.value)}
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">Requirements / Details</label>
                    <textarea 
                      rows={3} 
                      required
                      className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-xs sm:text-sm rounded-xl py-2.5 px-3.5 outline-none transition-all resize-none"
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-755 text-white font-bold py-3 px-4 rounded-xl transition-all cursor-pointer text-xs shadow-md"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
