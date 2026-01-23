"use client";

import { MessageCircle, Sprout, ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] w-full flex items-center overflow-hidden bg-[#064e3b]">
      {/* 2026 Aesthetic: Subtle Islamic Pattern Overlay (Low Opacity) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com')]" />
      
      {/* Decorative Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN: Messaging */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 px-4 py-2 rounded-full shadow-inner">
              <Sparkles className="text-amber-400 size-4" />
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
                Ramadan 2026 Prep is Live
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-100 leading-[1.1]">
              Elevate Your <br />
              <span className="text-amber-500 italic">Iftar Experience.</span>
            </h1>

            <p className="text-stone-300 text-lg md:text-xl leading-relaxed max-w-lg">
              Al-Huda brings the finest Dates, Fruits, and Islamic Books to your doorstep in Ghana. Prepare your home for the blessed month with our curated boutique essentials.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="https://wa.me." 
                className="bg-amber-500 hover:bg-amber-600 text-[#064e3b] px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-xl shadow-amber-900/20"
              >
                <MessageCircle size={24} />
                Order via WhatsApp
              </a>
              <button className="bg-white/5 border border-white/10 hover:bg-white/10 text-stone-100 px-8 py-4 rounded-2xl font-bold text-lg transition-all backdrop-blur-md">
                Browse Essentials <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Visual Feature (Placeholder for floor-shots) */}
          <div className="relative group">
            <div className="relative z-10 bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-[40px] shadow-2xl overflow-hidden aspect-square flex flex-col justify-center items-center text-center space-y-6">
              <div className="p-6 bg-amber-500/10 rounded-full border border-amber-500/20 animate-pulse">
                <Sprout className="text-amber-500 size-16 md:size-24" />
              </div>
              <div>
                <h3 className="text-amber-500 font-serif text-2xl md:text-3xl font-bold">Fresh Dates & Fruits</h3>
                <p className="text-stone-400 mt-2 uppercase tracking-widest text-xs font-semibold">Arriving for Ramadan 2026</p>
              </div>
              <div className="flex gap-2">
                 <div className="h-1 w-8 bg-amber-500 rounded-full" />
                 <div className="h-1 w-2 bg-amber-500/30 rounded-full" />
                 <div className="h-1 w-2 bg-amber-500/30 rounded-full" />
              </div>
            </div>
            
            {/* Soft background shape */}
            <div className="absolute -inset-4 bg-amber-500/5 rounded-[48px] -z-10 blur-xl group-hover:bg-amber-500/10 transition-colors" />
          </div>

        </div>
      </div>
    </section>
  );
}
