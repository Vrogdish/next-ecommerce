"use client";

import Button from "@/design/button/Button";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface SignUpInputs {
  lastname: string;
  firstname: string;
  adress: string;
  city: string;
  email: string;
  password: string;
  confirm: string;
}

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputs>();

  const onSubmit: SubmitHandler<SignUpInputs> = (data) => {
    console.log(data);
  };

  const inputStyle = "border rounded-md px-4 py-1 "

  return (
    <form
      action=""
      className="flex flex-col justify-between h-96 px-10 mx-auto mt-20"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col px-8 gap-4 ">
        <div className="flex justify-between gap-10">
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="lastname">Nom :</label>
            <input
              type="text"
              id="lastname"
              {...register("lastname", { required: true })}
              className={inputStyle}
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="firstname">Prénom :</label>
            <input
              type="text"
              id="firstname"
              {...register("firstname", { required: true })}
              className={inputStyle}
            />
          </div>
        </div>

        <div className="flex justify-between gap-10">
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="adress">Adresse :</label>
            <input
              type="text"
              id="adress"
              {...register("adress", { required: true })}
              className={inputStyle}
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="city">Ville :</label>
            <input
              type="text"
              id="city"
              {...register("city", { required: true })}
              className={inputStyle}
            />
          </div>
        </div>

        <div className="flex justify-between gap-10">
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="register-email">Adresse email :</label>
            <input
              type="email"
              id="register-email"
              autoComplete="off"
              {...register("email", { required: true })}
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col w-full gap-2">
            <label htmlFor="register-password">Mot de passe :</label>
            <input
              type="password"
              id="register-password"
              autoComplete="off"
              {...register("password", { minLength: 6, required: true })}
              className={inputStyle}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-1/2 ml-auto pl-6">
          <label htmlFor="confirm">Confirmer le mot de passe :</label>
          <input
            type="password"
            id="confirm"
            {...register("confirm", { minLength: 6 })}
            className={inputStyle}
            disabled
          />
        </div>
      </div>
      <Button className="mt-4 mx-20" action={() => null}>
        Créer mon compte
      </Button>
    </form>
  );
}
