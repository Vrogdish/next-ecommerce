"use client";

import React from "react";
import Image from "next/image";
import BurgerMenu from "../burger-menu/BurgerMenu";
import Navbar from "../../components/navbar/Navbar";
import Link from "next/link";
import { useCartStore } from "@/store/cart";
import BurgerMenuMobile from "../burger-menu-mobile/BurgerMenuMobile";
import logo from "@/assets/svg/Logo.svg"

export default function Header() {
  const myCart = useCartStore((state) => state.myCart);

  const rightNav = [
    {
      title: "mon compte",
      link: "/account",
      imageUrl: "/icons/user.png",
    },
    {
      title: "mon panier",
      link: "/cart",
      imageUrl: "/icons/bag.png",
    },
  ];

  const rightNavMobile = [
    {
      title: "mon panier",
      link: "/cart",
      imageUrl: "/icons/bag.png",
    },
  ]

  return (
    <header className="h-16  flex justify-between items-center px-8 relative z-10 bg-slate-200">
      <BurgerMenu className="hidden md:block"/>
      <BurgerMenuMobile className="md:hidden"/>
      <Link href={"/"}>
        <Image
          src={logo}
          alt="Open Fashion"
          className="w-16 h-16 md:w-28 md:h-28"
        />
      </Link>
      <div className="relative">
        <Navbar navList={rightNav} className="hidden md:flex"/>
        <Navbar navList={rightNavMobile} className="flex md:hidden"/>
        {myCart.length !== 0 && <div className="absolute top-5 right-0 h-2 w-2 rounded-full bg-red-600"></div>}
      </div>
    </header>
  );
}
