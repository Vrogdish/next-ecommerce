"use client";

import React, { useState } from "react";
import "./style.css";
import Navbar from "@/components/navbar/Navbar";
import { Navlink } from "@/models/navlink";

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

export default function BurgerMenu() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true);
  };

  return (
    <div>
      <div
        className={`burger-nav ${menuIsOpen ? "burger-close" : null}`}
        onClick={() => toggleMenu()}
      >
        <div className="burger-bar"></div>
      </div>
      <div className="absolute top-16 left-0  h-14 w-full overflow-hidden">
        <Navbar
          navList={burgerNavList}
          // closeMenu={()=>toggleMenu()}
          className={`bg-slate-300 bg-opacity-80 -translate-y-full h-14 transition-all ${
            menuIsOpen && "translate-y-0"
          }`}
        />
      </div>
    </div>
  );
}
