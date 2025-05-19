"use client";
import { Authenticated, Unauthenticated } from "convex/react";
import SignInbtnHome from "./SignInBtnHome";
import Link from "next/link";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";


const HeroButtons = () => {
  return (
    // because the parent div in Hero has pointer-events-none
    <div className="flex gap-10 justify-center items-center"> 
        <Authenticated>
        <Link href="/editor">
          <InteractiveHoverButton className="scale-125 pointer-events-auto border-none border-0 outline-none focus:ring-0">
            Go To Editr
          </InteractiveHoverButton>
        </Link>
        </Authenticated>
        <Unauthenticated>
              <SignInbtnHome />
        </Unauthenticated>
        <Link href="/docs">
          <InteractiveHoverButton className="scale-125 pointer-events-auto border-none border-0 outline-none focus:ring-0">
            Docs
          </InteractiveHoverButton>
        </Link>
    </div>
  )
}

export default HeroButtons