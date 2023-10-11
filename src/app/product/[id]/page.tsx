"use client";

import { useProductStore } from "@/store/products";
import React, { useEffect } from "react";
import Image from "next/image";
import BuyIt from "@/components/buy-it/BuyIt";
import Link from "next/link";

export default function Product({ params }: { params: { id: number } }) {
  const getAllProducts = useProductStore((state) => state.getAllProducts);

  const productsList = useProductStore((state) => state.products);
  const product = productsList.find((item) => item.id === +params.id);

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

    if (product) {
    return (
      <div>
        <Link href={"/"} className="mt-20 flex gap-4 items-center px-10">
          <Image src={"/icons/arrow.png"} alt="" width={30} height={30} className="rotate-180"/>
          <p >Retour à la boutique</p>
        </Link>
        <div className=" mx-auto max-w-screen-lg">
          <div className="flex gap-28 items-end  mb-20 ">
            <div>
              <Image src={product?.image} alt="" width={400} height={400} />
            </div>
            <div className="w-1/2">
              
              <h3 className="font-bold mt-20 mb-20  ">{product.title}</h3>
              <p>{product.description}</p>
              <p className="font-bold mt-20 mb-20 text-right">
                {product.price} €
              </p>
              <BuyIt product={product} />
            </div>
          </div>{" "}
          <Image
            src={"/SVG/separate.svg"}
            alt=""
            width={300}
            height={4}
            className="mx-auto my-40"
          />
        </div>
        
      </div>
    );
  }
}
