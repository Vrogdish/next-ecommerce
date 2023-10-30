"use client";

import MyCartSection from "@/containers/my-cart/MyCartSection";
import React from "react";
import Payment from "@/components/payment/Payment";

export default function MyCart() {

  return (
    <main className="my-20 flex justify-between mx-20 gap-20">
      <MyCartSection className="w-2/3" />
      <div className="border w-1/3 p-10 rounded-xl">
        <Payment/>
      </div>
    </main>
  );
}
