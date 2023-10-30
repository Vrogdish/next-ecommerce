import {  Playfair_Display, Montserrat } from "next/font/google";
import React, { ReactNode } from "react";

const playfair = Playfair_Display({subsets: ["latin"]})
const montserrat = Montserrat({subsets : ["latin"]})

interface props {
  children: ReactNode;
  variant?: "p" | "h1" | "h2" | "h3" | "caption";
  component?: "p" | "h1" | "h2" | "h3"|"div"|"span";
  color?: "light" | "dark" | "grey";
  className?: string;
}

export default function Typography({
  children,
  component: Component = "div",
  variant = "p",
  color = "dark",
  className = "",
}: props) {
  let variantStyle: string = "";
  let variantSize: string = "";
  let variantWeight: string = "";
  let colorStyle: string = "";

  switch (variant) {
    case "p": //default
      variantStyle = playfair.className;
      break;
    case "h1":
      variantStyle = playfair.className;
      variantSize = "text-9xl  tracking-widest leading-tight ";
      variantWeight = "font-bold"
      break;
    case "h2":
      variantStyle = playfair.className;
      variantSize = "text-3xl tracking-widest ";
      variantWeight= "font-bold"
      break;
    case "h3":
      variantStyle = playfair.className;
      variantSize = 'text-xl '
      variantWeight = "font-bold";
      break;
    case "caption":
      variantStyle = montserrat.className;
      variantWeight = "font-bold";

  }

  switch (color) {
    case "light": 
      colorStyle = "text-stone-100";
      break;
    case "dark":
      colorStyle = "text-stone-900";//default
      break;
    case "grey":
      colorStyle = "text-stone-500";
  }

  return (
    <Component
      className={`${variantStyle}
        ${variantWeight}
        ${colorStyle}
        ${variantSize}
        ${className}`}
    >
      {children}
    </Component>
  );
}
