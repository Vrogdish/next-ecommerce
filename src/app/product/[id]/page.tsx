"use client";

import { useProductStore } from "@/store/products";
import React, { useEffect } from "react";
import Image from "next/image";
import BuyIt from "@/components/buy-it/BuyIt";
import { useRouter } from "next/navigation";
import Typography from "@/design/typography/Typography";

export default function Product({ params }: { params: { id: number } }) {
  const getAllProducts = useProductStore((state) => state.getAllProducts);
  const productsList = useProductStore((state) => state.products);
  const isLoading = useProductStore((state) => state.isLoading);
  const errorProduct = useProductStore((state) => state.error);
  const router = useRouter();

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  const product = productsList.find((item) => item.id === +params.id);

  if (product) {
    return (
      <main>
        <div
          onClick={router.back}
          className="my-20 flex gap-4 items-center px-10 cursor-pointer"
        >
          <Image
            src={"/icons/arrow.png"}
            alt=""
            width={30}
            height={30}
            className="rotate-180"
          />
          <p>Retour à la boutique</p>
        </div>
        <div className=" mx-auto max-w-screen-lg">
          <div className="flex flex-col lg:flex-row gap-28 items-center lg:items-end  mb-20 px-6 ">
            {isLoading === false ? (
              <>
                <div>
                  <Image src={product?.image} alt="" width={400} height={400} />
                </div>
                <div className="px-6 md:w-1/2">
                  <h3 className="font-bold mt-20 mb-20  ">{product.title}</h3>
                  <p>{product.description}</p>
                  <Typography
                    variant="caption"
                    component="p"
                    color="red"
                    className=" text-right my-20"
                  >
                    {product.price} €
                  </Typography>
                  <BuyIt product={product} />
                </div>
              </>
            ) : (
              <p>Chargement en cours ...</p>
            )}
          </div>
          {errorProduct && <p>Erreur de chargement</p>}
        </div>
      </main>
    );
  }
}
