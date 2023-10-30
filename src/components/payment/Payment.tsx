"use client"

import Button from '@/design/button/Button'
import Typography from '@/design/typography/Typography'
import React, { useState } from 'react'
import Image from 'next/image'
import { useCartStore } from '@/store/cart'


export default function Payment() {
 const [paymentType, setPaymentType] = useState<"creditCard" | "payPal" | "none">("none")
 const myCart = useCartStore((state)=>state.myCart)
 const resetCart = useCartStore((state) => state.resetCart)

 const handlePay = ()=> {
  resetCart()
 }

 let total = 0

 for (let i=0; i < myCart.length; i++){
   total += myCart[i].product.price
 }

 const toggleType = (type : "creditCard" | "payPal") => {
  paymentType === type ? setPaymentType("none") : setPaymentType(type)
  console.log(paymentType);
 }

 const cardStyle = "w-60 h-40 border-4 rounded-lg  transition-all cursor-pointer flex flex-col items-center justify-center gap-6"

  return (
    <div>
        <Typography variant='h3' component='h2' className='text-center mt-6'>
            Choississez votre moyen de paiement :
        </Typography>
        <div className='flex gap-6 justify-between mx-6 my-20'>
          <div className={` ${cardStyle} ${paymentType === "creditCard" ? "border-black" : "border-gray-200"}`} onClick={()=>toggleType("creditCard")}>
            <p>Carte de crédit</p>
            <Image src={"/icons/creditcard.png"} alt='carte de crédit' width={60} height={60} className=''/>
          </div>
          <div className={`${cardStyle} ${paymentType === "payPal" ? "border-black" : "border-gray-200"}`} onClick={()=>toggleType("payPal")}>
            <p>PayPal</p>
            <Image src={"/icons/paypal.png"} alt='carte de crédit' width={60} height={60} className=''/>

          </div>
        </div>

        <Button action={()=>handlePay()} variant={`${paymentType === "none" || total === 0 ? "disable" : "default"}`} className='w-96 mx-auto mt-20'>
          Payer ({total.toFixed(2)}€)
        </Button>
    </div>
  )
}