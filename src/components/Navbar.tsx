"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, ShoppingBag, Moon, Heart, UserCircle2, Minus, Plus, Trash2, X } from "lucide-react"; 
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
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/80 backdrop-blur-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        
        {/* Mobile Menu (Left) */}
        <div className="lg:hidden flex-1">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-emerald-950 p-2 hover:bg-stone-100 rounded-full transition">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-[#fdfbf7] w-[300px] border-r border-amber-500/20">
               <SheetHeader className="pb-8 border-b border-stone-100">
                <SheetTitle className="text-left font-serif text-2xl text-emerald-950">AL-HUDA</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href} className={cn("text-lg font-bold transition-all", pathname === link.href ? "text-amber-600 translate-x-2" : "text-stone-500")}>
                    {link.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo (Center on Mobile, Left on Desktop) */}
        <div className="flex-1 lg:flex-none flex justify-center lg:justify-start">
          <Link href="/" className="group flex items-center gap-2 font-serif text-xl md:text-2xl text-emerald-950 font-black tracking-tighter">
            <Moon className="text-amber-500 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 fill-amber-500 size-5" />
            AL-HUDA<span className="text-amber-500">.</span>
          </Link>
        </div>

        {/* Desktop Navigation (Center) */}
        <nav className="hidden lg:flex flex-1 justify-center items-center gap-10">
            {navLinks.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                    "font-sans text-[11px] uppercase font-bold tracking-[0.2em] transition-all hover:text-amber-600",
                    pathname === link.href ? "text-amber-600 border-b-2 border-amber-600 pb-1" : "text-emerald-950/70"
                    )}
                >
                    {link.name}
                </Link>
            ))}
        </nav>

        {/* Actions (Right) */}
        <div className="flex-1 flex justify-end items-center gap-1 sm:gap-4">
          
          <button className="hidden sm:flex text-emerald-950 hover:bg-stone-100 p-2.5 rounded-full transition">
            <Search size={20} />
          </button>
          
          <Link href="/wishlist" className="text-emerald-950 hover:bg-stone-100 p-2.5 rounded-full transition relative">
            <Heart size={20} className={cn(wishlistCount > 0 && "fill-rose-500 text-rose-500")} />
            {wishlistCount > 0 && (
              <span className="absolute top-1.5 right-1.5 bg-rose-500 text-white text-[9px] rounded-full h-4 w-4 flex items-center justify-center font-black animate-bounce">
                {wishlistCount}
              </span>
            )}
          </Link>
          
          <Sheet>
            <SheetTrigger asChild>
              <button className="bg-emerald-950 text-white p-2.5 sm:px-4 rounded-full flex items-center gap-2 hover:bg-emerald-900 transition relative shadow-lg">
                <ShoppingBag size={20} />
                <span className="hidden sm:block text-xs font-bold uppercase tracking-widest">Bag</span>
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-500 text-emerald-950 text-[10px] rounded-full h-5 w-5 flex items-center justify-center font-black border-2 border-white">
                    {itemCount}
                  </span>
                )}
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#fdfbf7] w-full sm:max-w-md flex flex-col p-0 border-l border-amber-500/20">
              <SheetHeader className="p-8 bg-emerald-950 text-white">
                <SheetTitle className="text-white font-serif text-2xl flex items-center gap-3">
                  <ShoppingBag className="text-amber-500" /> My Shopping Bag
                </SheetTitle>
              </SheetHeader>

              <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar bg-[url('https://www.transparenttextures.com')]">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                    <div className="w-24 h-24 bg-stone-100 rounded-full flex items-center justify-center text-stone-300">
                      <ShoppingBag size={48} />
                    </div>
                    <div>
                      <p className="text-emerald-950 font-serif text-xl italic font-bold">Your bag is lonely</p>
                      <p className="text-stone-500 text-sm mt-2">Find your perfect Ramadan look in our boutique.</p>
                    </div>
                    <Link href="/boutique"><Button className="bg-amber-500 text-emerald-950 font-bold px-8 rounded-xl h-12">Start Shopping</Button></Link>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div key={item.variantId} className="group relative flex gap-4 p-4 bg-white rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="h-24 w-20 bg-stone-100 rounded-2xl overflow-hidden shrink-0">
                        <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={item.name} />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-sm font-black text-emerald-950 line-clamp-1">{item.name}</h4>
                            <p className="text-[10px] text-amber-600 font-bold uppercase tracking-tighter mt-0.5">Size: {item.size}</p>
                          </div>
                          <button onClick={() => removeItem(item.variantId)} className="p-1 text-stone-300 hover:text-rose-500 transition"><Trash2 size={16}/></button>
                        </div>
                        <div className="flex justify-between items-end mt-4">
                          <div className="flex items-center gap-3 bg-stone-50 rounded-full px-3 py-1 border border-stone-100">
                            <button onClick={() => updateQuantity(item.variantId, item.quantity - 1)} className="text-emerald-950 hover:text-amber-600"><Minus size={14}/></button>
                            <span className="text-sm font-black text-emerald-950 min-w-[20px] text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.variantId, item.quantity + 1)} className="text-emerald-950 hover:text-amber-600"><Plus size={14}/></button>
                          </div>
                          <p className="font-black text-emerald-950">₵{(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="p-8 bg-white border-t border-stone-100 space-y-6">
                <div className="flex justify-between items-center">
                  <span className="font-serif text-stone-400 italic text-xl">Total:</span>
                  <span className="font-black text-emerald-950 text-3xl font-sans">₵{totalPrice.toFixed(2)}</span>
                </div>
                <Link href="/checkout" className="block w-full">
                  <Button disabled={cartItems.length === 0} className="w-full bg-emerald-950 hover:bg-emerald-900 h-16 rounded-2xl text-md font-black shadow-xl transition-all active:scale-95 disabled:opacity-50">
                    CONTINUE TO CHECKOUT
                  </Button>
                </Link>
                <div className="flex items-center justify-center gap-2 opacity-40">
                   <img src="https://cdn-icons-png.flaticon.com" className="h-4 grayscale" alt="Paystack" />
                   <p className="text-[9px] uppercase font-bold tracking-[0.2em]">Secured by Paystack</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
