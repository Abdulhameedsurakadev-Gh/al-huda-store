"use client";

import { MessageSquare, BadgeCheck, Truck, ArrowRight } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Browse & Select",
    description: "Explore our collection and click the WhatsApp button on any item you love to start a chat.",
    icon: MessageSquare,
    color: "text-emerald-700",
    bg: "bg-emerald-100"
  },
  {
    id: "02",
    title: "Confirm & Customize",
    description: "We will confirm sizes, colors, and availability with you directly on WhatsApp. Quick & personal.",
    icon: BadgeCheck,
    color: "text-amber-700",
    bg: "bg-amber-100"
  },
  {
    id: "03",
    title: "Delivery to Your Door",
    description: "Your package is dispatched to Kasoa, Accra, or anywhere in Ghana. Reliable and fast.",
    icon: Truck,
    color: "text-stone-700",
    bg: "bg-stone-200"
  }
];

export default function OrderGuide() {
  return (
    <section className="py-24 bg-[#fdfbf7] relative overflow-hidden">
      {/* Subtle background text for design depth */}
      <div className="absolute top-10 left-10 text-9xl font-black text-stone-200/40 select-none hidden lg:block">
        AL-HUDA
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <h2 className="text-amber-600 font-bold uppercase tracking-[0.3em] text-xs mb-4">
            How it Works
          </h2>
          <p className="font-serif text-4xl md:text-5xl text-[#064e3b] font-bold leading-tight">
            Shopping with us is <br />
            <span className="italic text-amber-600 underline decoration-amber-500/30 underline-offset-8">as easy as a chat.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step) => (
            <div key={step.id} className="group relative">
              {/* Step Number Display */}
              <div className="text-6xl font-black text-stone-200 group-hover:text-amber-500/10 transition-colors duration-500 absolute -top-10 -left-4 z-0">
                {step.id}
              </div>

              <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
                <div className={`size-20 ${step.bg} rounded-3xl flex items-center justify-center mb-8 shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300`}>
                  <step.icon className={step.color} size={36} />
                </div>
                
                <h3 className="text-2xl font-bold text-emerald-950 mb-4 tracking-tight">
                  {step.title}
                </h3>
                
                <p className="text-stone-500 leading-relaxed text-sm md:text-base">
                  {step.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-amber-600 font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Responsive CTA Bridge */}
        <div className="mt-20 p-8 rounded-[40px] bg-[#064e3b] text-center flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-left">
            <h4 className="text-stone-100 text-xl font-bold">Ready to start your Ramadan prep?</h4>
            <p className="text-stone-400 text-sm">We are online and ready to assist you now.</p>
          </div>
          <a 
            href="https://wa.me" 
            className="bg-amber-500 hover:bg-amber-600 text-[#064e3b] px-10 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-amber-900/20"
          >
            Start Chatting
          </a>
        </div>
      </div>
    </section>
  );
}
