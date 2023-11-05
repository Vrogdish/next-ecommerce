"use client";

import Typography from "@/design/typography/Typography";
import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const collection = [
  {
    imageUrl: "/images/collection-1-min.jpg",
  },
  {
    imageUrl: "/images/collection-2-min.jpg",
  },
  {
    imageUrl: "/images/collection-3-min.jpg",
  },
  {
    imageUrl: "/images/collection-4-min.jpg",
  },
  {
    imageUrl: "/images/collection-5-min.jpg",
  },
  {
    imageUrl: "/images/collection-6-min.jpg",
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
        inView ? "opacity-100" : "md:opacity-0"
      }`}
    >
      <Typography variant="h2" className="text-center pt-20 pb-4">
        Nouvelles collections
      </Typography>
      <Image
        src={"/svg/separate.svg"}
        alt="separate"
        width={300}
        height={20}
        className="m-auto h-5"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto my-10">
        {collection.map((item, index) => (
          <div key={index} className="w-64 mx-auto">
            <div className=" h-96 relative overflow-hidden">
              <Image
                priority={true}
                src={item.imageUrl}
                alt=""
                width={300}
                height={400}
                className=" absolute object-cover hover:scale-110 transition-all cursor-pointer h-full"
              />
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            <Typography
              variant="caption"
              component="p"
              className="text-right mt-3"
              color="red"
            >
              125.00 €
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
