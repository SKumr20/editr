"use client";
import ToggleDarkmode from "../ui/ToggleDarkmode";
import { PencilLine, Menu } from "lucide-react";
import GithubSmallBtn from "../ui/GithubSmallbtn";
import Link from "next/link";
import { Button } from "../ui/button";
import { UserButton } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Authenticated, Unauthenticated } from "convex/react";
import { SignInButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between p-2 md:p-3 mx-10 md:mx-20 lg:mx:50 xl:mx-80 bg-background backdrop-blur-md rounded-lg border border-border shadow-xs">
      <div className="flex items-center gap-2">
        {/* Left - Title and logo */}
        <Link href='/' className="flex items-center gap-2 hover:opacity-60 transition duration-200">
          <PencilLine strokeWidth={1.5} />
          <h2 className="font-bold" >Editr</h2>
        </Link>
        {/* Nav links */}
        <div className="hidden md:flex">
          <Link href='/editor'>
            <Button variant='nav' size='sm'>Get started</Button>
          </Link>
          <Link href='#'>
            <Button variant='nav' size='sm'>Changelog</Button>
          </Link>
        </div>
      </div>
        {/* Right side div */}
        <div className="flex items-center gap-1 md:gap-2">
          <GithubSmallBtn />
          <ToggleDarkmode />
          <Authenticated>
            <UserButton />
          </Authenticated>
          <Unauthenticated>
            <SignInButton />
          </Unauthenticated>
          {/* Mobile menu - now using dropdown instead of sheet */}
          <div className="md:hidden flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                  <Menu className="scale-120" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem asChild>
                  <Link href="/" className="w-full cursor-pointer">
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/editor" className="w-full cursor-pointer">
                    Get Started
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#" className="w-full cursor-pointer">
                    Changelog
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
    </div>
  )
}

export default Navbar;