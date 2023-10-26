import ProductDetails from "@/components/ProductDetails";
import {
  allProductFetcherFromSanity,
  singleProductDetailPageFromSanity,
} from "../../../components/utils/apiCalling";
import {
  allProductFetcherFromSanityType,
  singleProductType,
} from "@/components/utils/types";
import { Suspense } from "react";

export async function generateStaticParams() {
  const data =
    (await allProductFetcherFromSanity()) as allProductFetcherFromSanityType;

  return data.result.map((item: singleProductType) => ({
    slug: item.slug.current,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const data = (await singleProductDetailPageFromSanity(
    slug
  )) as allProductFetcherFromSanityType;

  return {
    title: data.result[0].productname,
  };
}

const Brief = async ({ params }: { params: { slug: string } }) => {
  return (
    <Suspense>
      <Detail slug={params.slug} />
    </Suspense>
  );
};

async function Detail({ slug }: { slug: string }) {
  const data = (await singleProductDetailPageFromSanity(
    slug
  )) as allProductFetcherFromSanityType;

  return <ProductDetails product={data.result[0]} />;
}

export default Brief;
