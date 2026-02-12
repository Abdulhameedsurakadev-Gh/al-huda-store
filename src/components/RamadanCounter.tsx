"use client";
import { useEffect, useState } from "react";
import { Moon, Sparkles, Timer } from "lucide-react";

export default function RamadanCounter() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0 });

  useEffect(() => {
    // Ramadan 2026 Target Date: approx Feb 18
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
    <div className="relative overflow-hidden bg-[#052e16] text-white py-2.5 px-4 shadow-2xl border-b border-amber-500/20">
      {/* Decorative Starry Background Effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com')]"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 relative z-10">
        
        {/* Left Side: Branding */}
        <div className="flex items-center gap-2">
          <Sparkles className="text-amber-400 w-4 h-4 animate-pulse hidden sm:block" />
          <p className="text-[11px] md:text-xs font-black tracking-[0.15em] uppercase text-amber-100">
            Ramadan Collection <span className="text-white opacity-60 px-1">|</span> Pre-Order Live
          </p>
        </div>

        {/* Center: The Counter (Redesigned for Mobile) */}
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="flex items-center gap-1.5">
            <Timer size={14} className="text-amber-500 hidden sm:block" />
            <div className="flex items-center gap-3">
              <TimeUnit value={timeLeft.days} label="Days" />
              <span className="text-amber-500/50 font-light text-xl">:</span>
              <TimeUnit value={timeLeft.hours} label="Hrs" />
              <span className="text-amber-500/50 font-light text-xl">:</span>
              <TimeUnit value={timeLeft.mins} label="Mins" />
            </div>
          </div>
        </div>

        {/* Right Side: CTA */}
        <a 
          href="#ramadan-shop" 
          className="group relative inline-flex items-center justify-center text-[10px] md:text-xs font-bold bg-amber-500 hover:bg-amber-400 text-[#064e3b] px-6 py-1.5 rounded-full transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)] uppercase tracking-tighter"
        >
          Explore Collection
        </a>
      </div>
    </div>
  );
}

// Small helper component to keep the code clean
function TimeUnit({ value, label }: { value: number, label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-base md:text-lg font-black text-white tabular-nums leading-none">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-[8px] uppercase font-bold text-amber-500/80 tracking-widest mt-0.5">
        {label}
      </span>
    </div>
  );
}
