import Button from "@/design/button/Button";
import { CartItem } from "@/models/cart";
import { Product } from "@/models/product";
import { useCartStore } from "@/store/cart";
import React, { useEffect, useState } from "react";

interface Props {
  className?: string;
  product: Product;
}

export default function BuyIt({ className, product }: Props) {
  const [size, setSize] = useState<"s" | "m" | "l">("s");
  const [ItemInCart, setIteminCart] = useState(false);

  const addItemToCart = useCartStore((state) => state.addToCart);
  const deleteItemFromCart = useCartStore((state) => state.removeFromCart);
  const myCart = useCartStore((state) => state.myCart);

  const handleSubmit = () => {
    const cartItem: CartItem = {
      product: product,
      size: size,
      quantity: 1,
    };
    addItemToCart(cartItem);
  };

  const handleDelete = () => {
    deleteItemFromCart(product.id);
  };

  useEffect(() => {
    myCart.find((item) => item.product.id === product.id)
      ? setIteminCart(true)
      : setIteminCart(false);
  }, [myCart, product.id]);

  return (
    <div className={`flex flex-col md:flex-row gap-10 justify-between items-center  ${className}`}>
      {!ItemInCart ? (
        <div className="flex  items-center gap-4">
          <div
            className={`cursor-pointer w-8 h-8 border rounded-full flex justify-center items-center transition-all ${
              size === "s" && "bg-black text-white"
            }`}
            onClick={() => setSize("s")}
          >
            S
          </div>
          <div
            className={`cursor-pointer w-8 h-8 border rounded-full flex justify-center items-center transition-all ${
              size === "m" && "bg-black text-white"
            }`}
            onClick={() => setSize("m")}
          >
            M
          </div>
          <div
            className={`cursor-pointer w-8 h-8 border rounded-full flex justify-center items-center transition-all ${
              size === "l" && "bg-black text-white"
            }`}
            onClick={() => setSize("l")}
          >
            L
          </div>
        </div>
      ) : (
        <div
          className={`cursor-pointer w-8 h-8 border rounded-full flex justify-center items-center bg-black text-white uppercase "
        }`}
        >
          {size}
        </div>
      )}

      {!ItemInCart ? (
        <Button action={handleSubmit} className="w-60">
          Ajouter
        </Button>
      ) : (
        <Button action={handleDelete} className="w-60">
          Supprimer du panier
        </Button>
      )}
    </div>
  );
}
