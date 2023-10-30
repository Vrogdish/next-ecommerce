import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className=" border-t">
      <div className="flex gap-10 justify-center items-center mt-20 mb-10">
        <Image src={"svg/Twitter.svg"} alt="twitter" width={50} height={50} />
        <Image src={"svg/Instagram-dark.svg"} alt="instagram" width={50} height={50} />
        <Image src={"svg/YouTube.svg"} alt="youtube" width={50} height={50} />
      </div>
      <Image
        src={"/svg/separate.svg"}
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
