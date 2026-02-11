"use client";

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface CategoryBarProps {
  categories: Category[];
  activeCategoryId: string;
  onCategoryChange: (id: string) => void;
}

export default function CategoryBar({ 
  categories, 
  activeCategoryId, 
  onCategoryChange 
}: CategoryBarProps) {
  return (
    <section className="sticky top-0 z-30 bg-[#fdfbf7]/90 backdrop-blur-md border-b border-stone-200 py-4 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Horizontal Scroll Container */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1 items-center">
          
          {/* "All Items" Button */}
          <button 
            onClick={() => onCategoryChange("all")}
            className={`whitespace-nowrap px-6 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
              activeCategoryId === 'all' 
              ? 'bg-emerald-900 text-white shadow-md transform scale-105' 
              : 'bg-white text-stone-500 border border-stone-100 hover:border-emerald-200'
            }`}
          >
            All Boutique
          </button>

          {/* Dynamic Categories from Supabase */}
          {categories.map((cat) => (
            <button 
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`whitespace-nowrap px-6 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
                activeCategoryId === cat.id 
                ? 'bg-emerald-900 text-white shadow-md transform scale-105' 
                : 'bg-white text-stone-500 border border-stone-100 hover:border-emerald-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}