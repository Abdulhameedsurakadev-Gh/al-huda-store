import { create } from 'zustand';
import { supabase } from './supabase';

interface WishlistState {
  wishlistItems: string[]; // Array of product IDs
  fetchWishlist: () => Promise<void>;
  toggleWishlist: (productId: string) => Promise<void>;
}

export const useWishlistStore = create<WishlistState>((set, get) => ({
  wishlistItems: [],

  fetchWishlist: async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data } = await supabase
      .from('wishlist')
      .select('product_id')
      .eq('user_id', user.id);

    set({ wishlistItems: data?.map(item => item.product_id) || [] });
  },

  toggleWishlist: async (productId) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      alert("Please login to save to wishlist");
      return;
    }

    const isLiked = get().wishlistItems.includes(productId);

    if (isLiked) {
      await supabase.from('wishlist').delete().eq('product_id', productId).eq('user_id', user.id);
      set({ wishlistItems: get().wishlistItems.filter(id => id !== productId) });
    } else {
      await supabase.from('wishlist').insert({ product_id: productId, user_id: user.id });
      set({ wishlistItems: [...get().wishlistItems, productId] });
    }
  }
}));
