// import Image from "next/image";
// import Quantity from "@/components/Quantity";
// import AddToCart from "@/components/AddToCart";
// import { ShoppingCart } from "lucide-react";
// import {allProductFetcherFromSanity} from "../../../components/utils/apiCalling"
// import { allProductFetcherFromSanityType } from "@/components/utils/types";

// const getProductsDetail = async (id: number | string) => {
//     let data = await allProductFetcherFromSanity() as allProductFetcherFromSanityType ;
//   return Products.filter((product) => product.id == id);
// };

// const sizes = ["XS", "S", "M", "L", "XL"];

// export default function Page({ params }: { params: { id: string } }) {
//   const result = getProductsDetail(params.id);

//   return (
//     <div className="flex justify-evenly mt-16 py-10 flex-wrap">
//       {result.map((product) => (
//         <div key={product.id} className="flex justify-between gap-6">
//           <div>
//             <Image src={product.image} alt={product.name} />
//           </div>

//           <div>
//             <div>
//               <h1 className="text-2xl">{product.name}</h1>
//               <h2 className="text-base text-gray-400 font-semibold">
//                 {product.tagline}
//               </h2>
//             </div>
//             <div className="mt-6">
//               <h3 className="text-xs font-semibold">SELECT SIZE</h3>
//               <div className="flex gap-x-2">
//                 {sizes.map((item) => {
//                   return (
//                     <div className="flex flex-col justify-center items-center h-7 w-7 rounded-full border hover:shadow-2xl duration-300 mt-2 center">
//                       <span className="text-xs font-semibold text-gray-600">
//                         {item}
//                       </span>
//                     </div>
//                   );
//                 })}
//               </div>
//               <div className="flex gap-x-3 mt-6 items-center">
//                 <h3 className="text-xs font-semibold ">Quantity</h3>
//                 <Quantity />
//               </div>
//               <div className="flex items-center gap-x-3 mt-6">
//                 <AddToCart />
//                 <div className="text-xl font-bold">
//                   ${product.price.toFixed(2)}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
