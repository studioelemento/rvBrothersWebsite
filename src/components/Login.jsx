import React, { useState } from 'react';
import { X, Lock, ShieldCheck, Zap, Award } from 'lucide-react';

export default function Login({ isOpen = true, onClose }) {
  const [mobileNumber, setMobileNumber] = useState('');

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[100] transition-opacity" 
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] md:w-[450px] bg-white z-[101] shadow-2xl flex flex-col transform transition-transform duration-300 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-serif font-black tracking-tight text-slate-900">
              RV
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-widest text-slate-900 leading-none">BROTHERS</span>
              <span className="text-[7px] font-medium tracking-[0.2em] text-slate-500 mt-0.5">BUSINESS CONSORTIUM</span>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 px-8 py-8 flex flex-col">
          <h2 className="text-3xl font-extrabold text-slate-900 leading-tight mb-3">
            Welcome to<br />RV Brothers
          </h2>
          <p className="text-sm text-slate-500 mb-10 leading-relaxed">
            Login to manage orders, wishlist, reviews,<br />and saved products.
          </p>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-bold text-slate-800">Continue with WhatsApp</span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  Fast & Secure
                </span>
              </div>

              <div className="flex gap-2">
                <div className="relative">
                  <select className="appearance-none bg-white border border-slate-300 hover:border-slate-400 text-slate-700 text-sm font-bold rounded-lg pl-4 pr-9 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer h-full transition-all">
                    <option>+91</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  className="flex-1 border border-slate-300 hover:border-slate-400 rounded-lg px-4 py-3 text-sm font-medium outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-slate-400"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </div>

              <button className="w-full flex items-center justify-center gap-2.5 bg-[#031535] hover:bg-[#062459] text-white font-semibold py-3.5 px-4 rounded-lg transition-colors shadow-sm">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                Continue with WhatsApp
              </button>

              <div className="flex justify-center items-center gap-1.5 text-xs text-slate-500 font-medium pt-1">
                <Lock className="w-3.5 h-3.5" />
                <span>We'll send an OTP to your WhatsApp number</span>
              </div>
            </div>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <span className="bg-white px-4">Or Continue With</span>
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold py-3.5 px-4 rounded-lg transition-colors shadow-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>
          </div>
        </div>

        {/* Footer Area */}
        <div className="mt-auto px-8 py-8 border-t border-slate-100">
          <p className="text-center text-xs text-slate-400 mb-8 px-2">
            By continuing, you agree to our <a href="#" className="text-blue-600 font-semibold hover:underline">Terms of Use</a> and <a href="#" className="text-blue-600 font-semibold hover:underline">Privacy Policy</a>.
          </p>
          
          <div className="grid grid-cols-3 gap-2 px-2">
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-blue-50/50 flex items-center justify-center mb-2.5">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-[10px] font-bold text-slate-800">Secure & Safe</p>
              <p className="text-[9px] text-slate-400 mt-0.5">Your data is protected</p>
            </div>
            
            <div className="flex flex-col items-center text-center border-l border-r border-slate-100">
              <div className="w-10 h-10 rounded-full bg-blue-50/50 flex items-center justify-center mb-2.5">
                <Zap className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-[10px] font-bold text-slate-800">Quick & Easy</p>
              <p className="text-[9px] text-slate-400 mt-0.5">Login in seconds</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-blue-50/50 flex items-center justify-center mb-2.5">
                <Award className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-[10px] font-bold text-slate-800">Trusted by</p>
              <p className="text-[9px] text-slate-400 mt-0.5">Thousands</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
