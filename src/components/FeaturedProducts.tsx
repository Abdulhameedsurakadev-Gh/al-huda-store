"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Heart, Sparkles, Loader2, ShoppingBag } from "lucide-react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function FeaturedProducts() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFeatured() {
      try {
        const { data, error } = await supabase
          .from("products")
          .select("*")
          .eq("is_featured", true) // Fetches only items where featured is 'yes'
          .limit(8);

        if (error) throw error;
        setProducts(data || []);
      } catch (err) {
        console.error("Error fetching featured products:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchFeatured();
  }, []);

  if (loading) return (
    <div className="py-24 flex flex-col items-center justify-center gap-4 bg-white">
      <Loader2 className="animate-spin text-amber-500" size={40} />
      <p className="text-stone-400 font-serif italic">Loading Al-Huda Highlights...</p>
    </div>
  );

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-amber-500"></span>
              <h2 className="text-amber-600 font-black uppercase tracking-[0.3em] text-[10px]">
                Curated for You
              </h2>
            </div>
            <p className="font-serif text-4xl md:text-6xl text-[#064e3b] font-bold leading-tight">
              Ramadan & Eid <br />
              <span className="italic font-normal text-stone-400 underline decoration-amber-500/30 underline-offset-8">Highlights.</span>
            </p>
          </div>
          <div className="hidden md:flex bg-stone-50 px-8 py-4 rounded-[2rem] border border-stone-100 items-center gap-4">
             <div className="size-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700">
                <Sparkles size={20} />
             </div>
             <div>
                <p className="text-emerald-950 font-black text-sm uppercase tracking-tighter">New Arrivals</p>
                <p className="text-stone-400 text-xs font-medium">Updated 1 hour ago</p>
             </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col h-full">
              {/* Image Container */}
              <div className="relative aspect-[3/4] bg-stone-100 rounded-[2.5rem] overflow-hidden mb-6 border border-stone-100 transition-all duration-500 group-hover:shadow-[0_30px_60px_-15px_rgba(6,78,59,0.15)]">
                
                {/* Sale/Tag */}
                {product.base_price > 0 && (
                   <div className="absolute top-5 left-5 z-20 bg-emerald-950 text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg">
                     Exclusive
                   </div>
                )}

                <button className="absolute top-5 right-5 z-20 p-2.5 bg-white/80 backdrop-blur-md rounded-full text-stone-400 hover:text-rose-500 hover:scale-110 transition-all shadow-sm">
                  <Heart size={18} />
                </button>

                {/* PRODUCT IMAGE */}
                <div className="h-full w-full relative">
                  {product.main_image ? (
                    <img 
                      src={product.main_image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-stone-50 text-stone-300 italic p-10 text-center">
                       Coming soon to Al-Huda Boutique
                    </div>
                  )}
                </div>

                {/* HOVER OVERLAY: WhatsApp Call to Action */}
                <div className="absolute inset-0 bg-emerald-950/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                  <a 
                    href={`https://wa.me{encodeURIComponent(product.name)}`}
                    target="_blank"
                    className="w-full bg-amber-500 hover:bg-amber-400 text-emerald-950 py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transform translate-y-10 group-hover:translate-y-0 transition-all shadow-xl"
                  >
                    <MessageCircle size={18} className="fill-emerald-950" />
                    Quick Order
                  </a>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-2 px-2 flex-grow">
                <p className="text-[10px] uppercase tracking-[0.2em] font-black text-stone-300">
                  {product.brand || "Al-Huda Exclusive"}
                </p>
                <h3 className="text-lg font-bold text-emerald-950 tracking-tight leading-tight group-hover:text-amber-600 transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between pt-1">
                   <p className="text-emerald-900 font-black text-xl">₵{product.base_price.toFixed(2)}</p>
                   <Link href={`/product/${product.id}`} className="p-2 bg-stone-50 rounded-lg text-emerald-950 hover:bg-amber-500 transition-colors">
                      <ShoppingBag size={18} />
                   </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-24 text-center">
          <Link href="/boutique">
            <button className="group relative px-16 py-5 bg-emerald-950 text-stone-100 rounded-2xl font-black text-xs uppercase tracking-[0.3em] overflow-hidden transition-all hover:shadow-[0_20px_40px_-10px_rgba(6,78,59,0.3)]">
              <span className="relative z-10">Explore Entire Boutique</span>
              <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
