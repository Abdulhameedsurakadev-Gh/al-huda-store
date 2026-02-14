"use client";

import { Star, Quote, CheckCircle2, Instagram, Award, Heart } from "lucide-react";

const testimonials = [
  {
    name: "Amina K.",
    location: "Kasoa, Central",
    text: "The Eid dress I ordered is stunning! The fabric quality is better than the photos. Delivery to Transformer was so quick.",
    tag: "Verified Order"
  },
  {
    name: "Brother Ishmael",
    location: "Accra New Town",
    text: "Ordered the Ramadan Dates and some Oud. The packaging was very professional. Al-Huda is now my go-to for spiritual essentials.",
    tag: "Elite Member"
  },
  {
    name: "Fatima B.",
    location: "Kasoa Estate",
    text: "Fastest WhatsApp response I've ever had in Ghana. They helped me pick the right jewelry for my sister's wedding.",
    tag: "Verified Order"
  }
];

export default function SocialProof() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Decorative Branding Watermark */}
      <div className="absolute -left-10 bottom-10 text-[10rem] font-black text-stone-50 select-none hidden lg:block italic">
        FAITH
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header: Centered for a more balanced "Luxury" feel */}
        <div className="max-w-3xl mx-auto text-center mb-24 space-y-6">
          <div className="flex items-center justify-center gap-3">
             <div className="h-px w-8 bg-amber-500/30"></div>
             <span className="text-amber-600 font-black uppercase tracking-[0.4em] text-[10px]">
               The Al-Huda Testimony
             </span>
             <div className="h-px w-8 bg-amber-500/30"></div>
          </div>
          
          <h2 className="font-serif text-4xl md:text-6xl text-[#064e3b] font-bold leading-tight">
            Trusted by the <br />
            <span className="italic font-normal text-stone-400">Pious Community.</span>
          </h2>

          <div className="flex items-center justify-center gap-4 pt-4">
             <div className="flex items-center -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="size-8 rounded-full border-2 border-white bg-stone-100 flex items-center justify-center overflow-hidden">
                     <div className="bg-emerald-900 size-full flex items-center justify-center text-[10px] text-white font-bold">
                        {String.fromCharCode(64 + i)}
                     </div>
                  </div>
                ))}
             </div>
             <p className="text-xs font-black text-emerald-950 uppercase tracking-widest">
                500+ Happy Hearts in Ghana
             </p>
          </div>
        </div>

        {/* Testimonials: Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="group relative bg-[#fdfbf7] p-10 rounded-[3rem] border border-stone-100 transition-all duration-500 hover:bg-[#064e3b] hover:shadow-2xl hover:shadow-emerald-900/20"
            >
              {/* Luxury Quote Icon */}
              <div className="mb-8">
                <Quote className="text-amber-500 size-10 group-hover:text-white transition-colors duration-500" />
              </div>
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} className="fill-amber-500 text-amber-500" />
                ))}
              </div>

              <blockquote className="text-emerald-950 text-lg font-serif italic leading-relaxed mb-10 group-hover:text-white transition-colors duration-500">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between pt-6 border-t border-stone-200/50 group-hover:border-white/10 transition-colors">
                <div className="space-y-1">
                  <h4 className="font-black text-[#064e3b] text-xs uppercase tracking-widest group-hover:text-white">
                    {t.name}
                  </h4>
                  <p className="text-[9px] text-stone-400 font-bold group-hover:text-emerald-200/50">
                    {t.location}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 bg-white group-hover:bg-amber-500 px-3 py-1.5 rounded-full shadow-sm transition-all duration-500">
                  <CheckCircle2 size={12} className="text-emerald-600 group-hover:text-emerald-950" />
                  <span className="text-[8px] font-black text-emerald-950 uppercase tracking-tighter">
                    {t.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Action & Trust */}
        <div className="mt-24 pt-16 border-t border-stone-100 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700 overflow-x-auto no-scrollbar w-full md:w-auto px-4">
               <span className="text-sm font-black tracking-[0.3em] uppercase whitespace-nowrap">Nationwide Shipping</span>
               <span className="text-sm font-black tracking-[0.3em] uppercase whitespace-nowrap">Secure Paystack</span>
               <span className="text-sm font-black tracking-[0.3em] uppercase whitespace-nowrap">Authentic Oud</span>
            </div>

            <a 
              href="https://instagram.com" 
              target="_blank"
              className="flex items-center gap-4 bg-emerald-950 text-white px-8 py-4 rounded-2xl hover:bg-emerald-900 transition-all shadow-xl active:scale-95"
            >
              <Instagram size={20} className="text-amber-500" />
              <div className="text-left">
                <p className="text-[10px] font-black uppercase tracking-widest leading-none">Our Lifestyle</p>
                <p className="text-xs font-bold text-amber-500 mt-1">@AlHudaBoutique</p>
              </div>
            </a>
        </div>
      </div>
    </section>
  );
}
