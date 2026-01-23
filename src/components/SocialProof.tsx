"use client";

import { Star, Quote, CheckCircle2, Instagram } from "lucide-react";

const testimonials = [
  {
    name: "Amina K.",
    location: "Kasoa, Central",
    text: "The Eid dress I ordered is stunning! The fabric quality is better than the photos. Delivery to Transformer was so quick.",
    tag: "Verified Buyer"
  },
  {
    name: "Brother Ishmael",
    location: "Accra New Town",
    text: "Ordered the Ramadan Dates and some Oud. The packaging was very professional. Al-Huda is now my go-to for spiritual essentials.",
    tag: "Regular Client"
  },
  {
    name: "Fatima B.",
    location: "Kasoa Estate",
    text: "Fastest WhatsApp response I've ever had in Ghana. They helped me pick the right jewelry for my sister's wedding.",
    tag: "Verified Buyer"
  }
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-[#fdfbf7] border-y border-amber-500/10">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4 text-amber-600">
              <Star size={16} className="fill-amber-600" />
              <Star size={16} className="fill-amber-600" />
              <Star size={16} className="fill-amber-600" />
              <Star size={16} className="fill-amber-600" />
              <Star size={16} className="fill-amber-600" />
              <span className="text-xs font-bold uppercase tracking-widest ml-2">Trusted by 500+ Customers</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#064e3b] font-bold">
              Loved by our <br />
              <span className="italic text-amber-600">Community.</span>
            </h2>
          </div>
          
          <div className="hidden lg:flex items-center gap-4 bg-white p-4 rounded-2xl border border-stone-200 shadow-sm">
            <div className="bg-gradient-to-tr from-purple-500 to-pink-500 p-2 rounded-xl text-white">
              <Instagram size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-stone-800 tracking-tight">Follow us on IG</p>
              <p className="text-[10px] text-stone-400 uppercase font-bold">@AlHudaBoutique</p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="bg-white p-8 rounded-[32px] border border-stone-100 shadow-xl shadow-stone-200/40 relative group hover:-translate-y-2 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-8 text-amber-500/10 size-12 group-hover:text-amber-500/20 transition-colors" />
              
              <div className="flex items-center gap-1 mb-4 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-current" />
                ))}
              </div>

              <p className="text-stone-600 italic leading-relaxed mb-8 relative z-10">
                &quot{t.text}
              </p>

              <div className="flex items-center justify-between border-t border-stone-50 pt-6">
                <div>
                  <h4 className="font-bold text-emerald-950 text-sm">{t.name}</h4>
                  <p className="text-[10px] text-stone-400 uppercase tracking-widest font-semibold">{t.location}</p>
                </div>
                <div className="flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded-full">
                  <CheckCircle2 size={10} className="text-emerald-600" />
                  <span className="text-[9px] font-bold text-emerald-700 uppercase">{t.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Local Kasoa Trust Badge */}
        <div className="mt-16 text-center">
            <p className="text-stone-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">Official Retailer</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-40 grayscale contrast-125">
               {/* Replace with small local partner logos or text icons */}
               <span className="font-black text-xl tracking-tighter italic">KASOA DELIVERIES</span>
               <span className="font-black text-xl tracking-tighter italic">ACCRA HUB</span>
               <span className="font-black text-xl tracking-tighter italic">EID ESSENTIALS</span>
            </div>
        </div>
      </div>
    </section>
  );
}
