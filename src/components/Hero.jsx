"use client";

import { MessageCircle, ShoppingBag, Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center overflow-hidden bg-[#064e3b]">
      {/* 2026 Aesthetic: Gold Dust Animation (Subtle) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com')]" />
      
      {/* Deep Emerald & Gold Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-400/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: The Message (Dresses + Ramadan) */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full">
              <Sparkles className="text-amber-400 size-4 animate-pulse" />
              <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.2em]">
                Ramadan Prep • Eid Collection 2026
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-100 leading-[1.1]">
              Faith in Every <br />
              <span className="text-amber-500 italic">Fine Detail.</span>
            </h1>

            <p className="text-stone-300 text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
              Prepare for the Holy Month with fresh dates and Iftar essentials, then step into 
              <span className="text-stone-100 font-semibold"> Eid-ul-Fitr </span> with our 
              exclusive boutique dresses, jewelry, and perfumes. 
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center lg:justify-start">
              <a 
                href="https://wa.me." 
                className="group bg-amber-500 hover:bg-amber-600 text-[#064e3b] px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all hover:shadow-2xl hover:shadow-amber-500/20"
              >
                <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
                Order via WhatsApp
              </a>
              <button className="group bg-white/5 border border-white/10 hover:border-amber-500/50 text-stone-100 px-10 py-5 rounded-2xl font-bold text-lg transition-all backdrop-blur-md flex items-center justify-center gap-2">
                View Collection <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* RIGHT: The "Boutique Display" (Glassmorphism) */}
          <div className="relative">
            {/* Main Glass Card */}
            <div className="relative z-10 bg-white/[0.03] border border-white/10 backdrop-blur-2xl p-10 rounded-[50px] shadow-3xl overflow-hidden aspect-[4/5] flex flex-col justify-end">
              
              {/* Badge for Dresses */}
              <div className="absolute top-8 left-8 bg-amber-500 text-[#064e3b] px-4 py-1 rounded-full text-xs font-black uppercase tracking-tighter">
                New Arrival
              </div>

              <div className="space-y-4">
                <div className="size-16 bg-amber-500/20 rounded-2xl flex items-center justify-center border border-amber-500/30">
                  <ShoppingBag className="text-amber-500" size={32} />
                </div>
                <h3 className="text-stone-100 font-serif text-3xl font-bold">The Eid Boutique</h3>
                <p className="text-stone-400 text-sm leading-relaxed uppercase tracking-widest">
                  Luxury Dresses • Jewelry • Ouds
                </p>
                <div className="pt-4 flex items-center gap-3">
                    <span className="h-px w-12 bg-amber-500/50"></span>
                    <span className="text-amber-500 text-xs font-bold uppercase tracking-widest">Al-Huda Exclusive</span>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -bottom-20 -right-20 size-64 bg-amber-500/5 rounded-full blur-3xl" />
            </div>

            {/* Floating Visual Accent */}
            <div className="absolute -top-6 -right-6 bg-amber-500/10 border border-amber-500/20 backdrop-blur-md p-6 rounded-3xl z-20 hidden md:block animate-bounce-slow">
               <p className="text-amber-500 font-bold text-center">🌙<br/><span className="text-[10px] text-stone-300 uppercase tracking-tighter">Ramadan Prep</span></p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
