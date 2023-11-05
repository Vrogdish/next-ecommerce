import Navbar from "@/components/navbar/Navbar";
import { Navlink } from "@/models/navlink";
import React, { useState } from "react";
import "./style.css";

const burgerNavList: Navlink[] = [
  {
    title: "Collection femme",
    link: `/shop/${encodeURIComponent("women")}`,
  },
  {
    title: "Collection Homme",
    link: `/shop/${encodeURIComponent("men")}`,
  },
  {
    title: "Accessoires",
    link: `/shop/${encodeURIComponent("accesories")}`,
  },
  {
    title: "Mon compte",
    link: "/account",
  },
  {
    title: "Mon panier",
    link: "/cart",
  },
];

interface Props {
  className?: string;
}

export default function BurgerMenuMobile({ className }: Props) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true);
  };

  return (
    <div className={` ${className}`}>
      <div
        className={`burger-nav ${menuIsOpen ? "burger-close" : null}`}
        onClick={() => toggleMenu()}
      >
        <div className="burger-bar"></div>
      </div>
      <Navbar
        navList={burgerNavList}
        direction="col"
        className={`bg-slate-200  -translate-x-full  transition-all absolute p-10 left-0  ${
          menuIsOpen && "translate-x-0"
        }`}
      />
    </div>
  );
}
