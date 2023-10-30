import { Product } from "@/models/product";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Typography from "@/design/typography/Typography";

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
          alt={product.title}
          fill
          className="absolute object-cover object-top w-full top-0 "
        />
        <Link href={`/product/${encodeURIComponent(product.id)}`} className="opacity-0 hover:opacity-100 transition-all absolute h-full w-full bg-black bg-opacity-20 flex justify-center items-center cursor-pointer">
          <p className="border rounded-full px-4 py-2 bg-white">Commander</p>
        </Link>
      </div>
      <div className="flex flex-col justify-between h-32">
        <p className="mt-4">{product.title}</p>
        <Typography variant="caption"
          className="text-right mt-3 text-red-800">{product.price.toFixed(2)} €
        </Typography>
        
      </div>
    </div>
  );
}
