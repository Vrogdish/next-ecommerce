"use client";

import Typography from "@/design/typography/Typography";
import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const collection = [
  {
    imageUrl: "/images/collection-1.jpg",
  },
  {
    imageUrl: "/images/collection-2.jpg",
  },
  {
    imageUrl: "/images/collection-3.jpg",
  },
  {
    imageUrl: "/images/collection-4.jpg",
  },
  {
    imageUrl: "/images/collection-5.jpg",
  },
  {
    imageUrl: "/images/collection-6.jpg",
  },
];

export default function Collection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`my-20 transition-all duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <Typography variant="h2" className="text-center pt-20 pb-4">
        Nouvelles collections
      </Typography>
      <Image
        src={"/svg/separate.svg"}
        alt=""
        width={300}
        height={4}
        className="m-auto"
      />

      <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto my-10 ">
        {collection.map((item, index) => (
          <div key={index}>
            <div className="w-full h-96 relative  overflow-hidden">
              <Image
                src={item.imageUrl}
                alt=""
                fill
                className="absolute object-cover hover:scale-110 transition-all cursor-pointer"
              />
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            <Typography variant="caption" component="p" className="text-right text-red-800 mt-3">
              125.00 €
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
