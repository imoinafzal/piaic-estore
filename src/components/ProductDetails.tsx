"use client";

import React, { useState } from "react";
import { singleProductType } from "./utils/types";
import { urlForImage } from "../../sanity/lib/image";
// import Quantity from "./views/CartComp/Quantity";
import AddToCart from "./AddToCart";
import Image from "next/image";
import PortableText from "react-portable-text";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/server";
import { addToCartApiCall } from "./utils/apiCalling";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";

const ProductDetails = ({ product, user }: { product: singleProductType , user : KindeUser}) => {
  const [imagesArray, setImagesArray] = useState<string[]>(() => {
    return product.image.map((element) => {
      return urlForImage(element).url() as string;
    });
  });

  const {toast} = useToast() ;

  const [size, setSize] = useState<string>(product.size[0]);

  const [activeImageUrl, setActiveImageUrl] = useState<string>(
    urlForImage(product.image[0]).url() as string
  );

  async function handleAddToCart(){
    if(user){
      await addToCartApiCall(user.id as string, product._id) ;
      toast({
        title: "Successful",
        description: "Added to cart",
      })
    } else {
      toast({
        title: "Not Successful",
        description: "Cannot add to cart",
        variant: "destructive",
        action: <ToastAction altText="Try again">Try again</ToastAction>
      })
    }
  }

  return (
    <div className="fle justify-evenly mt-16 py-10 flex-wrap">
      <div className="flex items-center justify-center gap-10">
        <div className="lg:w-1/2 w-full">
          <Image
            className="w-full lg:h-auto h-64 object-cover object-center rounded"
            src={activeImageUrl}
            alt={product.productname}
            height={1000}
            width={1000}
          />
          <div className="flex max-w-1/2 mx-auto gap-7 w-full mt-4 overflow-hidden">
            {imagesArray.map((item, index) => (
              <Image
              onClick={() => setActiveImageUrl(item)}
                key={index}
                src={item}
                width={500}
                height={500}
                alt={item + index}
                className={`${item === activeImageUrl && "ring-4 ring-yellow-600 opacity-70" }cursor-pointer w-28 h-36`}
              />
            ))}
          </div>
        </div>

        <div>
          <div>
            <h1 className="text-2xl">{product.productname}</h1>
            <PortableText
              className="leading-relaxed"
              content={product.description}
            />
          </div>
          <div className="mt-6">
            <h3 className="text-xs font-semibold">SELECT SIZE</h3>
            <div className="flex gap-x-2">
              {product.size.map((item, index) => {
                return (
                  <button
                    key={index}
                    className={`${
                      size == item && "ring-2 ring-yellow-600"
                    } flex items-center justify-center h-7 w-7 rounded-full border hover:shadow-2xl duration-300 mt-2 center`}
                    onClick={() => setSize(item)}
                  >
                    <span className="text-xs text-center font-semibold text-gray-600">
                      {item}
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="flex gap-x-3 mt-6 items-center">
              <h3 className="text-xs font-semibold ">Quantity</h3>
              {/* <Quantity /> */}
            </div>
            <div className="flex items-center gap-x-3 mt-6">
            <button aria-label="This will add product to cart" onClick={handleAddToCart} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add to Cart</button>
              <div className="text-xl font-bold">
                ${product.price.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
