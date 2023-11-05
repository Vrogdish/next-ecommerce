"use client";

import { useProductStore } from "@/store/products";
import React, { useEffect } from "react";
import Image from "next/image";
import Typography from "@/design/typography/Typography";
import CardPopulars from "@/components/card-populars/CardPopulars";
import Banner from "@/components/banner/Banner";

export default function Shop({
  params,
}: {
  params: { filter: "women" | "men" | "accesories" | "all" };
}) {
  const filter = params.filter;
  const getAllProducts = useProductStore((state) => state.getAllProducts);
  const products = useProductStore((state) => state.products);

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  let category = "all";

  switch (filter) {
    case "women":
      category = "women's clothing";
      break;

    case "men":
      category = "men's clothing";
      break;

    case "accesories":
      category = "jewelery";
      break;

    default:
      break;
  }

  const filteredProduct = category!== "all" ? products.filter((item) => item.category === category) : products ;

  return (
    <main>
      <Banner category = {filter}/>
      <Typography variant="h2" className="text-center pt-20 pb-4">
        Nos Produits
      </Typography>
      <Image
        src={"/svg/separate.svg"}
        alt="separate"
        width={300}
        height={4}
        className="m-auto"
      />
      <div className="grid grid-cols-4 gap-20 max-w-screen-xl mx-auto px-10 my-20">
        {filteredProduct.map((item, index) => (
          <CardPopulars key={index} product={item} className="h-96" />
        ))}
      </div>
    </main>
  );
}
