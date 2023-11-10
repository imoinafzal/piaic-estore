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
// import CartValue from "@/components/CartValue";

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
          {/* <CartValue /> */}
          <Link href={'/cart'}><ShoppingCart size={20} /></Link>
          
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