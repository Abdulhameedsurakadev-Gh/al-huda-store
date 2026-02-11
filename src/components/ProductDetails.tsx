"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ShoppingBag, MessageSquare, Star, Info, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useCartStore } from "@/lib/store";
import { Button } from "@/components/ui/button";

export default function ProductDetails({ product, isOpen, onClose }: any) {
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [activeImage, setActiveImage] = useState(0);
  const addItem = useCartStore((state) => state.addItem);

  // Reset image index when drawer opens for a new product
  useEffect(() => {
    if (isOpen) setActiveImage(0);
  }, [isOpen, product?.id]);

  if (!product) return null;

  // Combine main image with gallery images
  const allImages = [product.main_image, ...(product.gallery_images || [])].filter(Boolean);

  const handleAddToBag = () => {
    if (!selectedVariant && product.product_variants?.length > 0) {
      alert("Please select a size first");
      return;
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.base_price,
      image: product.main_image,
      size: selectedVariant?.size || "Standard",
      variantId: selectedVariant?.id || product.id,
      quantity: 1,
    });
    
    onClose();
  };

  const handleWhatsAppOrder = () => {
    const message = `Assalamu Alaikum Hajia, I am interested in:\n\n*Item:* ${product.name}\n*Size:* ${selectedVariant?.size || 'Standard'}\n*Price:* ₵${product.base_price}\n\nIs this available?`;
    // Fixed WhatsApp URL
    window.open(`https://wa.me{encodeURIComponent(message)}`, '_blank');
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="bottom" className="h-[92vh] sm:h-[85vh] rounded-t-[3rem] bg-[#fdfbf7] p-0 overflow-hidden border-t-8 border-amber-500/20">
        <div className="h-full overflow-y-auto no-scrollbar pb-24">
          
          {/* 1. Dynamic Image Gallery Section */}
          <div className="relative w-full aspect-[4/5] sm:aspect-video bg-stone-200 overflow-hidden group">
            <img 
              src={allImages[activeImage]} 
              alt={product.name} 
              className="w-full h-full object-cover transition-all duration-700 ease-in-out" 
            />

            {/* Gallery Navigation Arrows (Desktop) */}
            {allImages.length > 1 && (
              <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <button 
                  onClick={() => setActiveImage(prev => prev === 0 ? allImages.length - 1 : prev - 1)}
                  className="p-2 bg-white/80 rounded-full text-emerald-950 pointer-events-auto active:scale-90"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={() => setActiveImage(prev => prev === allImages.length - 1 ? 0 : prev + 1)}
                  className="p-2 bg-white/80 rounded-full text-emerald-950 pointer-events-auto active:scale-90"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            )}

            {/* Mobile Image Indicators (Dots) */}
            {allImages.length > 1 && (
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
                {allImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeImage === i ? "w-8 bg-amber-500" : "w-2 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            )}

            <div className="absolute top-6 left-6 flex gap-2">
              <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase text-emerald-900 tracking-[0.2em] shadow-sm">
                {product.brand || 'Al-Huda Exclusive'}
              </span>
            </div>
            
            <button className="absolute bottom-6 right-6 p-4 bg-white rounded-full shadow-2xl text-rose-500 active:scale-90 transition-transform">
              <Heart size={24} />
            </button>
          </div>

          <div className="p-6 md:p-10 space-y-8 max-w-4xl mx-auto">
            
            {/* Gallery Thumbnails (Large Screens) */}
            {allImages.length > 1 && (
              <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
                {allImages.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative w-20 aspect-square rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                      activeImage === i ? 'border-amber-500 scale-105' : 'border-stone-100 opacity-60'
                    }`}
                  >
                    <img src={img} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* 2. Header Info */}
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <SheetTitle className="text-3xl md:text-4xl font-serif font-bold text-emerald-950 leading-tight">
                  {product.name}
                </SheetTitle>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-3xl font-black text-amber-600 font-sans">₵{product.base_price}</p>
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  <span className="text-stone-400 text-xs ml-2 font-bold">(Premium Quality)</span>
                </div>
              </div>
            </div>

            {/* 3. Size Selection */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-xs font-black text-emerald-900 uppercase tracking-widest">Select Available Size</p>
                <button className="text-[10px] font-bold text-amber-600 underline underline-offset-4">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.product_variants?.map((v: any) => (
                  <button
                    key={v.id}
                    disabled={v.stock_quantity === 0}
                    onClick={() => setSelectedVariant(v)}
                    className={`min-w-[70px] py-4 rounded-2xl text-sm font-bold border-2 transition-all duration-300 flex flex-col items-center justify-center gap-1 ${
                      selectedVariant?.id === v.id 
                      ? 'border-emerald-800 bg-emerald-800 text-white shadow-xl scale-105' 
                      : 'border-stone-100 bg-white text-stone-600 hover:border-amber-200'
                    } ${v.stock_quantity === 0 && 'opacity-20 cursor-not-allowed grayscale'}`}
                  >
                    <span>{v.size}</span>
                    {v.stock_quantity < 5 && v.stock_quantity > 0 && (
                      <span className="text-[8px] uppercase text-amber-400">Low Stock</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Description */}
            <div className="space-y-3 bg-white p-6 rounded-[2rem] border border-stone-100 shadow-sm">
              <div className="flex items-center gap-2 text-emerald-800">
                <Info size={18} />
                <p className="text-xs font-black uppercase tracking-widest">Product Details</p>
              </div>
              <p className="text-stone-600 leading-relaxed text-sm md:text-base">
                {product.description || "Every piece in the Al-Huda collection is selected for its quality, modesty, and timeless elegance."}
              </p>
            </div>

            {/* 5. Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
              <Button 
                onClick={handleAddToBag}
                className="h-16 rounded-2xl bg-emerald-900 hover:bg-emerald-950 text-white font-bold text-base shadow-xl flex items-center gap-3 transition-transform active:scale-95"
              >
                <ShoppingBag size={22} /> ADD TO BAG
              </Button>
              <Button 
                onClick={handleWhatsAppOrder}
                className="h-16 rounded-2xl bg-[#25D366] hover:bg-green-600 text-white font-bold text-base shadow-xl flex items-center gap-3 transition-transform active:scale-95"
              >
                <MessageSquare size={22} /> ORDER ON WHATSAPP
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
