"use client";

import Image from "next/image";
import { MessageCircle, ShoppingBag, Sparkles, ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#052e16] py-12 lg:py-0">
      {/* Background Decor: Clean gradient instead of external textures to avoid URL errors */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: Messaging */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full">
              <MapPin className="text-amber-400 size-4" />
              <span className="text-amber-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                Serving Accra & Kasoa • Eid 2026
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-100 leading-[1.1]">
              Elevate Your <br />
              <span className="text-amber-500 italic">Faithful Style.</span>
            </h1>

            <p className="text-stone-300 text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
              Discover the finest Modest Wear in Ghana. From daily prayer essentials to exquisite Eid-ul-Fitr collections.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              {/* Replace with your actual WhatsApp number for Kasoa/Accra customers */}
              <a 
                href="https://wa.me" 
                className="group bg-amber-500 hover:bg-amber-600 text-stone-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-lg shadow-amber-500/20"
              >
                <MessageCircle size={22} />
                WhatsApp Order
              </a>
              <button className="group bg-white/5 border border-white/20 hover:border-amber-500/50 text-stone-100 px-8 py-4 rounded-xl font-bold text-lg transition-all backdrop-blur-md flex items-center justify-center gap-2">
                View Gallery <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* RIGHT: Visual Card with valid Placeholder */}
          <div className="relative order-1 lg:order-2">
            <div className="relative z-10 rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl border border-white/10">
              <Image 
                // Using a high-quality Unsplash image to prevent "Invalid URL" errors
                src="https://images.unsplash.com" 
                alt="Luxury Islamic Fashion"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#052e16] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-amber-500 rounded-lg">
                    <ShoppingBag className="text-stone-900 size-6" />
                  </div>
                  <div>
                    <p className="text-stone-100 font-bold text-xl">The 2026 Collection</p>
                    <p className="text-amber-500 text-sm font-medium">Limited Accra Stock</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 size-32 bg-amber-500/10 blur-3xl rounded-full" />
          </div>

        </div>
      </div>
    </section>
  );
}
