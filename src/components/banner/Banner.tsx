import React from "react";
import Image from "next/image";
import Typography from "@/design/typography/Typography";

interface Props {
  className?: string;
  category: "women" | "men" | "accesories" | "all";
}

export default function Banner({ className, category }: Props) {
  let imageUrl = "";
  let content = ""

  switch (category) {
    case "women":
      imageUrl = "/images/shopping.jpg";
      content = "For Women"
      break;
    case "men":
      imageUrl = "/images/formen.jpg";
      content = "For Men"
      break;
    case "accesories":
      imageUrl = "/images/jewels.jpg";
      content = "For Style"
      break;
    case "all":
      imageUrl = "";
      break;
    default:
      break;
  }

  return (
    <div className="relative h-[800px] w-full">
      <Image
        src={imageUrl}
        alt=""
        fill
        className="object-cover brightness-90"
      />
      <Typography
        variant="h1"
        component="h2"
        className="absolute top-1/4 left-40"
        color="light"
      >
       {content}
      </Typography>
    </div>
  );
}
