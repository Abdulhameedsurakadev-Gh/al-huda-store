"use client";

import { MessageSquare, MapPin, Clock, Send, Phone, Instagram } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-[#fdfbf7] min-h-screen pb-12">
      {/* Header - Scaled for Mobile */}
      <section className="py-12 md:py-20 bg-[#064e3b] text-center px-6">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-stone-100 mb-3">
          Contact Al-Huda
        </h1>
        <p className="text-stone-300 text-sm md:text-lg max-w-xl mx-auto leading-relaxed">
          We’re here to help our sisters in Kasoa and beyond. Reach out for styling or orders.
        </p>
      </section>

      {/* Main Content - Stacks on Mobile, Side-by-Side on Desktop */}
      <section className="container mx-auto px-4 -mt-8 md:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
          
          {/* Quick Action Cards - First thing a mobile user sees */}
          <div className="space-y-4 order-2 lg:order-1">
            <h2 className="text-xl font-serif font-bold text-[#064e3b] px-2 mb-4 md:text-2xl">
              Quick Connect
            </h2>
            
            {/* WhatsApp - Full width on mobile, giant touch target */}
            <a 
              href="https://wa.me" 
              className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-stone-100 active:scale-[0.98] transition-transform"
            >
              <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl">
                <MessageSquare size={28} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-emerald-950 text-base">Chat on WhatsApp</h4>
                <p className="text-stone-500 text-xs">Fastest way to ask about stock</p>
              </div>
            </a>

            {/* Call Directly */}
            <a 
              href="tel:+233XXXXXXXXX" 
              className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-stone-100 active:scale-[0.98] transition-transform"
            >
              <div className="p-3 bg-amber-100 text-amber-700 rounded-xl">
                <Phone size={28} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-emerald-950 text-base">Call Hajia</h4>
                <p className="text-stone-500 text-xs">For urgent bridal inquiries</p>
              </div>
            </a>

            {/* Location & Hours - Simple & Clear */}
            <div className="p-6 bg-emerald-950 text-stone-100 rounded-[2rem] space-y-4 shadow-xl">
              <div className="flex items-start gap-4">
                <MapPin className="text-amber-500 shrink-0" size={24} />
                <div>
                  <p className="font-bold">Boutique Location</p>
                  <p className="text-stone-300 text-sm">Nyanyano Road, Near [Landmark], Kasoa</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-amber-500 shrink-0" size={24} />
                <div>
                  <p className="font-bold">Opening Hours</p>
                  <p className="text-stone-300 text-sm">Mon-Sat: 9am - 7pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Mobile Optimized Inputs */}
          <div className="bg-white p-6 md:p-10 rounded-[2rem] shadow-xl border border-stone-100 order-1 lg:order-2">
            <h3 className="text-xl font-serif font-bold text-[#064e3b] mb-6 md:text-2xl">Send a Message</h3>
            <form className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 ml-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl p-4 text-base focus:ring-2 focus:ring-amber-500 outline-none transition-all" 
                  placeholder="Hajia Fatimah" 
                />
              </div>
              
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 ml-1">Phone (WhatsApp)</label>
                <input 
                  type="tel" 
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl p-4 text-base focus:ring-2 focus:ring-amber-500 outline-none transition-all" 
                  placeholder="024 XXX XXXX" 
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 ml-1">Your Message</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl p-4 text-base focus:ring-2 focus:ring-amber-500 outline-none transition-all" 
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button className="w-full bg-amber-500 hover:bg-amber-600 text-emerald-950 font-black py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 active:scale-[0.97] transition-all">
                <Send size={18} />
                SEND MESSAGE
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}
