"use client";

import Link from "next/link";
import { 
  Facebook, 
  Instagram, 
  MessageCircle, 
  MapPin, 
  Phone, 
  Clock, 
  Moon,
  ArrowUpRight,
  ShieldCheck,
  Truck,
} from "lucide-react";

const footerLinks = {
  shop: [
    { name: "Eid Collection 2026", href: "/boutique" },
    { name: "Premium Oud & Scents", href: "/boutique" },
    { name: "Medina Dates & Honey", href: "/boutique" },
    { name: "Islamic Library", href: "/boutique" },
    { name: "Kitchen & Home", href: "/boutique" },
  ],
  company: [
    { name: "Our Story", href: "/about" },
    { name: "Contact Al-Huda", href: "/contact" },
    { name: "Shipping & Returns", href: "/shipping" },
    { name: "Wholesale Inquiry", href: "/contact" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const WHATSAPP_NUMBER = "233540677535"; // Your provided number

  return (
    <footer className="bg-[#052e16] text-stone-400 relative overflow-hidden">
      {/* Subtle Top Border Glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-amber-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          
          {/* COLUMN 1: Brand (Span 4) */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="group flex items-center gap-2 font-serif text-3xl text-white font-black tracking-tighter">
              <Moon className="text-amber-500 fill-amber-500 size-6 group-hover:rotate-12 transition-transform duration-500" />
              AL-HUDA<span className="text-amber-500">.</span>
            </Link>
            <p className="text-base leading-relaxed font-medium max-w-sm">
              Ghana&apos;s premier destination for spiritual elegance. We curate 
              the finest Abayas and Islamic essentials to honor your values and style.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" className="size-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-amber-500 hover:text-[#052e16] transition-all duration-500">
                <Instagram size={22} />
              </a>
              <a href={`https://wa.me${WHATSAPP_NUMBER}`} className="size-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-amber-500 hover:text-[#052e16] transition-all duration-500">
                <MessageCircle size={22} />
              </a>
              <a href="#" className="size-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-amber-500 hover:text-[#052e16] transition-all duration-500">
                <Facebook size={22} />
              </a>
            </div>
          </div>

          {/* COLUMN 2 & 3: Links (Span 2 each) */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-amber-500 font-black uppercase tracking-[0.3em] text-[10px]">Collections</h4>
            <ul className="space-y-4">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm font-bold hover:text-white flex items-center group transition-colors">
                    {link.name} 
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all ml-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-amber-500 font-black uppercase tracking-[0.3em] text-[10px]">Information</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm font-bold hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Contact (Span 4) */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-amber-500 font-black uppercase tracking-[0.3em] text-[10px]">The Boutique</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-4">
                <div className="size-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="text-amber-500 size-5" />
                </div>
                <span className="font-medium leading-relaxed">
                    Nyanano Road, Transformer, <br />
                    Near Xcober, Kasoa, Ghana
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="size-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                   <Phone className="text-amber-500 size-5" />
                </div>
                <span className="font-bold">+233 54 0677 535</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="size-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="text-amber-500 size-5" />
                </div>
                <div>
                  <p className="font-bold">Mon - Sat: 9am - 8pm</p>
                  <p className="text-amber-500/60 text-xs mt-1">Open late for Ramadan shopping</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* TRUST BADGE BAR */}
        <div className="py-8 border-y border-white/5 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-1000 mb-8">
           <div className="flex items-center gap-2"><ShieldCheck size={20} /><span className="text-[10px] font-black uppercase tracking-widest">Secure MoMo Payments</span></div>
           <div className="flex items-center gap-2"><Smartphone size={20} /><span className="text-[10px] font-black uppercase tracking-widest">Paystack Verified</span></div>
           <div className="flex items-center gap-2"><Truck size={20} /><span className="text-[10px] font-black uppercase tracking-widest">Kasoa & Nationwide Delivery</span></div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-black uppercase tracking-[0.3em] text-stone-600">
          <p>© {currentYear} Al-Huda Boutique. Made with Barakah.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-amber-500 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-amber-500 transition-colors">Terms</Link>
            <Link href="#" className="hover:text-amber-500 transition-colors">Cookies</Link>
          </div>
          <div className="flex items-center gap-1">
             <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
             <span>System Status: Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Just helper for trust bar smartphone
function Smartphone({ size, className }: { size: number, className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>
    </svg>
  );
}
