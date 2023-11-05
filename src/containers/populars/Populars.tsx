"use client";

import React, { useEffect } from "react";
import Typography from "@/design/typography/Typography";
import { useProductStore } from "@/store/products";
import CardPopulars from "@/components/card-populars/CardPopulars";
import { useInView } from "react-intersection-observer";


export default function Populars() {
  const getAllProducts = useProductStore((state) => state.getAllProducts);
  const productsList = useProductStore((state) => state.products);
  const { ref, inView} = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  const popularsList = productsList.filter(
    (item) =>
      item.rating.rate > 4 &&
      (item.category === "women's clothing" ||
        item.category === "men's clothing")
  );

  return (
    <div ref={ref} className={`transition-all duration-700 ${inView ? "opacity-100" : "md:opacity-0"}`}>
      <Typography
        variant="h2"
        component="h2"
        className="text-center mt-20 mb-4"
      >
        Les plus populaires
      </Typography>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-32 justify-center px-10 my-20 ">
        {popularsList.map((item, index) => (
          <CardPopulars product={item} key={index} className="md:w-50"/>
        ))}
      </div>
    </div>
  );
}
