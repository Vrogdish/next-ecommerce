import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className=" border-t">
      <div className="flex gap-10 justify-center items-center my-10">
        <Image src={"SVG/Twitter.svg"} alt="" width={50} height={50} />
        <Image src={"SVG/Instagram-dark.svg"} alt="" width={50} height={50} />
        <Image src={"SVG/YouTube.svg"} alt="" width={50} height={50} />
      </div>
      <Image
        src={"/SVG/separate.svg"}
        alt=""
        width={300}
        height={4}
        className="m-auto"
      />
      <div className="flex gap-10 justify-center my-20">
        <Link href={""}>Conditions générales de vente</Link>
        <Link href={""}>Politique de confidentialité</Link>
        <Link href={""}>Mentions légales</Link>
        <Link href={""}>Plan de site</Link>

      </div>
    </div>
  );
}
