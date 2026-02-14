"use client";

import { 
  Sparkles, 
  Wind, 
  BookOpen, 
  Utensils, 
  Bed, 
  ShoppingBag, 
  Footprints, 
  FlaskConical,
  ArrowRight
} from "lucide-react";

const categories = [
  { name: "Premium Perfumes", icon: FlaskConical, desc: "Oud & Floral Scents" },
  { name: "Abayas & Dresses", icon: ShoppingBag, desc: "Modest Elegance" },
  { name: "Luxury Jewelry", icon: Sparkles, desc: "Timeless Pieces" },
  { name: "Islamic Books", icon: BookOpen, desc: "Knowledge & Deen" },
  { name: "Kitchenware", icon: Utensils, desc: "Home Essentials" },
  { name: "Bridal Bedding", icon: Bed, desc: "Silk & Comfort" },
  { name: "Leather Slippers", icon: Footprints, desc: "Handcrafted Quality" },
  { name: "Organic Pomades", icon: Wind, desc: "Natural Skincare" },
];

export default function CategoryPulse() {
  const WHATSAPP_NUMBER = "233XXXXXXXXX"; // Replace with your number

  return (
    <section className="py-24 bg-[#fdfbf7] border-t border-stone-100"> 
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-amber-500"></span>
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-amber-600">
                The Al-Huda Collections
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#064e3b] leading-tight">
              Curated for your <br />
              <span className="italic font-normal text-stone-400">Exquisite Lifestyle.</span>
            </h2>
          </div>
          <p className="text-stone-500 max-w-xs text-sm leading-relaxed border-l-2 border-stone-200 pl-6 hidden md:block">
            Handpicked essentials designed to bring beauty and barakah into your daily routine.
          </p>
        </div>

        {/* Grid: 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href={`https://wa.me{WHATSAPP_NUMBER}?text=Assalamu%20Alaikum,%20I'm%20interested%20in%20your%20${cat.name}%20collection.`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white p-6 md:p-10 rounded-[40px] border border-stone-100 transition-all duration-500 hover:bg-[#064e3b] hover:-translate-y-2 shadow-sm hover:shadow-2xl hover:shadow-emerald-900/20"
            >
              {/* Icon Container */}
              <div className="size-16 rounded-3xl bg-stone-50 flex items-center justify-center mb-8 group-hover:bg-white/10 group-hover:rotate-[360deg] transition-all duration-700">
                <cat.icon size={28} className="text-emerald-900 group-hover:text-amber-400 transition-colors" />
              </div>

              {/* Text Content */}
              <div className="space-y-1">
                <h3 className="font-bold text-emerald-950 text-lg tracking-tight group-hover:text-white transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-stone-400 group-hover:text-emerald-100/60 transition-colors">
                  {cat.desc}
                </p>
              </div>

              {/* Hover Arrow */}
              <div className="mt-8 flex items-center gap-2 text-amber-600 font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                Shop Now <ArrowRight size={14} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
