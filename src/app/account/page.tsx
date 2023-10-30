import SignIn from "@/components/sign-in/SignIn";
import SignUp from "@/components/sign-up/SignUp";
import Typography from "@/design/typography/Typography";
import React from "react";

export default function account() {
  return (
    <div className=" flex justify-between my-20 mx-10">
      <div className="w-1/2">
        <Typography variant="h2" component="h2" className="text-center">
          Déja client ?
        </Typography>
        <SignIn/>
      </div>
      <div className="w-1/2">
      <Typography variant="h2" component="h2" className="text-center">
          S&apos;inscrire :
        </Typography>
        <SignUp/>
      </div>
    </div>
  );
}
