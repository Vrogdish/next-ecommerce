import SignIn from "@/components/sign-in/SignIn";
import SignUp from "@/components/sign-up/SignUp";
import Typography from "@/design/typography/Typography";
import React from "react";
import Image from "next/image";

export default function account() {
  return (
    <div className="relative ">
      <Image
        src={"/images/carrousel-1.webp"}
        alt="woman with bags"
        width={1980}
        height={1100}
        className="absolute object-cover brightness-90 h-full -z-10 hidden md:block"
      />
      <div className="  flex flex-col lg:flex-row justify-center gap-10 py-20 md:mx-10 relative ">
        <div className="py-10 bg-white rounded-lg overflow-hidden">
          <Typography variant="h2" component="h2" className="text-center">
            Déja client ?
          </Typography>
          <SignIn />
        </div>
        <div className=" py-10 bg-white rounded-lg overflow-hidden">
          <Typography variant="h2" component="h2" className="text-center">
            Créer un compte ?
          </Typography>
          <SignUp />
        </div>
      </div>
    </div>
  );
}
