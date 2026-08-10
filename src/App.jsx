import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/30 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/30 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10 max-w-3xl w-full text-center space-y-8 p-10 bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-slate-800 shadow-2xl">
        <div className="flex justify-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/50 animate-bounce" style={{ animationDuration: '3s' }}>
            <span className="text-3xl font-bold">R</span>
          </div>
          <div className="w-16 h-16 bg-teal-400 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-400/50 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}>
            <span className="text-3xl font-bold text-slate-900">T</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-purple-400">
          React & Tailwind
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
          Your project is successfully set up and ready for development. Experience the perfect blend of component-driven architecture and utility-first styling.
        </p>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 w-full sm:w-auto rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
            Get Started
          </button>
          <button className="px-8 py-4 w-full sm:w-auto rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold border border-slate-700 transition-all duration-300 transform hover:scale-105">
            View Documentation
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
