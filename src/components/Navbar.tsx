"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, ShoppingBag } from "lucide-react"; // Icons for modern look
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Boutique", href: "/boutique" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-300 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="font-display text-2xl text-primary font-bold tracking-tighter">
          AL-IMAN<span className="text-accent">.</span>
        </Link>

        {/* Desktop Navigation Links (Hidden on mobile) */}
        <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                    "font-sans text-xs uppercase tracking-[0.2em] transition-colors hover:text-accent",
                    isActive ? "text-primary font-black" : "text-neutral-700"
                    )}
                >
                    {link.name}
                </Link>
                );
            })}
        </nav>

        {/* Icons & Mobile Menu Trigger */}
        <div className="flex items-center gap-4">
          <button className="text-neutral-700 hover:text-primary transition p-2">
            <Search className="w-5 h-5" />
          </button>
          
          {/* Shopping Bag Icon (Phase 1 Placeholder) */}
          <button className="text-neutral-700 hover:text-primary transition p-2 relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-danger text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">0</span>
          </button>

          {/* Mobile Hamburger Menu (Visible on mobile) */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden p-2 text-neutral-700 hover:text-primary transition">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white p-6">
              <div className="flex flex-col gap-6 mt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="font-sans text-lg text-neutral-700 hover:text-primary transition block"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
