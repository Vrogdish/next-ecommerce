"use client";

import React, { useState } from "react";
import "./style.css";
import Navbar from "@/components/navbar/Navbar";
import { Navlink } from "@/models/navlink";

const burgerNavList: Navlink[] = [
  {
    title: "Collection femme",
    imageUrl: "",
    link: "",
  },
  {
    title: "Collection Homme",
    imageUrl: "",
    link: "",
  },
  {
    title: "Accessoires",
    imageUrl: "",
    link: "",
  },
  {
    title: "Mon compte",
    imageUrl: "",
    link: "",
  },
  {
    title: "Mon panier",
    imageUrl: "",
    link: "",
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
          className={`bg-slate-300 bg-opacity-80 -translate-y-full h-14 transition-all ${
            menuIsOpen && "translate-y-0"
          }`}
        />
      </div>
    </div>
  );
}
