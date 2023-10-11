"use client";

import React, { useEffect } from "react";
import Typography from "@/design/typography/Typography";
import { useProductStore } from "@/store/products";
import CardPopulars from "@/components/card-populars/CardPopulars";


export default function Populars() {
  const getAllProducts = useProductStore((state) => state.getAllProducts);
  const productsList = useProductStore((state) => state.products);

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  const popularsList = productsList.filter(
    (item) =>
      item.rating.rate > 4 &&
      (item.category === "women's clothing" ||
        item.category === "men's clothing")
  );

  console.log(popularsList);

  return (
    <div>
      <Typography
        variant="h2"
        component="h2"
        className="text-center mt-20 mb-4"
      >
        Les plus populaires
      </Typography>

      <div className="flex gap-20 justify-center  my-20 ">
        {popularsList.map((item, index) => (
          <CardPopulars product={item} key={index} className="w-60"/>
        ))}
      </div>
    </div>
  );
}
