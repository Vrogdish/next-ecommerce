import { getProductsFromApi } from "@/api/getProduct";
import { Product } from "@/models/product";
import { create } from "zustand";

interface ProductState {
  products: Product[];
  getAllProducts: () => void;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  getAllProducts: async () => {
    const res =  await getProductsFromApi()
    res && res.length !=0 && set({products : await res})
  },
}));
