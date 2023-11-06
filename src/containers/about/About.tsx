"use client";

import React from "react";
import Image from "next/image";
import Typography from "@/design/typography/Typography";
import { useInView } from "react-intersection-observer";
import instagram from "@/assets/svg/Instagram.svg"

const staff = [
  {
    imageUrl: "/images/staff1-min.jpg",
    alt: "",
  },
  {
    imageUrl: "/images/staff2-min.jpg",
    alt: "",
  },
  {
    imageUrl: "/images/staff3-min.jpg",
    alt: "",
  },
  {
    imageUrl: "/images/staff4-min.jpg",
    alt: "",
  },
];

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 mb-20 ${
        inView ? "opacity-100" : "md:opacity-0"
      }`}
    >
      <Typography
        variant="h2"
        component="h2"
        className="text-center pt-40 mb-10"
      >
        Nous suivre
      </Typography>
      <Image
        src={instagram}
        alt="instagram"
        className="mx-auto mb-20 h-14 w-14"
      />
      <div className="grid md:grid-cols-2 max-w-screen-lg mx-auto gap-8">
        {staff.map((item, index) => (
          <div className=" h-96 bg-black relative" key={index}>
            <Image
              priority={true}
              src={item.imageUrl}
              alt={item.alt}
              width={800}
              height={800}
              className="absolute object-cover grayscale h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
