"use client";

import React, { useState } from "react";
import { singleProductType } from "./utils/types";
import { urlForImage } from "../../sanity/lib/image";
import Quantity from "./Quantity";
import AddToCart from "./AddToCart";
import Image from "next/image";
import PortableText from "react-portable-text";

const ProductDetails = ({ product }: { product: singleProductType }) => {
  const [imagesArray, setImagesArray] = useState<string[]>(() => {
    return product.image.map((element) => {
      return urlForImage(element).url() as string;
    });
  });

  const [size, setSize] = useState<string>(product.size[0]);

  const [activeImageUrl, setActiveImageUrl] = useState<string>(
    urlForImage(product.image[0]).url() as string
  );

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
              <Quantity />
            </div>
            <div className="flex items-center gap-x-3 mt-6">
              <AddToCart />
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
