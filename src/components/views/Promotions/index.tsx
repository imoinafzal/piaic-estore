import Wrapper from "@/components/shared/Wrapper";
import React from "react";
import Image from "next/image";
import E1 from "@/components/assets/event1.webp";
import E2 from "@/components/assets/event2.webp";
import E3 from "@/components/assets/event3.webp";

const Promotions = () => {
  return (
    <section>
      <div className="mt-16 py-16 px-2 space-y-5">
        {/* top */}
        <div className="text-center mb-16">
          <p className="text-sm text-blue-600 font-medium">PROMOTIONS</p>
          <h2 className="text-3xl font-bold">Our Promotions Events</h2>
        </div>

        {/* Grid structure */}
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
          {/* 1st grid */}
          <div className="w-full bg-[#D6D6D8] text-gray-900 flex items-center justify-between px-12 col-span-1 md:col-span-2">
            <div className="max-w-[13rem] py-8">
              <h3 className="text-3xl font-extrabold">GET UP TO 60%</h3>
              <p className="text-xl">For the summer season</p>
            </div>
            <div className="w-64">
              <Image width={300} height={300} alt="summer season" src={E1} />
            </div>
          </div>

          {/* 2nd grid */}
          <div className="w-full bg-[#EFE1C7] row-span-1 md:row-span-2 flex flex-col items-center md:items-start h-full">
            <div className="px-4 py-4">
              <p>Flex Sweatshirt</p>
              <p>
                <s>$100 </s>$75
              </p>
            </div>
            <Image src={E2} alt="E2" />
          </div>

          {/* 3rd grid */}
          <div className="bg-[#D6D6D8] w-full row-span-1 md:row-span-2 flex flex-col items-center md:items-start h-full">
            <div className="px-4 py-4">
              <p>Flex Sweatshirt</p>
              <p>
                <s>$100 </s>$75
              </p>
            </div>
            <Image src={E3} alt="E2" />
          </div>

          {/* 4th grid */}
          <div className="bg-[#212121] col-span-1 md:col-span-2 py-12 flex flex-col justify-center text-white text-center space-y-3">
            <h3 className="text-2xl font-bold">Get 30% Discount</h3>
            <p className="">USE PROMO CODE</p>
            <div>
              <button className="bg-gray-600 text-lg font-medium py-1 px-8 rounded-lg tracking-widest">
                DINEWEEKENDSALE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
