import { getProductsFromApi } from "@/api/getProduct";
import { Product } from "@/models/product";
import { create } from "zustand";

interface ProductState {
  products: Product[];
  isLoading: boolean;
  error: any;
  getAllProducts: () => void;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  isLoading: true,
  error: "",
  getAllProducts: async () => {
    set({ isLoading: true });
    const res = await getProductsFromApi();
    if (res.data) {
      set({ products: await res.data });
    } else {
      set ({error : res.error})
    }
    set({ isLoading: false });
  },
}));
