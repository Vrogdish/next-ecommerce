"use client";

import React from "react";
import Image from "next/image";
import BurgerMenu from "../burger-menu/BurgerMenu";
import Navbar from "../../components/navbar/Navbar";
import Link from "next/link";
import { useCartStore } from "@/store/cart";

export default function Header() {
  const myCart = useCartStore((state) => state.myCart);

  const rightNav = [
    {
      title: "mon compte",
      link: "",
      imageUrl: "/icons/user.png",
    },
    {
      title: "mon panier",
      link: "/cart",
      imageUrl: "/icons/bag.png",
    },
  ];

  return (
    <header className="h-16  flex justify-between items-center px-8 relative z-10">
      <BurgerMenu />
      <Link href={"/"}>
        <Image
          src={"/SVG/Logo.svg"}
          alt="Open Fashion"
          width={100}
          height={100}
        />
      </Link>
      <div className="relative">
        <Navbar navList={rightNav} />
        {myCart.length !== 0 && <div className="absolute top-5 right-0 h-2 w-2 rounded-full bg-red-600"></div>}
      </div>
    </header>
  );
}
