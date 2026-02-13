"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, ShoppingBag, Moon, Heart, User, Minus, Plus, Trash2, X } from "lucide-react"; 
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/store";
import { useWishlistStore } from "@/lib/wishlistStore"; 

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Boutique", href: "/boutique" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = React.useState(false);
  const { wishlistItems } = useWishlistStore();
  const { items, updateQuantity, removeItem, getTotalPrice, getItemCount } = useCartStore();

  React.useEffect(() => { setMounted(true); }, []);

  const wishlistCount = mounted ? wishlistItems.length : 0;
  const itemCount = mounted ? getItemCount() : 0;
  const totalPrice = mounted ? getTotalPrice() : 0;
  const cartItems = mounted ? items : [];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/90 backdrop-blur-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        
        {/* Mobile Menu & Logo Group */}
        <div className="flex items-center gap-4 lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-emerald-950 p-1"><Menu size={24} /></button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-[#fdfbf7] w-[280px]">
              <nav className="flex flex-col gap-6 mt-12">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href} className={cn("text-lg font-bold", pathname === link.href ? "text-amber-600" : "text-stone-500")}>
                    {link.name}
                  </Link>
                ))}
                <div className="pt-6 border-t border-stone-100 flex flex-col gap-3">
                  <Link href="/login"><Button variant="outline" className="w-full rounded-xl">Login</Button></Link>
                  <Link href="/signup"><Button className="w-full bg-emerald-950 rounded-xl">Sign Up</Button></Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="font-serif text-xl font-black text-emerald-950 flex items-center gap-1">
             AL-HUDA<span className="text-amber-500">.</span>
          </Link>
        </div>

        {/* Desktop Logo */}
        <Link href="/" className="hidden lg:flex items-center gap-2 font-serif text-2xl text-emerald-950 font-black tracking-tighter">
          <Moon className="text-amber-500 fill-amber-500 size-5" />
          AL-HUDA<span className="text-amber-500">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={cn("text-[11px] uppercase font-bold tracking-[0.2em] transition-all hover:text-amber-600", pathname === link.href ? "text-amber-600 border-b-2 border-amber-600 pb-1" : "text-emerald-950/70")}>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Icons & Auth */}
        <div className="flex items-center gap-2 md:gap-5">
          <button className="hidden sm:block text-emerald-950 p-2"><Search size={20} /></button>
          
          <Link href="/wishlist" className="relative text-emerald-950 p-2">
            <Heart size={20} className={cn(wishlistCount > 0 && "fill-rose-500 text-rose-500")} />
            {wishlistCount > 0 && <span className="absolute top-1 right-1 bg-rose-500 text-white text-[9px] rounded-full h-4 w-4 flex items-center justify-center font-bold">{wishlistCount}</span>}
          </Link>
          
          {/* Cart Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="bg-emerald-950 text-white p-2.5 rounded-full flex items-center gap-2 hover:bg-emerald-900 relative shadow-md">
                <ShoppingBag size={18} />
                <span className="hidden md:block text-[10px] font-bold uppercase tracking-widest">Bag</span>
                {itemCount > 0 && <span className="absolute -top-1 -right-1 bg-amber-500 text-emerald-950 text-[10px] rounded-full h-5 w-5 flex items-center justify-center font-black border-2 border-white">{itemCount}</span>}
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#fdfbf7] w-full sm:max-w-md p-0 flex flex-col">
              <SheetHeader className="p-8 bg-emerald-950 text-white"><SheetTitle className="text-white font-serif flex items-center gap-3"><ShoppingBag className="text-amber-500" /> My Shopping Bag</SheetTitle></SheetHeader>
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cartItems.map((item) => (
                  <div key={item.variantId} className="flex gap-4 p-3 bg-white rounded-2xl border border-stone-100 shadow-sm">
                    <div className="h-20 w-16 bg-stone-100 rounded-xl overflow-hidden shrink-0">
                      {/* FIX: Use a standard img tag with string-based src for better Supabase/External URL compatibility */}
                      <img src={item.image as string} className="w-full h-full object-cover" alt={item.name} />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div className="flex justify-between"><h4 className="text-xs font-black text-emerald-950">{item.name}</h4><button onClick={() => removeItem(item.variantId)}><Trash2 size={14} className="text-stone-300" /></button></div>
                      <div className="flex justify-between items-center"><p className="text-[9px] font-bold text-amber-600">SIZE: {item.size}</p><p className="font-black text-emerald-950 text-xs">₵{(item.price * item.quantity).toFixed(2)}</p></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-8 bg-white border-t space-y-4">
                <div className="flex justify-between items-center"><span className="font-serif italic text-stone-400">Total:</span><span className="font-black text-2xl text-emerald-950">₵{totalPrice.toFixed(2)}</span></div>
                <Link href="/checkout" className="block w-full"><Button className="w-full bg-emerald-950 h-14 rounded-xl font-bold">CHECKOUT</Button></Link>
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop Auth Section */}
          <div className="hidden lg:flex items-center gap-3 pl-4 border-l border-stone-200">
            <Link href="/login" className="text-[10px] font-bold uppercase tracking-widest text-emerald-950 hover:text-amber-600 transition">Login</Link>
            <Link href="/signup"><Button size="sm" className="bg-amber-500 hover:bg-amber-600 text-emerald-950 rounded-full text-[10px] font-bold px-5">JOIN</Button></Link>
          </div>
          
          {/* Mobile User Icon */}
          <Link href="/login" className="lg:hidden text-emerald-950 p-2"><User size={22} /></Link>
        </div>
      </div>
    </header>
  );
}
