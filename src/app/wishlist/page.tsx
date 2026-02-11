"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useCartStore } from "@/lib/store";
import { useWishlistStore } from "@/lib/wishlistStore";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Loader2, ArrowRight, Trash2 } from "lucide-react";
import Link from "next/link";

export default function WishlistPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const { wishlistItems, fetchWishlist, clearWishlist } = useWishlistStore();
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    const getWishlistProducts = async () => {
      setLoading(true);
      await fetchWishlist(); // Sync IDs from DB

      if (wishlistItems.length > 0) {
        const { data, error } = await supabase
          .from('products')
          .select(`*, product_variants(*)`)
          .in('id', wishlistItems);

        if (!error) setProducts(data || []);
      } else {
        setProducts([]);
      }
      setLoading(false);
    };

    getWishlistProducts();
  }, [wishlistItems.length]);

  const handleMoveAllToBag = () => {
    products.forEach(product => {
      // Pick first available variant
      const variant = product.product_variants?.find((v: any) => v.stock_quantity > 0);
      if (variant) {
        addItem({
          id: product.id,
          name: product.name,
          price: product.base_price,
          image: product.main_image,
          size: variant.size,
          variantId: variant.id,
          quantity: 1
        });
      }
    });
    alert("All available items moved to your bag! 🌙");
  };

  if (loading) return (
    <div className="flex h-screen items-center justify-center bg-[#fdfbf7]">
      <Loader2 className="animate-spin text-emerald-800" size={40} />
    </div>
  );

  return (
    <main className="bg-[#fdfbf7] min-h-screen pb-20">
      {/* Header */}
      <section className="bg-[#064e3b] py-16 px-6 text-center text-white relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <Heart className="mx-auto text-amber-500 fill-amber-500" size={40} />
          <h1 className="text-3xl md:text-5xl font-serif font-bold italic">My Favorites</h1>
          <p className="text-stone-300 text-sm max-w-md mx-auto">
            Your personal collection of Al-Huda essentials. Save now, wear later.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-10 relative z-20">
        {products.length > 0 ? (
          <div className="space-y-8">
            {/* Master Action Bar */}
            <div className="bg-white p-4 md:p-6 rounded-[2rem] shadow-xl border border-stone-100 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-emerald-950 font-bold text-lg">{products.length} Items Saved</p>
                <p className="text-stone-400 text-xs uppercase tracking-widest font-bold">Ready for your collection</p>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <Button 
                  onClick={handleMoveAllToBag}
                  className="flex-1 bg-amber-500 hover:bg-amber-600 text-emerald-950 font-bold rounded-xl h-12"
                >
                  <ShoppingBag className="mr-2" size={18} /> MOVE ALL TO BAG
                </Button>
              </div>
            </div>

            {/* Wishlist Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-[3rem] p-12 text-center shadow-xl border border-stone-100 max-w-2xl mx-auto space-y-6">
            <div className="w-24 h-24 bg-stone-50 rounded-full flex items-center justify-center mx-auto text-stone-200">
              <Heart size={48} />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-bold text-emerald-950">Your wishlist is empty</h3>
              <p className="text-stone-500">Explore the boutique and tap the heart on items you love.</p>
            </div>
            <Link href="/boutique" className="inline-block">
              <Button className="bg-[#064e3b] hover:bg-emerald-900 px-10 py-6 rounded-2xl font-bold text-base shadow-lg">
                Go to Boutique <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
