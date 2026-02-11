"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, ShoppingBag, Moon, Heart, UserCircle2, Minus, Plus, Trash2 } from "lucide-react"; 
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader, SheetFooter } from "@/components/ui/sheet";
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
  const wishlistCount = mounted ? wishlistItems.length : 0;

  // Sync with store
  const { items, updateQuantity, removeItem, getTotalPrice, getItemCount } = useCartStore();

  // Lifecycle to prevent Hydration Error
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Safe variables for the UI
  const itemCount = mounted ? getItemCount() : 0;
  const totalPrice = mounted ? getTotalPrice() : 0;
  const cartItems = mounted ? items : [];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-amber-500/20 bg-[#064e3b]/95 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-serif text-xl md:text-2xl text-stone-100 font-bold tracking-tight">
          <Moon className="text-amber-500 fill-amber-500 size-5" />
          AL-HUDA<span className="text-amber-500">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                    "font-sans text-[10px] uppercase tracking-[0.2em] transition-all hover:text-amber-400",
                    isActive ? "text-amber-500 font-black border-b-2 border-amber-500 pb-1" : "text-stone-300"
                    )}
                >
                    {link.name}
                </Link>
                );
            })}
        </nav>

        {/* Icons & Account */}
        <div className="flex items-center gap-1 md:gap-3">
          
          <button className="text-stone-300 hover:text-amber-400 transition p-2">
            <Search className="w-5 h-5" />
          </button>
          
          <Link href="/wishlist" className="text-stone-300 hover:text-amber-400 transition p-2 relative">
            <Heart className="w-5 h-5" />
            <span className="absolute top-1 right-1 bg-amber-600 text-white text-[8px] rounded-full h-3.5 w-3.5 flex items-center justify-center font-bold">{wishlistCount}</span>
          </Link>
          
          {/* INTERACTIVE PURCHASE BAG */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-stone-300 hover:text-amber-400 transition p-2 relative">
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute top-1 right-1 bg-amber-600 text-white text-[8px] rounded-full h-3.5 w-3.5 flex items-center justify-center font-bold animate-in zoom-in">
                    {itemCount}
                  </span>
                )}
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#fdfbf7] w-full sm:max-w-md flex flex-col p-0 border-l border-amber-500/20">
              <SheetHeader className="p-6 bg-[#064e3b] text-white">
                <SheetTitle className="text-white font-serif text-2xl flex items-center gap-2">
                  <ShoppingBag className="text-amber-500" /> My Bag
                </SheetTitle>
              </SheetHeader>

              {/* Dynamic Cart Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
                {cartItems.length === 0 ? (
                  <div className="text-center py-20 space-y-4">
                    <div className="bg-stone-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-stone-300">
                      <ShoppingBag size={40} />
                    </div>
                    <p className="text-stone-500 font-serif italic">Your bag is empty.</p>
                    <Link href="/boutique">
                      <Button variant="outline" className="mt-4 border-emerald-800 text-emerald-800 rounded-full hover:bg-emerald-50">Continue Shopping</Button>
                    </Link>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div key={item.variantId} className="flex gap-4 items-center bg-white p-3 rounded-2xl border border-stone-100 shadow-sm animate-in slide-in-from-right-4 duration-300">
                      <div className="h-20 w-16 bg-stone-100 rounded-xl overflow-hidden shrink-0">
                        <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex justify-between items-start">
                          <h4 className="text-sm font-bold text-emerald-950 truncate max-w-[150px]">{item.name}</h4>
                          <button onClick={() => removeItem(item.variantId)} className="text-stone-300 hover:text-rose-500 transition">
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-[10px] text-amber-700 font-bold uppercase tracking-widest">Size: {item.size}</p>
                        <div className="flex justify-between items-center mt-3">
                          <div className="flex items-center border border-stone-200 rounded-lg overflow-hidden bg-stone-50">
                            <button onClick={() => updateQuantity(item.variantId, item.quantity - 1)} className="px-2 py-1 hover:bg-stone-200 transition"><Minus size={12}/></button>
                            <span className="text-xs font-bold px-3 text-emerald-950">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.variantId, item.quantity + 1)} className="px-2 py-1 hover:bg-stone-200 transition"><Plus size={12}/></button>
                          </div>
                          <p className="font-black text-emerald-900 text-sm">₵{(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Bag Footer with Live Total */}
              <div className="p-6 bg-white border-t border-stone-200 space-y-4 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
                <div className="flex justify-between items-center">
                  <span className="font-serif text-stone-500 italic text-lg">Total Amount:</span>
                  <span className="font-black text-emerald-950 text-2xl">₵{totalPrice.toFixed(2)}</span>
                </div>
                <p className="text-[10px] text-stone-400 text-center uppercase tracking-[0.2em] font-bold">
                  Secure MoMo Checkout via Paystack
                </p>
                <Link href="/checkout" className="block w-full">
                  <Button disabled={cartItems.length === 0} className="w-full bg-[#064e3b] hover:bg-emerald-900 h-14 rounded-2xl text-md font-bold shadow-xl active:scale-95 transition-all">
                    PROCEED TO CHECKOUT
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>

          {/* Account Icon */}
          <Link href="/login" className="hidden sm:flex items-center gap-2 ml-2 pl-4 border-l border-amber-500/20 text-stone-300 hover:text-amber-400 transition">
            <UserCircle2 className="w-6 h-6" />
            <span className="hidden xl:inline text-[10px] font-bold uppercase tracking-widest">Sign In</span>
          </Link>

          {/* Mobile Menu Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="lg:hidden p-2 text-stone-100 hover:text-amber-400 transition ml-2">
                <Menu className="w-7 h-7" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#064e3b] border-l border-amber-500/30 p-6 flex flex-col">
              <SheetTitle className="text-amber-500 font-serif text-2xl mb-8">Menu</SheetTitle>
              
              <div className="flex flex-col gap-6">
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

              <div className="mt-8 pt-8 border-t border-amber-500/20">
                <Link href="/login" className="flex items-center gap-3 text-stone-100 text-lg mb-6">
                  <UserCircle2 className="w-6 h-6 text-amber-500" />
                  Sign In / Register
                </Link>
              </div>
              
              <div className="mt-auto pt-8 border-t border-amber-500/20">
                <p className="text-amber-500 text-xs uppercase tracking-widest font-bold mb-4">Customer Care</p>
                <a href="https://wa.me" className="text-stone-100 text-lg font-serif italic">Chat with Hajia</a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
