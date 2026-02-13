"use client";

import { MessageCircle, ShoppingBag, ArrowRight, MapPin, Sparkles } from "lucide-react";

export default function Hero() {
  // Replace with your actual WhatsApp business number
  const WHATSAPP_NUMBER = "233XXXXXXXXX"; 
  const message = encodeURIComponent("Assalamu Alaikum Al-Huda, I'd like to see your latest collection!");

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen w-full flex items-center overflow-hidden bg-[#052e16] py-20 lg:py-0">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-600/20 via-transparent to-transparent" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Content Section */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full backdrop-blur-md">
              <MapPin className="text-amber-500 size-4 animate-bounce" />
              <span className="text-stone-200 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
                Kasoa • Accra • Nationwide Delivery
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-serif font-bold text-stone-100 leading-[0.95] tracking-tight">
              Modesty <br />
              <span className="text-amber-500 italic flex items-center justify-center lg:justify-start gap-4">
                Redefined<Sparkles className="size-8 md:size-12 opacity-50" />
              </span>
            </h1>

            <p className="text-stone-400 text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              Premium Abayas, Veils, and Fragrances curated for the modern Muslimah. Quality that honors your values.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-6 justify-center lg:justify-start">
              <a 
                href={`https://wa.me{WHATSAPP_NUMBER}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-amber-500 hover:bg-amber-400 text-[#052e16] px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-[0_15px_30px_-10px_rgba(245,158,11,0.4)] active:scale-95"
              >
                <MessageCircle size={20} className="fill-current" />
                Order via WhatsApp
              </a>
              
              <button className="group bg-white/5 border border-white/10 hover:bg-white/10 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all backdrop-blur-md flex items-center justify-center gap-3 active:scale-95">
                Explore Shop <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          {/* RIGHT: High-End Visual Section */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[450px] aspect-[4/5] rounded-[3rem] p-1.5 border border-white/10 bg-white/5 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
              <div className="relative h-full w-full overflow-hidden rounded-[2.8rem]">
                {/* Standard img tag avoids Next.js Domain/TypeScript config errors for Phase 1 */}
                <img 
                  src="https://images.unsplash.com" 
                  alt="Luxury Abaya Collection"
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#052e16] via-transparent to-transparent opacity-60" />
                
                {/* Floating Info Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] flex items-center gap-5">
                  <div className="size-14 bg-amber-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <ShoppingBag className="text-[#052e16] size-7" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-white font-black text-sm uppercase tracking-widest">Ramadan Collection</p>
                    <p className="text-amber-500 text-xs font-bold">New Arrivals Daily</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Glows */}
            <div className="absolute -top-10 -right-10 size-40 bg-amber-500/20 blur-3xl rounded-full animate-pulse" />
          </div>

        </div>
      </div>
    </section>
  );
}
