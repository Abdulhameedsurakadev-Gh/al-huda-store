"use client";

import { ShoppingBag, Heart, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { useWishlistStore } from "@/lib/wishlistStore";
import { useCartStore } from "@/lib/store";

interface ProductCardProps {
  product: any;
  onClick?: () => void; // Added this prop to handle opening the drawer
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const { wishlistItems, toggleWishlist, fetchWishlist } = useWishlistStore();
  const isLiked = wishlistItems.includes(product.id);
  useEffect(() => {
    fetchWishlist();
  }, []);
  
  const addItem = useCartStore((state) => state.addItem);

  const totalStock = product.product_variants?.reduce((acc: number, v: any) => acc + (v.stock_quantity || 0), 0) || 0;
  const inStock = totalStock > 0;

  const handleAddClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // CRITICAL: This stops the drawer from opening when clicking 'Add to Bag'
    
    if (!inStock) return;

    const defaultVariant = product.product_variants?.find((v: any) => v.stock_quantity > 0);

    addItem({
      id: product.id,
      name: product.name,
      price: product.base_price,
      image: product.main_image,
      size: defaultVariant?.size || "Standard",
      variantId: defaultVariant?.id || product.id,
      quantity: 1,
    });
  };

  return (
    <div 
      onClick={onClick} // Triggers the ProductDetails drawer
      className="group bg-white rounded-3xl p-2 md:p-3 shadow-sm border border-stone-100 hover:shadow-xl hover:border-amber-200/50 transition-all duration-500 flex flex-col h-full relative cursor-pointer"
    >
      
      {/* 1. Image Container */}
      <div className="relative aspect-[4/5] bg-stone-50 rounded-2xl mb-4 overflow-hidden">
        <img 
          src={product.main_image || "https://placehold.co"} 
          alt={product.name}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />

        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {product.is_featured && (
            <span className="bg-amber-500 text-[8px] md:text-[10px] font-black px-2 py-1 rounded-lg text-emerald-950 uppercase shadow-lg">
              Featured
            </span>
          )}
          {!inStock && (
            <span className="bg-rose-500 text-white text-[8px] md:text-[10px] font-black px-2 py-1 rounded-lg uppercase shadow-lg">
              Sold Out
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation(); // CRITICAL: Stops the drawer from opening
            toggleWishlist(product.id);
          }}
          className={`absolute top-2 right-2 p-2 rounded-full shadow-md z-10 transition-all duration-300 ${
            isLiked ? 'bg-rose-50 text-rose-500' : 'bg-white/80 backdrop-blur-md text-stone-400 hover:text-rose-500'
          }`}
        >
          {/* If isLiked is true, we fill the heart with color */}
          <Heart size={18} fill={isLiked ? "currentColor" : "none"} className={isLiked ? "animate-in zoom-in duration-300" : ""} />
        </button>

        {/* Quick-View Overlay (Desktop Only) */}
        <div className="hidden lg:flex absolute inset-0 bg-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity items-center justify-center pointer-events-none">
           <button className="bg-white text-emerald-950 px-4 py-2 rounded-full font-bold text-xs flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform shadow-xl">
             View Product <ExternalLink size={14} />
           </button>
        </div>
      </div>
      
      {/* 2. Product Info Section */}
      <div className="flex-1 px-1 space-y-2">
        <div className="flex justify-between items-start">
          <p className="text-[10px] uppercase text-amber-700 font-bold tracking-widest">
            {product.brand || 'Al-Huda Exclusive'}
          </p>
          <p className={`text-[9px] font-bold ${inStock ? 'text-emerald-600' : 'text-stone-400'}`}>
            {inStock ? '● In Stock' : '○ Out of Stock'}
          </p>
        </div>

        <h4 className="text-emerald-950 font-bold text-sm md:text-base leading-tight min-h-[2.5rem] line-clamp-2">
          {product.name}
        </h4>

        <div className="flex items-baseline gap-2">
          <span className="text-emerald-900 font-black text-lg md:text-xl leading-none">
            ₵{product.base_price}
          </span>
          <span className="text-stone-400 text-xs line-through font-medium">
            ₵{Math.round(product.base_price * 1.2)}
          </span>
        </div>
        
        {/* Sizes Badges */}
        <div className="pt-2 flex gap-1 flex-wrap">
          {product.product_variants?.slice(0, 4).map((v: any, i: number) => (
            <span 
              key={i} 
              className={`text-[9px] font-bold px-2 py-1 rounded-md border ${
                v.stock_quantity > 0 
                ? 'border-stone-200 text-stone-600 bg-stone-50' 
                : 'border-stone-100 text-stone-300 line-through'
              }`}
            >
              {v.size}
            </span>
          ))}
        </div>
      </div>

      {/* 3. Add to Bag Button */}
      <div className="mt-4">
        <button 
          onClick={handleAddClick}
          disabled={!inStock}
          className={`w-full py-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md ${
            inStock 
            ? 'bg-emerald-900 text-white hover:bg-emerald-800' 
            : 'bg-stone-100 text-stone-400 cursor-not-allowed shadow-none'
          }`}
        >
          <ShoppingBag size={16} />
          {inStock ? 'ADD TO BAG' : 'NOTIFY ME'}
        </button>
      </div>
    </div>
  );
}
