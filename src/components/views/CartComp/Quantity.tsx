"use client";
import { updateCartItems } from "@/components/utils/apiCalling";
import { singleProductType } from "@/components/utils/types";
import { typeOfCart } from "@/lib/drizzle";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";

export default function Quantity({
  data,
  user,
  item
}: {
  data: typeOfCart;
  user: KindeUser;
  item: singleProductType
}) {
  return (
    <div className="flex gap-x-2 items-center">
      <button
        onClick={() =>
          updateCartItems(user.id as string, item._id, (data.quantity ? data.quantity : 0 as number) - 1)
        }
        className="h-6 w-6 border rounded-full center"
      >
        -
      </button>
      <span className="text-sm">{data.quantity ? data.quantity : 0}</span>
      <button
        onClick={() =>
          updateCartItems(user.id as string, item._id, (data.quantity ? data.quantity : 0 as number) + 1)
        }
        className="h-6 w-6 border rounded-full center"
      >
        +
      </button>
    </div>
  );
}
