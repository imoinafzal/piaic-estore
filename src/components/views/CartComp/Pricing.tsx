import { Button } from "@/components/ui/button";
import { singleProductType } from "@/components/utils/types";
import { typeOfCart } from "@/lib/drizzle";
import React from "react";

const Pricing = ({
  productData,
  data,
}: {
  productData: singleProductType[];
  data: typeOfCart[];
}) => {
  const orderTotal = productData.reduce((total: any, priceItem) => {
    const quantityItem = data.find((item) => item.productid === priceItem._id);

    if (quantityItem) {
      return (
        total +
        priceItem.price * (quantityItem.quantity ? quantityItem.quantity : 0)
      );
    }
  }, 0);
  const shipping = 10;

  return (
    <div className="flex flex-col w-1/4 gap-5">
      <div className="bg-gray-100 p-8 space-y-6">
        <p className="text-gray-600 font-semibold text-2xl">Summary</p>
        <div className="flex justify-between">
          <p className="text-gray-500">Quantity</p>
          <p className="text-gray-600 font-semibold">
            {data.reduce(
              (total, item) => total + (item.quantity ? item.quantity : 0),
              0
            )}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500">Order Total</p>
          <p className="text-gray-600 font-semibold">${orderTotal}.00</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500">Shipping</p>
          <p className="text-gray-600 font-semibold">${shipping}.00</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500">Sub Total</p>
          <p className="text-gray-600 font-bold text-2xl">
            ${orderTotal + shipping}.00
          </p>
        </div>
      </div>
      <Button variant={"destructive"}>Checkout</Button>
    </div>
  );
};

export default Pricing;
