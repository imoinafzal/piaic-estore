import Hero from "@/components/views/Hero";
import Jewellery from "@/components/views/Jewellery";
import Newsletter from "@/components/views/Newsletter";
import ProductList from "@/components/views/ProductList";
import Promotions from "@/components/views/Promotions";
import { allProductFetcherFromSanity } from "@/components/utils/apiCalling";
import { allProductFetcherFromSanityType } from "@/components/utils/types";
import { Suspense } from "react";
import LoadingComponent from "@/components/ui/LoadingComponent";

export default async function Home() {
  return (
    <div>
      <Hero />
      <Promotions />
      <Suspense fallback={
        <LoadingComponent isCarousel={true} cardLimit={3} />
      }>
        <Carousel />
      </Suspense>
      <Jewellery />
      <Newsletter />
    </div>
  );
}

async function Carousel() {
  let data =
    (await allProductFetcherFromSanity()) as allProductFetcherFromSanityType;
  return <ProductList ProductData={data.result.slice(0, 3)} />;
}
