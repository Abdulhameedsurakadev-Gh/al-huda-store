"use client";

import { MessageCircle, Heart, Sparkles } from "lucide-react";
import Image from "next/image";

// Phase 1: Placeholder Data (Swap this with your JSON import later)
const featuredItems = [
  { id: 1, name: "Luxury Eid Abaya", category: "Dresses", price: "GHS 450", tag: "Eid Special" },
  { id: 2, name: "Premium Oud Al-Huda", category: "Perfumes", price: "GHS 180", tag: "Best Seller" },
  { id: 3, name: "Medina Dates Box", category: "Ramadan", price: "GHS 85", tag: "New Arrival" },
  { id: 4, name: "Islamic Dua Book", category: "Books", price: "GHS 45", tag: "Essentials" },
  { id: 5, name: "Gold Plated Jewelry", category: "Jewelry", price: "GHS 220", tag: "Eid Special" },
  { id: 6, name: "Kitchen Utensil Set", category: "Home", price: "GHS 350", tag: "Ramadan Prep" },
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-amber-600 font-bold uppercase tracking-[0.3em] text-xs mb-4">
              Curated for You
            </h2>
            <p className="font-serif text-4xl md:text-5xl text-[#064e3b] font-bold">
              Ramadan & Eid <span className="italic text-amber-600">Highlights.</span>
            </p>
          </div>
          <div className="bg-emerald-50 px-6 py-3 rounded-2xl border border-emerald-100 flex items-center gap-3">
             <Sparkles className="text-emerald-700 size-5" />
             <p className="text-emerald-900 font-bold text-sm">6 New Styles Just Added</p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10">
          {featuredItems.map((item) => (
            <div key={item.id} className="group relative">
              {/* Image Container */}
              <div className="relative aspect-[3/4] bg-stone-100 rounded-[32px] overflow-hidden mb-6 border border-stone-100 transition-all group-hover:shadow-2xl">
                
                {/* TAG */}
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase text-emerald-900 shadow-sm">
                  {item.tag}
                </div>

                {/* HEART BUTTON */}
                <button className="absolute top-4 right-4 z-20 p-2 bg-white/90 backdrop-blur-md rounded-full text-stone-400 hover:text-rose-500 transition-colors">
                  <Heart size={18} />
                </button>

                {/* PLACEHOLDER / ACTUAL IMAGE */}
                <div className="absolute inset-0 flex items-center justify-center text-stone-300 font-serif italic text-lg text-center p-8">
                  {/* When photos arrive, replace this div with:
                  <Image src={item.image} alt={item.name} fill className="object-cover" /> 
                  */}
                  Photo coming for {item.name}...
                </div>

                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 bg-[#064e3b]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6">
                  <a 
                    href={`https://wa.me{item.name}`}
                    className="w-full bg-amber-500 text-[#064e3b] py-3 rounded-xl font-bold flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform"
                  >
                    <MessageCircle size={18} />
                    Order Now
                  </a>
                </div>
              </div>

              {/* Text Info */}
              <div className="space-y-1 px-2">
                <p className="text-[10px] uppercase tracking-widest font-bold text-stone-400">{item.category}</p>
                <h3 className="text-lg font-bold text-emerald-950 tracking-tight leading-tight group-hover:text-amber-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-amber-700 font-black">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-20 text-center">
          <button className="px-12 py-4 bg-[#064e3b] text-stone-100 rounded-2xl font-bold hover:bg-emerald-900 transition-all shadow-xl shadow-emerald-900/20">
            View Entire Boutique
          </button>
        </div>
      </div>
    </section>
  );
}
