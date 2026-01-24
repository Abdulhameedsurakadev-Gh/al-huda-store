"use client";

import { Heart, ShieldCheck, Truck, Users } from "lucide-react";
// import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-[#fdfbf7]">
      {/* Header Section */}
      <section className="py-20 bg-[#064e3b] text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-100 mb-6">
            The Story of <span className="text-amber-500 italic">Al-Huda.</span>
          </h1>
          <p className="text-stone-300 max-w-2xl mx-auto text-lg leading-relaxed">
            More than just a boutique—a destination for the faithful, 
            nestled in the heart of Kasoa, Ghana.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square bg-stone-200 rounded-[40px] overflow-hidden border border-amber-500/20 shadow-2xl">
             {/* Placeholder for a photo of the store front or the owner */}
             <div className="absolute inset-0 flex items-center justify-center text-stone-400 font-serif italic p-12 text-center">
               Capturing the essence of Al-Huda Store at Nyanyano Road...
             </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#064e3b]">
              Bridging Tradition <br /> 
              <span className="text-amber-600">& Modern Elegance.</span>
            </h2>
            <p className="text-stone-600 leading-relaxed text-lg">
              Founded with a passion for excellence, Al-Huda Store was established to provide the Muslim community in Kasoa and across Ghana with premium Islamic essentials.
            </p>
            <p className="text-stone-600 leading-relaxed text-lg">
              From the delicate scents of our Ouds to the intricate designs of our Eid dresses, every item is hand-selected to ensure it meets our high standards of modesty and quality.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-100 rounded-lg text-emerald-700">
                  <ShieldCheck size={20} />
                </div>
                <span className="font-bold text-sm text-emerald-950">100% Authentic</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-100 rounded-lg text-amber-700">
                  <Heart size={20} />
                </div>
                <span className="font-bold text-sm text-emerald-950">Community Focused</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values - Grid */}
      <section className="py-20 bg-white border-y border-stone-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-amber-600 font-bold uppercase tracking-[0.2em] text-xs mb-2">Our Values</h3>
            <p className="text-3xl font-serif font-bold text-[#064e3b]">What We Stand For</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: "Quality First", 
                desc: "Whether it is a cooking utensil or a bridal package, we never compromise on durability and finish.",
                icon: ShieldCheck 
              },
              { 
                title: "Personal Service", 
                desc: "Our WhatsApp-first approach ensures you get the personal attention you deserve for your specific needs.",
                icon: Users 
              },
              { 
                title: "Swift Delivery", 
                desc: "We prioritize getting your Ramadan and Eid essentials to you quickly, wherever you are in Ghana.",
                icon: Truck 
              }
            ].map((value, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="size-16 mx-auto bg-[#fdfbf7] rounded-2xl flex items-center justify-center border border-amber-500/10 text-amber-600">
                  <value.icon size={32} />
                </div>
                <h4 className="text-xl font-bold text-emerald-950">{value.title}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
