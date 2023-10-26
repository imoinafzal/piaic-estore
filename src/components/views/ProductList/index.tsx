import ProductCard from "../ProductCard";
import { singleProductType } from "../../utils/types";

const ProductList = async ({
  ProductData,
}: {
  ProductData: Array<singleProductType>;
}) => {
  return (
    <section className="text-gray-600">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center space-y-3 mb-10">
          <p className="text-sm text-blue-600 font-medium">PRODUCTS</p>
          <h3 className="text-3xl text-gray-800 font-bold">
            Check What We Have
          </h3>
        </div>
        <div className="flex flex-wrap gap-4">
          {ProductData.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
