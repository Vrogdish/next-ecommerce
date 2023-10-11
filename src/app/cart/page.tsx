"use client";

import Typography from "@/design/typography/Typography";
import { useCartStore } from "@/store/cart";
import React from "react";
import Image from "next/image";

export default function MyCart() {
  const myCart = useCartStore((state) => state.myCart);
  const deleteItem = useCartStore((state)=>state.removeFromCart)

  return (
    <div>
      <div>
        <Typography variant="h2" component="h1" className="mt-20 px-10">
          Mon Panier
        </Typography>
        <p className="px-10 mb-10">{myCart.length} article(s)</p>
      </div>
      <div className="flex justify-between gap-20 max-w-screen-xl mx-auto">
        <div className="w-1/2">
          {myCart.map((item, index) => (
            <div key={index} className="flex gap-10 items-end my-10 ">
              <div className="relative w-20 h-16 bg-gray-400">
                <Image
                  src={item.product.image}
                  alt=""
                  fill
                  className="absolute object-cover object-top"
                />
              </div>
              <div className="w-full">
                <p>{item.product.title}</p>
                <div className="flex gap-10 justify-between">
                  <p>Taille : <span className="uppercase font-bold">{item.size}</span></p>
                  <p>Prix : {item.product.price} €</p>
                </div>
              </div>
             <Image src={"/icons/cross.png"} alt="" width={30} height={30} className="cursor-pointer" onClick={()=>deleteItem(item.product.id)} />
            </div>
          ))}
        </div>
        <div className="border w-1/2 h-96"></div>
      </div>
    </div>
  );
}
