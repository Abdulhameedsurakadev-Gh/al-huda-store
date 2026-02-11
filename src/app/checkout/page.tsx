"use client";

import { useState, useEffect } from "react";
import { useCartStore } from "@/lib/store";
import { supabase } from "@/lib/supabase";
import { Lock, MapPin, Phone, ChevronLeft, CreditCard, Loader2, Truck } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
// ✅ Keep the type import at the top
import PaystackPop from "@paystack/inline-js";
type PaystackPopType = typepf PaystackPop;

export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCartStore();
  const [mounted, setMounted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"momo" | "cod">("momo");
  const router = useRouter();

  // 🗑️ DELETED the top-level Paystack import from here

  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => { setMounted(true); }, []);

  const totalGHS = mounted ? getTotalPrice() : 0;

  const onSuccess = async (reference: any) => {
    try {
      await supabase
        .from('orders')
        .update({ status: 'paid', paystack_ref: reference.reference })
        .eq('paystack_ref', reference.reference);
      
      alert("Shukran! Your payment was successful.");
      clearCart();
      router.push("/boutique");
    } catch (err) {
      console.error(err);
    }
  };

  const handleCheckoutFinal = async () => {
    if (typeof window === "undefined") return;

    if (!phone || !address || !fullName) {
      alert("Please fill in all delivery details first.");
      return;
    }

    setIsProcessing(true);
    const orderRef = paymentMethod === "momo" ? `ALH-MOMO-${Date.now()}` : `ALH-COD-${Date.now()}`;

    try {
      const { error } = await supabase.from('orders').insert({
        customer_name: fullName,
        phone_number: phone,
        delivery_address: address,
        total_amount: totalGHS,
        items: items,
        status: paymentMethod === "momo" ? 'pending' : 'cash_on_delivery',
        paystack_ref: orderRef,
        payment_method: paymentMethod
      });

      if (error) throw error;

      if (paymentMethod === "momo") {
        // ✅ CORRECT: Import only when the button is clicked
        const PaystackPop = (await import('@paystack/inline-js')).default;
        const paystack = new PaystackPop();
        
        paystack.newTransaction({
          key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
          email: email || "customer@alhudaboutique.com",
          amount: totalGHS * 100,
          currency: "GHS",
          ref: orderRef,
          onSuccess: (transaction: any) => onSuccess(transaction),
          onCancel: () => setIsProcessing(false),
        });
      } else {
        alert("Order Received! Hajia will call you soon to arrange delivery.");
        clearCart();
        router.push("/boutique");
      }
    } catch (err: any) {
      alert("Error: " + err.message);
      setIsProcessing(false);
    }
  };

  if (!mounted) return null;

  return (
    <main className="bg-[#fdfbf7] min-h-screen pb-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link href="/boutique" className="flex items-center text-emerald-800 font-bold mb-8 hover:underline">
          <ChevronLeft size={20} /> Back to Boutique
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: Delivery Form */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-stone-100">
              <h2 className="text-2xl font-serif font-bold text-emerald-950 mb-6 flex items-center gap-3">
                <MapPin className="text-amber-500" /> Delivery Details
              </h2>
              <div className="space-y-4">
                <input 
                  type="text" placeholder="Full Name" 
                  className="w-full p-4 bg-stone-50 rounded-xl border border-stone-200 outline-none focus:ring-2 focus:ring-amber-500" 
                  onChange={(e) => setFullName(e.target.value)}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="tel" placeholder="Momo Number" 
                    className="p-4 bg-stone-50 rounded-xl border border-stone-200 outline-none focus:ring-2 focus:ring-amber-500"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <input 
                    type="email" placeholder="Email Address" 
                    className="p-4 bg-stone-50 rounded-xl border border-stone-200 outline-none focus:ring-2 focus:ring-amber-500" 
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <textarea 
                  placeholder="Kasoa Delivery Address (Landmarks help!)" rows={3} 
                  className="w-full p-4 bg-stone-50 rounded-xl border border-stone-200 outline-none focus:ring-2 focus:ring-amber-500"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Order Summary Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-emerald-950 text-white p-8 rounded-[2.5rem] shadow-2xl sticky top-24">
              <h3 className="text-xl font-serif font-bold mb-6 border-b border-white/10 pb-4">Order Summary</h3>
              
              <div className="space-y-4 mb-8 max-h-48 overflow-y-auto no-scrollbar">
                {items.map((item) => (
                  <div key={item.variantId} className="flex justify-between items-center text-sm">
                    <span className="opacity-80 truncate pr-4">{item.name} (x{item.quantity})</span>
                    <span className="font-bold">₵{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              {/* Payment Toggles */}
              <div className="space-y-3 mb-8">
                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-300 text-center">Payment Method</p>
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    onClick={() => setPaymentMethod("momo")}
                    className={`p-3 rounded-xl border-2 text-[10px] font-black transition-all ${paymentMethod === 'momo' ? 'border-amber-500 bg-amber-500 text-emerald-950' : 'border-white/10 text-white hover:bg-white/5'}`}
                  >
                    MOBILE MONEY
                  </button>
                  <button 
                    onClick={() => setPaymentMethod("cod")}
                    className={`p-3 rounded-xl border-2 text-[10px] font-black transition-all ${paymentMethod === 'cod' ? 'border-amber-500 bg-amber-500 text-emerald-950' : 'border-white/10 text-white hover:bg-white/5'}`}
                  >
                    CASH ON DELIVERY
                  </button>
                </div>
              </div>

              <div className="border-t border-white/20 pt-6 space-y-6">
                <div className="flex justify-between text-2xl font-bold">
                  <span>Total</span>
                  <span className="text-amber-500">₵{totalGHS.toFixed(2)}</span>
                </div>
                
                <button 
                  onClick={handleCheckoutFinal}
                  disabled={items.length === 0 || isProcessing}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-emerald-950 h-16 rounded-2xl font-black flex items-center justify-center gap-3 transition-transform active:scale-95 shadow-xl disabled:opacity-50"
                >
                  {isProcessing ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    paymentMethod === "momo" ? (
                      <><CreditCard size={20} /> PAY WITH MOMO</>
                    ) : (
                      <><Truck size={20} /> CONFIRM COD ORDER</>
                    )
                  )}
                </button>
                
                <div className="flex items-center justify-center gap-2 text-[9px] text-emerald-300 uppercase tracking-widest font-bold">
                  <Lock size={12} /> SSL Secure Payment via [Paystack](https://paystack.com)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
