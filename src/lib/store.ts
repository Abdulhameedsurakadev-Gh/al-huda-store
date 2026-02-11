import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Define what a Cart Item looks like
export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
  variantId: string; // Crucial for stock management
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (variantId: string) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getItemCount: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (newItem) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(item => item.variantId === newItem.variantId);

        if (existingItem) {
          // If item with same size exists, just increase quantity
          set({
            items: currentItems.map(item =>
              item.variantId === newItem.variantId
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          // Add new item to the bag
          set({ items: [...currentItems, newItem] });
        }
      },

      removeItem: (variantId) => set((state) => ({
        items: state.items.filter(item => item.variantId !== variantId)
      })),

      updateQuantity: (variantId, quantity) => set((state) => ({
        items: state.items.map(item =>
          item.variantId === variantId ? { ...item, quantity: Math.max(1, quantity) } : item
        )
      })),

      clearCart: () => set({ items: [] }),

      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + (item.price * item.quantity), 0);
      },

      getItemCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
    }),
    {
      name: 'al-huda-cart-storage', // This saves the bag to the user's browser (LocalStorage)
    }
  )
);
