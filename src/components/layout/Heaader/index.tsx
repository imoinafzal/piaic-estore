// "use client"

// import React from "react";
// import Image from "next/image";
// import Logo from "../../assets/logo.webp";
// import { ShoppingCart } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import Wrapper from "@/components/shared/Wrapper";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { useSelector } from "react-redux";
// import { RootState } from "@/store/store";
// import Link from "next/link";

// const Header = () => {
//   const cartValue = useSelector(
//     (state: RootState) => state.cart.totalQuantity
//   )
//   return (
//     <section>
//       <Wrapper>
//         <div className="flex justify-between items-center py-4">
//           <div>
//             <Image src={Logo} alt="Logo" />
//           </div>
//           <div>
//             <ul className="hidden lg:flex gap-x-8">
//               <li>Male</li>
//               <li>Female</li>
//               <li>Kids</li>
//               <li>
//               <Link href={"/products"}>All Products</Link>
//               </li>
//             </ul>
//           </div>
//           <div className="hidden lg:flex">
//             <Input
//               className="w-60"
//               type="search"
//               placeholder="What are you looking for"
//             />
//           </div>
//           <div className="hidden lg:flex relative justify-center w-10 h-10 items-center rounded-full bg-gray-300">
//             <span className="absolute right-1 top-0 rounded-full bg-red-500 h-5 w-5 text-white text-xs text-center">
//               {cartValue}
//             </span>
//             <ShoppingCart className="h-6 w-6" />
//           </div>
//           <div className="lg:hidden">
//             <GiHamburgerMenu size={25} />
//           </div>
//         </div>
//       </Wrapper>
//     </section>
//   );
// };

// export default Header;


// Basit Navbar


import React from "react";
import Image from "next/image";
import Logo from "../../../components/assets/logo.webp";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import {
  LoginLink,
  RegisterLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { ShoppingCart } from "lucide-react";
import DropdownMenuDemo from "../../ui/AvatarDisplay"
import { SearchFeature } from "@/components/ui/SearchFeature";
interface navArray {
  label: string;
  href: string;
}

const navArray: navArray[] = [
  {
    label: "Female",
    href: "/female",
  },
  {
    label: "Male",
    href: "/male",
  },
  {
    label: "Kids",
    href: "/kids",
  },
  {
    label: "Products",
    href: "/products",
  },
];

const Navbar = () => {
  const { getUser } = getKindeServerSession();
  const user = getUser() ;

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href={"/"}
          className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Image src={Logo} alt="Logo" />
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
          {navArray.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="mr-5 cursor-pointer hover:text-gray-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          
          <SearchFeature />
          <ShoppingCart size={20} />
          {!user ? (
            <div className="space-x-3">
              <LoginLink
                className={buttonVariants({
                  variant: "outline",
                  size: "sm",
                })}
              >
                Sign in
              </LoginLink>
              <RegisterLink
                className={buttonVariants({
                  variant: "secondary",
                  size: "sm",
                })}
              >
                Sign up
              </RegisterLink>
            </div>
          ) : (
            <DropdownMenuDemo UserData={user} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
