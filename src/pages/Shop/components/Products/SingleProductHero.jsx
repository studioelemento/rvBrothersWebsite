import React, { useState } from 'react';
import { 
  ChevronRight, 
  ChevronUp, 
  ChevronDown, 
  ShieldCheck, 
  Package, 
  Award, 
  Truck, 
  ShoppingBag, 
  Building2, 
  Heart, 
  GitCompare, 
  Share2, 
  Maximize2, 
  ArrowLeft, 
  Lock, 
  RefreshCw, 
  CreditCard,
  Check,
  X,
  Send,
  Sparkles
} from 'lucide-react';
import ShopTrust from './ShopTrust';
import CustomerReview from './CustomerReview';
import RelatedProducts from './RelatedProducts';
import BusinessEnquiry from './BusinessEnquiry';

export default function SingleProductHero({ product, onBack, onAddToCart, onSelectProduct }) {
  if (!product) return null;

  // Fallback gallery images if not provided
  const galleryImages = product.images && product.images.length > 0 
    ? product.images 
    : [product.image];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquirySuccess, setEnquirySuccess] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [showShareNotification, setShowShareNotification] = useState(false);
  
  // Form state for enquiry
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: '10',
    message: `Hi, I am interested in bulk procurement for "${product.title}". Please share details regarding price and lead time.`
  });

  const handleThumbnailClick = (index) => {
    setActiveImageIndex(index);
  };

  const handleNextThumbnail = () => {
    setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrevThumbnail = () => {
    setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    setEnquirySuccess(true);
    setTimeout(() => {
      setEnquirySuccess(false);
      setIsEnquiryOpen(false);
      // Reset form
      setEnquiryForm(prev => ({
        ...prev,
        name: '',
        email: '',
        phone: ''
      }));
    }, 2000);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowShareNotification(true);
    setTimeout(() => setShowShareNotification(false), 2500);
  };

  // Format currency
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 py-4">
      {/* Share / Toast notification */}
      {showShareNotification && (
        <div className="fixed top-24 right-6 z-50 flex items-center gap-2 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-2xl animate-fade-in border border-slate-700 text-sm">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Product link copied to clipboard!</span>
        </div>
      )}

      {/* Breadcrumbs Navigation */}
      <nav className="flex items-center flex-wrap gap-2 text-xs font-semibold text-slate-400 mb-6 px-1 sm:px-0">
        <button 
          onClick={onBack}
          className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors mr-2 cursor-pointer font-bold"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Shop
        </button>
        <ChevronRight className="w-3 h-3 text-slate-300" />
        <span className="hover:text-slate-655 cursor-pointer" onClick={onBack}>Home</span>
        <ChevronRight className="w-3 h-3 text-slate-300" />
        <span className="hover:text-slate-655 cursor-pointer">{product.category}</span>
        <ChevronRight className="w-3 h-3 text-slate-300" />
        {product.subcategory && (
          <>
            <span className="hover:text-slate-655 cursor-pointer">{product.subcategory}</span>
            <ChevronRight className="w-3 h-3 text-slate-300" />
          </>
        )}
        <span className="text-slate-600 font-bold truncate max-w-[200px] sm:max-w-xs">{product.title}</span>
      </nav>

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white rounded-3xl border border-slate-200/80 p-4 sm:p-6 lg:p-8 shadow-sm">
        
        {/* Left Side: Product Gallery (Thumbs + Image) - takes 6/12 columns */}
        <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4 h-full">
          
          {/* Thumbnails list */}
          <div className="flex sm:flex-col items-center justify-between sm:justify-start gap-3 w-full sm:w-20 md:w-24">
            <button 
              onClick={handlePrevThumbnail}
              className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-all cursor-pointer hidden sm:block"
              disabled={galleryImages.length <= 1}
            >
              <ChevronUp className="w-4 h-4" />
            </button>

            <div className="flex sm:flex-col gap-2.5 overflow-x-auto sm:overflow-x-visible pb-2 sm:pb-0 w-full sm:w-auto scrollbar-none justify-center">
              {galleryImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={`relative aspect-square w-16 sm:w-full rounded-xl overflow-hidden bg-slate-50 border-2 transition-all p-1 flex-shrink-0 cursor-pointer ${
                    activeImageIndex === index 
                      ? 'border-blue-600 ring-2 ring-blue-600/10 scale-105' 
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`${product.title} Thumbnail ${index + 1}`} 
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>

            <button 
              onClick={handleNextThumbnail}
              className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-all cursor-pointer hidden sm:block"
              disabled={galleryImages.length <= 1}
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Main Large Image Display */}
          <div className="flex-1 relative aspect-square rounded-2xl border border-slate-200 bg-gradient-to-tr from-slate-50/50 to-white/30 overflow-hidden flex items-center justify-center p-4 group">
            <img 
              src={galleryImages[activeImageIndex]} 
              alt={product.title} 
              className="max-h-[90%] max-w-[90%] object-contain transition-transform duration-500 ease-out group-hover:scale-102"
            />
            
            {/* Zoom / Lightbox Trigger */}
            <button 
              onClick={() => setIsLightboxOpen(true)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 backdrop-blur-xs border border-slate-200/80 text-slate-650 hover:text-blue-600 hover:scale-110 shadow-sm transition-all duration-300 cursor-pointer z-10"
              title="Expand image"
            >
              <Maximize2 className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>

        {/* Right Side: Product Meta & Purchase Controls - takes 5/12 columns */}
        <div className="lg:col-span-5 space-y-6">
          {/* Badge & Category */}
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 border border-blue-100 rounded-full text-[10px] font-extrabold uppercase tracking-widest">
              {product.category}
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {product.title}
            </h1>
          </div>

          {/* Description */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {product.description}
          </p>

          {/* Price & Stock info */}
          <div className="pt-2 pb-4 border-b border-slate-200/80">
            <div className="flex items-baseline gap-4">
              <span className="text-3xl sm:text-4xl font-black text-slate-950">
                {formatPrice(product.price)}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold border border-emerald-100">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                In Stock
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1.5 font-medium">
              Inclusive of all taxes
            </p>
          </div>

          {/* Quality check icons matching reference image */}
          <div className="grid grid-cols-2 gap-4 py-2">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50/50 rounded-xl border border-blue-100">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 leading-tight">100% Authentic</p>
                <p className="text-[10px] text-slate-500 leading-none mt-0.5">Quality Assured</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50/50 rounded-xl border border-blue-100">
                <Package className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 leading-tight">Secure Packaging</p>
                <p className="text-[10px] text-slate-500 leading-none mt-0.5">Safe & Reliable</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50/50 rounded-xl border border-blue-100">
                <Award className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 leading-tight">Trusted Seller</p>
                <p className="text-[10px] text-slate-500 leading-none mt-0.5">RV Brothers</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50/50 rounded-xl border border-blue-100">
                <Truck className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 leading-tight">Pan India Delivery</p>
                <p className="text-[10px] text-slate-500 leading-none mt-0.5">Fast & Insured</p>
              </div>
            </div>
          </div>

          {/* Action buttons (Add to Cart / Business Enquiry) */}
          <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
            <button
              onClick={() => onAddToCart && onAddToCart(product)}
              className="flex-1 flex items-center justify-center gap-2.5 bg-[#0a1128] hover:bg-[#121c3b] text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 transform active:scale-98 shadow-md hover:shadow-lg cursor-pointer text-sm"
            >
              <ShoppingBag className="w-4.5 h-4.5" />
              Add to Cart
            </button>

            <button
              onClick={() => setIsEnquiryOpen(true)}
              className="flex-1 flex items-center justify-center gap-2.5 bg-white border-2 border-slate-200 text-slate-800 hover:border-blue-600 hover:bg-slate-50 font-bold py-3.5 px-6 rounded-xl transition-all duration-300 transform active:scale-98 cursor-pointer text-sm"
            >
              <Building2 className="w-4.5 h-4.5 text-slate-500 group-hover:text-blue-600" />
              Business Enquiry
            </button>
          </div>

          {/* Secondary Actions (Wishlist / Compare / Share) */}
          <div className="flex items-center justify-between border-t border-slate-200/80 pt-4 gap-2">
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg border border-slate-200 hover:border-slate-300 text-xs font-bold transition-all cursor-pointer ${
                isWishlisted ? 'bg-red-50 text-red-600 border-red-200' : 'bg-white text-slate-650 hover:bg-slate-50'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 transition-transform ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
              Add to Wishlist
            </button>

            <button
              className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg border border-slate-200 hover:border-slate-300 text-xs font-bold bg-white text-slate-655 hover:bg-slate-50 cursor-pointer"
            >
              <GitCompare className="w-3.5 h-3.5 text-slate-400" />
              Compare
            </button>

            <button
              onClick={handleShare}
              className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg border border-slate-200 hover:border-slate-300 text-xs font-bold bg-white text-slate-655 hover:bg-slate-50 cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-slate-400" />
              Share
            </button>
          </div>

        </div>
      </div>

      {/* Trust and confidence bottom banner matching reference image */}
      <div className="w-full mt-6 bg-white rounded-2xl border border-slate-200/80 p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-left w-full md:w-auto">
          <div className="p-3 bg-emerald-50 rounded-full border border-emerald-100 flex-shrink-0">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <h4 className="text-sm font-extrabold text-slate-900 leading-tight">Shop with Confidence</h4>
            <p className="text-xs text-slate-550 mt-0.5">Easy returns, secure payments, and dedicated support.</p>
          </div>
        </div>

        <div className="h-px w-full md:h-8 md:w-px bg-slate-200 hidden md:block" />

        <div className="grid grid-cols-3 w-full md:w-auto gap-6 sm:gap-12 flex-1 justify-items-center sm:justify-items-end">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <div>
              <p className="text-[10px] font-extrabold text-slate-900 uppercase tracking-wider leading-none">SSL SECURED</p>
              <p className="text-[9px] text-slate-455 mt-0.5">Secure Checkout</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <RefreshCw className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <div>
              <p className="text-[10px] font-extrabold text-slate-900 uppercase tracking-wider leading-none">7 DAYS RETURN</p>
              <p className="text-[9px] text-slate-455 mt-0.5">Hassle Free</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <div>
              <p className="text-[10px] font-extrabold text-slate-900 uppercase tracking-wider leading-none">PAYMENT OPTIONS</p>
              <p className="text-[9px] text-slate-455 mt-0.5">Multiple Methods</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badge Indicators */}
      <ShopTrust />

      {/* Customer Reviews Section */}
      <CustomerReview product={product} />

      {/* Related Products Section */}
      <RelatedProducts product={product} onSelectProduct={onSelectProduct} />

      {/* Business Enquiry Section */}
      <BusinessEnquiry product={product} />

      {/* Lightbox / Expanded Image modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-sm p-4 animate-fade-in">
          <button 
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative max-w-4xl max-h-[85vh] w-full flex items-center justify-center">
            <img 
              src={galleryImages[activeImageIndex]} 
              alt={product.title} 
              className="max-h-[85vh] max-w-full object-contain" 
            />
          </div>
        </div>
      )}

      {/* Business Enquiry Modal */}
      {isEnquiryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 backdrop-blur-xs p-4 animate-fade-in">
          <div className="bg-white w-full max-w-md rounded-2xl border border-slate-200 shadow-2xl p-6 relative overflow-hidden">
            <button 
              onClick={() => setIsEnquiryOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-blue-600">
                <Building2 className="w-5 h-5" />
                <h3 className="font-extrabold text-lg text-slate-900">Business Procurement Enquiry</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Send bulk pricing or product details enquiry directly to the RV Brothers Business Consortium.
              </p>

              {enquirySuccess ? (
                <div className="py-8 flex flex-col items-center justify-center text-center space-y-3 bg-emerald-50 rounded-xl border border-emerald-100">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                    <Check className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-800">Enquiry Submitted!</h4>
                    <p className="text-xs text-emerald-600 mt-1">Our procurement desk will respond within 24 hours.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="space-y-3.5">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-sm rounded-xl py-2 px-3 outline-none transition-all"
                      placeholder="Enter your name"
                      value={enquiryForm.name}
                      onChange={e => setEnquiryForm({...enquiryForm, name: e.target.value})}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Business Email</label>
                      <input 
                        type="email" 
                        required 
                        className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-sm rounded-xl py-2 px-3 outline-none transition-all"
                        placeholder="email@company.com"
                        value={enquiryForm.email}
                        onChange={e => setEnquiryForm({...enquiryForm, email: e.target.value})}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Phone / WhatsApp</label>
                      <input 
                        type="tel" 
                        required 
                        className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-sm rounded-xl py-2 px-3 outline-none transition-all"
                        placeholder="+91..."
                        value={enquiryForm.phone}
                        onChange={e => setEnquiryForm({...enquiryForm, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Target Quantity</label>
                    <input 
                      type="number" 
                      required 
                      className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-sm rounded-xl py-2 px-3 outline-none transition-all"
                      placeholder="e.g. 50"
                      value={enquiryForm.quantity}
                      onChange={e => setEnquiryForm({...enquiryForm, quantity: e.target.value})}
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Requirement Message</label>
                    <textarea 
                      rows={3} 
                      className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-sm rounded-xl py-2 px-3 outline-none transition-all resize-none"
                      value={enquiryForm.message}
                      onChange={e => setEnquiryForm({...enquiryForm, message: e.target.value})}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-755 text-white font-bold py-2.5 px-4 rounded-xl transition-all cursor-pointer text-sm shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    Submit Bulk Request
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
