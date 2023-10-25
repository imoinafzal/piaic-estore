"use client";
import { useState } from "react";
import React from "react";

export default function Quantity() {
  const [num, setNum] = useState(1);

  return (
    <div className="flex gap-x-2 items-center">
      <button
        className="h-6 w-6 border rounded-full center"
        onClick={() => {
          setNum(num <= 1 ? 1 : num - 1);
        }}
      >
        -
      </button>
      <span className="text-sm">{num}</span>
      <button
        className="h-6 w-6 border rounded-full center"
        onClick={() => {
          setNum(num + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
