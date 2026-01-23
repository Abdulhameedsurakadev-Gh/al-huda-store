"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, ShoppingBag, Moon } from "lucide-react"; 
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Boutique", href: "/boutique" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    // PAINTED: Deep Emerald background with Glassmorphism and Gold border
    <header className="sticky top-0 z-50 w-full border-b border-amber-500/20 bg-[#064e3b]/90 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo - Updated to AL-HUDA with Gold Accent */}
        <Link href="/" className="flex items-center gap-2 font-serif text-2xl text-stone-100 font-bold tracking-tight">
          <Moon className="text-amber-500 fill-amber-500 size-5" />
          AL-HUDA<span className="text-amber-500">.</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                    "font-sans text-xs uppercase tracking-[0.2em] transition-all hover:text-amber-400",
                    isActive ? "text-amber-500 font-black border-b-2 border-amber-500 pb-1" : "text-stone-300"
                    )}
                >
                    {link.name}
                </Link>
                );
            })}
        </nav>

        {/* Icons & Mobile Menu Trigger */}
        <div className="flex items-center gap-2 md:gap-4">
          <button className="text-stone-300 hover:text-amber-400 transition p-2">
            <Search className="w-5 h-5" />
          </button>
          
          <button className="text-stone-300 hover:text-amber-400 transition p-2 relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-0 right-0 bg-amber-600 text-white text-[9px] rounded-full h-4 w-4 flex items-center justify-center font-bold">0</span>
          </button>

          {/* Mobile Hamburger Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden p-2 text-stone-100 hover:text-amber-400 transition">
                <Menu className="w-7 h-7" />
              </button>
            </SheetTrigger>
            {/* PAINTED: Mobile Drawer inherits the Emerald theme */}
            <SheetContent side="right" className="bg-[#064e3b] border-l border-amber-500/30 p-6">
              <SheetTitle className="text-amber-500 font-serif text-2xl mb-8">Menu</SheetTitle>
              <div className="flex flex-col gap-8 mt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "font-sans text-xl tracking-wide transition-all block",
                      pathname === link.href ? "text-amber-500 font-bold" : "text-stone-200"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              {/* Added WhatsApp Quick Link for Mobile Drawer */}
              <div className="mt-12 pt-8 border-t border-amber-500/20">
                <p className="text-amber-500 text-sm uppercase tracking-widest font-bold mb-4">Quick Order</p>
                <a href="https://wa.me" className="text-stone-100 text-lg">Message Al-Huda</a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
