import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { ProductSpecs } from '@/lib/api';

interface CartItem {
  product: ProductSpecs;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (product: ProductSpecs, quantity?: number) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getSubtotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product, quantity = 1) =>
        set((state) => {
          const existingItem = state.cart.find(
            (item) => item.product.id === product.id
          );
          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          }
          return { cart: [...state.cart, { product, quantity }] };
        }),
      updateQuantity: (id, quantity) =>
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item.product.id === id
                ? { ...item, quantity: Math.max(0, quantity) }
                : item
            )
            .filter((item) => item.quantity > 0),
        })),
      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.product.id !== id),
        })),
      clearCart: () => set({ cart: [] }),
      getTotalItems: () =>
        get().cart.reduce((total, item) => total + item.quantity, 0),
      getSubtotal: () =>
        get().cart.reduce(
          (total, item) => total + item.product.price_NGN * item.quantity,
          0
        ),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
