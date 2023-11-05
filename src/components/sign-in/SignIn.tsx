"use client"

import Button from "@/design/button/Button";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";


interface Inputs {
  email : string
  password : string
}

export default function SignIn() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>();
    
      const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data);
      };
    

  return (
    <form className="flex flex-col justify-between md:w-96 mx-auto mt-20" onSubmit={handleSubmit(onSubmit)} >
    <div className="flex flex-col px-8 gap-4 ">
      <div className="flex flex-col w-full gap-2">
        <label htmlFor="email">Adresse email :</label>
        <input type="email" id="email" {...register("email")} className="border rounded-md px-4 py-1"/>
      </div>
      <div className="flex flex-col w-full gap-2">
        <label htmlFor="password">Mot de passe :</label>
        <input type="password" id="password" {...register("password")} className="border rounded-md px-4 py-1"/>
      </div>
      <div className="text-gray-400 text-right cursor-pointer">mot de passe oublié ?</div>
    </div>
    <Button action={()=>null} className="mt-20 w-72 mx-auto" >
      Me connecter
    </Button>
  </form>
  )
}
