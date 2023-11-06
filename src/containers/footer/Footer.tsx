import React from "react";
import Image from "next/image";
import Link from "next/link";
import Separate from "@/components/separate/Separate";
import instagramDark from "@/assets/svg/Instagram-dark.svg";
import twitter from "@/assets/svg/Twitter.svg";
import youtube from "@/assets/svg/YouTube.svg";

export default function Footer() {
  return (
    <div className=" border-t">
      <div className="flex gap-10 justify-center items-center mt-20 mb-10">
        <Image src={twitter} alt="twitter" className="h-12 w-12" />
        <Image src={instagramDark} alt="instagram" className="h-12 w-12"/>
        <Image src={youtube} alt="youtube" className="h-12 w-12" />
      </div>
      <Separate />
      <div className="flex flex-col items-center md:flex-row gap-10 justify-center my-20">
        <Link href={""}>Conditions générales de vente</Link>
        <Link href={""}>Politique de confidentialité</Link>
        <Link href={""}>Mentions légales</Link>
        <Link href={""}>Plan de site</Link>
      </div>
    </div>
  );
}
