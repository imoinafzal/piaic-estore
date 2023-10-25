import {
    Github,
    LifeBuoy,
    LogOut,
    Mail,
    User
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { KindeUser, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";


export default function DropdownMenuDemo({UserData} : {UserData : KindeUser}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>{UserData.given_name}{" "}{UserData.family_name}</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
            <Mail className="mr-2 h-4 w-4" />
            <span>{UserData.email}</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Github className="mr-2 h-4 w-4" />
          <Link target="_blank" href={"https://github.com/imoinafzal"}>GitHub</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <Link target="_blank" href={"/support"}>Support</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <LogoutLink>Log out</LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
