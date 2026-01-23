"use client";

import { MapPin, Phone, MessageSquare, Clock, ArrowRight } from "lucide-react";

export default function ContactGuide() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-[#064e3b] rounded-[40px] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* Left Side: The "Guide" Info */}
          <div className="flex-1 p-8 md:p-16 space-y-10">
            <div>
              <h2 className="text-amber-500 font-bold uppercase tracking-[0.2em] text-xs mb-4">
                Visit or Message Us
              </h2>
              <p className="font-serif text-3xl md:text-5xl text-stone-100 font-bold">
                We&apos;re easy to <span className="italic text-amber-500">Find.</span>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Location */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-amber-500">
                  <MapPin size={20} />
                  <span className="font-bold text-xs uppercase tracking-widest">Our Location</span>
                </div>
                <p className="text-stone-300 text-sm leading-relaxed">
                  Nyanyano Road, Transformer, <br />
                  Near Xcober, Kasoa, <br />
                  Central Region, Ghana
                </p>
              </div>

              {/* Timing */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-amber-500">
                  <Clock size={20} />
                  <span className="font-bold text-xs uppercase tracking-widest">Store Hours</span>
                </div>
                <p className="text-stone-300 text-sm leading-relaxed">
                  Mon - Sat: 9:00 AM - 8:00 PM <br />
                  <span className="text-amber-500/80 font-medium italic">Open late during Ramadan</span>
                </p>
              </div>

              {/* Direct Call */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-amber-500">
                  <Phone size={20} />
                  <span className="font-bold text-xs uppercase tracking-widest">Call Us</span>
                </div>
                <a href="tel:+233XXXXXXXXX" className="text-stone-100 text-lg font-bold hover:text-amber-500 transition-colors">
                  +233 (0) XX XXX XXXX
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: The WhatsApp CTA Card */}
          <div className="lg:w-[400px] bg-amber-500 p-8 md:p-12 flex flex-col justify-center items-center text-center space-y-6">
            <div className="bg-[#064e3b] p-4 rounded-2xl shadow-lg animate-bounce">
              <MessageSquare className="text-amber-500" size={32} />
            </div>
            <h3 className="text-[#064e3b] font-serif text-3xl font-bold italic">Quick Shop</h3>
            <p className="text-[#064e3b]/80 font-medium">
              Want to see the latest Eid dresses or Ramadan dates? Chat with us live!
            </p>
            <a 
              href="https://wa.me."
              className="w-full bg-[#064e3b] text-stone-100 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-xl"
            >
              Message Al-Huda <ArrowRight size={18} />
            </a>
            <p className="text-[10px] text-[#064e3b]/60 uppercase font-black tracking-tighter">
              Usually responds in 5 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
