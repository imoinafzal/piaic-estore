import ProductCard from "../ProductCard"
import { singleProductType } from "../../utils/types"

const ProductList = async ({ ProductData }: { ProductData: Array<singleProductType> }) => {

    return (
        <section className="text-gray-600">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {ProductData.map((item, index) => (
                        <ProductCard key={index} product={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductList
