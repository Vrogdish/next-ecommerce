import { Product } from "@/models/product";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: Product;
  className?: string;
}

export default function CardPopulars({ product, className }: Props) {
  return (
    <div className={`${className}`}>
      <div className="w-full relative h-72">
        <Image
          src={product.image}
          alt=""
          fill
          className="absolute object-cover object-top w-full top-0 "
        />
        <Link href={`/product/${encodeURIComponent(product.id)}`} className="opacity-0 hover:opacity-100 transition-all absolute h-full w-full bg-black bg-opacity-20 flex justify-center items-center cursor-pointer">
          <p className="border rounded-full px-4 py-2 bg-white">Commander</p>
        </Link>
      </div>
      <div className="flex flex-col justify-between h-20">
        <p className="mt-4">{product.title}</p>
        <p className="font-bold text-right ">{product.price} €</p>
      </div>
    </div>
  );
}
