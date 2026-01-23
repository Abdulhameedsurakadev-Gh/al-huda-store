"use client";

import { 
  Sparkles, 
  Wind, 
  BookOpen, 
  Utensils, 
  Bed, 
  ShoppingBag, 
  Footprints, 
  FlaskConical 
} from "lucide-react";

const categories = [
  { name: "Perfumes", icon: FlaskConical, color: "bg-amber-100 text-amber-700" },
  { name: "Dresses", icon: ShoppingBag, color: "bg-emerald-100 text-emerald-700" },
  { name: "Jewelry", icon: Sparkles, color: "bg-rose-100 text-rose-700" },
  { name: "Books", icon: BookOpen, color: "bg-blue-100 text-blue-700" },
  { name: "Utensils", icon: Utensils, color: "bg-orange-100 text-orange-700" },
  { name: "Bed Sheets", icon: Bed, color: "bg-purple-100 text-purple-700" },
  { name: "Slippers", icon: Footprints, color: "bg-stone-200 text-stone-700" },
  { name: "Pomades", icon: Wind, color: "bg-teal-100 text-teal-700" },
];

export default function CategoryPulse() {
  return (
    <section className="py-16 bg-[#fdfbf7]"> {/* Warm Sand Background to balance the Green */}
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-stone-400 mb-4">
          Explore the Boutique
        </h2>
        <p className="font-serif text-3xl md:text-4xl font-bold text-[#064e3b] mb-12">
          Everything for your <span className="italic text-amber-600">Lifestyle.</span>
        </p>

        {/* Horizontal Scroll for Mobile, Grid for Desktop */}
        <div className="flex overflow-x-auto pb-8 gap-6 no-scrollbar lg:grid lg:grid-cols-4 lg:overflow-visible">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href={`https://wa.me{cat.name}%20collection.`}
              className="shrink-0 w-40 lg:w-full group bg-white p-8 rounded-[32px] border border-stone-200 hover:border-amber-500/50 transition-all hover:shadow-xl hover:shadow-amber-900/5"
            >
              <div className={`size-14 mx-auto rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${cat.color}`}>
                <cat.icon size={28} />
              </div>
              <h3 className="font-bold text-stone-800 tracking-tight">{cat.name}</h3>
              <p className="text-[10px] text-stone-400 uppercase mt-2 font-bold tracking-widest group-hover:text-amber-600 transition-colors">
                Enquire Now
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
