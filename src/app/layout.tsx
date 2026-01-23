// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css"; // Links your Tailwind v4 @theme tokens
import Navbar from "@/components/Navbar"; // Links your high-level Navbar
import RamadanCounter from "@/components/RamadanCounter";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Modern Boutique",
  description: "Phase 1: Static Ecommerce Site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <RamadanCounter />
        <Navbar /> {/* Stays visible during navigation */}
        <main>
          {children} {/* Individual pages get rendered here */}
        </main> {/* This is where your individual pages render */}
        <Footer />
      </body>
    </html>
  );
}
