import React from "react";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import F1 from "@/components/assets/Featured1.webp";
import F2 from "@/components/assets/Featured2.webp";
import F3 from "@/components/assets/Featured3.webp";
import F4 from "@/components/assets/Featured4.webp";
import HeroImage from "@/components/assets/hero-poster.webp";

const Hero = () => {
  return (
    <section>
        <div className="flex mt-16 gap-x-4">
          {/* Left */}
          <div className="basis-1/2 space-y-8">
            <div>
              <Badge
                className="bg-blue-200 w-28 h-10 rounded-lg text-blue-800 text-lg font-medium"
                variant="outline"
              >
                Sale 70%
              </Badge>
            </div>
            <div>
              <h1 className="text-7xl font-bold">
                An Industrial Take on Streetwear
              </h1>
              <p className="mt-4 text-lg text-gray-900">
                Anyone can beat you but no one can beat your outfit as long as
                you wear Dine outfits.
              </p>
            </div>
            <div>
              <button className="flex gap-x-3 items-center bg-gray-900 text-white text-lg font-medium px-6 py-2 border-gray-100 shadow-lg">
                <ShoppingCart></ShoppingCart>Start <br /> Shopping
              </button>
            </div>
            <div className="flex gap-4">
              <div className="w-14 md:w-28">
                <Image
                  width={100}
                  height={100}
                  src={F1}
                  alt="feature image"
                ></Image>
              </div>
              <div className="w-14 md:w-28">
                <Image
                  width={100}
                  height={100}
                  src={F2}
                  alt="feature image"
                ></Image>
              </div>
              <div className="w-14 md:w-28">
                <Image
                  width={100}
                  height={100}
                  src={F3}
                  alt="feature image"
                ></Image>
              </div>
              <div className="w-14 md:w-28">
                <Image
                  width={100}
                  height={100}
                  src={F4}
                  alt="feature image"
                ></Image>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="hidden md:flex basis-1/2 bg-[#FFECE3] rounded-full">
            <Image src={HeroImage} alt="Hero image"></Image>
          </div>
        </div>
    </section>
  );
};

export default Hero;
