"use client";

import Image from "next/image";
import { MessageCircle, ShoppingBag, Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#064e3b] py-12 lg:py-0">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com')]" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-amber-500/10 rounded-full blur-[80px] md:blur-[150px] -translate-y-1/2 translate-x-1/4" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Responsive Grid: Stacks on mobile (cols-1), side-by-side on LG (cols-2) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* LEFT: Messaging (Ordered first on mobile) */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full mx-auto lg:mx-0">
              <Sparkles className="text-amber-400 size-4 animate-pulse" />
              <span className="text-amber-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
                Ramadan Prep • Eid Collection 2026
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-stone-100 leading-tight">
              Faith in Every <br />
              <span className="text-amber-500 italic">Fine Detail.</span>
            </h1>

            <p className="text-stone-300 text-base md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
              Prepare for the Holy Month with Iftar essentials, then step into 
              <span className="text-white font-semibold"> Eid-ul-Fitr </span> with our 
              exclusive boutique dresses and perfumes. 
            </p>

            {/* Buttons: Stack on small mobile, row on larger screens */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <a 
                href="https://wa.me" 
                className="group bg-amber-500 hover:bg-amber-600 text-[#064e3b] px-8 py-4 rounded-2xl font-bold text-md md:text-lg flex items-center justify-center gap-3 transition-all"
              >
                <MessageCircle size={22} className="group-hover:rotate-12 transition-transform" />
                Order via WhatsApp
              </a>
              <button className="group bg-white/5 border border-white/10 hover:border-amber-500/50 text-stone-100 px-8 py-4 rounded-2xl font-bold text-md md:text-lg transition-all backdrop-blur-md flex items-center justify-center gap-2">
                View Collection <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* RIGHT: Visual Card (Ordered first on mobile for visual impact) */}
          <div className="relative group w-full max-w-[450px] lg:max-w-none mx-auto order-1 lg:order-2">
            <div className="relative z-10 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[30px] md:rounded-[50px] shadow-3xl overflow-hidden aspect-[4/5] flex flex-col">
              
              <div className="absolute inset-0 z-0 opacity-60 group-hover:opacity-80 transition-opacity duration-700">
                <Image 
                  src="https://images.unsplash.com" 
                  alt="Eid Boutique Collection"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw" 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b] via-[#064e3b]/20 to-transparent" />
              </div>

              {/* Card Content Overlay */}
              <div className="relative z-10 p-6 md:p-10 mt-auto">
                <div className="absolute top-6 left-6 md:top-8 md:left-8 bg-amber-500 text-[#064e3b] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter">
                  New Arrival
                </div>

                <div className="space-y-2 md:space-y-4">
                  <div className="size-12 md:size-14 bg-amber-500/20 rounded-xl flex items-center justify-center border border-amber-500/30 backdrop-blur-md">
                    <ShoppingBag className="text-amber-500 size-6 md:size-7" />
                  </div>
                  <h3 className="text-stone-100 font-serif text-2xl md:text-3xl font-bold">The Eid Boutique</h3>
                  <p className="text-stone-300 text-xs md:text-sm leading-relaxed uppercase tracking-widest">
                    Luxury Dresses • Jewelry • Ouds
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Moon Badge (Hidden on very small mobile) */}
            <div className="absolute -top-4 -right-4 bg-amber-500/20 border border-amber-500/30 backdrop-blur-xl p-4 md:p-6 rounded-2xl z-20 hidden sm:block shadow-2xl">
               <p className="text-amber-500 font-bold text-center">🌙<br/><span className="text-[8px] md:text-[10px] text-stone-300 uppercase tracking-tighter leading-none">Ramadan Prep</span></p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
