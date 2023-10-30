"use client"

import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const partnersList = [
  {
    imageUrl: "/SVG/Prada.svg",
  },
  {
    imageUrl: "/SVG/Burberry.svg",
  },
  {
    imageUrl: "/SVG/Boss.svg",
  },
  {
    imageUrl: "/SVG/Cartier.svg",
  },
  {
    imageUrl: "/SVG/Gucci.svg",
  },
  {
    imageUrl: "/SVG/Tiffany.svg",
  },
];

export default function Partners() {
  const { ref, inView} = useInView({
    threshold: 0.2,
  });

  return (
    <div ref={ref} className={`transition-all duration-700 ${inView ? "opacity-100" : "opacity-0"}`}>
      <Image
        src={"/svg/separate.svg"}
        alt=""
        width={300}
        height={4}
        className="m-auto"
      />

      <div className="grid grid-cols-3 gap-16 w-1/2 mx-auto my-20 ">
        {partnersList.map((item, index) => (
          <Image
            key={index}
            src={item.imageUrl}
            alt=""
            width={100}
            height={50}
            className="mx-auto"
          />
        ))}
      </div>

      <Image
        src={"/svg/separate.svg"}
        alt=""
        width={300}
        height={4}
        className="m-auto"
      />
    </div>
  );
}
