import React from "react";
import Image from "next/image";
import Typography from "@/design/typography/Typography";

export default function About() {
  return (
    <div className="mb-20">
      <Typography
        variant="h2"
        component="h2"
        className="text-center mt-40 mb-10"
      >
        Nous suivre
      </Typography>
      <Image
        src={"/SVG/instagram.svg"}
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
