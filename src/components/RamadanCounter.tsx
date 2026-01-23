"use client";
import { useEffect, useState } from "react";
import { Moon, Sparkles } from "lucide-react";

export default function RamadanCounter() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0 });

  useEffect(() => {
    // Ramadan 2026 Target Date
    const target = new Date("2026-02-18T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        });
      }
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#064e3b] text-white py-3 px-4 shadow-lg border-b border-amber-500/30">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
        <Moon size={80} className="rotate-12 translate-x-4 -translate-y-4" />
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Left Side: Branding/Urgency */}
        <div className="flex items-center gap-2">
          <div className="bg-amber-500/20 p-1.5 rounded-full animate-pulse">
            <Sparkles className="text-amber-400 w-4 h-4 md:w-5 md:h-5" />
          </div>
          <p className="text-sm md:text-base font-semibold tracking-wide">
            AL-HUDA RAMADAN PRE-ORDERS
          </p>
        </div>

        {/* Center: The Counter */}
        <div className="flex items-center gap-4 bg-black/20 px-4 py-1.5 rounded-2xl border border-white/10">
          <div className="text-center">
            <span className="block text-lg md:text-xl font-bold text-amber-400 leading-none">{timeLeft.days}</span>
            <span className="text-[10px] uppercase opacity-80 tracking-tighter">Days</span>
          </div>
          <div className="text-amber-500 font-bold">:</div>
          <div className="text-center">
            <span className="block text-lg md:text-xl font-bold text-amber-400 leading-none">{timeLeft.hours}</span>
            <span className="text-[10px] uppercase opacity-80 tracking-tighter">Hours</span>
          </div>
          <div className="text-amber-500 font-bold">:</div>
          <div className="text-center">
            <span className="block text-lg md:text-xl font-bold text-amber-400 leading-none">{timeLeft.mins}</span>
            <span className="text-[10px] uppercase opacity-80 tracking-tighter">Mins</span>
          </div>
        </div>

        {/* Right Side: CTA */}
        <a 
          href="#ramadan-shop" 
          className="text-xs md:text-sm font-bold bg-amber-500 hover:bg-amber-600 text-[#064e3b] px-5 py-2 rounded-full transition-all transform hover:scale-105 shadow-md uppercase tracking-wider"
        >
          Shop Iftar Essentials
        </a>
      </div>
    </div>
  );
}
