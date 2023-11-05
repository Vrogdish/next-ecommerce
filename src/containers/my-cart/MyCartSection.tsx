"use client";

import Typography from "@/design/typography/Typography";
import { useCartStore } from "@/store/cart";
import React from "react";
import Image from "next/image";

interface Props {
  className?: string;
}

export default function MyCartSection({ className }: Props) {
  const myCart = useCartStore((state) => state.myCart);
  const deleteItem = useCartStore((state) => state.removeFromCart);

  let total = 0;

  for (let i = 0; i < myCart.length; i++) {
    total += myCart[i].product.price;
  }

  return (
    <div className={`${className} px-6`}>
      <div>
        <Typography variant="h2" component="h1" className=" px-10">
          Mon Panier
        </Typography>
        <p className="px-10 mb-10">{myCart.length} article(s)</p>
      </div>
      <div className="w-full xl:pl-32 border-b pb-20">
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
                <p>
                  Taille :{" "}
                  <span className="uppercase font-bold">{item.size}</span>
                </p>
                 
                <Typography variant="caption" component="p">
                  {item.product.price.toFixed(2)} €
                </Typography>
                
                
              </div>
            </div>
            <Image
              src={"/icons/cross.png"}
              alt=""
              width={30}
              height={30}
              className="cursor-pointer"
              onClick={() => deleteItem(item.product.id)}
            />
          </div>
        ))}
        {myCart.length === 0 && (
          <>
            <Typography
              variant="h3"
              component="p"
              className="text-center mt-20"
            >
              Aucun article présent
            </Typography>
          </>
        )}
      </div>
      <p className="font-bold text-right lg:px-28 mt-6">
        Prix total : {total.toFixed(2)} €
      </p>
    </div>
  );
}
