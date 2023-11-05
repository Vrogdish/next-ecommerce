"use client"

import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import separate from "@/assets/svg/separate.svg"
import prada from "@/assets/svg/Prada.svg"
import burberry from "@/assets/svg/Burberry.svg"
import boss from "@/assets/svg/Boss.svg"
import cartier from "@/assets/svg/Cartier.svg"
import gucci from "@/assets/svg/Gucci.svg"
import tiffany from "@/assets/svg/Tiffany.svg"


const partnersList = [
  {
    imageUrl: prada.src,
  },
  {
    imageUrl: burberry.src,
  },
  {
    imageUrl: boss.src,
  },
  {
    imageUrl: cartier.src,
  },
  {
    imageUrl: gucci.src,
  },
  {
    imageUrl: tiffany.src,
  },
];

export default function Partners() {
  const { ref, inView} = useInView({
    threshold: 0.2,
  });

  return (
    <div ref={ref} className={`transition-all duration-700 ${inView ? "opacity-100" : "opacity-0"}`}>
      <Image
        src={separate.src}
        alt=""
        width={300}
        height={20}
        className="m-auto h-5"
      />

      <div className="grid grid-cols-3 gap-10 px-6 md:gap-16 md:w-1/2 mx-auto my-20 ">
        {partnersList.map((item, index) => (
          <Image
            key={index}
            src={item.imageUrl}
            alt=""
            width={100}
            height={50}
            className="mx-auto h-16 w-32"
          />
        ))}
      </div>

      <Image
        src={separate.src}
        alt=""
        width={300}
        height={20}
        className="m-auto h-5"
      />
    </div>
  );
}
