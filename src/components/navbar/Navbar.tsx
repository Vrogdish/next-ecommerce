import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Navlink } from "@/models/navlink";

interface Props {
  closeMenu? : ()=>void
  navList: Navlink[];
  className?: string;
  direction?: "row" | "col";
}

export default function Navbar({
  closeMenu,
  navList,
  className,
  direction = "row",
}: Props) {
  let directionStyle = "";

  switch (direction) {
    case "row":
      directionStyle = "flex-row gap-8 items-center justify-center";
      break;
    case "col":
      directionStyle = "flex-col gap-4 items-start";
    default:
      break;
  }

  return (
    <nav className={`flex ${directionStyle} ${className}`}>
      {navList.map((item, index) => (
        <Link key={index} href={item.link} onClick={closeMenu}>
          {item.imageUrl ? (
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={30}
              height={30}
            />
          ) : (
            <>{item.title}</>
          )}
        </Link>
      ))}
    </nav>
  );
}
