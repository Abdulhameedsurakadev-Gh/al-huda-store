"use client";

import { MessageSquare, BadgeCheck, Truck, ArrowRight, Sparkles, Smartphone } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Select & Bag",
    description: "Browse our boutique and add your favorites to your shopping bag. It's seamless and secure.",
    icon: Smartphone,
  },
  {
    id: "02",
    title: "Checkout via MoMo",
    description: "Pay securely with Mobile Money or Card via Paystack. We'll confirm your order instantly.",
    icon: BadgeCheck,
  },
  {
    id: "03",
    title: "Nationwide Delivery",
    description: "Your Al-Huda package is dispatched to Kasoa, Accra, or anywhere in Ghana. Fast & tracked.",
    icon: Truck,
  }
];

export default function OrderGuide() {
  const WHATSAPP_NUMBER = "233XXXXXXXXX"; // Replace with your number

  return (
    <section className="py-32 bg-[#fdfbf7] relative overflow-hidden border-t border-stone-100">
      {/* Background Aesthetic */}
      <div className="absolute -right-20 top-20 text-[12rem] font-black text-stone-200/20 select-none hidden lg:block rotate-90 italic">
        AL-HUDA
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-amber-500"></span>
            <h2 className="text-amber-600 font-black uppercase tracking-[0.4em] text-[10px]">
              The Shopping Experience
            </h2>
          </div>
          <p className="font-serif text-4xl md:text-6xl text-[#064e3b] font-bold leading-[1.1]">
            Elegance delivered <br />
            <span className="italic font-normal text-stone-400">straight to your door.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {steps.map((step) => (
            <div key={step.id} className="group relative">
              {/* Vertical Connector Line for Desktop */}
              <div className="hidden md:block absolute top-10 left-full w-full h-px bg-stone-200 z-0 last:hidden">
                 <div className="h-full bg-amber-500 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>

              <div className="relative z-10 flex flex-col items-start">
                {/* Step Icon with Number Badge */}
                <div className="relative mb-10">
                  <div className="size-20 bg-white rounded-[2rem] border border-stone-100 flex items-center justify-center shadow-sm group-hover:shadow-2xl group-hover:border-amber-500/30 group-hover:-translate-y-2 transition-all duration-500">
                    <step.icon className="text-[#064e3b] group-hover:text-amber-600 transition-colors" size={32} />
                  </div>
                  <div className="absolute -top-3 -right-3 size-8 bg-amber-500 rounded-full flex items-center justify-center text-[#064e3b] font-black text-xs shadow-lg border-4 border-[#fdfbf7]">
                    {step.id}
                  </div>
                </div>
                
                <h3 className="text-xl font-black text-[#064e3b] mb-4 tracking-tight uppercase">
                  {step.title}
                </h3>
                
                <p className="text-stone-500 leading-relaxed text-sm font-medium">
                  {step.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-amber-600 font-black text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                  Customer Support <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Call-to-Action Bar */}
        <div className="mt-32 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[#064e3b] rounded-[3rem] transition-transform duration-500 group-hover:scale-[1.02]"></div>
          
          <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full">
                <Sparkles className="text-amber-400 size-4" />
                <span className="text-amber-100 text-[10px] font-bold uppercase tracking-widest">Available 24/7</span>
              </div>
              <h4 className="text-white text-3xl md:text-4xl font-serif font-bold italic leading-tight">
                Need help with your <br />Ramadan collection?
              </h4>
              <p className="text-emerald-200/60 text-sm max-w-sm font-medium">
                Our advisors are online to assist you with sizing, styling, and nationwide delivery details.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a 
                href={`https://wa.me{WHATSAPP_NUMBER}`} 
                className="bg-amber-500 hover:bg-amber-400 text-[#064e3b] px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-emerald-950/20 flex items-center justify-center gap-3 active:scale-95"
              >
                <MessageSquare size={18} className="fill-current" />
                Chat with Hajia
              </a>
            </div>
          </div>

          {/* Decorative Pattern Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com')]"></div>
        </div>
      </div>
    </section>
  );
}
