import { CartItem } from "@/models/cart";
import { create } from "zustand";

interface cartState {
  myCart: CartItem[];
  addToCart: (cartItem: CartItem) => void;
  removeFromCart: (cartItemID: number) => void;
  resetCart: () => void;
  initCart: () => void;
}

export const useCartStore = create<cartState>((set) => ({
  myCart: [],
  addToCart: (cartItem) => {
    set((state) => ({ myCart: [...state.myCart, cartItem] }));
    const cart = useCartStore.getState().myCart
    localStorage.setItem("cart",JSON.stringify(cart))
  },
  removeFromCart: (cartItemID) =>{
    set((state) => ({
      myCart: state.myCart.filter((item) => item.product.id !== cartItemID),
    }))
    const cart = useCartStore.getState().myCart
    localStorage.setItem("cart",JSON.stringify(cart))
  },
  resetCart: () => {
    set({ myCart: [] })
    localStorage.removeItem("cart")
  },
  initCart: () => {
    const jsonStorage = localStorage.getItem("cart");
    if (jsonStorage) {
      const cartStorage:CartItem[] = JSON.parse(jsonStorage);
      set({ myCart: cartStorage });
    }
  },
}));
