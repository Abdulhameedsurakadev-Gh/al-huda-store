"use client";

import Link from "next/link";
import { 
  Facebook, 
  Instagram, 
  MessageCircle, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Moon,
  ArrowUpRight
} from "lucide-react";

const footerLinks = {
  shop: [
    { name: "Eid Dresses", href: "/boutique" },
    { name: "Perfumes & Oud", href: "/boutique" },
    { name: "Ramadan Dates", href: "/boutique" },
    { name: "Islamic Books", href: "/boutique" },
    { name: "Cooking Utensils", href: "/boutique" },
  ],
  company: [
    { name: "About Al-Huda", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Shipping Policy", href: "/shipping" },
    { name: "How to Order", href: "/how-to-order" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#022c22] text-stone-300 border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLUMN 1: Brand & Bio */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 font-serif text-2xl text-stone-100 font-bold tracking-tight">
              <Moon className="text-amber-500 fill-amber-500 size-5" />
              AL-HUDA<span className="text-amber-500">.</span>
            </Link>
            <p className="text-sm leading-relaxed text-stone-400">
              Your premier boutique for spiritual elegance. Specializing in curated 
              Eid fashion, Iftar essentials, and authentic Islamic lifestyle products in Ghana.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-amber-500/20 hover:text-amber-500 transition-all">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-amber-500/20 hover:text-amber-500 transition-all">
                <Facebook size={20} />
              </Link>
              <Link href="https://wa.me" className="p-2 bg-white/5 rounded-full hover:bg-amber-500/20 hover:text-amber-500 transition-all">
                <MessageCircle size={20} />
              </Link>
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div>
            <h4 className="text-stone-100 font-bold uppercase tracking-widest text-xs mb-6">Shop Collections</h4>
            <ul className="space-y-4">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-amber-500 flex items-center group">
                    {link.name} 
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all ml-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Company */}
          <div>
            <h4 className="text-stone-100 font-bold uppercase tracking-widest text-xs mb-6">Information</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-amber-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Contact & Location */}
          <div className="space-y-6">
            <h4 className="text-stone-100 font-bold uppercase tracking-widest text-xs mb-6">Visit Our Store</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-amber-500 size-5 shrink-0" />
                <span>Nima Main Highway, Near the Central Mosque, Accra, Ghana</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-amber-500 size-5 shrink-0" />
                <span>+233 (0) XX XXX XXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-amber-500 size-5 shrink-0" />
                <span>salam@alhudastore.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-amber-500 size-5 shrink-0" />
                <div>
                  <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-amber-500 font-semibold mt-1 text-xs">Extended hours during Ramadan</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR: Copyright & Compliance */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500">
          <p>© {currentYear} Al-Huda Boutique. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-stone-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-stone-300">Terms of Service</Link>
          </div>
          <p className="text-stone-600">Designed for 2026 Season</p>
        </div>
      </div>
    </footer>
  );
}
