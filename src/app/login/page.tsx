"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Moon, ArrowRight, Mail, Lock, User, MapPin, Phone, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Form States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [gps, setGps] = useState("");

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        // 1. SIGN UP LOGIC
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
              phone: phone,
              gps_address: gps,
            },
          },
        });
        if (error) throw error;
        alert("Check your email for the confirmation link!");
      } else {
        // 2. LOGIN LOGIC
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        router.push("/boutique"); // Redirect to shop after login
      }
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#fdfbf7] flex">
      {/* Visual Side (Desktop) */}
      <section className="hidden lg:flex w-1/2 bg-[#064e3b] relative items-center justify-center p-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com')]" />
        <div className="relative z-10 text-center space-y-6 max-w-md">
          <Moon className="text-amber-500 fill-amber-500 size-20 mx-auto animate-pulse" />
          <h2 className="text-5xl font-serif font-bold text-stone-100 leading-tight">
            {isSignUp ? "Begin Your Journey" : "Welcome Back"} to <span className="text-amber-500 italic">Al-Huda</span>
          </h2>
          <p className="text-stone-300 text-lg">
            {isSignUp ? "Join our community for exclusive access to premium Islamic essentials." : "Sign in to pick up where you left off with your favorites."}
          </p>
        </div>
      </section>

      {/* Form Side */}
      <section className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left space-y-3">
            <Link href="/" className="lg:hidden flex justify-center mb-6 text-emerald-900">
               <Moon className="fill-amber-500 text-amber-500" size={40} />
            </Link>
            <h1 className="text-3xl font-serif font-bold text-emerald-950">
              {isSignUp ? "Create Account" : "Sign In"}
            </h1>
            <p className="text-stone-500 text-sm">
              {isSignUp ? "Enter your details to join the Al-Huda family." : "Access your boutique wishlist and saved bag."}
            </p>
          </div>

          <form onSubmit={handleAuth} className="space-y-4">
            {isSignUp && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-3.5 text-stone-400" size={18} />
                  <input required type="text" placeholder="Full Name" className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-stone-50 border-stone-200 outline-none focus:ring-2 focus:ring-amber-500 transition-all" onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div className="relative">
                  <Phone className="absolute left-3 top-3.5 text-stone-400" size={18} />
                  <input required type="tel" placeholder="WhatsApp Number" className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-stone-50 border-stone-200 outline-none focus:ring-2 focus:ring-amber-500 transition-all" onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3.5 text-stone-400" size={18} />
                  <input required type="text" placeholder="Ghana Post GPS (e.g. GS-012-345)" className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-stone-50 border-stone-200 outline-none focus:ring-2 focus:ring-amber-500 transition-all" onChange={(e) => setGps(e.target.value)} />
                </div>
              </div>
            )}

            <div className="relative">
              <Mail className="absolute left-3 top-3.5 text-stone-400" size={18} />
              <input required type="email" placeholder="Email Address" className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-stone-50 border-stone-200 outline-none focus:ring-2 focus:ring-amber-500 transition-all" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-stone-400" size={18} />
              <input required type="password" placeholder="Password" className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-stone-50 border-stone-200 outline-none focus:ring-2 focus:ring-amber-500 transition-all" onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button 
              disabled={loading}
              className="w-full bg-[#064e3b] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-emerald-900 transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin" /> : (isSignUp ? "Register Now" : "Sign In")}
              {!loading && <ArrowRight size={18} />}
            </button>
          </form>

          <div className="text-center pt-4">
            <button 
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-sm font-bold text-emerald-800 hover:text-amber-600 transition-colors"
            >
              {isSignUp ? "ALREADY HAVE AN ACCOUNT? SIGN IN" : "DON'T HAVE AN ACCOUNT? CREATE ONE"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
