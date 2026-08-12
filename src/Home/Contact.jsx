import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  Building2, 
  MessageSquare 
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'Distribution Partnership',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        category: 'Distribution Partnership',
        message: '',
      });
    }, 4000);
  };

  const contactCards = [
    {
      icon: Phone,
      title: 'Call Us Directly',
      details: '+91 98765 43210 / +91 80 1234 5678',
      subtext: 'Mon - Sat: 9:00 AM - 7:00 PM IST',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'partner@rvbrothers.com',
      subtext: 'We typically respond within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      details: 'RV Brothers Consortium Headquarters',
      subtext: 'Commercial Trade Towers, Bengaluru, India',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Monday - Saturday',
      subtext: 'Sunday: Closed',
    },
  ];

  return (
    <section id="contact-form-section" className="w-full bg-[#030712] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 font-sans text-slate-100 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/25 bg-blue-950/40 text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">
            <MessageSquare className="w-4 h-4 text-blue-500" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let's Connect & Build Together
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Have questions about our products, business divisions or partnership opportunities? Reach out to our team today.
          </p>
        </div>

        {/* 4 CONTACT CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactCards.map((card, idx) => {
            const CardIcon = card.icon;
            return (
              <div 
                key={idx}
                className="bg-[#050C1E]/80 backdrop-blur-md rounded-2xl border border-slate-800/80 p-6 flex flex-col items-start hover:border-blue-500/40 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-blue-950/50 border border-blue-500/20 text-blue-400 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <CardIcon className="w-5 h-5" />
                </div>
                <h3 className="text-white font-bold text-base mb-1">
                  {card.title}
                </h3>
                <p className="text-blue-400 font-semibold text-xs sm:text-sm mb-1">
                  {card.details}
                </p>
                <p className="text-slate-500 text-xs">
                  {card.subtext}
                </p>
              </div>
            );
          })}
        </div>

        {/* INQUIRY FORM & LOCATION DETAILS ROW */}
        <div className="bg-[#050C1E]/90 border border-slate-800/90 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Form Intro */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <div className="w-12 h-12 rounded-2xl bg-blue-950/80 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 shadow-md">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Partner & General Enquiries
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Fill out the form with your details and specific business interest. Whether you want to buy in bulk, distribute our products, or list your brand, we're ready to talk.
              </p>
              <div className="w-12 h-1 bg-blue-600 rounded-full mb-8"></div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Direct response from senior account manager</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Customized B2B catalog & pricing structure</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Pan-India logistics and delivery evaluation</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-2xl p-8 text-center flex flex-col items-center justify-center animate-fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-white font-extrabold text-xl mb-2">Inquiry Submitted Successfully!</h4>
                  <p className="text-slate-300 text-sm max-w-md">
                    Thank you for reaching out to RV Brothers. Our representative will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input 
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#020617] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input 
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#020617] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input 
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#020617] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Inquiry Category
                      </label>
                      <select 
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full bg-[#020617] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option>Distribution Partnership</option>
                        <option>Retailer & Reseller</option>
                        <option>Manufacturer Listing</option>
                        <option>Institutional Buying</option>
                        <option>General Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Your Message *
                    </label>
                    <textarea 
                      rows={4}
                      required
                      placeholder="Tell us about your business or inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#020617] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-blue-600/25 cursor-pointer"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
