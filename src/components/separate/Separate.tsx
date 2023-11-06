import React from "react";
import Image from "next/image";
import separate from "@/assets/svg/separate.svg"

interface Props {
  className?: string;
}

export default function Separate({ className }: Props) {
  return (
    <div>
      <Image
        src={separate}
        alt="separate"
        className={`m-auto w-60 h-5 ${className}`}
      />
    </div>
  );
}
