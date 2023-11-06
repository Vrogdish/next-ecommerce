"use client";

import MyCartSection from "@/containers/my-cart/MyCartSection";
import React from "react";
import Payment from "@/components/payment/Payment";

export default function MyCart() {

  return (
    <main className=" my-6 md:my-20 flex flex-col lg:flex-row gap-20 md:mx-10">
      <MyCartSection className="w-full" />
      <div className="md:border md:w-[500px] md:p-10 rounded-xl mx-auto">
        <Payment/>
      </div>
    </main>
  );
}
