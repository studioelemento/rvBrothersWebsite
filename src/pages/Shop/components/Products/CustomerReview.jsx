import React, { useState } from 'react';
import { 
  Star, 
  ShieldCheck, 
  ChevronDown, 
  Edit3, 
  Check, 
  X,
  MessageSquare
} from 'lucide-react';

// Mock reviews data categorized by product category
const MOCK_REVIEWS_BY_CATEGORY = {
  'Toys & Collectibles': [
    {
      id: 1,
      author: 'Arjun R.',
      initials: 'AR',
      rating: 5,
      title: 'Stunning Craftsmanship',
      date: 'May 12, 2024',
      text: 'The quality and detailing on this coin are exceptional. Packaging was secure and premium. Truly a great addition to my collection.',
      verified: true,
      hasPhoto: true,
      photoIndex: 3 // Index in product images
    },
    {
      id: 2,
      author: 'Pratik S.',
      initials: 'PS',
      rating: 5,
      title: 'Perfect for Collectors',
      date: 'May 8, 2024',
      text: 'Beautiful coin with fine detailing. It came with a certificate and premium packaging. Very happy with my purchase.',
      verified: true,
      hasPhoto: true,
      photoIndex: 1
    },
    {
      id: 3,
      author: 'Meera K.',
      initials: 'MK',
      rating: 4,
      title: 'Great Quality',
      date: 'May 5, 2024',
      text: 'Really impressed with the product quality and presentation. Delivery was quick and well-handled.',
      verified: true,
      hasPhoto: true,
      photoIndex: 2
    }
  ],
  'FMCG & Wellness': [
    {
      id: 1,
      author: 'Simran K.',
      initials: 'SK',
      rating: 5,
      title: 'Excellent Haircare Routine',
      date: 'June 18, 2024',
      text: 'My hair feels significantly softer and healthier after using this combo pack. Smells absolutely fantastic and natural!',
      verified: true,
      hasPhoto: false
    },
    {
      id: 2,
      author: 'Amit P.',
      initials: 'AP',
      rating: 5,
      title: 'Very Hydrating Lotion',
      date: 'June 10, 2024',
      text: 'Lotion absorbs quickly and keeps skin hydrated all day. No sticky feeling. Aloe Vera formula is highly soothing.',
      verified: true,
      hasPhoto: false
    }
  ],
  'Industrial Supplies': [
    {
      id: 1,
      author: 'Ramesh Patel',
      initials: 'RP',
      rating: 5,
      title: 'High Precision Bearings',
      date: 'July 1, 2024',
      text: 'Perfect fit and smooth operation. Ideal for our production machinery. Will definitely order in bulk again.',
      verified: true,
      hasPhoto: false
    }
  ]
};

// General fallback reviews
const GENERAL_FALLBACK_REVIEWS = [
  {
    id: 1,
    author: 'Rajesh M.',
    initials: 'RM',
    rating: 5,
    title: 'Extremely Satisfied',
    date: 'April 20, 2024',
    text: 'Top notch quality and delivery was ahead of schedule. Truly professional service from RV Brothers.',
    verified: true,
    hasPhoto: false
  },
  {
    id: 2,
    author: 'Neha G.',
    initials: 'NG',
    rating: 5,
    title: 'Highly Recommended',
    date: 'April 15, 2024',
    text: 'Authentic items, premium packaging, and prompt customer support. A reliable choice for businesses.',
    verified: true,
    hasPhoto: false
  }
];

export default function CustomerReview({ product }) {
  if (!product) return null;

  // Resolve appropriate reviews
  const initialReviewsList = MOCK_REVIEWS_BY_CATEGORY[product.category] || GENERAL_FALLBACK_REVIEWS;
  const [reviews, setReviews] = useState(initialReviewsList);
  const [activeTab, setActiveTab] = useState('all'); // 'all' or 'photos'
  const [sortBy, setSortBy] = useState('recent'); // 'recent', 'highest', 'lowest'
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  
  // Write a Review Form States
  const [ratingInput, setRatingInput] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formTitle, setFormTitle] = useState('');
  const [formText, setFormText] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Calculate review numbers
  const totalReviewsCount = reviews.length;
  const reviewsWithPhotosCount = reviews.filter(r => r.hasPhoto).length;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (ratingInput === 0) {
      alert("Please select a rating star!");
      return;
    }

    const newReview = {
      id: Date.now(),
      author: formName || 'Anonymous',
      initials: (formName || 'A').split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2),
      rating: ratingInput,
      title: formTitle || 'Verified Feedback',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      text: formText,
      verified: true,
      hasPhoto: false
    };

    setReviews([newReview, ...reviews]);
    setFormSubmitted(true);
    
    // Reset fields
    setRatingInput(0);
    setFormName('');
    setFormEmail('');
    setFormTitle('');
    setFormText('');

    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  // Filter & Sort Logic
  const filteredReviews = reviews
    .filter(review => activeTab === 'all' || review.hasPhoto)
    .sort((a, b) => {
      if (sortBy === 'recent') return b.id - a.id;
      if (sortBy === 'highest') return b.rating - a.rating;
      if (sortBy === 'lowest') return a.rating - b.rating;
      return 0;
    });

  // Calculate counts for stats
  const fiveStarCount = reviews.filter(r => r.rating === 5).length;
  const fourStarCount = reviews.filter(r => r.rating === 4).length;
  const threeStarCount = reviews.filter(r => r.rating === 3).length;
  const twoStarCount = reviews.filter(r => r.rating === 2).length;
  const oneStarCount = reviews.filter(r => r.rating === 1).length;

  // Summary logic
  const averageRating = (
    reviews.reduce((acc, r) => acc + r.rating, 0) / (reviews.length || 1)
  ).toFixed(1);

  const getPercentage = (count) => {
    return `${(count / (reviews.length || 1)) * 100}%`;
  };

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 py-12 border-t border-slate-200">
      
      {/* Header section with decorative lines */}
      <div className="text-center mb-10 max-w-xl mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="h-[1px] w-8 bg-[#b45309]/50" />
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-[#b45309] uppercase">
            Customer Reviews
          </span>
          <div className="h-[1px] w-8 bg-[#b45309]/50" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
          {product.category === 'Toys & Collectibles' ? 'What Collectors Are Saying' : 'What Customers Are Saying'}
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-2">
          Genuine feedback from verified buyers who value authenticity and quality.
        </p>
      </div>

      {/* Main split grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-7xl mx-auto px-4 w-full">
        
        {/* Left column: Summary Card */}
        <div className="lg:col-span-4 bg-white border border-slate-250/60 rounded-3xl p-6 shadow-xs space-y-6">
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2">
              <span className="text-5xl font-black text-slate-900 leading-none">{averageRating}</span>
              <Star className="w-8 h-8 fill-amber-400 text-amber-400" />
            </div>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Out of 5</p>
            <p className="text-xs text-slate-400 font-medium">Based on {totalReviewsCount} reviews</p>
            
            {/* Stars row */}
            <div className="flex justify-center gap-1 mt-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star 
                  key={s} 
                  className={`w-5 h-5 ${s <= Math.round(averageRating) ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`} 
                />
              ))}
            </div>
          </div>

          {/* Rating Bars Breakdown */}
          <div className="space-y-2.5">
            {[
              { label: '5 Stars', count: fiveStarCount },
              { label: '4 Stars', count: fourStarCount },
              { label: '3 Stars', count: threeStarCount },
              { label: '2 Stars', count: twoStarCount },
              { label: '1 Star', count: oneStarCount }
            ].map((row, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs gap-3 font-semibold text-slate-650">
                <span className="w-12 text-slate-500">{row.label}</span>
                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden relative">
                  <div 
                    className="h-full bg-amber-500 rounded-full" 
                    style={{ width: getPercentage(row.count) }}
                  />
                </div>
                <span className="w-8 text-right text-slate-400">{row.count}</span>
              </div>
            ))}
          </div>

          {/* Verified Checkbox card footer */}
          <div className="flex items-center gap-3 bg-[#f8fafc] border border-slate-50 rounded-2xl p-4">
            <div className="p-2 bg-emerald-50 rounded-full border border-emerald-100 text-emerald-600">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Verified Reviews</p>
              <p className="text-[10px] text-slate-500 mt-0.5 leading-none">All reviews are from verified buyers</p>
            </div>
          </div>
        </div>

        {/* Right column: Reviews List */}
        <div className="lg:col-span-8 space-y-5">
          
          {/* List Toolbar / Filters */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-3 flex-wrap gap-4">
            
            {/* Tabs */}
            <div className="flex gap-4">
              <button 
                onClick={() => setActiveTab('all')}
                className={`pb-3 text-xs font-bold border-b-2 cursor-pointer transition-colors ${
                  activeTab === 'all' 
                    ? 'border-blue-600 text-blue-600 font-extrabold' 
                    : 'border-transparent text-slate-400 hover:text-slate-600'
                }`}
              >
                All Reviews ({totalReviewsCount})
              </button>
              <button 
                onClick={() => setActiveTab('photos')}
                className={`pb-3 text-xs font-bold border-b-2 cursor-pointer transition-colors ${
                  activeTab === 'photos' 
                    ? 'border-blue-600 text-blue-600 font-extrabold' 
                    : 'border-transparent text-slate-400 hover:text-slate-600'
                }`}
              >
                With Photos ({reviewsWithPhotosCount})
              </button>
            </div>

            {/* Sort Filter Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="flex items-center gap-2 border border-slate-250 bg-white hover:bg-slate-50 rounded-xl px-4 py-2 text-xs font-bold text-slate-700 cursor-pointer shadow-xs"
              >
                <span>
                  {sortBy === 'recent' ? 'Most Recent' :
                   sortBy === 'highest' ? 'Highest Rated' : 'Lowest Rated'}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {showSortDropdown && (
                <div className="absolute right-0 top-full mt-1.5 w-44 bg-white border border-slate-200 rounded-xl shadow-xl z-20 overflow-hidden py-1 animate-fade-in">
                  {[
                    { id: 'recent', label: 'Most Recent' },
                    { id: 'highest', label: 'Highest Rated' },
                    { id: 'lowest', label: 'Lowest Rated' }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setSortBy(opt.id);
                        setShowSortDropdown(false);
                      }}
                      className="w-full text-left text-xs font-semibold px-4 py-2.5 hover:bg-slate-50 text-slate-700 cursor-pointer"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Render Active Reviews */}
          <div className="space-y-4">
            {filteredReviews.length === 0 ? (
              <div className="text-center py-10 bg-white border border-slate-200 rounded-2xl text-slate-400 text-sm">
                No reviews found matching the filters.
              </div>
            ) : (
              filteredReviews.map((review) => (
                <div 
                  key={review.id}
                  className="bg-white border border-slate-150 rounded-2xl p-5 shadow-xs flex gap-4 hover:border-slate-300 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Left Column: Avatar Bubble */}
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-600 font-extrabold text-sm border border-slate-200">
                    {review.initials}
                  </div>

                  {/* Mid Column: Review details */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">{review.author}</h4>
                      {review.verified && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full text-[9px] font-bold">
                          <Check className="w-2.5 h-2.5" /> Verified Buyer
                        </span>
                      )}
                      <span className="text-[10px] text-slate-400 font-medium sm:ml-auto">
                        {review.date}
                      </span>
                    </div>

                    {/* Stars Row */}
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star 
                          key={s} 
                          className={`w-3.5 h-3.5 ${s <= review.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-100'}`} 
                        />
                      ))}
                    </div>

                    {/* Content text & title */}
                    <div className="space-y-1">
                      <h5 className="text-xs sm:text-sm font-extrabold text-slate-900">{review.title}</h5>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                        {review.text}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Review Photo if provided */}
                  {review.hasPhoto && product.images && product.images[review.photoIndex] && (
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-slate-50 border border-slate-200 flex-shrink-0 flex items-center justify-center p-1 cursor-pointer hover:scale-105 transition-all">
                      <img 
                        src={product.images[review.photoIndex]} 
                        alt="User review attachment" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}

                </div>
              ))
            )}
          </div>

          {/* Load More Button */}
          <div className="text-center pt-2">
            <button className="inline-flex items-center gap-2 border border-slate-250 bg-white hover:bg-slate-50 hover:text-slate-900 rounded-xl px-5 py-2.5 text-xs font-bold text-slate-600 cursor-pointer transition-all shadow-xs">
              Load More Reviews
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>

        </div>

      </div>

      {/* Form: Write a Review */}
      <div className="max-w-7xl mx-auto px-4 mt-12 w-full">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Block: Heading and rating stars */}
            <div className="lg:col-span-4 space-y-5">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-800">
                  <Edit3 className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-extrabold text-[#0f172a]">Write a Review</h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                  Share your experience with this product to help other buyers.
                </p>
              </div>

              {/* Rating Star Selection */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">Your Rating</label>
                <div className="flex gap-1.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setRatingInput(s)}
                      onMouseEnter={() => setHoverRating(s)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="cursor-pointer transition-transform active:scale-90"
                    >
                      <Star 
                        className={`w-6 h-6 ${
                          s <= (hoverRating || ratingInput) 
                            ? 'fill-amber-400 text-amber-400' 
                            : 'text-slate-300 hover:text-amber-400'
                        }`} 
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Alert message */}
              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 pt-2 border-t border-slate-100">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Your review will be published after verification.</span>
              </div>
            </div>

            {/* Right Block: Input fields */}
            <div className="lg:col-span-8">
              {formSubmitted ? (
                <div className="h-full min-h-[220px] flex flex-col items-center justify-center text-center space-y-3 bg-emerald-50 rounded-2xl border border-emerald-100 p-6">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                    <Check className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-emerald-800">Thank You for Your Review!</h4>
                    <p className="text-xs text-emerald-600 mt-1">Your feedback is valuable to us. It will be published after validation.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">Your Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Enter your name"
                        className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-xs sm:text-sm rounded-xl py-2.5 px-3.5 outline-none transition-all"
                        value={formName}
                        onChange={e => setFormName(e.target.value)}
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">Your Email</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="Enter your email"
                        className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-xs sm:text-sm rounded-xl py-2.5 px-3.5 outline-none transition-all"
                        value={formEmail}
                        onChange={e => setFormEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">Review Title (Optional)</label>
                        <input 
                          type="text" 
                          placeholder="Summarize your experience"
                          className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-xs sm:text-sm rounded-xl py-2.5 px-3.5 outline-none transition-all"
                          value={formTitle}
                          onChange={e => setFormTitle(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-1 flex-1 flex flex-col justify-end">
                      {/* empty space balance */}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">Your Review</label>
                    <textarea 
                      rows={4} 
                      required
                      placeholder="Tell us more about the product..."
                      className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-xs sm:text-sm rounded-xl py-2.5 px-3.5 outline-none transition-all resize-none"
                      value={formText}
                      onChange={e => setFormText(e.target.value)}
                    />
                  </div>

                  <div className="text-right">
                    <button 
                      type="submit" 
                      className="bg-[#0a1128] hover:bg-[#121c3b] text-white font-bold py-2.5 px-6 rounded-xl transition-all cursor-pointer text-xs shadow-md"
                    >
                      Submit Review
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
