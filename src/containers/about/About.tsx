"use client"

import React from "react";
import Image from "next/image";
import Typography from "@/design/typography/Typography";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView} = useInView({
    threshold: 0.2,
  });

  return (
    <div ref={ref} className={`transition-all duration-700 mb-20 ${inView ? "opacity-100" : "opacity-0"}`}>
      <Typography
        variant="h2"
        component="h2"
        className="text-center pt-40 mb-10"
      >
        Nous suivre
      </Typography>
      <Image
        src={"/svg/instagram.svg"}
        alt="instagram"
        width={50}
        height={50}
        className="mx-auto mb-20"
      />
      <div className="grid grid-cols-2 max-w-screen-lg mx-auto gap-8">
        <div className=" h-96 bg-black relative">
          <Image
            src={"/images/staff1.jpg"}
            alt="instagram"
            fill
            className="absolute object-cover grayscale"
          />
        </div>
        <div className=" h-96 bg-black relative">
        <Image
            src={"/images/staff2.jpg"}
            alt="instagram"
            fill
            className="absolute object-cover grayscale"
          />
        </div>
        <div className=" h-96 bg-black relative">
        <Image
            src={"/images/staff3.jpg"}
            alt="instagram"
            fill
            className="absolute object-cover grayscale"
          />
        </div>
        <div className=" h-96 bg-black relative">
        <Image
            src={"/images/staff4.jpg"}
            alt="instagram"
            fill
            className="absolute object-cover grayscale"
          />
        </div>
      </div>
    </div>
  );
}
