import Typography from "@/design/typography/Typography";
import React from "react";
import Image from "next/image";

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
  return (
    <div className="my-20">
      <Typography variant="h2" className="text-center pt-20 pb-4">
        Nouvelles collections
      </Typography>
      <Image
        src={"/SVG/separate.svg"}
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
            <p className="font-bold text-right">125.00 €</p>
          </div>
        ))}
      </div>
    </div>
  );
}
