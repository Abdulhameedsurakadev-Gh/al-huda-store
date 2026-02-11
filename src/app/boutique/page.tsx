"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Search, Loader2, ShoppingBag, SlidersHorizontal } from "lucide-react";
import ProductCard from "@/components/ProductCard";
// IMPORT your ProductDetails component here
import ProductDetails from "@/components/ProductDetails"; 

export default function BoutiquePage() {
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  // --- DRAWER STATE ---
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const { data: catData } = await supabase.from('categories').select('*').is('parent_id', null);
      
      let query = supabase.from('products').select(`*, categories!inner(*), product_variants(*)`);
      
      if (activeCategory !== "all") {
        query = query.or(`category_id.eq.${activeCategory}, categories.parent_id.eq.${activeCategory}`);
      }
      if (searchQuery) query = query.ilike('name', `%${searchQuery}%`);

      const { data: prodData, error } = await query;
      if (!error) {
        setProducts(prodData || []);
        setCategories(catData || []);
      }
      setLoading(false);
    }
    fetchData();
  }, [activeCategory, searchQuery]);

  // --- HANDLER TO OPEN DRAWER ---
  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setIsDetailsOpen(true);
  };

  return (
    <main className="bg-[#fdfbf7] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="bg-[#064e3b] px-6 pt-16 pb-20 md:pt-24 md:pb-32 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-amber-500 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-emerald-400 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs md:text-sm">
              Assalamu Alaikum
            </h2>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-100 leading-tight">
              What can we help you <br /> 
              <span className="italic text-amber-500 font-normal">find today?</span>
            </h1>
          </div>

          <div className="relative max-w-2xl mx-auto group">
            <div className="absolute inset-0 bg-amber-500/20 blur-xl group-focus-within:bg-amber-500/40 transition-all rounded-full" />
            <div className="relative flex items-center bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden px-4 md:px-6 py-1">
              <Search className="text-emerald-900 shrink-0" size={24} />
              <input 
                type="text" 
                placeholder="Search perfumes, abayas, books..." 
                className="w-full py-4 md:py-6 px-4 text-base md:text-lg text-emerald-950 placeholder:text-stone-400 outline-none border-none font-sans"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="hidden md:flex bg-[#064e3b] text-white px-8 py-3 rounded-2xl font-bold hover:bg-emerald-900 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY NAV */}
      <nav className="sticky top-0 z-40 bg-[#fdfbf7]/80 backdrop-blur-md border-b border-stone-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-3 overflow-x-auto no-scrollbar items-center justify-start md:justify-center">
            <button 
              onClick={() => setActiveCategory("all")}
              className={`whitespace-nowrap px-6 py-2.5 rounded-xl text-xs md:text-sm font-black transition-all ${
                activeCategory === 'all' 
                ? 'bg-emerald-900 text-white shadow-lg' 
                : 'text-stone-500 hover:text-emerald-800 bg-white border border-stone-100'
              }`}
            >
              All Items
            </button>
            {categories.map((cat) => (
              <button 
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-xl text-xs md:text-sm font-black transition-all ${
                  activeCategory === cat.id 
                  ? 'bg-emerald-900 text-white shadow-lg' 
                  : 'text-stone-500 hover:text-emerald-800 bg-white border border-stone-100'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* 3. PRODUCT GRID */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-10 border-b border-stone-100 pb-6">
          <h3 className="text-xl md:text-2xl font-serif font-bold text-emerald-950">
            {activeCategory === 'all' ? "Our Full Collection" : `Browsing ${categories.find(c => c.id === activeCategory)?.name}`}
          </h3>
          <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest">{products.length} Results</p>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-pulse">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="aspect-[3/4] bg-stone-200 rounded-3xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onClick={() => handleProductClick(product)} // PASSED HANDLER
              />
            ))}
          </div>
        )}

        {!loading && products.length === 0 && (
          <div className="text-center py-20 bg-white rounded-[2rem] border-2 border-dashed border-stone-100">
            <p className="text-stone-400 italic font-serif text-lg">Hajia hasn&apos;t added anything here yet.</p>
          </div>
        )}
      </section>

      {/* 4. THE DRAWER COMPONENT */}
      <ProductDetails 
        product={selectedProduct} 
        isOpen={isDetailsOpen} 
        onClose={() => setIsDetailsOpen(false)} 
      />

    </main>
  );
}
