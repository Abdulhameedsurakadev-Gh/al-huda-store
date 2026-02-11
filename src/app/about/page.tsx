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

      {/* Founder & Community Trust Section */}
      <section className="py-20 bg-stone-50 border-y border-stone-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left side: Founder Image & Stats */}
            <div className="lg:col-span-5 space-y-8">
              <div className="relative group">
                <div className="absolute -inset-4 bg-amber-500/10 rounded-[2rem] blur-2xl group-hover:bg-amber-500/20 transition-all"></div>
                <div className="relative aspect-[4/5] bg-stone-200 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
                  {/* Replace with a real photo of Hajia at the Nyanyano Road shop */}
                  <div className="absolute inset-0 flex items-center justify-center text-stone-400 italic text-center p-8">
                    Hajia [Name] <br /> at Al-Huda Store
                  </div>
                </div>
              </div>

              {/* Local Trust Counters */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 text-center">
                  <p className="text-3xl font-bold text-[#064e3b]">500+</p>
                  <p className="text-xs text-stone-500 uppercase tracking-widest font-semibold">Sisters Served</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 text-center">
                  <p className="text-3xl font-bold text-amber-600">100%</p>
                  <p className="text-xs text-stone-500 uppercase tracking-widest font-semibold">Authentic Ouds</p>
                </div>
              </div>
            </div>

            {/* Right side: The Founder's Voice */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold uppercase tracking-widest">
                Meet the Founder
              </div>
              
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#064e3b] leading-tight">
                "Our faith is our beauty. <br /> 
                I built Al-Huda to <span className="text-amber-600">honor that.</span>"
              </h2>

              <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
                <p>
                  Assalamu Alaikum. I started Al-Huda Store with a simple vision: to ensure that the sisters in Kasoa never have to compromise between their modesty and their elegance.
                </p>
                <p>
                  What began as a small collection of prayer mats and ouds has grown into a destination for the faithful. Whether you visit us at <strong>Nyanyano Road</strong> or order online, my promise remains the same—personal attention, quality you can feel, and service rooted in our shared values.
                </p>
              </div>

              <div className="pt-6 border-t border-stone-200">
                <p className="font-serif text-3xl text-amber-700 italic">Hajia [Name]</p>
                <p className="text-stone-500 font-medium">Founder of Al-Huda Store</p>
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

      {/* Final Call to Action Section */}
      <section className="py-16 md:py-24 bg-[#064e3b] relative overflow-hidden">
        {/* Decorative background glows - hidden on very small screens to save performance */}
        <div className="hidden sm:block absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          {/* Responsive Typography: Smaller on mobile, larger on desktop */}
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-100 mb-6 leading-tight">
            Ready to Find Your <br className="hidden sm:block" />
            <span className="text-amber-500 italic">Perfect Essential?</span>
          </h2>
          
          <p className="text-stone-300 max-w-xl mx-auto mb-10 text-base md:text-lg leading-relaxed">
            Whether you are preparing for Ramadan, a wedding, or looking for a signature scent, we are here to help you choose with excellence.
          </p>

          {/* Button Group: Stacks on mobile (flex-col), Rows on desktop (sm:flex-row) */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-emerald-950 font-bold py-4 px-10 rounded-xl sm:rounded-full transition-all active:scale-95 shadow-lg text-center">
              Browse Collection
            </button>

            {/* Optimized WhatsApp Link for Mobile App Triggering */}
            <a 
              href="https://wa.me" // Replace with Hajia's Ghana number
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-green-600 text-white font-bold py-4 px-10 rounded-xl sm:rounded-full flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg border border-white/10"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat with Hajia
            </a>
          </div>
          
          <p className="mt-8 text-stone-400 text-[10px] md:text-xs uppercase tracking-[0.2em]">
            Nyanyano Road, Kasoa • Open Mon-Sat
          </p>
        </div>
      </section>
    </main>
  );
}
