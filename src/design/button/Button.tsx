import React, { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
  variant?: "default" | "alert" | "disable";
  action: () => void;
}

export default function Button({
  children,
  className,
  action,
  variant = "default",
}: Props) {
  let variantStyle = "";

  switch (variant) {
    case "default":
      variantStyle = " hover:bg-black hover:text-white";
      break;
    case "alert":
      variantStyle = "";
      break;
    case "disable":
      variantStyle = "bg-gray-200 text-gray-400";
      break;
    default:
      break;
  }

  return (
    <div
      className={`border rounded-full cursor-pointer py-2 px-4 text-center uppercase transition-all ${variantStyle} ${className}`}
      
      onClick={variant != "disable" ? action : ()=>null}
    >
      {children}
    </div>
  );
}
