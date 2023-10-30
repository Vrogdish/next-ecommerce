import { CartItem } from "@/models/cart";
import { create } from "zustand";

interface cartState {
  myCart: CartItem[];
  addToCart: (cartItem:CartItem) => void;
  removeFromCart: (cartItemID :number) => void;
  updateCart: (cartItemID :number) => void;
  resetCart : ()=>void
}

export const useCartStore = create<cartState>((set) => ({
  myCart: [],
  addToCart: (cartItem) => set((state)=>({myCart : [...state.myCart, cartItem]})),
 
  removeFromCart: (cartItemID) => set((state)=>({myCart : state.myCart.filter((item)=>item.product.id !== cartItemID )})),
  updateCart: (cartItemID) => {},
  resetCart : ()=> set({myCart : []})
}));
